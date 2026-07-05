// Global Application State
let appState = {
  packages: [], // Array of { id, fileName, rawText, data }
  activeIndex: null,
  loading: false
};

// DOM Elements
const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('fileInput');
const pasteTextarea = document.getElementById('pasteTextarea');
const convertPasteBtn = document.getElementById('convertPasteBtn');
const sidebarDocList = document.getElementById('sidebarDocList');
const mainArea = document.getElementById('mainArea');
const liveJsonPre = document.getElementById('liveJsonPre');
const copyJsonBtn = document.getElementById('copyJsonBtn');
const downloadActiveBtn = document.getElementById('downloadActiveBtn');
const downloadAllBtn = document.getElementById('downloadAllBtn');
const refreshJsonBtn = document.getElementById('refreshJsonBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const toast = document.getElementById('toast');
const packageCountSpan = document.getElementById('packageCountSpan');

// Setup PDF.js Worker
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

// Event Listeners
dropzone.addEventListener('click', () => fileInput.click());
dropzone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropzone.classList.add('dragover');
});
dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropzone.classList.remove('dragover');
  if (e.dataTransfer.files.length > 0) {
    handleFiles(e.dataTransfer.files);
  }
});
fileInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    handleFiles(e.target.files);
  }
});

convertPasteBtn.addEventListener('click', handlePaste);
copyJsonBtn.addEventListener('click', copyActiveJson);
downloadActiveBtn.addEventListener('click', downloadActiveJson);
downloadAllBtn.addEventListener('click', downloadAllJson);
refreshJsonBtn.addEventListener('click', refreshJsonPreview);
clearAllBtn.addEventListener('click', clearAllPackages);

// Notification helper
function showToast(message, type = 'success') {
  toast.querySelector('span').innerText = message;
  toast.style.background = type === 'success' ? 'var(--accent-success)' : 'var(--accent-danger)';
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function showLoading(show) {
  appState.loading = show;
  let loader = document.getElementById('loadingOverlay');
  if (show) {
    if (!loader) {
      loader = document.createElement('div');
      loader.id = 'loadingOverlay';
      loader.className = 'loading-overlay';
      loader.innerHTML = '<div class="spinner"></div><div style="font-size:0.9rem; color:var(--text-secondary);">Parsing document(s) client-side...</div>';
      document.body.appendChild(loader);
    }
  } else {
    if (loader) {
      loader.remove();
    }
  }
}

// Clear all packages
function clearAllPackages() {
  if (confirm("Are you sure you want to clear all imported packages?")) {
    appState.packages = [];
    appState.activeIndex = null;
    updateUI();
    showToast("Cleared all packages");
  }
}

// Generate unique ID
function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

function packageDisplayName(packageData, fallback = "Untitled Package") {
  return packageData && packageData.name ? packageData.name : fallback;
}

// File Reading Handlers
async function handleFiles(fileList) {
  showLoading(true);
  let newPackagesCount = 0;
  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];
    try {
      const text = await extractTextFromFile(file);
      if (!text.trim()) {
        showToast(`Empty content or failed to parse ${file.name}`, 'error');
        continue;
      }
      const parsedList = window.TravelParser.extractPackagesFromText(text);
      parsedList.forEach((packageData, index) => {
        const fallbackName = parsedList.length > 1 ? `${file.name} (Part ${index + 1})` : file.name;
        const docName = packageDisplayName(packageData, fallbackName);
        appState.packages.push({
          id: generateId(),
          fileName: docName,
          rawText: text,
          data: packageData
        });
        newPackagesCount++;
      });
    } catch (err) {
      console.error(err);
      showToast(`Error reading ${file.name}: ${err.message}`, 'error');
    }
  }
  showLoading(false);

  if (newPackagesCount > 0) {
    appState.activeIndex = appState.packages.length - newPackagesCount; // Select first newly added package
    updateUI();
    showToast(`Successfully imported ${newPackagesCount} package(s)`);
  }
}

// Extract text based on file format
function extractTextFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    const ext = file.name.split('.').pop().toLowerCase();

    if (ext === 'txt') {
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (err) => reject(err);
      reader.readAsText(file, 'UTF-8');
    } else if (ext === 'docx') {
      reader.onload = async (e) => {
        try {
          const arrayBuffer = e.target.result;
          const result = await mammoth.extractRawText({ arrayBuffer: arrayBuffer });
          resolve(result.value);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = (err) => reject(err);
      reader.readAsArrayBuffer(file);
    } else if (ext === 'pdf') {
      reader.onload = async (e) => {
        try {
          const arrayBuffer = e.target.result;
          const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
          let text = '';
          for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const content = await page.getTextContent();
            const pageText = content.items.map(item => item.str).join(' ');
            text += pageText + '\n';
          }
          resolve(text);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = (err) => reject(err);
      reader.readAsArrayBuffer(file);
    } else {
      reject(new Error("Unsupported file type. Use .txt, .pdf, or .docx"));
    }
  });
}

