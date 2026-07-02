// Predefined Valid Lists
const VALID_SUBCATEGORIES = [
  "lakes-hill-stations",
  "heli-treks-heli-returns",
  "secluded-boutique-heritage",
  "rural-heritage-homestays",
  "city-day-tours",
  "peak-climbing-tiers",
  "aerial-sky",
  "ayurveda-detox-panchakarma",
  "meditation-vipassana",
  "easy-treks-nature-walks",
  "voluntourism-conservation-stays",
  "yoga-retreats",
  "expeditions-7000-8000m",
  "mindful-trekking-nature-immersion",
  "land-vertical",
  "national-parks-safaris",
  "weekend-short-breaks",
  "unesco-ancient-capitals",
  "bungee-extreme",
  "water-canyon",
  "bike-moto",
  "spa-resorts-hot-springs",
  "mountain-sunrise-escapes",
  "pilgrimage-circuits",
  "extensions-multi-country",
  "classic-short-treks",
  "adventure-for-two",
  "remote-restricted-area-treks",
  "tailor-made-vip-concierge",
  "lakeside-romance-pokhara",
  "interactive-learning",
  "luxury-spa-stays",
  "cycling-mtb-endurance",
  "festivals-ethnic-calendars",
  "photography-filming-permits"
];

const VALID_TRIPS = [
  "langtang-ganja-la-pass-trek",
  "kanchenjunga-south-base-camp-trek",
  "skardu-valley",
  "barun-valley-trek-packages-route-and-planner",
  "k2-base-camp-trek-packages-route-and-planner",
  "zanzibar-island-experience-packages-route-and-planner",
  "rara-short-trek-packages-route-and-planner",
  "muldai-view-point-trek",
  "island-peak-with-ebc-trek-packages-route-and-planner",
  "khopra-ridge-trek-packages-route-and-planner",
  "ice-lake-trek-manang-packages-route-and-planner",
  "dolpo-shey-festival-trek",
  "khopra-ridge-trek",
  "dhorpatan-dolpo-trek-packages-route-and-planner",
  "gauri-shankar-himal-trekking",
  "phoksundo-lake-trek-packages-route-and-planner",
  "upper-mustang-trek-packages-route-and-planner",
  "mountain-bike-in-pokhara-packages-route-and-planner",
  "short-manaslu-circuit-trek-packages-route-and-planner",
  "upper-dolpo-trekking-packages-route-and-planner",
  "api-himal-base-camp-trek-packages-route-and-planner",
  "tiji-festival-trek",
  "gondogoro-la-pass-trek-packages-route-and-planner",
  "short-makalu-base-camp-trek-packages-route-and-planner",
  "annapurna-circuit-trekking",
  "short-langtang-valley-trek",
  "jumla-to-rara-lake-trek-packages-route-and-planner",
  "rara-lake-trek-packages-route-and-planner",
  "mardi-himal-trek-packages-route-and-planner",
  "gosaikunda-lake-trek",
  "budget-everest-base-camp-trek-packages-route-and-planner",
  "rara-lake-yoga-trek-packages-route-and-planner",
  "dhaulagiri-sanctuary-trek-packages-route-and-planner",
  "bhaktapur-tour-packages-route-and-planner",
  "mera-peak-climbing-packages-route-and-planner",
  "islamabad-city-tour-packages-route-and-planner",
  "laila-peak-base-camp-trek-packages-route-and-planner",
  "limi-valley-trek-packages-route-and-planner",
  "dhaulagiri-circuit-trek-packages-route-and-planner",
  "annapurna-sanctuary-trek-packages-route-and-planner",
  "rara-lake-and-khaptad-circuit-trek-packages-route-and-planner",
  "makalu-base-camp-trek-packages-route-and-planner",
  "yalung-ri-peak-climbing-packages-route-and-planner",
  "kanchenjunga-north-base-camp-trek",
  "gokyo-valley-trek-packages-route-and-planner",
  "annapurna-circuit-mountain-bike-tour-packages-route-and-planner",
  "spantik-peak-expedition-packages-route-and-planner",
  "upper-mustang-bike-tour-packages-route-and-planner",
  "tilicho-lake-trek",
  "everest-three-passes-trek-packages-route-and-planner",
  "annapurna-panorama-trek",
  "ghorepani-poon-hill-trek",
  "sleep-at-everest-base-camp-trek",
  "dhaulagiri-base-camp-trek-packages-route-and-planner",
  "kanchenjunga-base-camp-trek",
  "k7-base-camp-trek-packages-route-and-planner",
  "dhorpatan-trek-packages-route-and-planner",
  "pachermo-peak-climbing-packages-route-and-planner",
  "hunza-valley-tours",
  "dhampus-peak-climbing-packages-route-and-planner",
  "kanchenjunga-circuit-trek",
  "bigu-gompa-trek",
  "tanzania-packages-route-and-planner",
  "tsho-rolpa-trek-packages-route-and-planner",
  "khaptad-national-park",
  "chisapani-nagarkot-trekking",
  "ama-yangri-trek",
  "nar-phu-valley-trek",
  "dhaulagiri-plus-upper-mustang-trek-packages-route-and-planner",
  "nar-phu-to-upper-mustang-trek-packages-route-and-planner",
  "guerrilla-trek-packages-route-and-planner",
  "gasherbrum-massif",
  "gokyo-lakes-trek",
  "mohare-danda-trek",
  "namche-bazaar-trek",
  "rolwaling-valley-trek",
  "ghandruk-trek",
  "machhapuchhre-model-trek-packages-route-and-planner",
  "tamang-heritage-trek",
  "tsum-valley-trek-packages-route-and-planner",
  "panch-pokhari-trek",
  "helambu-trek",
  "sikles-kapuche-lake-trek-packages-route-and-planner",
  "dolpo-mustang-traverse-trek-packages-route-and-planner",
  "lower-dolpo-trekking-packages-route-and-planner",
  "everest-panorama-trek-packages-route-and-planner",
  "pastore-base-camp-trek-packages-route-and-planner",
  "lower-mustang-trek",
  "island-peak-climbing-packages-route-and-planner",
  "langtang-valley-trek",
  "everest-base-camp-heli-trek-packages-route-and-planner",
  "jiri-to-everest-base-camp-trek-packages-route-and-planner",
  "jomsom-muktinath-trek",
  "tashi-lapcha-pass-trek-packages-route-and-planner",
  "kathmandu-valley-tour-heritage-temples-and-living-culture",
  "arun-valley-trek-packages-route-and-planner",
  "mt-nanga-parbat-expedition",
  "dolpo-rara-traverse-trek-packages-route-and-planner",
  "mount-k2-expedition",
  "mesokanto-la-pass-trek-packages-route-and-planner",
  "ama-dablam-base-camp-trek-packages-route-and-planner",
  "luxury-everest-base-camp-trek-packages-route-and-planner",
  "pikey-peak-trek-packages-route-and-planner",
  "annapurna-base-camp-trek-packages-route-and-planner",
  "patan-tour-packages-route-and-planner",
  "lower-mustang-mountain-biking-packages-route-and-planner",
  "manaslu-circuit-trek"
];

const VALID_DESTINATIONS = [
  "pokhara",
  "langtang",
  "rara-lake",
  "annapurna-region",
  "everest-region",
  "chitwan-national-park",
  "bandipur",
  "bardia-national-park",
  "upper-mustang",
  "janakpur",
  "nagarkot",
  "kathmandu",
  "patan",
  "bhaktapur",
  "lumbini",
  "dhaulagiri-region",
  "far-west-region",
  "makalu-barun-region",
  "kanchenjunga-region",
  "rolwaling-region",
  "dolpo-region",
  "manaslu-region",
  "langtang-region"
];

const VALID_SEASONS = ['spring', 'summer', 'autumn', 'winter'];
const VALID_DIFFICULTIES = ['beginner', 'moderate', 'difficult', 'extremely_difficult'];
const VALID_BUDGETS = ['budget', 'midrange', 'luxury'];
const VALID_TIERS = ['starter', 'standard', 'premium'];
const VALID_BADGES = ['listed', 'promising', 'reliable', 'top_rated', 'iconic'];

// Aliases maps
const SUBCATEGORY_ALIASES = {
  "City Day Tours & Sightseeing": "city-day-tours",
  "City Day Tours": "city-day-tours",
  "Expeditions (7000-8000m)": "expeditions-7000-8000m",
  "Expeditions 7000-8000m": "expeditions-7000-8000m",
  "Bike & Moto": "bike-moto",
  "Heli Treks & Heli Returns": "heli-treks-heli-returns",
  "Aerial & Sky": "aerial-sky",
  "Yoga Retreats": "yoga-retreats",
  "Photography, Filming & Permits": "photography-filming-permits",
  "Lakes & Hill Stations": "lakes-hill-stations",
  "Weekend & Short Breaks": "weekend-short-breaks",
  "Easy Treks & Nature Walks": "easy-treks-nature-walks",
  "Mountain & Sunrise Escapes": "mountain-sunrise-escapes",
  "Classic & Short Treks": "classic-short-treks",
  "Mindful Trekking & Nature Immersion": "mindful-trekking-nature-immersion",
  "Land & Vertical": "land-vertical",
  "Water & Canyon": "water-canyon",
  "Extensions & Multi-Country": "extensions-multi-country",
  "Adventure for Two": "adventure-for-two",
  "Lakeside Romance (Pokhara)": "lakeside-romance-pokhara",
  "Meditation & Vipassana": "meditation-vipassana",
  "Ayurveda & Detox (Panchakarma)": "ayurveda-detox-panchakarma",
  "National Parks & Safaris": "national-parks-safaris",
  "Remote & Restricted Area Treks": "remote-restricted-area-treks",
  "Peak Climbing Tiers": "peak-climbing-tiers"
};

