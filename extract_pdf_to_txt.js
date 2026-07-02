const fs = require('fs');
const pdf = require('pdf-parse');

const pdfPath = 'packages based on themes (1).pdf';
const txtPath = 'packages_based_on_themes.txt';

if (!fs.existsSync(pdfPath)) {
  console.error('PDF file not found:', pdfPath);
  process.exit(1);
}

const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function(data) {
  fs.writeFileSync(txtPath, data.text, 'utf8');
  console.log('Successfully extracted PDF text to:', txtPath);
  console.log('Total characters extracted:', data.text.length);
}).catch(err => {
  console.error('Error parsing PDF:', err);
});