// Paste Handler
function handlePaste() {
  const text = pasteTextarea.value.trim();
  if (!text) {
    showToast("Please paste some text first", 'error');
    return;
  }
  showLoading(true);
  try {
    const parsedList = window.TravelParser.extractPackagesFromText(text);
    parsedList.forEach((packageData, index) => {
      const docName = packageDisplayName(packageData, `Untitled Package ${index + 1}`);
      appState.packages.push({
        id: generateId(),
        fileName: docName,
        rawText: text,
        data: packageData
      });
    });
    pasteTextarea.value = ''; // Clear textarea
    appState.activeIndex = appState.packages.length - parsedList.length; // select first pasted package
    updateUI();
    showToast(`Successfully converted ${parsedList.length} paste package(s)`);
  } catch (err) {
    console.error(err);
    showToast(`Error parsing paste: ${err.message}`, 'error');
  }
  showLoading(false);
}

// UI Rendering State Router
function updateUI() {
  renderDocList();
  renderActiveForm();
  renderJsonPreview();
  packageCountSpan.innerText = `${appState.packages.length} package(s) loaded`;
}

// Sidebar document list
function renderDocList() {
  sidebarDocList.innerHTML = '';
  if (appState.packages.length === 0) {
    sidebarDocList.innerHTML = '<div class="empty-sidebar">No packages loaded yet. Upload files or paste text above.</div>';
    return;
  }

  appState.packages.forEach((pkg, index) => {
    const item = document.createElement('div');
    item.className = `doc-item ${index === appState.activeIndex ? 'active' : ''}`;
    
    // File icon based on suffix/name
    let iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`;
    if (pkg.fileName.endsWith('.pdf')) {
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-type-2"><path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8l6 6v12c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6H6c-.5 0-1-.2-1.4-.6-.4-.4-.6-.9-.6-1.4Z"/><path d="M14 2v6h6"/><path d="M9 18h3V12H9v6Z"/></svg>`;
    } else if (pkg.fileName.endsWith('.docx')) {
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-type"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 12h4"/><path d="M10 16h4"/></svg>`;
    } else if (pkg.fileName.startsWith('Paste')) {
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-paste"><path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3a1 1 0 0 0-1-1z"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/><path d="M16 11H8"/><path d="M14 15H8"/></svg>`;
    }

    item.innerHTML = `
      <div class="doc-info">
        <span class="doc-type-icon">${iconSvg}</span>
        <span class="doc-name" title="${pkg.fileName}">${pkg.fileName}</span>
      </div>
      <button class="doc-remove" title="Remove package" data-index="${index}">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    `;

    // Click to select
    item.addEventListener('click', (e) => {
      if (e.target.closest('.doc-remove')) return;
      appState.activeIndex = index;
      updateUI();
    });

    // Remove button
    item.querySelector('.doc-remove').addEventListener('click', (e) => {
      e.stopPropagation();
      removePackage(index);
    });

    sidebarDocList.appendChild(item);
  });
}

function removePackage(index) {
  appState.packages.splice(index, 1);
  if (appState.packages.length === 0) {
    appState.activeIndex = null;
  } else if (appState.activeIndex >= appState.packages.length) {
    appState.activeIndex = appState.packages.length - 1;
  }
  updateUI();
  showToast("Package removed");
}

function normalizePackageData(data) {
  const enforced = window.TravelParser.enforceStrictSchemaChoices(data);
  return window.TravelParser.cleanPackage(enforced);
}