const DESTINATION_ALIASES = {
  "Pokhara": "pokhara",
  "Langtang": "langtang",
  "Rara Lake": "rara-lake",
  "Annapurna Region": "annapurna-region",
  "Everest Region": "everest-region",
  "Chitwan National Park": "chitwan-national-part",
  "Bandipur": "bandipur",
  "Bardia National Park": "bardia-national-park",
  "Upper Mustang": "upper-mustang",
  "Janakpur": "janakpur",
  "Nagarkot": "nagarkot",
  "Kathmandu": "kathmandu",
  "Patan": "patan",
  "Bhaktapur": "bhaktapur",
  "Lumbini": "lumbini",
  "Dhaulagiri region": "dhaulagiri-region",
  "Dhaulagiri Region": "dhaulagiri-region",
  "Far West Region": "far-west-region",
  "Makalu Barun region": "makalu-barun-region",
  "Makalu Barun Region": "makalu-barun-region",
  "Kanchenjunga region": "kanchenjunga-region",
  "Kanchenjunga Region": "kanchenjunga-region",
  "Rolwaling Region": "rolwaling-region",
  "Dolpo Region": "dolpo-region",
  "Manaslu Region": "manaslu-region",
  "Langtang Region": "langtang-region"
};

const TRIP_ALIASES = {
  "poon hill": "ghorepani-poon-hill-trek",
  "ghorepani": "ghorepani-poon-hill-trek",
  "annapurna base camp": "annapurna-base-camp-trek-packages-route-and-planner",
  "abc trek": "annapurna-base-camp-trek-packages-route-and-planner",
  "annapurna sanctuary": "annapurna-sanctuary-trek-packages-route-and-planner",
  "annapurna circuit": "annapurna-circuit-trekking",
  "k2 base camp": "k2-base-camp-trek-packages-route-and-planner",
  "mount k2": "mount-k2-expedition",
  "nanga parbat": "mt-nanga-parbat-expedition",
  "abc": "annapurna-base-camp-trek-packages-route-and-planner"
};

const TRIP_PRIORITY_RULES = [
  ["island-peak-with-ebc-trek-packages-route-and-planner", [["island peak", "everest base camp"], ["island peak", "ebc"]]],
  ["island-peak-climbing-packages-route-and-planner", [["island peak climbing"], ["island peak"]]],
  ["everest-base-camp-trek-with-helicopter-return-packages-route-and-planner", [["everest base camp", "helicopter return"], ["ebc", "heli return"], ["everest base camp", "heli return"]]],
  ["everest-base-camp-heli-trek-packages-route-and-planner", [["everest base camp", "heli trek"], ["ebc", "heli trek"], ["everest base camp", "helicopter trek"]]],
  ["jiri-to-everest-base-camp-trek-packages-route-and-planner", [["jiri", "everest base camp"], ["jiri", "ebc"]]],
  ["luxury-everest-base-camp-trek-packages-route-and-planner", [["luxury", "everest base camp"], ["luxury", "ebc"]]],
  ["budget-everest-base-camp-trek-packages-route-and-planner", [["budget", "everest base camp"], ["budget", "ebc"]]],
  ["ama-dablam-base-camp-trek-packages-route-and-planner", [["ama dablam base camp"], ["ama dablam", "side trip"], ["ama dablam", "everest base camp"]]],
  ["gokyo-lakes-trek", [["gokyo lakes"], ["gokyo lake"], ["gokyo", "cho la"], ["gokyo", "everest base camp"]]],
  ["gokyo-valley-trek-packages-route-and-planner", [["gokyo valley"]]],
  ["everest-three-passes-trek-packages-route-and-planner", [["three passes"], ["kongma la"], ["cho la", "renjo la"], ["kongma", "renjo"], ["kongma", "cho la"]]],
  ["everest-panorama-trek-packages-route-and-planner", [["everest panorama"]]],
  ["namche-bazaar-trek", [["namche bazaar trek"], ["namche bazaar"]]],
  ["pikey-peak-trek-packages-route-and-planner", [["pikey peak"]]],
  ["annapurna-circuit-mountain-bike-tour-packages-route-and-planner", [["annapurna circuit", "mountain bike"], ["annapurna circuit", "mtb"], ["annapurna circuit", "biking"]]],
  ["annapurna-circuit-trekking", [["annapurna circuit"]]],
  ["annapurna-base-camp-trek-packages-route-and-planner", [["annapurna base camp"], ["abc trek"]]],
  ["annapurna-sanctuary-trek-packages-route-and-planner", [["annapurna sanctuary"]]],
  ["mardi-himal-trek-packages-route-and-planner", [["mardi himal"]]],
  ["ghorepani-poon-hill-trek", [["poon hill"], ["ghorepani"]]],
  ["khopra-ridge-trek-packages-route-and-planner", [["khopra ridge"]]],
  ["khopra-ridge-trek", [["khopra"]]],
  ["muldai-view-point-trek", [["muldai view point"], ["muldai viewpoint"], ["muldai"]]],
  ["mohare-danda-trek", [["mohare danda"]]],
  ["tilicho-lake-trek", [["tilicho lake"]]],
  ["ice-lake-trek-manang-packages-route-and-planner", [["ice lake", "manang"]]],
  ["jomsom-muktinath-trek", [["jomsom", "muktinath"]]],
  ["langtang-ganja-la-pass-trek", [["ganja la"], ["langtang", "ganja"]]],
  ["short-langtang-valley-trek", [["short", "langtang valley"]]],
  ["langtang-valley-trek", [["langtang valley"]]],
  ["gosaikunda-lake-trek", [["gosaikunda"]]],
  ["helambu-trek", [["helambu"]]],
  ["tamang-heritage-trek", [["tamang heritage"]]],
  ["tashi-lapcha-pass-trek-packages-route-and-planner", [["tashi lapcha"]]],
  ["pachermo-peak-climbing-packages-route-and-planner", [["pachermo"]]],
  ["yalung-ri-peak-climbing-packages-route-and-planner", [["yalung ri"]]],
  ["rolwaling-valley-trek", [["rolwaling"]]],
  ["short-manaslu-circuit-trek-packages-route-and-planner", [["short", "manaslu circuit"]]],
  ["manaslu-circuit-trek", [["manaslu circuit"], ["larkya la"]]],
  ["tsum-valley-trek-packages-route-and-planner", [["tsum valley"]]],
  ["upper-mustang-bike-tour-packages-route-and-planner", [["upper mustang", "bike"], ["upper mustang", "biking"], ["upper mustang", "mtb"]]],
  ["upper-mustang-trek-packages-route-and-planner", [["upper mustang"], ["lo manthang"]]],
  ["lower-mustang-mountain-biking-packages-route-and-planner", [["lower mustang", "mountain biking"], ["lower mustang", "bike"], ["lower mustang", "mtb"]]],
  ["lower-mustang-trek", [["lower mustang"]]],
  ["tiji-festival-trek", [["tiji festival"], ["tiji"]]],
  ["phoksundo-lake-trek-packages-route-and-planner", [["phoksundo"]]],
  ["upper-dolpo-trekking-packages-route-and-planner", [["upper dolpo"]]],
  ["lower-dolpo-trekking-packages-route-and-planner", [["lower dolpo"]]],
  ["dolpo-shey-festival-trek", [["shey festival"], ["dolpo shey"]]],
  ["dolpo-mustang-traverse-trek-packages-route-and-planner", [["dolpo", "mustang", "traverse"]]],
  ["dolpo-rara-traverse-trek-packages-route-and-planner", [["dolpo", "rara", "traverse"]]],
  ["rara-lake-and-khaptad-circuit-trek-packages-route-and-planner", [["rara", "khaptad"]]],
  ["rara-lake-yoga-trek-packages-route-and-planner", [["rara", "yoga"]]],
  ["rara-short-trek-packages-route-and-planner", [["rara", "short"]]],
  ["jumla-to-rara-lake-trek-packages-route-and-planner", [["jumla", "rara"]]],
  ["rara-lake-trek-packages-route-and-planner", [["rara lake"], ["rara"]]],
  ["khaptad-national-park", [["khaptad"]]],
  ["api-himal-base-camp-trek-packages-route-and-planner", [["api himal"]]],
  ["kanchenjunga-north-base-camp-trek", [["kanchenjunga north base camp"], ["north base camp", "kanchenjunga"]]],
  ["kanchenjunga-south-base-camp-trek", [["kanchenjunga south base camp"], ["south base camp", "kanchenjunga"]]],
  ["kanchenjunga-circuit-trek", [["kanchenjunga circuit"]]],
  ["kanchenjunga-base-camp-trek", [["kanchenjunga base camp"], ["kanchenjunga"]]],
  ["short-makalu-base-camp-trek-packages-route-and-planner", [["short", "makalu base camp"]]],
  ["makalu-base-camp-trek-packages-route-and-planner", [["makalu base camp"]]],
  ["barun-valley-trek-packages-route-and-planner", [["barun valley"]]],
  ["dhaulagiri-plus-upper-mustang-trek-packages-route-and-planner", [["dhaulagiri", "upper mustang"]]],
  ["dhaulagiri-sanctuary-trek-packages-route-and-planner", [["dhaulagiri sanctuary"]]],
  ["dhaulagiri-circuit-trek-packages-route-and-planner", [["dhaulagiri circuit"]]],
  ["dhaulagiri-base-camp-trek-packages-route-and-planner", [["dhaulagiri base camp"]]],
  ["gondogoro-la-pass-trek-packages-route-and-planner", [["gondogoro la"], ["gondogoro"]]],
  ["k2-base-camp-trek-packages-route-and-planner", [["k2 base camp"], ["baltoro", "concordia"]]],
  ["mount-k2-expedition", [["mount k2"], ["k2 expedition"]]],
  ["mt-nanga-parbat-expedition", [["nanga parbat"]]],
  ["spantik-peak-expedition-packages-route-and-planner", [["spantik"]]],
  ["laila-peak-base-camp-trek-packages-route-and-planner", [["laila peak"]]],
  ["pastore-base-camp-trek-packages-route-and-planner", [["pastore"]]],
  ["k7-base-camp-trek-packages-route-and-planner", [["k7 base camp"], ["k7"]]],
  ["gasherbrum-massif", [["gasherbrum"]]],
  ["skardu-valley", [["skardu"]]],
  ["hunza-valley-tours", [["hunza"]]],
  ["islamabad-city-tour-packages-route-and-planner", [["islamabad city"], ["islamabad", "city tour"]]],
  ["zanzibar-island-experience-packages-route-and-planner", [["zanzibar"]]],
  ["tanzania-packages-route-and-planner", [["tanzania"], ["arusha"], ["kilimanjaro"]]],
  ["bhaktapur-tour-packages-route-and-planner", [["bhaktapur"]]],
  ["patan-tour-packages-route-and-planner", [["patan"]]],
  ["kathmandu-valley-tour-heritage-temples-and-living-culture", [["kathmandu valley"], ["kathmandu", "heritage"]]]
];

const TRIP_STOPWORDS = new Set([
  "package", "packages", "route", "planner", "and", "with", "the", "a", "an",
  "of", "in", "at", "to", "from", "for", "by", "via", "trek", "trekking",
  "tour", "tours", "travel", "experience", "packages route planner"
]);

const DESTINATION_KEYWORDS = {
  "Rara Lake": ["rara lake", "rara"],
  "Zanzibar": ["zanzibar"],
  "Everest Region": ["everest", "khumbu", "lukla", "namche", "dingboche", "lobuche", "gorak shep", "pheriche", "tengboche", "kala patthar"],
  "Bhaktapur": ["bhaktapur"],
  "Annapurna Region": ["annapurna", "ghorepani", "poon hill", "machhapuchhre", "mardi", "khopra", "muldai", "jomsom", "muktinath", "tilicho", "manang", "ghandruk", "dhampus", "mohare", "sikles", "kapuche"],
  "Nagarkot": ["nagarkot"],
  "Dhaulagiri region": ["dhaulagiri"],
  "Kathmandu": ["kathmandu", "tribhuvan international airport", "tia"],
  "K7 Peak": ["k7"],
  "Chitwan National Park": ["chitwan"],
  "Islamabad": ["islamabad"],
  "Dolpo Region": ["dolpo", "shey", "phoksundo"],
  "Spantik Peak": ["spantik"],
  "Rolwaling Region": ["rolwaling", "tsho rolpa", "tashi lapcha", "bigu gompa", "pachermo", "yalung ri"],
  "Manaslu Region": ["manaslu", "tsum valley", "larkya", "gorkha"],
  "K2 Base Camp": ["k2 base camp", "concordia", "baltoro", "gondogoro la", "gasherbrum", "mount k2"],
  "Janakpur": ["janakpur"],
  "Langtang Region": ["langtang valley", "langtang region", "gosaikunda", "ganja la", "helambu", "ama yangri"],
  "Langtang": ["langtang"],
  "Gilgit-Baltistan": ["gilgit", "baltistan", "skardu", "hunza", "nanga parbat", "karakoram", "laila peak", "pastore", "gasherbrum", "gondogoro"],
  "Pokhara": ["pokhara", "phewa", "lakeside", "sarangkot"],
  "Patan": ["patan"],
  "Kanchenjunga region": ["kanchenjunga"],
  "Bandipur": ["bandipur"],
  "Makalu Barun region": ["makalu", "barun"],
  "Far West Region": ["far west", "far-west", "api himal", "khaptad", "bardia"],
  "Laila Peak": ["laila peak"],
  "Arusha": ["arusha", "kilimanjaro", "tanzania"],
  "Lumbini": ["lumbini"],
  "Bardia National Park": ["bardia"],
  "Upper Mustang": ["upper mustang", "lo manthang", "tiji", "mustang"]
};

const LOCATION_RULES = [
  ["Kathmandu", { country: "Nepal", province: "Bagmati Province", district: "Kathmandu", cityOrVillage: "Kathmandu" }],
  ["Bhaktapur", { country: "Nepal", province: "Bagmati Province", district: "Bhaktapur", cityOrVillage: "Bhaktapur" }],
  ["Patan", { country: "Nepal", province: "Bagmati Province", district: "Lalitpur", cityOrVillage: "Patan" }],
  ["Nagarkot", { country: "Nepal", province: "Bagmati Province", district: "Bhaktapur", cityOrVillage: "Nagarkot" }],
  ["Everest Region", { country: "Nepal", province: "Koshi Province", district: "Solukhumbu", cityOrVillage: "Khumbu / Lukla" }],
  ["Annapurna Region", { country: "Nepal", province: "Gandaki Province", district: "Kaski", cityOrVillage: "Pokhara / Annapurna Region" }],
  ["Pokhara", { country: "Nepal", province: "Gandaki Province", district: "Kaski", cityOrVillage: "Pokhara" }],
  ["Dhaulagiri region", { country: "Nepal", province: "Gandaki Province", district: "Myagdi", cityOrVillage: "Dhaulagiri Region" }],
  ["Manaslu Region", { country: "Nepal", province: "Gandaki Province", district: "Gorkha", cityOrVillage: "Manaslu Region" }],
  ["Langtang Region", { country: "Nepal", province: "Bagmati Province", district: "Rasuwa", cityOrVillage: "Langtang Region" }],
  ["Langtang", { country: "Nepal", province: "Bagmati Province", district: "Rasuwa", cityOrVillage: "Langtang" }],
  ["Upper Mustang", { country: "Nepal", province: "Gandaki Province", district: "Mustang", cityOrVillage: "Upper Mustang" }],
  ["Dolpo Region", { country: "Nepal", province: "Karnali Province", district: "Dolpa", cityOrVillage: "Dolpo Region" }],
  ["Rara Lake", { country: "Nepal", province: "Karnali Province", district: "Mugu", cityOrVillage: "Rara Lake" }],
  ["Kanchenjunga region", { country: "Nepal", province: "Koshi Province", district: "Taplejung", cityOrVillage: "Kanchenjunga Region" }],
  ["Makalu Barun region", { country: "Nepal", province: "Koshi Province", district: "Sankhuwasabha", cityOrVillage: "Makalu Barun Region" }],
  ["Rolwaling Region", { country: "Nepal", province: "Bagmati Province", district: "Dolakha", cityOrVillage: "Rolwaling Region" }],
  ["Far West Region", { country: "Nepal", province: "Sudurpashchim Province", district: null, cityOrVillage: "Far West Region" }],
  ["Chitwan National Park", { country: "Nepal", province: "Bagmati Province", district: "Chitwan", cityOrVillage: "Chitwan National Park" }],
  ["Bardia National Park", { country: "Nepal", province: "Lumbini Province", district: "Bardiya", cityOrVillage: "Bardia National Park" }],
  ["Lumbini", { country: "Nepal", province: "Lumbini Province", district: "Rupandehi", cityOrVillage: "Lumbini" }],
  ["Janakpur", { country: "Nepal", province: "Madhesh Province", district: "Dhanusha", cityOrVillage: "Janakpur" }],
  ["Bandipur", { country: "Nepal", province: "Gandaki Province", district: "Tanahun", cityOrVillage: "Bandipur" }],
  ["K2 Base Camp", { country: "Pakistan", province: "Gilgit-Baltistan", district: "Skardu", cityOrVillage: "K2 Base Camp / Baltoro" }],
  ["Gilgit-Baltistan", { country: "Pakistan", province: "Gilgit-Baltistan", district: null, cityOrVillage: "Gilgit-Baltistan" }],
  ["Islamabad", { country: "Pakistan", province: "Islamabad Capital Territory", district: "Islamabad", cityOrVillage: "Islamabad" }],
  ["Spantik Peak", { country: "Pakistan", province: "Gilgit-Baltistan", district: "Skardu", cityOrVillage: "Spantik Peak" }],
  ["Laila Peak", { country: "Pakistan", province: "Gilgit-Baltistan", district: "Ghanche", cityOrVillage: "Laila Peak" }],
  ["Pastore Peak", { country: "Pakistan", province: "Gilgit-Baltistan", district: "Skardu", cityOrVillage: "Pastore Peak" }],
  ["K7 Peak", { country: "Pakistan", province: "Gilgit-Baltistan", district: "Ghanche", cityOrVillage: "K7 Peak" }],
  ["Arusha", { country: "Tanzania", province: "Arusha Region", district: "Arusha", cityOrVillage: "Arusha" }],
  ["Zanzibar", { country: "Tanzania", province: "Zanzibar", district: null, cityOrVillage: "Zanzibar" }]
];