// Render dynamic forms for editing active package data
function renderActiveForm() {
  if (appState.activeIndex === null || appState.packages.length === 0) {
    mainArea.innerHTML = `
      <div class="main-empty-state animate-fade-in">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-json"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 0-1 1v0a1 1 0 0 0 1 1v1a1 1 0 0 0 1 1"/><path d="M14 12a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1v1a1 1 0 0 1-1 1"/></svg>
        <h3>No Package Selected</h3>
        <p>Upload a txt, docx, or pdf travel package, or paste text to generate structure.</p>
      </div>
    `;
    return;
  }

  const pkg = appState.packages[appState.activeIndex];
  const data = normalizePackageData(pkg.data);
  pkg.data = data;

  // Enforce validation constraints dynamically
  data.name = data.name || "";
  data.shortName = data.shortName || "";
  data.subcategories = data.subcategories || [];
  data.trips = data.trips || [];
  data.destinations = data.destinations || [];
  data.isActive = data.isActive !== false;
  data.badge = data.badge || window.TravelParser.VALID_BADGES[0];
  data.tier = data.tier || "standard";
  data.budget = data.budget || "midrange";
  data.pricePerPerson = Number.isFinite(Number(data.pricePerPerson)) ? String(Number(data.pricePerPerson)) : "0";
  data.currency = data.currency || "USD";
  data.difficultyLevel = data.difficultyLevel || "";
  data.seasons = data.seasons || [];
  data.departureDates = data.departureDates || [];
  data.itineraries = data.itineraries || [];

  mainArea.innerHTML = `
    <div class="form-container animate-fade-in">
      <div class="form-header">
        <div class="form-title-group">
          <h2>${pkg.fileName}</h2>
          <p>Verify and edit extracted travel fields below. Changes are saved to JSON in real-time.</p>
        </div>
      </div>
      <div class="form-scrollable">
        <!-- 1. Identity & Pricing -->
        <div class="form-section">
          <div class="form-section-title">Identity & Status</div>
          <div class="form-grid-2">
            <div class="form-group">
              <label for="pkgName">Package Name (Title)</label>
              <input type="text" id="pkgName" class="form-control" value="${escapeHtml(data.name)}">
            </div>
            <div class="form-group">
              <label for="pkgShortName">Short Name (Required)</label>
              <input type="text" id="pkgShortName" class="form-control" value="${escapeHtml(data.shortName)}">
            </div>
          </div>
          <div class="form-grid-4">
            <div class="form-group">
              <label>Status (isActive)</label>
              <div class="switch-container">
                <label class="switch">
                  <input type="checkbox" id="pkgIsActive" ${data.isActive ? 'checked' : ''}>
                  <span class="slider"></span>
                </label>
                <span id="isActiveText" style="font-size: 0.85rem; color: ${data.isActive ? 'var(--accent-success)' : 'var(--text-secondary)'}">${data.isActive ? 'Active' : 'Draft'}</span>
              </div>
            </div>
            <div class="form-group">
              <label for="pkgPrice">Price per Person</label>
              <input type="number" id="pkgPrice" class="form-control" value="${data.pricePerPerson || '0'}" placeholder="e.g. 1499">
            </div>
            <div class="form-group">
              <label for="pkgCurrency">Currency</label>
              <input type="text" id="pkgCurrency" class="form-control" value="${escapeHtml(data.currency || '')}" placeholder="USD, NPR, etc.">
            </div>
            <div class="form-group">
              <label for="pkgDuration">Duration (Days)</label>
              <input type="number" id="pkgDuration" class="form-control" value="${data.duration || ''}">
            </div>
          </div>
        </div>

        <!-- 2. Schema Enums Lists -->
        <div class="form-section">
          <div class="form-section-title">Controlled Categorization & Enums</div>
          <div class="form-grid-3">
            <div class="form-group">
              <label>Difficulty Level</label>
              <select id="pkgDifficulty" class="form-control">
                <option value="">-- Inferred Null --</option>
                ${window.TravelParser.VALID_DIFFICULTIES.map(d => `<option value="${d}" ${data.difficultyLevel === d ? 'selected' : ''}>${titleCase(d.replace(/_/g, ' '))}</option>`).join('')}
              </select>
            </div>
            <div class="form-group">
              <label>Budget Category</label>
              <select id="pkgBudget" class="form-control">
                ${window.TravelParser.VALID_BUDGETS.map(b => `<option value="${b}" ${data.budget === b ? 'selected' : ''}>${titleCase(b)}</option>`).join('')}
              </select>
            </div>
            <div class="form-group">
              <label>Service Tier</label>
              <select id="pkgTier" class="form-control">
                ${window.TravelParser.VALID_TIERS.map(t => `<option value="${t}" ${data.tier === t ? 'selected' : ''}>${titleCase(t)}</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="form-grid-2">
            <div class="form-group">
              <label>Badge</label>
              <select id="pkgBadge" class="form-control">
                ${window.TravelParser.VALID_BADGES.map(b => `<option value="${b}" ${data.badge === b ? 'selected' : ''}>${titleCase(b)}</option>`).join('')}
              </select>
            </div>
            <div class="form-group">
              <label>Seasons</label>
              <div class="form-grid-2" style="gap: 10px; margin-top: 5px;">
                ${window.TravelParser.VALID_SEASONS.map(s => `
                  <label class="checklist-item" style="padding: 4px 0;">
                    <input type="checkbox" name="pkgSeasons" value="${s}" ${data.seasons.includes(s) ? 'checked' : ''}>
                    <span>${titleCase(s)}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Dynamic checklists with search filtering -->
          <div class="form-grid-2" style="margin-top: 16px;">
            <div class="form-group">
              <label>Subcategories</label>
              ${renderChecklistSearch('subcategory', window.TravelParser.VALID_SUBCATEGORIES, data.subcategories)}
            </div>
            <div class="form-group">
              <label>Destinations</label>
              ${renderChecklistSearch('destination', window.TravelParser.VALID_DESTINATIONS, data.destinations)}
            </div>
          </div>
          <div class="form-group" style="margin-top: 16px;">
            <label>Trips Match (Predefined Slugs)</label>
            ${renderChecklistSearch('trip', window.TravelParser.VALID_TRIPS, data.trips)}
          </div>
        </div>

        <!-- 3. Physical Locations & Coordinates -->
        <div class="form-section">
          <div class="form-section-title">Physical Location & Coordinates</div>
          <div class="form-grid-4">
            <div class="form-group">
              <label for="pkgCountry">Country</label>
              <input type="text" id="pkgCountry" class="form-control" value="${escapeHtml(data.country || '')}">
            </div>
            <div class="form-group">
              <label for="pkgProvince">Province</label>
              <input type="text" id="pkgProvince" class="form-control" value="${escapeHtml(data.province || '')}">
            </div>
            <div class="form-group">
              <label for="pkgDistrict">District</label>
              <input type="text" id="pkgDistrict" class="form-control" value="${escapeHtml(data.district || '')}">
            </div>
            <div class="form-group">
              <label for="pkgCity">City / Village</label>
              <input type="text" id="pkgCity" class="form-control" value="${escapeHtml(data.cityOrVillage || '')}">
            </div>
          </div>
          <div class="form-grid-2">
            <div class="form-group">
              <label for="pkgLat">Package Latitude (Max Elevation Coord)</label>
              <input type="number" step="any" id="pkgLat" class="form-control" value="${data.latitude || ''}" placeholder="e.g. 27.6971">
            </div>
            <div class="form-group">
              <label for="pkgLon">Package Longitude (Max Elevation Coord)</label>
              <input type="number" step="any" id="pkgLon" class="form-control" value="${data.longitude || ''}" placeholder="e.g. 86.7231">
            </div>
          </div>
        </div>

        <!-- 4. Text Descriptions & Rules Policies -->
        <div class="form-section">
          <div class="form-section-title">Details & Policies</div>
          <div class="form-group">
            <label for="pkgDescription">Invitation Description (Paragraphs)</label>
            <textarea id="pkgDescription" class="form-control" style="min-height: 120px;">${escapeHtml(data.description || '')}</textarea>
          </div>
          <div class="form-group">
            <label for="pkgPaymentPolicy">Payment Policy</label>
            <textarea id="pkgPaymentPolicy" class="form-control">${escapeHtml(data.paymentPolicy || '')}</textarea>
          </div>
          <div class="form-group">
            <label for="pkgPhysicalPrep">Physical Preparation Description</label>
            <textarea id="pkgPhysicalPrep" class="form-control">${escapeHtml(data.physicalPrepAbout || '')}</textarea>
          </div>
        </div>

        <!-- 5. List items editors (highlights, inclusions, exclusions, equipment, safety) -->
        <div class="form-section">
          <div class="form-section-title">Service Lists & Equipment</div>
          <div class="form-group">
            <label>Experiences Highlights</label>
            ${renderListEditor('highlights', data.highlights)}
          </div>
          <div class="form-group" style="margin-top: 16px;">
            <label>Inclusions (What's Included)</label>
            ${renderListEditor('inclusions', data.inclusions)}
          </div>
          <div class="form-group" style="margin-top: 16px;">
            <label>Exclusions (What You'll Need to Arrange)</label>
            ${renderListEditor('exclusions', data.exclusions)}
          </div>
          <div class="form-group" style="margin-top: 16px;">
            <label>Equipment List</label>
            ${renderListEditor('equipment', data.equipment)}
          </div>
          <div class="form-group" style="margin-top: 16px;">
            <label>Safety & Guide Judgment Guidelines</label>
            ${renderListEditor('safety', data.safety)}
          </div>
        </div>

        <!-- 6. Departure Dates Editor -->
        <div class="form-section">
          <div class="form-section-title">Departure Dates</div>
          <div class="form-group">
            <div id="datePickersList" style="display: flex; flex-direction: column; gap: 8px;">
              ${(data.departureDates || []).map((date, idx) => `
                <div class="list-editor-item" data-type="date" data-index="${idx}">
                  <input type="date" class="form-control date-picker-val" value="${date.substring(0,10)}">
                  <button class="list-editor-remove date-remove-btn" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                  </button>
                </div>
              `).join('')}
            </div>
            <button class="btn btn-secondary" id="addDatePickerBtn" type="button" style="margin-top: 10px; padding: 6px 12px; font-size: 0.8rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg> Add Custom Departure Date
            </button>
          </div>
        </div>

        <!-- 7. Journey Itineraries Editor -->
        <div class="form-section">
          <div class="form-section-title">Journey Itineraries (Day-by-Day)</div>
          <div id="itinerariesList">
            ${data.itineraries.map((itinerary, idx) => renderItineraryCard(itinerary, idx)).join('')}
          </div>
          <button class="btn" id="addItineraryDayBtn" type="button" style="margin-top: 10px; width: 100%;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg> Append Journey Day
          </button>
        </div>
      </div>
    </div>
  `;

  // Bind Form Event Listeners
  bindFormEvents();
}

// Checklist rendering helper
function renderChecklistSearch(type, allOptions, selectedValues) {
  const selectedSet = new Set(selectedValues || []);
  const orderedOptions = [...allOptions].sort((a, b) => {
    const aSelected = selectedSet.has(a);
    const bSelected = selectedSet.has(b);
    if (aSelected !== bSelected) return aSelected ? -1 : 1;
    return 0;
  });
  return `
    <div class="checklist-container">
      <div class="checklist-search">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input type="text" placeholder="Filter ${type}s..." class="checklist-filter-input" data-type="${type}">
      </div>
      <div class="checklist-scroll" id="${type}ScrollList">
        ${orderedOptions.map(opt => {
          const isSelected = selectedSet.has(opt);
          return `
            <label class="checklist-item ${isSelected ? 'selected' : ''}" data-value="${opt}">
              <input type="checkbox" name="pkg_${type}" value="${opt}" ${isSelected ? 'checked' : ''}>
              <span>${opt}</span>
            </label>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// Service lists editor (e.g. Highlights)
function renderListEditor(type, list = []) {
  const items = list || [];
  return `
    <div class="list-editor" id="${type}ListEditor" data-type="${type}">
      ${items.map((item, idx) => `
        <div class="list-editor-item" data-index="${idx}">
          <input type="text" class="form-control list-item-val" value="${escapeHtml(item)}">
          <button class="list-editor-remove list-remove-btn" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
          </button>
        </div>
      `).join('')}
      <button class="btn btn-secondary list-add-btn" type="button" style="padding: 6px 12px; font-size: 0.8rem; align-self: flex-start; margin-top: 4px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg> Add Item
      </button>
    </div>
  `;
}

// Day Itinerary card editor
function renderItineraryCard(itinerary, index) {
  const accEnums = ["teahouselodge", "teahouse", "lodge", "hotel"];
  const activities = itinerary.activities || [];
  return `
    <div class="day-card" data-index="${index}">
      <div class="day-card-header">
        <div class="day-card-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
          Day <span class="day-number-label">${itinerary.dayNumber || (index + 1)}</span>
          ${itinerary.roles ? itinerary.roles.map(r => `<span class="day-role-badge">${r === 'starting_point' ? '▶ Start' : '■ End'}</span>`).join('') : ''}
        </div>
        <button class="day-card-remove itinerary-remove-btn" type="button" title="Remove day">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
        </button>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label>Day Number</label>
          <input type="number" class="form-control it-day-num" value="${itinerary.dayNumber || (index + 1)}">
        </div>
        <div class="form-group">
          <label>Day Title</label>
          <input type="text" class="form-control it-title" value="${escapeHtml(itinerary.title || '')}">
        </div>
      </div>

      <div class="form-grid-3">
        <div class="form-group">
          <label>Accommodation</label>
          <select class="form-control it-accommodation">
            <option value="">-- Inferred Null --</option>
            ${accEnums.map(e => `<option value="${e}" ${itinerary.accommodation === e ? 'selected' : ''}>${e}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Elevation (m)</label>
          <input type="number" class="form-control it-elevation" value="${itinerary.elevation || ''}" placeholder="e.g. 3440">
        </div>
        <div class="form-group">
          <label>Meals</label>
          <input type="text" class="form-control it-meals" value="${escapeHtml(itinerary.meals || '')}" placeholder="B, L, D, etc.">
        </div>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label>Geopoint Latitude</label>
          <input type="number" step="any" class="form-control it-lat" value="${itinerary.geopoint?.latitude || ''}" placeholder="Latitude">
        </div>
        <div class="form-group">
          <label>Geopoint Longitude</label>
          <input type="number" step="any" class="form-control it-lon" value="${itinerary.geopoint?.longitude || ''}" placeholder="Longitude">
        </div>
      </div>

      <div class="form-group">
        <label>Description</label>
        <textarea class="form-control it-description" style="min-height: 70px;">${escapeHtml(itinerary.description || '')}</textarea>
      </div>

      <div class="form-group">
        <label>Activities List</label>
        <div class="list-editor it-activities-list" data-day-index="${index}">
          ${activities.map((act, actIdx) => `
            <div class="list-editor-item" data-index="${actIdx}">
              <input type="text" class="form-control it-activity-val" value="${escapeHtml(act)}">
              <button class="list-editor-remove it-activity-remove" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
              </button>
            </div>
          `).join('')}
          <button class="btn btn-secondary it-activity-add" type="button" style="padding: 4px 8px; font-size: 0.75rem; align-self: flex-start; margin-top: 4px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg> Add Activity
          </button>
        </div>
      </div>
    </div>
  `;
}

// Bind events to update state in real-time
function bindFormEvents() {
  const pkg = appState.packages[appState.activeIndex];
  // `pkg.data` gets reassigned to a brand-new object every time it's
  // normalized (renderJsonPreview/syncStateAndPreview both do this), which
  // happens right after this function binds its listeners. A plain
  // `const d = pkg.data` would capture that soon-to-be-orphaned object, so
  // every edit below would silently write to a copy nobody reads from.
  // This proxy always reads/writes through the live `pkg.data`, whatever
  // object it currently points to.
  const d = new Proxy({}, {
    get(_, prop) { return pkg.data[prop]; },
    set(_, prop, value) { pkg.data[prop] = value; return true; }
  });

  // 1. Text Inputs
  const updateTextField = (id, fieldName) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', (e) => {
        d[fieldName] = e.target.value.trim() || null;
        if (fieldName === 'name') {
          // Re-generate shortName fallback and tags if title changes
          const shortNameEl = document.getElementById('pkgShortName');
          if (shortNameEl && (!d.shortName || d.shortName === window.TravelParser.makeShortName(e.target.value))) {
            const sn = window.TravelParser.makeShortName(e.target.value);
            d.shortName = sn;
            shortNameEl.value = sn || "";
          }
        }
        syncStateAndPreview();
      });
    }
  };

  updateTextField('pkgName', 'name');
  updateTextField('pkgShortName', 'shortName');
  updateTextField('pkgCountry', 'country');
  updateTextField('pkgProvince', 'province');
  updateTextField('pkgDistrict', 'district');
  updateTextField('pkgCity', 'cityOrVillage');
  updateTextField('pkgDescription', 'description');
  updateTextField('pkgPaymentPolicy', 'paymentPolicy');
  updateTextField('pkgPhysicalPrep', 'physicalPrepAbout');
  updateTextField('pkgCurrency', 'currency');

  // 2. Numbers
  const updateNumField = (id, fieldName) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        d[fieldName] = isNaN(val) ? null : val;
        syncStateAndPreview();
      });
    }
  };
  const priceInput = document.getElementById('pkgPrice');
  if (priceInput) {
    priceInput.addEventListener('input', (e) => {
      const val = Number(e.target.value);
      d.pricePerPerson = Number.isFinite(val) ? String(val) : "0";
      syncStateAndPreview();
    });
  }
  updateNumField('pkgDuration', 'duration');
  updateNumField('pkgLat', 'latitude');
  updateNumField('pkgLon', 'longitude');

  // 3. Switch Toggle
  const activeCheckbox = document.getElementById('pkgIsActive');
  const activeText = document.getElementById('isActiveText');
  if (activeCheckbox) {
    activeCheckbox.addEventListener('change', (e) => {
      d.isActive = e.target.checked;
      activeText.innerText = d.isActive ? 'Active' : 'Draft';
      activeText.style.color = d.isActive ? 'var(--accent-success)' : 'var(--text-secondary)';
      syncStateAndPreview();
    });
  }

  // 4. Select Dropdowns
  const bindSelectField = (id, fieldName, fallback = null) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('change', (e) => {
        d[fieldName] = e.target.value || fallback;
        syncStateAndPreview();
      });
    }
  };
  bindSelectField('pkgDifficulty', 'difficultyLevel');
  bindSelectField('pkgBudget', 'budget', 'midrange');
  bindSelectField('pkgTier', 'tier', 'standard');
  bindSelectField('pkgBadge', 'badge', 'listed');

  // 5. Seasons checkboxes
  const seasonCheckboxes = document.getElementsByName('pkgSeasons');
  seasonCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const selected = [];
      seasonCheckboxes.forEach(c => {
        if (c.checked) selected.push(c.value);
      });
      d.seasons = selected.length > 0 ? selected : null;
      // Re-resolve departureDates if season changes
      d.departureDates = window.TravelParser.resolveDepartureDates(d.departureDates, d.seasons);
      renderDepartureDatesList();
      syncStateAndPreview();
    });
  });

  // 6. Search Filter Checklists
  const bindChecklistFilter = (type) => {
    const filterInput = document.querySelector(`.checklist-filter-input[data-type="${type}"]`);
    if (filterInput) {
      filterInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const items = document.querySelectorAll(`#${type}ScrollList .checklist-item`);
        items.forEach(item => {
          const val = item.getAttribute('data-value').toLowerCase();
          if (val.includes(query)) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    }

    // Checkboxes change
    const checkboxes = document.getElementsByName(`pkg_${type}`);
    checkboxes.forEach(cb => {
      cb.addEventListener('change', (e) => {
        const selected = [];
        checkboxes.forEach(c => {
          if (c.checked) selected.push(c.value);
        });
        const fieldMap = { subcategory: 'subcategories', destination: 'destinations', trip: 'trips' };
        d[fieldMap[type] || `${type}s`] = selected.length > 0 ? selected : null;
        
        // Update styling of selection card
        const label = e.target.closest('.checklist-item');
        if (e.target.checked) {
          label.classList.add('selected');
        } else {
          label.classList.remove('selected');
        }

        syncStateAndPreview();
      });
    });
  };
  bindChecklistFilter('subcategory');
  bindChecklistFilter('destination');
  bindChecklistFilter('trip');

  // 7. General Service Lists (Highlights, Inclusions, etc)
  const bindListEditorEvents = (type) => {
    const container = document.getElementById(`${type}ListEditor`);
    if (!container) return;

    // Item Input updates
    container.addEventListener('input', (e) => {
      if (e.target.classList.contains('list-item-val')) {
        const listItems = container.querySelectorAll('.list-editor-item');
        const updated = [];
        listItems.forEach(item => {
          const val = item.querySelector('.list-item-val').value.trim();
          if (val) updated.push(val);
        });
        d[type] = updated.length > 0 ? updated : null;
        syncStateAndPreview();
      }
    });

    // Remove item
    container.addEventListener('click', (e) => {
      const btn = e.target.closest('.list-remove-btn');
      if (btn) {
        const itemRow = btn.closest('.list-editor-item');
        itemRow.remove();
        // Update index datasets
        const listRows = container.querySelectorAll('.list-editor-item');
        const updated = [];
        listRows.forEach((row, i) => {
          row.setAttribute('data-index', i);
          const val = row.querySelector('.list-item-val').value.trim();
          if (val) updated.push(val);
        });
        d[type] = updated.length > 0 ? updated : null;
        syncStateAndPreview();
      }
    });

    // Add item
    const addBtn = container.querySelector('.list-add-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const idx = container.querySelectorAll('.list-editor-item').length;
        const row = document.createElement('div');
        row.className = 'list-editor-item';
        row.setAttribute('data-index', idx);
        row.innerHTML = `
          <input type="text" class="form-control list-item-val" value="">
          <button class="list-editor-remove list-remove-btn" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
          </button>
        `;
        container.insertBefore(row, addBtn);
        row.querySelector('.list-item-val').focus();
      });
    }
  };

  bindListEditorEvents('highlights');
  bindListEditorEvents('inclusions');
  bindListEditorEvents('exclusions');
  bindListEditorEvents('equipment');
  bindListEditorEvents('safety');

  // 8. Departure Dates Handlers
  const bindDepartureDates = () => {
    const listContainer = document.getElementById('datePickersList');
    const addBtn = document.getElementById('addDatePickerBtn');

    // Input changes
    listContainer.addEventListener('change', (e) => {
      if (e.target.classList.contains('date-picker-val')) {
        const updated = [];
        listContainer.querySelectorAll('.list-editor-item').forEach(row => {
          const raw = row.querySelector('.date-picker-val').value;
          if (raw) {
            updated.push(`${raw}T00:00:00.000Z`);
          }
        });
        d.departureDates = window.TravelParser.resolveDepartureDates(updated, d.seasons);
        syncStateAndPreview();
      }
    });

    // Remove date
    listContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.date-remove-btn');
      if (btn) {
        btn.closest('.list-editor-item').remove();
        const updated = [];
        listContainer.querySelectorAll('.list-editor-item').forEach(row => {
          const raw = row.querySelector('.date-picker-val').value;
          if (raw) updated.push(`${raw}T00:00:00.000Z`);
        });
        d.departureDates = window.TravelParser.resolveDepartureDates(updated, d.seasons);
        syncStateAndPreview();
      }
    });

    // Add date
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const idx = listContainer.querySelectorAll('.list-editor-item').length;
        const row = document.createElement('div');
        row.className = 'list-editor-item';
        row.setAttribute('data-index', idx);
        row.innerHTML = `
          <input type="date" class="form-control date-picker-val" value="2026-09-01">
          <button class="list-editor-remove date-remove-btn" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/></svg>
          </button>
        `;
        listContainer.appendChild(row);
        
        // Push and sync state
        const updated = [];
        listContainer.querySelectorAll('.list-editor-item').forEach(r => {
          const raw = r.querySelector('.date-picker-val').value;
          if (raw) updated.push(`${raw}T00:00:00.000Z`);
        });
        d.departureDates = window.TravelParser.resolveDepartureDates(updated, d.seasons);
        syncStateAndPreview();
      });
    }
  };
  bindDepartureDates();

  // Redraw departure list when needed
  function renderDepartureDatesList() {
    const listContainer = document.getElementById('datePickersList');
    if (listContainer) {
      listContainer.innerHTML = (d.departureDates || []).map((date, idx) => `
        <div class="list-editor-item" data-type="date" data-index="${idx}">
          <input type="date" class="form-control date-picker-val" value="${date.substring(0,10)}">
          <button class="list-editor-remove date-remove-btn" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/></svg>
          </button>
        </div>
      `).join('');
    }
  }

  // 9. Itineraries day cards event bindings
  const itinerariesList = document.getElementById('itinerariesList');
  const addDayBtn = document.getElementById('addItineraryDayBtn');

  if (itinerariesList) {
    // Inner inputs change
    itinerariesList.addEventListener('input', (e) => {
      const card = e.target.closest('.day-card');
      if (!card) return;
      const idx = parseInt(card.getAttribute('data-index'), 10);
      const dayData = d.itineraries[idx];

      if (e.target.classList.contains('it-day-num')) {
        const val = parseInt(e.target.value, 10);
        dayData.dayNumber = isNaN(val) ? idx + 1 : val;
        card.querySelector('.day-number-label').innerText = dayData.dayNumber;
      } else if (e.target.classList.contains('it-title')) {
        dayData.title = e.target.value.trim();
        dayData.caption = `Day ${dayData.dayNumber || (idx + 1)}: ${dayData.title}`;
      } else if (e.target.classList.contains('it-elevation')) {
        const val = parseInt(e.target.value, 10);
        dayData.elevation = isNaN(val) ? null : val;
      } else if (e.target.classList.contains('it-meals')) {
        dayData.meals = e.target.value.trim() || null;
      } else if (e.target.classList.contains('it-lat') || e.target.classList.contains('it-lon')) {
        const latVal = parseFloat(card.querySelector('.it-lat').value);
        const lonVal = parseFloat(card.querySelector('.it-lon').value);
        if (!isNaN(latVal) || !isNaN(lonVal)) {
          dayData.geopoint = {
            latitude: isNaN(latVal) ? null : latVal,
            longitude: isNaN(lonVal) ? null : lonVal
          };
        } else {
          dayData.geopoint = null;
        }
      } else if (e.target.classList.contains('it-description')) {
        dayData.description = e.target.value.trim() || null;
      } else if (e.target.classList.contains('it-activity-val')) {
        // Activity string changes
        const actRows = card.querySelectorAll('.it-activity-val');
        const actList = [];
        actRows.forEach(row => {
          const actVal = row.value.trim();
          if (actVal) actList.push(actVal);
        });
        dayData.activities = actList;
      }

      syncStateAndPreview();
    });

    // Inner select changes
    itinerariesList.addEventListener('change', (e) => {
      const card = e.target.closest('.day-card');
      if (!card) return;
      const idx = parseInt(card.getAttribute('data-index'), 10);
      const dayData = d.itineraries[idx];

      if (e.target.classList.contains('it-accommodation')) {
        dayData.accommodation = e.target.value || null;
        syncStateAndPreview();
      }
    });

    // Remove day, add/remove day activities
    itinerariesList.addEventListener('click', (e) => {
      // Remove day card
      const removeBtn = e.target.closest('.itinerary-remove-btn');
      if (removeBtn) {
        const card = removeBtn.closest('.day-card');
        const idx = parseInt(card.getAttribute('data-index'), 10);
        d.itineraries.splice(idx, 1);
        rebuildItineraryRoles();
        renderActiveForm(); // Redraw whole form to reset indices
        syncStateAndPreview();
        return;
      }

      // Add day activity
      const addActBtn = e.target.closest('.it-activity-add');
      if (addActBtn) {
        const card = addActBtn.closest('.day-card');
        const idx = parseInt(card.getAttribute('data-index'), 10);
        const dayData = d.itineraries[idx];
        dayData.activities = dayData.activities || [];
        dayData.activities.push("");
        renderActiveForm(); // Redraw
        syncStateAndPreview();
        return;
      }

      // Remove day activity
      const removeActBtn = e.target.closest('.it-activity-remove');
      if (removeActBtn) {
        const row = removeActBtn.closest('.list-editor-item');
        const card = removeActBtn.closest('.day-card');
        const idx = parseInt(card.getAttribute('data-index'), 10);
        const actIdx = parseInt(row.getAttribute('data-index'), 10);

        d.itineraries[idx].activities.splice(actIdx, 1);
        renderActiveForm();
        syncStateAndPreview();
      }
    });
  }

  // Append Journey Day Button
  if (addDayBtn) {
    addDayBtn.addEventListener('click', () => {
      d.itineraries = d.itineraries || [];
      const newDayNum = d.itineraries.length + 1;
      d.itineraries.push({
        dayNumber: newDayNum,
        title: "New Day Journey",
        caption: `Day ${newDayNum}: New Day Journey`,
        mapImageUrl: null,
        elevation: null,
        description: null,
        activities: ["New Day Journey"],
        meals: null,
        accommodation: null,
        geopoint: null
      });
      rebuildItineraryRoles();
      renderActiveForm(); // Redraw to update forms indices
      syncStateAndPreview();
    });
  }

  // Re-calculate first/last day roles based on the rules.md specification
  function rebuildItineraryRoles() {
    if (!d.itineraries || d.itineraries.length === 0) return;
    
    // Clear all roles first
    d.itineraries.forEach(item => {
      delete item.roles;
    });

    if (d.itineraries.length === 1) {
      d.itineraries[0].roles = ["final_destination"];
    } else {
      d.itineraries[0].roles = ["starting_point"];
      d.itineraries[d.itineraries.length - 1].roles = ["final_destination"];
    }
    syncStateAndPreview();
  }
}