// Helper functions for normalization
function cleanText(text) {
  if (!text) return "";
  const replacements = {
    "\r\n": "\n",
    "\r": "\n",
    "’": "'",
    "‘": "'",
    "“": '"',
    "”": '"',
    "–": "-",
    "—": "—",
    "•": "●",
  };
  let result = text;
  for (const [old, newVal] of Object.entries(replacements)) {
    result = result.split(old).join(newVal);
  }
  result = result.replace(/[ \t]+/g, " ");
  result = result.replace(/\n{3,}/g, "\n\n");
  return result.trim();
}

function normalizeKey(value) {
  if (value === null || value === undefined) return "";
  let str = String(value)
    .replace(/’/g, "'")
    .replace(/“/g, '"')
    .replace(/”/g, '"')
    .replace(/[—–-]/g, " ")
    .toLowerCase();
  str = str.replace(/[^a-z0-9\s\/&+().]/g, " ");
  str = str.replace(/\s+/g, " ").trim();
  return str;
}

function makeShortName(name) {
  if (!name) return null;
  let short = String(name).trim();
  const suffixPatterns = [
    /\s*—\s*Packages,\s*Route\s*&\s*Planner\s*$/i,
    /\s*-\s*Packages,\s*Route\s*&\s*Planner\s*$/i,
    /\s*—\s*Heritage,\s*Temples\s*&\s*Living\s*Culture\s*$/i
  ];
  for (const pattern of suffixPatterns) {
    short = short.replace(pattern, "").trim();
  }

  const replacements = [
    [/\bEverest Base Camp\s*\(EBC\)\b/gi, "EBC"],
    [/\bEverest Base Camp\b/gi, "EBC"],
    [/\bAnnapurna Base Camp\b/gi, "ABC"],
    [/\bKanchenjunga North Base Camp\b/gi, "Kanchenjunga North BC"],
    [/\bKanchenjunga South Base Camp\b/gi, "Kanchenjunga South BC"],
    [/\bKanchenjunga Base Camp\b/gi, "Kanchenjunga BC"],
    [/\bMakalu Base Camp\b/gi, "Makalu BC"],
    [/\bK2 Base Camp\b/gi, "K2 BC"],
    [/\bDhaulagiri Base Camp\b/gi, "Dhaulagiri BC"],
    [/\bAma Dablam Base Camp\b/gi, "Ama Dablam BC"],
    [/\bPastore Base Camp\b/gi, "Pastore BC"],
    [/\bLaila Peak Base Camp\b/gi, "Laila Peak BC"],
    [/\bApi Himal Base Camp\b/gi, "Api Himal BC"],
    [/\bAnnapurna Circuit Mountain Bike Tour\b/gi, "Annapurna Circuit MTB Tour"],
    [/\bAnnapurna Circuit Mountain Biking\b/gi, "Annapurna Circuit MTB"],
    [/\bMountain Biking\b/gi, "MTB"],
    [/\bMountain Bike\b/gi, "MTB"],
    [/\bHelicopter Return\b/gi, "Heli Return"],
    [/\bHelicopter\b/gi, "Heli"],
    [/\bNational Park\b/gi, "NP"],
    [/\bCircuit Trekking\b/gi, "Circuit Trek"],
    [/\bTrekking\b/gi, "Trek"]
  ];

  for (const [pattern, replacement] of replacements) {
    short = short.replace(pattern, replacement);
  }

  short = short.replace(/\bEBC\s*\(EBC\)/gi, "EBC");
  short = short.replace(/\bTrek Trek\b/gi, "Trek");
  short = short.replace(/\bTour Tour\b/gi, "Tour");
  short = short.replace(/\s+/g, " ").trim();

  if (short.length > 60) {
    short = short.substring(0, 60).trim();
  }
  return short;
}

function splitLines(text) {
  return cleanText(text).split("\n").map(l => l.trim()).filter(l => l.length > 0);
}

function labelValue(text, label) {
  const cleaned = cleanText(text);
  const escapedLabel = label.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(?:^|\\n)\\s*${escapedLabel}\\s*:\\s*([\\s\\S]*?)(?=\\n\\s*[A-Z][A-Za-z &/'-]{1,45}\\s*:|\\n\\s*(?:Trip Overview|The Invitation|Experiences|The Journey|What's Included|What You'll Need to Arrange|Equipment|Safety & Guide Judgment|Physical Preparation|Common Curiosities)\\s*|$|\\n\\s*Day\\s+\\d+\\s*:)`, 'im');
  const m = regex.exec(cleaned);
  if (!m) return "";
  return splitLines(m[1]).join(" ").trim();
}

function findFirstLabelValue(text, labels) {
  for (const label of labels) {
    const val = labelValue(text, label);
    if (val) return val;
  }
  return "";
}

const SECTION_HEADINGS = [
  "Trip Overview",
  "The Invitation",
  "Experiences",
  "The Journey",
  "What's Included",
  "What You Need to Arrange",
  "What You'll Need to Arrange",
  "Equipment",
  "Safety & Guide Judgment",
  "Physical Preparation",
  "Common Curiosities",
];

function extractSection(text, heading, nextHeadings = SECTION_HEADINGS) {
  const cleaned = cleanText(text);
  const headingVariants = {
    "What's Included": ["What's Included", "What’s Included"],
    "What You'll Need to Arrange": ["What You'll Need to Arrange", "What You’ll Need to Arrange", "What You Need to Arrange"],
  };
  const variants = headingVariants[heading] || [heading];

  let startMatch = null;
  for (const variant of variants) {
    const escaped = variant.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`^\\s*${escaped}\\s*$`, 'gim');
    let m;
    while ((m = regex.exec(cleaned)) !== null) {
      if (startMatch === null || m.index < startMatch.index) {
        startMatch = { index: m.index, length: m[0].length };
      }
    }
  }
  if (!startMatch) {
    return "";
  }

  const startIdx = startMatch.index + startMatch.length;
  let endIdx = cleaned.length;

  const possibleNext = [];
  for (const nh of nextHeadings) {
    if (normalizeKey(nh) === normalizeKey(heading)) continue;
    const nhVariants = headingVariants[nh] || [nh];
    for (const variant of nhVariants) {
      const escaped = variant.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`^\\s*${escaped}\\s*$`, 'gim');
      const subtext = cleaned.substring(startIdx);
      const m = regex.exec(subtext);
      if (m) {
        possibleNext.push(startIdx + m.index);
      }
    }
  }
  if (possibleNext.length > 0) {
    endIdx = Math.min(...possibleNext);
  }
  return cleaned.substring(startIdx, endIdx).trim();
}

function mergeBullets(sectionText) {
  const lines = splitLines(sectionText);
  const bullets = [];
  let current = null;

  for (const line of lines) {
    const isBullet = /^\s*(?:●|•|-|\*)\s+/.test(line);
    const stripped = line.replace(/^\s*(?:●|•|-|\*)\s+/, "").trim();
    if (!stripped) continue;

    if (isBullet) {
      if (current) {
        bullets.push(current.trim());
      }
      current = stripped;
    } else {
      if (current) {
        current += " " + stripped;
      } else {
        bullets.push(stripped);
      }
    }
  }

  if (current) {
    bullets.push(current.trim());
  }

  return bullets.map(b => b.replace(/\s+/g, " ").trim()).filter(b => b.length > 0);
}

function sectionAsParagraphs(sectionText) {
  const cleaned = cleanText(sectionText);
  if (!cleaned) return "";
  const paragraphs = [];
  let current = [];
  for (const line of cleaned.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (current.length > 0) {
        paragraphs.push(current.join(" ").trim());
        current = [];
      }
    } else {
      current.push(trimmed);
    }
  }
  if (current.length > 0) {
    paragraphs.push(current.join(" ").trim());
  }
  return paragraphs.join("\n\n").trim();
}

function extractDuration(value) {
  if (!value) return null;
  const m = /\b(\d{1,3})\b/.exec(String(value));
  return m ? parseInt(m[1], 10) : null;
}

function inferDifficulty(text) {
  const t = normalizeKey(text);
  if (["extremely difficult", "extreme", "expedition", "technical climbing", "7000", "8000", "8611"].some(k => t.includes(k))) {
    return "extremely_difficult";
  }
  if (["strenuous", "difficult", "high altitude", "pass", "base camp", "peak climbing"].some(k => t.includes(k))) {
    return "difficult";
  }
  if (t.includes("moderate")) {
    return "moderate";
  }
  if (["easy", "beginner", "nature walk", "city tour", "short walk"].some(k => t.includes(k))) {
    return "beginner";
  }
  return null;
}

function inferSeasons(text) {
  const t = normalizeKey(text);
  const seasons = [];
  for (const s of VALID_SEASONS) {
    const regex = new RegExp(`\\b${s}\\b`);
    if (regex.test(t)) {
      seasons.push(s);
    }
  }
  return dedupePreserveOrder(seasons);
}

function normalizeAccommodationEnum(value) {
  if (value === null || value === undefined) return null;
  const raw = String(value).trim();
  if (!raw) return null;

  let normalized = normalizeKey(raw);
  normalized = normalized.split("tea house").join("teahouse");
  const compact = normalized.replace(/[^a-z0-9]+/g, "");

  if (compact === "teahouselodge" || compact === "teahouse" || compact === "lodge" || compact === "hotel") {
    return compact;
  }

  if (compact.includes("teahouse") && compact.includes("lodge")) {
    return "teahouselodge";
  }

  if (/\bteahouse\s*(?:\/|and|&|-)?\s*lodge\b/i.test(normalized)) {
    return "teahouselodge";
  }

  if (compact.includes("teahouse")) {
    return "teahouse";
  }

  if (compact.includes("lodge") || compact.includes("guesthouse") || normalized.replace(/\s+/g, "").includes("guesthouse")) {
    return "lodge";
  }

  if (compact.includes("hotel") || compact.includes("resort")) {
    return "hotel";
  }

  return null;
}

const SEASON_DEPARTURE_DATES = {
  "spring": "2026-03-01T00:00:00.000Z",
  "summer": "2026-06-01T00:00:00.000Z",
  "autumn": "2026-09-01T00:00:00.000Z",
  "winter": "2026-12-01T00:00:00.000Z",
};

function normalizeIsoDepartureDate(value) {
  if (!value) return null;
  const val = String(value).trim();
  if (!val) return null;

  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(val)) {
    return val;
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(val)) {
    return `${val}T00:00:00.000Z`;
  }
  return null;
}

function resolveDepartureDates(manualDates = null, seasons = null) {
  const output = [];
  if (manualDates) {
    const list = Array.isArray(manualDates) ? manualDates : [manualDates];
    for (const val of list) {
      const iso = normalizeIsoDepartureDate(val);
      if (iso) output.push(iso);
    }
  }

  if (output.length === 0 && seasons) {
    for (const season of seasons) {
      const key = normalizeKey(season);
      const date = SEASON_DEPARTURE_DATES[key];
      if (date) output.push(date);
    }
  }

  if (output.length === 0) {
    output.push("2026-09-01T00:00:00.000Z");
  }

  return dedupePreserveOrder(output);
}

function parseCoordinateFromLine(line) {
  if (!line) return null;
  const pattern = /(-?\d+(?:\.\d+)?)\s*°?\s*([NS])\s*,\s*(-?\d+(?:\.\d+)?)\s*°?\s*([EW])/i;
  const m = pattern.exec(line);
  if (!m) return null;
  let lat = parseFloat(m[1]);
  let lon = parseFloat(m[3]);
  if (m[2].toUpperCase() === "S") lat = -lat;
  if (m[4].toUpperCase() === "W") lon = -lon;
  return { latitude: lat, longitude: lon };
}

function extractElevation(line) {
  if (!line) return null;
  let elevationPart = String(line);
  if (elevationPart.toLowerCase().includes("around")) {
    const parts = elevationPart.split(/around/i);
    elevationPart = parts[parts.length - 1];
  }
  const nums = elevationPart.match(/\b(?:\d{1,3}(?:,\d{3})+|\d{3,5})\b/g) || [];
  const cleanNums = [];
  for (const n of nums) {
    const val = parseInt(n.replace(/,/g, ""), 10);
    if (!isNaN(val) && val >= 100 && val <= 9000) {
      cleanNums.push(val);
    }
  }
  return cleanNums.length > 0 ? Math.max(...cleanNums) : null;
}

function allCoordinateLines(text) {
  const output = [];
  for (const line of splitLines(text)) {
    const coord = parseCoordinateFromLine(line);
    if (coord) {
      output.push({
        line: line,
        coordinate: coord,
        elevation: extractElevation(line)
      });
    }
  }
  return output;
}

function inferPackageCoordinates(text) {
  const points = allCoordinateLines(text);
  if (points.length === 0) {
    return { latitude: null, longitude: null };
  }
  const withElevation = points.filter(p => p.elevation !== null);
  if (withElevation.length > 0) {
    withElevation.sort((a, b) => b.elevation - a.elevation);
    return withElevation[0].coordinate;
  }
  return points[0].coordinate;
}

// LCS-based Similarity Ratio
function lcsLength(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}

function similarityRatio(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return 0.0;
  const l = lcsLength(s1, s2);
  return (2.0 * l) / (s1.length + s2.length);
}

function tripMatchName(tripSlug) {
  let value = normalizeKey(tripSlug);
  value = value.replace(/\bpackages?\b/gi, " ");
  value = value.replace(/\broute\b/gi, " ");
  value = value.replace(/\bplanner\b/gi, " ");
  value = value.replace(/\s+/g, " ").trim();
  return value;
}

function canonicalTrip(value) {
  if (!value) return null;
  const raw = String(value).trim();
  if (VALID_TRIPS.includes(raw)) return raw;

  const rawNorm = normalizeKey(raw);
  for (const trip of VALID_TRIPS) {
    if (rawNorm === normalizeKey(trip) || rawNorm === tripMatchName(trip)) {
      return trip;
    }
  }
  for (const [key, trip] of Object.entries(TRIP_ALIASES)) {
    if (normalizeKey(key) === rawNorm && VALID_TRIPS.includes(trip)) {
      return trip;
    }
  }
  return null;
}

function phraseGroupPresent(sourceNorm, phraseGroup) {
  return phraseGroup.every(phrase => sourceNorm.includes(normalizeKey(phrase)));
}

function extractDeclaredTrip(text) {
  if (!text) return null;
  const regex = /^\s*(?:trip|trips|valid\s*trip|matched\s*trip)\s*:\s*(.+?)\s*$/gim;
  let m;
  while ((m = regex.exec(text)) !== null) {
    const rawValue = m[1].trim();
    const parts = rawValue.split(/\s*,\s*|\s*\|\s*/);
    for (const part of parts) {
      const trip = canonicalTrip(part);
      if (trip) return trip;
    }
  }
  return null;
}

function tripTokenScore(tripSlug, titleNorm, textNorm) {
  const matchName = tripMatchName(tripSlug);
  const tokens = matchName.split(" ").filter(tok => tok.length > 2 && !TRIP_STOPWORDS.has(tok));
  if (tokens.length === 0) return 0;

  let score = 0;
  if (matchName && titleNorm.includes(matchName)) {
    score += 120 + matchName.length;
  }

  let titleTokenHits = 0;
  let textTokenHits = 0;

  for (const token of tokens) {
    const tokenRe = new RegExp(`(^|\\s)${escapeRegExp(token)}($|\\s)`);
    if (tokenRe.test(titleNorm)) {
      titleTokenHits++;
      score += 12;
    } else if (tokenRe.test(textNorm)) {
      textTokenHits++;
      score += 3;
    }
  }

  if (titleTokenHits === tokens.length) {
    score += 80;
  }

  const specificTerms = new Set([
    "heli", "helicopter", "jiri", "gokyo", "kongma", "cho", "renjo",
    "ama", "dablam", "island", "sleep", "budget", "luxury", "short",
    "road", "mardi", "khopra", "muldai", "tilicho", "poon", "ghorepani",
    "upper", "lower", "mustang", "dolpo", "rara", "khaptad", "ganja",
    "tashi", "lapcha", "gondogoro", "spantik", "laila", "pastore"
  ]);

  for (const token of tokens) {
    if (specificTerms.has(token)) {
      const tokenRe = new RegExp(`(^|\\s)${escapeRegExp(token)}($|\\s)`);
      if (tokenRe.test(titleNorm)) {
        score += 10;
      }
    }
  }

  if (titleTokenHits === 0 && textTokenHits > 0) {
    score -= 15;
  }

  return score;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function matchValidTrip(title, text) {
  const titleNorm = normalizeKey(title);
  const textNorm = normalizeKey(text);
  const combinedNorm = normalizeKey(`${title || ''} ${text || ''}`);

  const declared = extractDeclaredTrip(text);
  if (declared) return declared;

  for (const trip of VALID_TRIPS) {
    if (combinedNorm.includes(normalizeKey(trip))) {
      return trip;
    }
  }

  for (const [trip, phraseGroups] of TRIP_PRIORITY_RULES) {
    if (!VALID_TRIPS.includes(trip)) continue;
    if (phraseGroups.some(group => phraseGroupPresent(titleNorm, group))) {
      return trip;
    }
  }

  for (const [trip, phraseGroups] of TRIP_PRIORITY_RULES) {
    if (!VALID_TRIPS.includes(trip)) continue;
    if (phraseGroups.some(group => phraseGroupPresent(combinedNorm, group))) {
      return trip;
    }
  }

  for (const trip of VALID_TRIPS) {
    const tNorm = normalizeKey(trip);
    if (titleNorm && (titleNorm === tNorm || titleNorm === tripMatchName(trip))) {
      return trip;
    }
  }

  for (const [key, trip] of Object.entries(TRIP_ALIASES)) {
    if (VALID_TRIPS.includes(trip) && titleNorm.includes(normalizeKey(key))) {
      return trip;
    }
  }

  const scored = [];
  for (const trip of VALID_TRIPS) {
    const score = tripTokenScore(trip, titleNorm, combinedNorm);
    if (score > 0) {
      scored.push({ score, len: tripMatchName(trip).length, trip });
    }
  }

  if (scored.length > 0) {
    scored.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.len - a.len;
    });
    if (scored[0].score >= 35) {
      return scored[0].trip;
    }
  }

  let bestTrip = null;
  let bestScore = 0.0;
  for (const trip of VALID_TRIPS) {
    const base = tripMatchName(trip);
    const score = similarityRatio(titleNorm, base);
    if (score > bestScore) {
      bestScore = score;
      bestTrip = trip;
    }
  }

  if (bestScore >= 0.82) {
    return bestTrip;
  }

  return null;
}

function canonicalSubcategory(value) {
  if (!value) return null;
  const val = String(value).trim();
  if (VALID_SUBCATEGORIES.includes(val)) return val;
  return SUBCATEGORY_ALIASES[val] || null;
}

function canonicalDestination(value) {
  if (!value) return null;
  const val = String(value).trim();
  if (VALID_DESTINATIONS.includes(val)) return val;
  return DESTINATION_ALIASES[val] || null;
}