// Update state and refresh output preview
function syncStateAndPreview() {
  if (appState.activeIndex !== null && appState.packages[appState.activeIndex]) {
    const pkg = appState.packages[appState.activeIndex];
    pkg.data = normalizePackageData(pkg.data);
    renderJsonPreview();
  }
}

// Simple JSON syntax highlighter
function highlightJson(json) {
  const escaped = json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return escaped.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    (match) => {
      if (/^"/.test(match)) {
        return /:$/.test(match)
          ? `<span class="json-key">${match}</span>`
          : `<span class="json-string">${match}</span>`;
      }
      if (/true|false/.test(match)) return `<span class="json-bool">${match}</span>`;
      if (/null/.test(match)) return `<span class="json-null">${match}</span>`;
      return `<span class="json-number">${match}</span>`;
    }
  );
}

// Formats and displays output JSON
function renderJsonPreview() {
  if (appState.activeIndex === null || appState.packages.length === 0) {
    liveJsonPre.innerHTML = '<span class="json-null">{}</span>';
    return;
  }
  const currentData = normalizePackageData(appState.packages[appState.activeIndex].data);
  appState.packages[appState.activeIndex].data = currentData;
  const json = JSON.stringify(currentData, null, 2);
  liveJsonPre.innerHTML = highlightJson(json);
}