function containsKeyword(normalizedText, keyword) {
  const key = normalizeKey(keyword);
  if (!key) return false;
  const regex = new RegExp(`(^|\\s)${escapeRegExp(key)}($|\\s)`);
  return regex.test(normalizedText);
}

function inferDestinations(title, text) {
  const titleNorm = normalizeKey(title);
  const textNorm = normalizeKey(text);
  let matched = [];

  for (const dest of VALID_DESTINATIONS) {
    const destClean = dest.trim();
    const destNorm = normalizeKey(destClean);
    if (destNorm && titleNorm.includes(destNorm)) {
      matched.push(destClean);
    }
  }

  for (const [displayDest, keywords] of Object.entries(DESTINATION_KEYWORDS)) {
    const schemaDest = canonicalDestination(displayDest);
    if (!schemaDest || !VALID_DESTINATIONS.includes(schemaDest)) continue;
    if (keywords.some(k => containsKeyword(titleNorm, k) || containsKeyword(textNorm, k))) {
      matched.push(schemaDest);
    }
  }

  if (matched.includes("langtang-region") && matched.includes("langtang")) {
    matched = matched.filter(m => m !== "langtang");
  }

  return dedupePreserveOrder(matched);
}

function inferSubcategories(title, text) {
  const titleText = normalizeKey(title);
  const fullText = normalizeKey(`${title || ''} ${text || ''}`);
  const scores = {};

  const add = (category, points) => {
    const cat = canonicalSubcategory(category);
    if (cat && VALID_SUBCATEGORIES.includes(cat)) {
      scores[cat] = (scores[cat] || 0) + points;
    }
  };

  const hasAny = (keywords, source = fullText) => {
    return keywords.some(k => source.includes(normalizeKey(k)));
  };

  if (hasAny(["photo", "photography", "filming", "documentary", "camera", "nocturnal", "cinematic"], titleText)) {
    add("Photography, Filming & Permits", 15);
  }

  if (hasAny(["everest", "ebc", "khumbu"], titleText)) {
    add("Expeditions (7000-8000m)", 14);
    add("Mountain & Sunrise Escapes", 12);
    add("Classic & Short Treks", 5);
  }

  if (hasAny(["annapurna", "abc", "poon hill", "mardi himal", "khopra", "mohare", "muldai"], titleText)) {
    add("Expeditions (7000-8000m)", 11);
    add("Mountain & Sunrise Escapes", 13);
    add("Classic & Short Treks", 5);
  }

  if (hasAny(["expedition", "peak climbing", "island peak", "mera peak", "dhampus peak", "pachermo peak", "spantik", "k2", "nanga parbat", "gasherbrum", "yalung ri", "mount k2"], titleText)) {
    add("Expeditions (7000-8000m)", 15);
    add("Land & Vertical", 9);
  }

  if (hasAny(["bike", "biking", "mountain bike", "mtb", "cycling", "moto"], titleText)) {
    add("Bike & Moto", 15);
  }

  if (hasAny(["heli", "helicopter"], titleText)) {
    add("Heli Treks & Heli Returns", 15);
    add("Aerial & Sky", 7);
  }

  if (hasAny(["city tour", "bhaktapur", "patan", "kathmandu valley tour", "islamabad"], titleText)) {
    add("City Day Tours & Sightseeing", 15);
  }

  if (hasAny(["lake", "rara", "phoksundo", "gokyo", "tilicho", "panch pokhari", "gosaikunda", "tsho rolpa", "zanzibar"], titleText)) {
    add("Lakes & Hill Stations", 14);
  }

  if (hasAny(["yoga", "retreat"], titleText)) {
    add("Yoga Retreats", 15);
    add("Mindful Trekking & Nature Immersion", 7);
  }

  if (hasAny(["short", "weekend", "day hike", "easy"], titleText)) {
    add("Weekend & Short Breaks", 12);
    add("Easy Treks & Nature Walks", 7);
  }

  const photoSignalCount = ["photography", "filming", "documentary", "camera", "cinematic", "astrophotography", "nocturnal"]
    .reduce((acc, k) => acc + (fullText.split(normalizeKey(k)).length - 1), 0);

  if (hasAny(["film permit", "drone permit", "visual storytelling", "landscape photography", "night photography", "sunrise photography", "photo tour", "photo trek"]) || photoSignalCount >= 2) {
    add("Photography, Filming & Permits", 12);
  }

  if (hasAny(["expedition", "peak climbing", "summit attempt", "summit push", "fixed rope", "base camp rotation", "high camp", "camp i", "camp ii", "camp iii", "camp iv", "7000", "8000", "8611", "8126", "8167", "nanga parbat", "spantik", "gasherbrum", "k2 expedition", "mount k2", "technical climbing", "climbing permit"])) {
    add("Expeditions (7000-8000m)", 11);
    add("Land & Vertical", 6);
  }

  if (hasAny(["sunrise", "viewpoint", "view point", "panorama", "poon hill", "mohare danda", "khopra ridge", "muldai viewpoint", "muldai view point", "mardi himal", "everest panorama", "annapurna panorama", "mountain view", "himalayan view", "ridge view", "dawn view", "kala patthar"])) {
    add("Mountain & Sunrise Escapes", 10);
  }

  if (hasAny(["trek", "trekking", "base camp", "trail", "pass", "valley", "circuit", "sanctuary", "traverse", "heritage trek", "gokyo", "langtang", "manaslu", "annapurna", "dolpo", "mustang", "kanchenjunga", "makalu", "rolwaling", "khumbu"])) {
    add("Classic & Short Treks", 6);
  }

  if (hasAny(["mindful", "pacing", "acclimatization", "nature immersion", "awareness", "mental readiness", "slow travel", "responsible", "low impact", "trail discipline", "culture interpretation", "etiquette", "sherpa culture", "buddhist etiquette", "reflection", "learning", "altitude education", "health awareness", "guide judgment", "safety communication"])) {
    add("Mindful Trekking & Nature Immersion", 8);
  }

  if (hasAny(["bike", "biking", "mountain bike", "mountain biking", "mtb", "cycling", "cycle", "moto", "motorbike", "off road ride", "offroad"])) {
    add("Bike & Moto", 12);
  }

  if (hasAny(["heli trek", "heli return", "helicopter return", "everest base camp heli", "flightseeing", "aerial return", "fly out by helicopter", "fly back by helicopter", "helicopter ride", "helicopter tour"])) {
    add("Heli Treks & Heli Returns", 12);
    add("Aerial & Sky", 7);
  }

  if (hasAny(["paragliding", "ultralight", "flightseeing", "aerial tour", "aerial adventure", "sky activity", "helicopter ride", "helicopter tour"])) {
    add("Aerial & Sky", 9);
  }

  if (hasAny(["city tour", "sightseeing", "heritage", "temple", "living culture", "durbar square", "monastery visit", "cultural tour", "old city", "bhaktapur", "patan", "kathmandu valley tour", "islamabad city", "janakpur", "lumbini", "stupa", "boudhanath", "swayambhunath", "pashupatinath", "palace", "museum"])) {
    add("City Day Tours & Sightseeing", 10);
  }

  if (hasAny(["lake", "rara", "phoksundo", "gokyo", "tilicho", "panch pokhari", "ice lake", "kapuche", "khaptad", "hill station", "zanzibar", "beach", "island", "phewa", "tsho rolpa", "gosaikunda"])) {
    add("Lakes & Hill Stations", 10);
  }

  if (hasAny(["yoga", "yoga trek", "retreat", "wellness retreat", "breathing practice", "mind body", "yoga session"])) {
    add("Yoga Retreats", 10);
    add("Mindful Trekking & Nature Immersion", 5);
  }

  if (hasAny(["meditation", "vipassana", "silent retreat", "mindfulness practice", "monastic stay", "inner stillness", "breath awareness"])) {
    add("Meditation & Vipassana", 10);
    add("Mindful Trekking & Nature Immersion", 5);
  }

  if (hasAny(["ayurveda", "ayurvedic", "panchakarma", "detox", "herbal treatment", "spa therapy", "wellness detox"])) {
    add("Ayurveda & Detox (Panchakarma)", 10);
  }

  if (hasAny(["short", "weekend", "day hike", "short trek", "easy escape", "quick escape", "nagarkot", "dhampus", "ghandruk", "namche bazaar trek", "chisapani", "muldai", "pikey peak", "ama yangri"])) {
    add("Weekend & Short Breaks", 9);
  }

  if (hasAny(["easy trek", "easy walk", "nature walk", "beginner friendly", "gentle trail", "low altitude", "family friendly", "soft trek", "village walk", "forest walk", "first time trekker", "beginner preparation"])) {
    add("Easy Treks & Nature Walks", 9);
  }

  if (hasAny(["la pass", "high pass", "three passes", "ganja la", "tashi lapcha", "mesokanto la", "gondogoro la", "technical pass", "technical climbing", "scramble", "vertical route", "glacier crossing", "ice climbing", "roped", "crevasse", "high route", "mountain pass", "peak climbing", "summit attempt"])) {
    add("Land & Vertical", 9);
  }

  if (hasAny(["canyon", "canyoning", "waterfall", "rafting", "river", "kayak", "kayaking", "water activity", "whitewater", "white water"])) {
    add("Water & Canyon", 9);
  }

  if (hasAny(["extension", "add on", "multi country", "multi-country", "zanzibar extension", "cross border", "combine with", "plus upper mustang", "dolpo mustang traverse", "dolpo rara traverse", "nar phu to upper mustang"])) {
    add("Extensions & Multi-Country", 9);
  }

  const ordered = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const result = [];
  for (const [category, score] of ordered) {
    if (score >= 6 && !result.includes(category)) {
      result.push(category);
    }
  }

  return result.slice(0, 3);
}

function inferLocationFields(destinations, text) {
  const location = { country: null, province: null, district: null, cityOrVillage: null };
  const priority = destinations.filter(d => d !== "kathmandu").concat(destinations.includes("kathmandu") ? ["kathmandu"] : []);

  for (const dest of priority) {
    for (const [ruleDest, rule] of LOCATION_RULES) {
      const ruleSlug = canonicalDestination(ruleDest);
      if (normalizeKey(dest) === normalizeKey(ruleDest) || (ruleSlug && dest === ruleSlug)) {
        Object.assign(location, rule);
        return location;
      }
    }
  }

  const t = normalizeKey(text);
  if (["nepal", "kathmandu", "everest", "annapurna", "langtang", "manaslu"].some(k => t.includes(k))) {
    location.country = "Nepal";
  } else if (["pakistan", "islamabad", "gilgit", "skardu", "k2"].some(k => t.includes(k))) {
    location.country = "Pakistan";
  } else if (["tanzania", "zanzibar", "arusha"].some(k => t.includes(k))) {
    location.country = "Tanzania";
  }

  return location;
}

function dedupePreserveOrder(items) {
  const output = [];
  const seen = new Set();
  for (const item of items) {
    if (item === null || item === undefined) continue;
    const key = normalizeKey(item);
    if (key && !seen.has(key)) {
      output.push(item);
      seen.add(key);
    }
  }
  return output;
}

// Itinerary Parsing
function parsePlaceName(line) {
  if (!line) return null;
  let value = line.replace(/^\s*(?:Start|End|Via)\s*:\s*/i, "").trim();
  value = value.split("—")[0].split("-")[0].trim();
  value = value.replace(/,\s*depending.*$/i, "").trim();
  return value || null;
}

function getDayMetadata(lines) {
  const data = { start: null, end: null, via: [], duration: null, transport: null, accommodation: null, meals: null, note: null };
  const metadataIndices = new Set();
  let lastLabel = null;

  lines.forEach((line, i) => {
    const m = /^(Start|End|Via|Duration|Transport|Accommodation|Meals|Note)\s*:\s*(.*)$/i.exec(line);
    if (m) {
      const label = m[1].toLowerCase();
      const value = m[2].trim();
      metadataIndices.add(i);
      lastLabel = label;
      if (label === "via") {
        data.via.push(value);
      } else {
        data[label] = value;
      }
    } else if (lastLabel && ["start", "end", "via"].includes(lastLabel) && /\b(source|reference|operation|point|used|flight)\b/i.test(line)) {
      metadataIndices.add(i);
      if (lastLabel === "via" && data.via.length > 0) {
        data.via[data.via.length - 1] = (data.via[data.via.length - 1] + " " + line).trim();
      } else if (data[lastLabel]) {
        data[lastLabel] = (data[lastLabel] + " " + line).trim();
      }
    } else {
      lastLabel = null;
    }
  });

  return { data, metadataIndices };
}

function parseItineraries(journeyText) {
  const text = cleanText(journeyText);
  if (!text) return [];

  const parts = text.split(/(?=^\s*Day\s+\d+\s*:)/im);
  const dayBlocks = parts.map(p => p.trim()).filter(p => /^\s*Day\s+\d+\s*:/i.test(p));
  const itineraries = [];

  for (const block of dayBlocks) {
    const header = /^\s*Day\s+(\d+)\s*:\s*(.+?)\s*$/im.exec(block);
    if (!header) continue;

    const dayNumber = parseInt(header[1], 10);
    const title = header[2].trim();
    const lines = splitLines(block);
    const { data, metadataIndices } = getDayMetadata(lines);

    const startLine = data.start || "";
    const endLine = data.end || "";
    const viaLines = data.via || [];
    const durationLine = data.duration || "";
    const transportLine = data.transport || "";
    const accommodationLine = data.accommodation || "";
    const mealsLine = data.meals || "";

    const descLines = [];
    lines.forEach((line, i) => {
      if (i === 0 || metadataIndices.has(i)) return;
      if (/^(Start|End|Via|Duration|Transport|Accommodation|Meals|Note)\s*:/i.test(line)) return;
      descLines.push(line);
    });
    const description = sectionAsParagraphs(descLines.join("\n")) || null;

    let geopoint = parseCoordinateFromLine(endLine);
    if (!geopoint && viaLines.length > 0) {
      for (let j = viaLines.length - 1; j >= 0; j--) {
        geopoint = parseCoordinateFromLine(viaLines[j]);
        if (geopoint) break;
      }
    }
    if (!geopoint) {
      geopoint = parseCoordinateFromLine(startLine);
    }

    const elevations = [];
    [startLine, endLine, ...viaLines].forEach(line => {
      const e = extractElevation(line);
      if (e !== null) elevations.push(e);
    });
    const elevation = elevations.length > 0 ? Math.max(...elevations) : null;

    const activities = [];
    if (durationLine) activities.push(durationLine);
    if (transportLine) activities.push(transportLine);
    if (viaLines.length > 0) {
      const viaNames = viaLines.map(parsePlaceName).filter(Boolean);
      if (viaNames.length > 0) {
        activities.push("Via: " + viaNames.join(", "));
      }
    }
    if (activities.length === 0) {
      activities.push(title);
    }

    const dayObj = {
      dayNumber,
      title,
      caption: `Day ${dayNumber}: ${title}`,
      mapImageUrl: null,
      elevation,
      description,
      activities,
      meals: mealsLine || null,
      accommodation: normalizeAccommodationEnum(accommodationLine),
      geopoint,
    };

    itineraries.push(dayObj);
  }

  if (itineraries.length > 0) {
    for (const item of itineraries) {
      delete item.note;
      delete item.roles;
    }
    if (itineraries.length === 1) {
      itineraries[0].roles = ["final_destination"];
    } else {
      itineraries[0].roles = ["starting_point"];
      itineraries[itineraries.length - 1].roles = ["final_destination"];
    }
  }

  return itineraries;
}

function splitPackageDocuments(rawText) {
  const text = cleanText(rawText);
  const regex = /^\s*Trip Overview\s*$/gim;
  let match;
  const starts = [];
  while ((match = regex.exec(text)) !== null) {
    starts.push(match.index);
  }
  if (starts.length <= 1) {
    return [text];
  }
  const parts = [];
  for (let i = 0; i < starts.length; i++) {
    const start = starts[i];
    const end = (i + 1 < starts.length) ? starts[i + 1] : text.length;
    const part = text.substring(start, end).trim();
    if (part) {
      parts.push(part);
    }
  }
  return parts;
}

function keepOnlyValidSchemaValues(values, validValues) {
  if (!values) return [];
  const list = Array.isArray(values) ? values : [values];
  const validSet = new Set(validValues);
  const output = [];
  const seen = new Set();

  for (const val of list) {
    if (validSet.has(val) && !seen.has(val)) {
      output.push(val);
      seen.add(val);
    }
  }
  return output;
}

function keepValidScalar(value, validValues, fallback) {
  return validValues.includes(value) ? value : fallback;
}

function normalizeItineraryText(value) {
  return String(value || "").trim().replace(/\s+/g, " ").toLowerCase();
}

function dedupeActivityList(activities) {
  if (!Array.isArray(activities)) return null;
  const seen = new Set();
  const output = [];
  for (const activity of activities) {
    const cleanActivity = String(activity || "").trim();
    const key = normalizeItineraryText(cleanActivity);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    output.push(cleanActivity);
  }
  return output.length > 0 ? output : null;
}

function itineraryDedupeKey(item) {
  return [
    item.dayNumber,
    normalizeItineraryText(item.title),
    normalizeItineraryText(item.caption),
    normalizeItineraryText(item.description),
    normalizeItineraryText(item.start),
    normalizeItineraryText(item.end)
  ].join("|");
}

function itineraryCompletenessScore(item) {
  let score = 0;
  if (normalizeItineraryText(item.description)) score += 100;
  if (Number.isFinite(Number(item.elevation))) score += 20;
  if (item.geopoint && typeof item.geopoint === "object") score += 10;
  if (normalizeItineraryText(item.meals)) score += 5;
  if (normalizeItineraryText(item.accommodation)) score += 5;
  if (Array.isArray(item.activities)) score += item.activities.length;
  if (normalizeItineraryText(item.title)) score += 1;
  return score;
}

function mergeItineraryItems(existing, incoming) {
  const keepIncoming = itineraryCompletenessScore(incoming) > itineraryCompletenessScore(existing);
  const base = keepIncoming ? { ...incoming } : { ...existing };
  const other = keepIncoming ? existing : incoming;

  base.activities = dedupeActivityList(base.activities) || dedupeActivityList(other.activities);

  return base;
}

function normalizeItineraries(itineraries) {
  if (!Array.isArray(itineraries)) return null;

  const seen = new Set();
  const byDayNumber = new Map();
  const noDayNumber = [];
  for (const item of itineraries) {
    if (!item || typeof item !== "object") continue;

    const normalizedItem = { ...item };
    normalizedItem.activities = dedupeActivityList(normalizedItem.activities);
    const dayNumber = Number(normalizedItem.dayNumber);

    if (Number.isInteger(dayNumber) && dayNumber > 0) {
      normalizedItem.dayNumber = dayNumber;
      const existing = byDayNumber.get(dayNumber);
      byDayNumber.set(dayNumber, existing ? mergeItineraryItems(existing, normalizedItem) : normalizedItem);
      continue;
    }

    const key = itineraryDedupeKey(normalizedItem);
    if (!seen.has(key)) {
      seen.add(key);
      noDayNumber.push(normalizedItem);
    }
  }

  const output = [
    ...Array.from(byDayNumber.values()).sort((a, b) => a.dayNumber - b.dayNumber),
    ...noDayNumber
  ];

  if (output.length === 0) return null;
  for (const item of output) {
    delete item.roles;
  }
  if (output.length === 1) {
    output[0].roles = ["final_destination"];
  } else {
    output[0].roles = ["starting_point"];
    output[output.length - 1].roles = ["final_destination"];
  }
  return output;
}