// Manual fallback: re-fires every form control's input/change event so any
// field whose edit didn't propagate to state gets resynced, then re-renders
// the JSON preview from scratch. Safety net for auto-update gaps.
function refreshJsonPreview() {
  if (appState.activeIndex === null || appState.packages.length === 0) {
    showToast('No package selected', 'error');
    return;
  }
  const controls = mainArea.querySelectorAll('input, select, textarea');
  controls.forEach((el) => {
    const evtType = (el.tagName === 'SELECT' || el.type === 'checkbox' || el.type === 'radio' || el.type === 'date')
      ? 'change'
      : 'input';
    el.dispatchEvent(new Event(evtType, { bubbles: true }));
  });
  syncStateAndPreview();
  showToast('JSON re-converted from current form data');
}

// Copy JSON text (wrapped in array to match output format)
function copyActiveJson() {
  if (appState.activeIndex === null || appState.packages.length === 0) return;
  const data = normalizePackageData(appState.packages[appState.activeIndex].data);
  appState.packages[appState.activeIndex].data = data;
  const jsonStr = JSON.stringify([data], null, 2);
  navigator.clipboard.writeText(jsonStr)
    .then(() => showToast("Copied JSON to clipboard!"))
    .catch(() => showToast("Failed to copy", 'error'));
}

// Download Active Package JSON
function downloadActiveJson() {
  if (appState.activeIndex === null || appState.packages.length === 0) return;
  const pkg = appState.packages[appState.activeIndex];
  pkg.data = normalizePackageData(pkg.data);
  const jsonStr = JSON.stringify([pkg.data], null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  
  // Clean file name to remove extension
  let baseName = pkg.fileName.replace(/\.(txt|pdf|docx)$/i, '');
  a.download = `${baseName}_converted.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast(`Downloaded: ${a.download}`);
}

// Download All loaded Packages combined as an Array
function downloadAllJson() {
  if (appState.packages.length === 0) {
    showToast("No packages available to download", 'error');
    return;
  }
  const bulkData = appState.packages.map(p => {
    p.data = normalizePackageData(p.data);
    return p.data;
  });
  const jsonStr = JSON.stringify(bulkData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'bulk_packages_output.json';
  a.click();
  URL.revokeObjectURL(url);
  showToast("Downloaded all packages as combined JSON!");
}

// Helper: Title case strings
function titleCase(str) {
  return str.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

// Helper: Escape HTML strings
function escapeHtml(unsafe) {
  if (!unsafe) return "";
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