function inferBudgetCategory(...sources) {
  const text = sources.filter(Boolean).join(" ").toLowerCase();
  if (/\b(luxury|premium|vip|deluxe|5-star|five star|boutique|concierge)\b/.test(text)) {
    return "luxury";
  }
  if (/\b(budget|affordable|economy|cheap|low cost|value)\b/.test(text)) {
    return "budget";
  }
  return "midrange";
}

function inferServiceTier(...sources) {
  const text = sources.filter(Boolean).join(" ").toLowerCase();
  if (/\b(luxury|premium|vip|deluxe|5-star|five star|boutique|concierge|private)\b/.test(text)) {
    return "premium";
  }
  if (/\b(budget|starter|basic|economy|affordable)\b/.test(text)) {
    return "starter";
  }
  return "standard";
}

function inferBadgeValue(...sources) {
  const text = sources.filter(Boolean).join(" ").toLowerCase();
  if (/\b(iconic|classic|signature|bucket list|world famous)\b/.test(text)) return "iconic";
  if (/\b(top rated|top-rated|best seller|bestseller|popular|highly rated)\b/.test(text)) return "top_rated";
  if (/\b(reliable|established|proven|trusted)\b/.test(text)) return "reliable";
  if (/\b(promising|new|emerging|upcoming)\b/.test(text)) return "promising";
  return "listed";
}

function enforceStrictSchemaChoices(packageObj) {
  packageObj.trips = keepOnlyValidSchemaValues(packageObj.trips, VALID_TRIPS);
  if (packageObj.trips.length === 0) packageObj.trips = null;

  packageObj.subcategories = keepOnlyValidSchemaValues(packageObj.subcategories, VALID_SUBCATEGORIES);
  if (packageObj.subcategories.length === 0) packageObj.subcategories = null;

  packageObj.destinations = keepOnlyValidSchemaValues(packageObj.destinations, VALID_DESTINATIONS);
  if (packageObj.destinations.length === 0) packageObj.destinations = null;

  packageObj.budget = keepValidScalar(packageObj.budget, VALID_BUDGETS, inferBudgetCategory(
    packageObj.name,
    packageObj.shortName,
    packageObj.description,
    ...(packageObj.trips || []),
    ...(packageObj.subcategories || []),
    ...(packageObj.tags || [])
  ));
  packageObj.badge = keepValidScalar(packageObj.badge, VALID_BADGES, "listed");
  packageObj.tier = keepValidScalar(packageObj.tier, VALID_TIERS, "standard");
  packageObj.pricePerPerson = Number.isFinite(Number(packageObj.pricePerPerson)) ? String(Number(packageObj.pricePerPerson)) : "0";
  packageObj.currency = packageObj.currency || "USD";
  packageObj.isActive = packageObj.isActive === false ? false : true;
  packageObj.itineraries = normalizeItineraries(packageObj.itineraries);

  return packageObj;
}

function cleanPackage(obj) {
  const keepNullFields = new Set([
    "departureDates", "country", "province", "district", "cityOrVillage",
    "latitude", "longitude", "subcategories", "trips", "destinations", "seasons",
    "mapImageUrl", "meals", "geopoint", "accommodation"
  ]);

  if (Array.isArray(obj)) {
    return obj.map(cleanPackage);
  }

  if (obj !== null && typeof obj === 'object') {
    const cleaned = {};
    for (const [key, value] of Object.entries(obj)) {
      const parsedVal = cleanPackage(value);
      const isEmpty = parsedVal === null || parsedVal === undefined || parsedVal === "" || (Array.isArray(parsedVal) && parsedVal.length === 0) || (typeof parsedVal === 'object' && Object.keys(parsedVal).length === 0);

      if (isEmpty && !keepNullFields.has(key)) {
        continue;
      }
      cleaned[key] = isEmpty ? null : parsedVal;
    }
    return cleaned;
  }

  return obj;
}

function extractPackageFields(text) {
  const cleaned = cleanText(text);

  const tripOverview = extractSection(cleaned, "Trip Overview");
  const invitation = extractSection(cleaned, "The Invitation");
  const experiences = extractSection(cleaned, "Experiences");
  const journey = extractSection(cleaned, "The Journey");
  const included = extractSection(cleaned, "What's Included");
  const exclusions = extractSection(cleaned, "What You'll Need to Arrange");
  const equipment = extractSection(cleaned, "Equipment");
  const safety = extractSection(cleaned, "Safety & Guide Judgment");
  const physicalPrep = extractSection(cleaned, "Physical Preparation");

  let name = findFirstLabelValue(tripOverview || cleaned, ["Title", "Package Title", "Name"]);
  if (!name) {
    for (const line of splitLines(cleaned)) {
      if (!SECTION_HEADINGS.some(h => normalizeKey(line) === normalizeKey(h)) && !line.includes(":")) {
        name = line.trim();
        break;
      }
    }
  }

  const durationText = findFirstLabelValue(tripOverview || cleaned, ["Duration", "Trip Duration"]);
  const duration = extractDuration(durationText);

  const difficultyText = findFirstLabelValue(tripOverview || cleaned, ["Difficulty", "Difficulty Level"]);
  const difficulty = inferDifficulty(difficultyText || cleaned);

  const seasonText = findFirstLabelValue(tripOverview || cleaned, ["Best Seasons", "Best Season", "Season"]);
  const seasons = inferSeasons(seasonText || cleaned);

  const tripValue = matchValidTrip(name, cleaned);
  const trips = keepOnlyValidSchemaValues(tripValue ? [tripValue] : [], VALID_TRIPS);
  const destinations = keepOnlyValidSchemaValues(inferDestinations(name, cleaned), VALID_DESTINATIONS);
  const subcategories = keepOnlyValidSchemaValues(inferSubcategories(name, cleaned), VALID_SUBCATEGORIES);
  const loc = inferLocationFields(destinations, cleaned);
  const coords = inferPackageCoordinates(cleaned);

  const highlights = mergeBullets(experiences);
  const inclusions = mergeBullets(included);
  const exclusionList = mergeBullets(exclusions);
  const equipmentList = mergeBullets(equipment);
  const safetyList = mergeBullets(safety);
  const physicalPrepList = mergeBullets(physicalPrep);
  const itineraries = parseItineraries(journey || cleaned);

  let packageObj = {
    name: name || null,
    shortName: makeShortName(name),
    subcategories: subcategories.length > 0 ? subcategories : null,
    trips: trips.length > 0 ? trips : null,
    destinations: destinations.length > 0 ? destinations : null,
    isActive: null,
    country: loc.country,
    province: loc.province,
    district: loc.district,
    cityOrVillage: loc.cityOrVillage,
    latitude: coords.latitude,
    longitude: coords.longitude,
    badge: null,
    tier: null,
    duration: duration,
    description: sectionAsParagraphs(invitation) || null,
    paymentPolicy: null,
    difficultyLevel: difficulty,
    pricePerPerson: null,
    currency: null,
    tags: null,
    highlights: highlights.length > 0 ? highlights : null,
    inclusions: inclusions.length > 0 ? inclusions : null,
    exclusions: exclusionList.length > 0 ? exclusionList : null,
    equipment: equipmentList.length > 0 ? equipmentList : null,
    safety: safetyList.length > 0 ? safetyList : null,
    physicalPrepAbout: physicalPrepList.length > 0 ? physicalPrepList.join(" ") : null,
    budget: null,
    seasons: seasons.length > 0 ? seasons : null,
    departureDates: resolveDepartureDates(null, seasons),
    itineraries: itineraries.length > 0 ? itineraries : null,
  };

  const tags = [];
  if (packageObj.shortName) tags.push(packageObj.shortName.replace(/_/g, " "));
  if (packageObj.difficultyLevel) tags.push(packageObj.difficultyLevel.replace(/_/g, " "));
  [packageObj.destinations, packageObj.trips, packageObj.subcategories, packageObj.seasons].forEach(seq => {
    if (Array.isArray(seq)) {
      seq.forEach(x => {
        if (x) tags.push(String(x).replace(/[-_]/g, " "));
      });
    }
  });

  const titleCase = str => str.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  packageObj.tags = tags.length > 0 ? dedupePreserveOrder(tags.map(titleCase)).slice(0, 25) : null;

  packageObj = enforceStrictSchemaChoices(packageObj);
  return cleanPackage(packageObj);
}

function extractPackagesFromText(rawText) {
  const parts = splitPackageDocuments(rawText);
  return parts.map(part => extractPackageFields(part));
}

// Export functions for browser
window.TravelParser = {
  VALID_SUBCATEGORIES,
  VALID_TRIPS,
  VALID_DESTINATIONS,
  VALID_SEASONS,
  VALID_DIFFICULTIES,
  VALID_BUDGETS,
  VALID_TIERS,
  VALID_BADGES,
  extractPackagesFromText,
  cleanText,
  normalizeKey,
  makeShortName,
  resolveDepartureDates,
  enforceStrictSchemaChoices,
  cleanPackage
};
