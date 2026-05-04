const categories = [
  {
    id: "residential",
    name: "Residential Life",
    zh: "Residential Life",
    color: "#e76b35",
    assets: ["Convenience Store", "Family Housing Unit", "Single Apartment", "Cafe", "Community Dining Hall", "Restaurant", "Community Activity Center", "Pharmacy", "Bank", "Barbershop", "Custom Asset"],
  },
  {
    id: "leisure",
    name: "Leisure and Entertainment",
    zh: "Leisure and Entertainment",
    color: "#2f9d7e",
    assets: ["Park", "Open Activity Area", "Tai Chi Plaza", "Outdoor Gathering Space", "Sports Area", "Theater", "Recreation Center", "Stress Relief Space", "Custom Asset"],
  },
  {
    id: "governance",
    name: "Government Governance and Public Services",
    zh: "Governance and Public Services",
    color: "#2d8fd7",
    assets: ["Community Council Center", "Administration Center", "Public Service Center", "Information Service Center", "Resource Dispatch Center", "Community Meeting Space", "Conflict Mediation Space", "Custom Asset"],
  },
  {
    id: "education",
    name: "Education and Culture",
    zh: "Education and Culture",
    color: "#7d72d4",
    assets: ["School", "Kindergarten", "Training Center", "Library", "Community Learning Center", "Museum", "Art Gallery", "Cultural Activity Center", "Performing Arts Center", "Custom Asset"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    zh: "Healthcare",
    color: "#de5b79",
    assets: ["Medical Center", "Clinic", "Counseling Room", "Rehabilitation Space", "Health Monitoring Center", "Quiet Healing Space", "Stress Support Area", "Custom Asset"],
  },
  {
    id: "security",
    name: "Security and Protection",
    zh: "Security and Protection",
    color: "#f3b94e",
    assets: ["Emergency Center", "Safety Station", "Shelter Pod", "Protective Facility", "Emergency Response Space", "Security Monitoring Station", "Custom Asset"],
  },
  {
    id: "transport",
    name: "Transportation and Communications",
    zh: "Transportation and Communications",
    color: "#42a9c6",
    assets: ["Road", "Pedestrian Corridor", "Airtight Connector", "Rover Docking Area", "Transport Center", "Communication Tower", "Communication Center", "Landing Platform", "Custom Asset"],
  },
  {
    id: "production",
    name: "Production and Resource Supply",
    zh: "Production and Resource Supply",
    color: "#6c9b3d",
    assets: ["Greenhouse", "Agriculture Module", "Water Recycling Center", "Energy Station", "Resource Processing Station", "Maintenance Center", "Factory", "3D Printing Construction Center", "Supply Storage Center", "Custom Asset"],
  },
];

const people = [
  {
    name: "Zhang Ming",
    meta: "China · Chemical Engineer · Married, with a 3-year-old child",
    color: "#e76b35",
    needs: ["Needs childcare support", "Enjoys Tai Chi and needs open activity space"],
    insight: "Think about the distance between housing, childcare, and open activity spaces.",
  },
  {
    name: "Amara Diallo",
    meta: "Senegal · Doctor · Muslim, single",
    color: "#2f9d7e",
    needs: ["Needs a prayer space oriented toward Mecca", "Needs a private dining area during fasting periods"],
    insight: "Think about how cultural respect, food arrangements, and quiet spaces can be visible in the design.",
  },
  {
    name: "Elena Ivanova",
    meta: "Russia · Retired Physicist · Age 65",
    color: "#7d72d4",
    needs: ["Needs accessible facilities", "Prefers a quiet reading space"],
    insight: "Think about road slope, movement convenience, and the location of reading spaces.",
  },
  {
    name: "Carlos Mendez",
    meta: "Mexico · Agricultural Engineer · Married, with 3 children",
    color: "#f3b94e",
    needs: ["Needs a large family housing unit", "Values outdoor gathering spaces culturally"],
    insight: "Think about the relationship between large families, agriculture facilities, and shared gathering spaces.",
  },
  {
    name: "Priya Singh",
    meta: "India · Software Engineer · Vegetarian",
    color: "#42a9c6",
    needs: ["Needs a dedicated vegetarian kitchen area", "Practices meditation and needs quiet space"],
    insight: "Think about how food needs, focused work, and mental relaxation spaces can work together.",
  },
  {
    name: "James Okafor",
    meta: "Nigeria · Educator · Christian",
    color: "#2d8fd7",
    needs: ["Needs a chapel", "Wants to help build a multilingual school"],
    insight: "Think about how education, culture, and faith spaces can support fair coexistence.",
  },
  {
    name: "Yuki Tanaka",
    meta: "Japan · Robotics Engineer · Single",
    color: "#6c9b3d",
    needs: ["Enjoys solitude", "Needs a small single apartment", "Values greenery and natural scenery"],
    insight: "Think about the balance between single housing, green landscapes, and work facilities.",
  },
  {
    name: "Sophie Martin",
    meta: "France · Counselor",
    color: "#de5b79",
    needs: ["Needs private counseling rooms", "Emphasizes the importance of mental health spaces and stress relief areas"],
    insight: "Think about whether privacy, mental health, and stress relief spaces are sufficient.",
  },
];

const steps = [
  "Review the mission: design a Mars habitat with a total area of 1000 square kilometers",
  "Review the 8 representative resident cards and understand real needs",
  "Set your own drawing scale",
  "Create your own functional zones",
  "Choose buildings and facilities from the 8 social function asset categories",
  "Label the actual area of each building on the map",
  "Enter each social function's area and percentage",
  "Write a design reflection about resource allocation, fairness, inclusion, and community life",
  "Enter presentation mode and share with the class",
];

const CANVAS_WIDTH = 1440;
const CANVAS_HEIGHT = 900;
const GRID = {
  x: 80,
  y: 50,
  rows: 25,
  cell: 32,
  height: 800,
};

const levelGuides = {
  level1: "Level 1: Starter Planner. Focus on entering the scale, placing key facilities, and manually recording actual building areas.",
  level2: "Level 2: Independent Designer. Create complete functional zones, enter area and percentage records for all 8 categories, and explain your resource allocation choices.",
  level3: "Level 3: Challenge Engineer. In addition to a complete design, explain fairness, inclusion, mental health, cultural needs, and resource trade-offs.",
};

const tourSteps = [
  {
    target: "#stepList",
    title: "Step 1: Review the Mission",
    text: "Welcome to the Mars Habitat Design Platform. First, look at the Learning Flow. Your mission is to plan a Mars habitat with a total area of 1000 square kilometers. The platform gives you tools, but the math and design decisions are yours.",
    prepare: () => document.querySelector('[data-tab="mission"]').click(),
  },
  {
    target: ".people-intro h3",
    title: "Step 2: Review Population Needs",
    text: "First, let us review the population needs. Click the Population Needs area. You will see the needs of 8 Mars residents. Your design should consider how they can live fairly and comfortably.",
    prepare: () => document.querySelector('[data-tab="people"]').click(),
  },
  {
    target: ".person-card:first-child",
    title: "Step 3: Open a Resident Card",
    text: "Now click Zhang Ming's card. When the card opens, you will see his space needs and design ideas. You can view the other residents in the same way.",
    prepare: () => document.querySelector('[data-tab="people"]').click(),
  },
  {
    target: "#scaleModule",
    title: "Step 4: Set the Scale",
    text: "Next, go to Math Records. Enter your own scale here, such as: on the map, 1 cm = ____ km in real life. The platform will not calculate conversions for you.",
    prepare: () => document.querySelector('[data-tab="math"]').click(),
  },
  {
    target: "#gridInfoText",
    title: "Step 5: Understand the Design Area",
    text: "The design area is fixed at 40 × 25 grid squares. Each small square has a 1 cm side length on the map. Use it as your planning drawing.",
    prepare: () => document.querySelector('[data-tab="math"]').click(),
  },
  {
    target: "#zoneToolGroup",
    title: "Step 6: Draw Functional Zones",
    text: "Click Functional Zone Planning in the bottom toolbar. Choose Rectangle Zone, Circle Zone, or Irregular Zone, then draw on the grid. There is no fixed answer. You plan the position, shape, and size.",
  },
  {
    target: "#selectionCard",
    title: "Step 7: Edit a Functional Zone",
    text: "After drawing a zone, click it to keep editing. You can change its name, choose a social function, enter the actual area, move it, resize it, rotate it, and delete it. The area will appear on the design map.",
    prepare: () => ensureTourZoneSample(),
  },
  {
    target: ".library-panel",
    title: "Step 8: Add Facility Icons",
    text: "Now add facilities from the 8 social function categories on the left. Each category has different icons and a Custom Asset option. After placing an asset, you can rename it and choose its function.",
  },
  {
    target: ".tool-dock",
    title: "Step 9: Add Map Information",
    text: "Finally, add information to help others read your map. You can add a habitat name, scale, legend, compass note, and short design explanation.",
  },
  {
    target: "#saveBtn",
    title: "Step 10: Save or Submit Your Work",
    text: "Great work. Check your scale, zones, facility icons, and map information, then save your work and prepare to introduce your Mars habitat.",
  },
];

const state = {
  activeTool: "select",
  pendingAsset: null,
  selectedId: null,
  objects: [],
  annotations: [],
  zones: [],
  paths: [],
  allocation: {},
  gridCols: 40,
  scaleRatio: "",
  scaleKm: "",
  teamName: "",
  difficulty: "level2",
  currentStep: 0,
  reflections: {
    resourceReason: "",
    equityReason: "",
    lifeReason: "",
  },
  view: { zoom: 0.62, panX: 0, panY: 0 },
  layers: { map: true, grid: true, buildings: true, zones: true, labels: true },
};

const legacyText = {
  "\u4fbf\u5229\u5e97": "Convenience Store",
  "\u5bb6\u5ead\u4f4f\u5b85\u5355\u5143": "Family Housing Unit",
  "\u5355\u4eba\u516c\u5bd3": "Single Apartment",
  "\u5496\u5561\u5385": "Cafe",
  "\u516c\u5171\u98df\u5802": "Community Dining Hall",
  "\u9910\u5385": "Restaurant",
  "\u793e\u533a\u6d3b\u52a8\u4e2d\u5fc3": "Community Activity Center",
  "\u836f\u5e97": "Pharmacy",
  "\u94f6\u884c": "Bank",
  "\u7406\u53d1\u5e97": "Barbershop",
  "\u81ea\u5b9a\u4e49\u7d20\u6750": "Custom Asset",
  "\u516c\u56ed": "Park",
  "\u5f00\u9614\u6d3b\u52a8\u533a": "Open Activity Area",
  "\u592a\u6781\u6d3b\u52a8\u7a7a\u5730": "Tai Chi Plaza",
  "\u6237\u5916\u805a\u4f1a\u7a7a\u95f4": "Outdoor Gathering Space",
  "\u8fd0\u52a8\u533a": "Sports Area",
  "\u5267\u573a": "Theater",
  "\u4f11\u95f2\u4e2d\u5fc3": "Recreation Center",
  "\u51cf\u538b\u7a7a\u95f4": "Stress Relief Space",
  "\u793e\u533a\u8bae\u4e8b\u4e2d\u5fc3": "Community Council Center",
  "\u884c\u653f\u4e2d\u5fc3": "Administration Center",
  "\u516c\u5171\u670d\u52a1\u4e2d\u5fc3": "Public Service Center",
  "\u4fe1\u606f\u670d\u52a1\u4e2d\u5fc3": "Information Service Center",
  "\u8d44\u6e90\u8c03\u5ea6\u4e2d\u5fc3": "Resource Dispatch Center",
  "\u793e\u533a\u4f1a\u8bae\u7a7a\u95f4": "Community Meeting Space",
  "\u7ea0\u7eb7\u534f\u8c03\u7a7a\u95f4": "Conflict Mediation Space",
  "\u5b66\u6821": "School",
  "\u5e7c\u513f\u56ed": "Kindergarten",
  "\u57f9\u8bad\u4e2d\u5fc3": "Training Center",
  "\u56fe\u4e66\u9986": "Library",
  "\u793e\u533a\u5b66\u4e60\u4e2d\u5fc3": "Community Learning Center",
  "\u535a\u7269\u9986": "Museum",
  "\u7f8e\u672f\u9986": "Art Gallery",
  "\u6587\u5316\u6d3b\u52a8\u4e2d\u5fc3": "Cultural Activity Center",
  "\u8868\u6f14\u827a\u672f\u4e2d\u5fc3": "Performing Arts Center",
  "\u533b\u7597\u4e2d\u5fc3": "Medical Center",
  "\u8bca\u6240": "Clinic",
  "\u5fc3\u7406\u54a8\u8be2\u5ba4": "Counseling Room",
  "\u5eb7\u590d\u7a7a\u95f4": "Rehabilitation Space",
  "\u5065\u5eb7\u76d1\u6d4b\u4e2d\u5fc3": "Health Monitoring Center",
  "\u5b89\u9759\u7597\u6108\u7a7a\u95f4": "Quiet Healing Space",
  "\u538b\u529b\u758f\u5bfc\u533a": "Stress Support Area",
  "\u5e94\u6025\u4e2d\u5fc3": "Emergency Center",
  "\u5b89\u5168\u7ad9": "Safety Station",
  "\u907f\u96be\u8231": "Shelter Pod",
  "\u9632\u62a4\u8bbe\u65bd": "Protective Facility",
  "\u7d27\u6025\u54cd\u5e94\u7a7a\u95f4": "Emergency Response Space",
  "\u5b89\u5168\u76d1\u63a7\u7ad9": "Security Monitoring Station",
  "\u9053\u8def": "Road",
  "\u6b65\u884c\u8fde\u5eca": "Pedestrian Corridor",
  "\u6c14\u5bc6\u8fde\u63a5\u901a\u9053": "Airtight Connector",
  "\u706b\u661f\u8f66\u505c\u9760\u533a": "Rover Docking Area",
  "\u8fd0\u8f93\u4e2d\u5fc3": "Transport Center",
  "\u901a\u4fe1\u5854": "Communication Tower",
  "\u901a\u8baf\u4e2d\u5fc3": "Communication Center",
  "\u7740\u9646\u5e73\u53f0": "Landing Platform",
  "\u6e29\u5ba4": "Greenhouse",
  "\u519c\u4e1a\u8231": "Agriculture Module",
  "\u6c34\u5faa\u73af\u4e2d\u5fc3": "Water Recycling Center",
  "\u80fd\u6e90\u7ad9": "Energy Station",
  "\u8d44\u6e90\u5904\u7406\u7ad9": "Resource Processing Station",
  "\u7ef4\u4fee\u4e2d\u5fc3": "Maintenance Center",
  "\u5de5\u5382": "Factory",
  "3D\u6253\u5370\u5efa\u9020\u4e2d\u5fc3": "3D Printing Construction Center",
  "\u7269\u8d44\u4ed3\u50a8\u4e2d\u5fc3": "Supply Storage Center",
  "\u81ea\u5b9a\u4e49\u529f\u80fd\u533a": "Custom Zone",
  "\u4f4f\u5b85\u533a": "Residential Zone",
  "\u793a\u4f8b\u4fbf\u5229\u5e97": "Sample Convenience Store",
  "\u603b\u9762\u79ef\u56fa\u5b9a\u4e3a 1000 \u5e73\u65b9\u5343\u7c73\n\u8bf7\u81ea\u884c\u5206\u914d\u529f\u80fd\u533a\u4e0e\u6bd4\u4f8b\u3002": "The total area is fixed at 1000 square kilometers.\nAllocate zones and ratios yourself.",
  "\u8bf7\u6839\u636e\u56fe\u7eb8\u624b\u52a8\u6807\u6ce8\u5efa\u7b51\u5b9e\u9645\u9762\u79ef\u3002": "Use your map to manually label each building's actual area.",
  "\u56fe\u4f8b\uff1a\u989c\u8272 / \u529f\u80fd / \u9762\u79ef": "Legend: color / function / area",
  "\u5efa\u7b51\u540d\u79f0\uff1a______\n\u5b9e\u9645\u9762\u79ef\uff1a______ km\u00b2": "Building name: ______\nActual area: ______ km²",
};

let history = [];
let future = [];
let dragInfo = null;
let draftShape = null;
let isRestoring = false;
let tourIndex = 0;
let tourSampleId = null;
let selectionCardDrag = null;

const $ = (selector) => document.querySelector(selector);
const categoryList = $("#categoryList");
const marsCanvas = $("#marsCanvas");
const canvasWrap = $("#canvasWrap");
const objectLayer = $("#objectLayer");
const annotationLayer = $("#annotationLayer");
const drawingLayer = $("#drawingLayer");
const pathLayer = $("#pathLayer");
const selectionCard = $("#selectionCard");
const selectedKind = $("#selectedKind");
const selectedName = $("#selectedName");
const selectedFunction = $("#selectedFunction");
const selectedArea = $("#selectedArea");
const selectedNote = $("#selectedNote");
const activeToolHint = $("#activeToolHint");
const gridToggle = $("#gridToggle");
const layerMenu = $("#layerMenu");
const resizeBox = $("#resizeBox");
const tourOverlay = $("#tourOverlay");
const tourPopover = $("#tourPopover");
const tourFocus = $("#tourFocus");

function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function cloneState() {
  return JSON.parse(JSON.stringify({
    objects: state.objects,
    annotations: state.annotations,
    zones: state.zones,
    paths: state.paths,
    allocation: state.allocation,
    gridCols: state.gridCols,
    scaleRatio: state.scaleRatio,
    scaleKm: state.scaleKm,
    teamName: state.teamName,
    difficulty: state.difficulty,
    currentStep: state.currentStep,
    reflections: state.reflections,
    layers: state.layers,
    view: state.view,
  }));
}

function pushHistory() {
  if (isRestoring) return;
  history.push(cloneState());
  if (history.length > 60) history.shift();
  future = [];
}

function restore(snapshot) {
  isRestoring = true;
  Object.assign(state, JSON.parse(JSON.stringify(snapshot)));
  isRestoring = false;
  renderAll();
}

function getCategory(categoryName) {
  return categories.find((category) => category.name === categoryName || category.id === categoryName) || categories[0];
}

function categoryByAsset(assetName) {
  return categories.find((category) => category.assets.includes(assetName)) || categories[0];
}

function iconSvg(categoryId, color, assetName = "") {
  const accent = color || "#e76b35";
  const roof = shade(accent, -18);
  const light = shade(accent, 36);
  const glass = shade(accent, 68);
  const id = `g${Math.abs(hashString(`${categoryId}-${assetName}`))}`;
  const category = categories.find((item) => item.id === categoryId);
  const assetIndex = Math.max(0, category?.assets.indexOf(assetName) ?? Math.abs(hashString(assetName)) % 9);

  return `
    <svg class="asset-svg" viewBox="0 0 92 76" aria-hidden="true">
      <defs>
        <linearGradient id="body-${id}" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="${light}"/>
          <stop offset=".52" stop-color="${accent}"/>
          <stop offset="1" stop-color="${roof}"/>
        </linearGradient>
        <linearGradient id="glass-${id}" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#ffffff" stop-opacity=".92"/>
          <stop offset=".52" stop-color="${glass}" stop-opacity=".78"/>
          <stop offset="1" stop-color="${accent}" stop-opacity=".45"/>
        </linearGradient>
      </defs>
      <ellipse cx="46" cy="66" rx="38" ry="8" fill="rgba(80,50,30,.18)"/>
      ${isometricAssetScene(categoryId, assetName, assetIndex, { accent, roof, light, glass, id })}
    </svg>
  `;
}

function isometricAssetScene(categoryId, assetName, assetIndex, paint) {
  const { accent, roof, light, glass, id } = paint;
  const base = assetBasePlate(categoryId, assetName, assetIndex, paint);
  const custom = assetName === "Custom Asset";
  if (custom) {
    const customScenes = {
      residential: `${isoBlock(24, 36, 24, 18, 15, paint)}${isoDome(56, 35, 13, paint)}${isoFlag(22, 22, paint)}`,
      leisure: `${landingRing(42, 42, paint)}${treeCluster(64, 33, paint)}${isoFlag(24, 25, paint)}`,
      governance: `${columnHall(28, 34, 34, 20, paint)}${isoFlag(65, 22, paint)}`,
      education: `${bookBuilding(46, 38, paint)}${isoFlag(65, 24, paint)}`,
      healthcare: `${isoDome(35, 38, 15, paint)}${medicalCross(58, 38, paint)}${isoFlag(24, 23, paint)}`,
      security: `${shieldBuilding(43, 38, paint)}${warningMast(67, 24, paint)}`,
      transport: `${roadStrip("M20 55C34 36 56 58 73 30", paint)}${isoFlag(24, 23, paint)}`,
      production: `${isoBlock(24, 36, 24, 18, 15, paint)}${solarPanel(49, 39, paint)}${isoTower(66, 24, 8, 28, paint)}`,
    };
    return `${base}${customScenes[categoryId] || customScenes.residential}`;
  }

  const namedScenes = {
    "Convenience Store": `${convenienceStoreReal(24, 34, paint)}${smallCrates(63, 45, paint)}`,
    "Family Housing Unit": `${familyHousingReal(22, 36, paint)}`,
    "Single Apartment": `${apartmentReal(45, 17, paint)}${isoBlock(23, 45, 17, 12, 8, paint)}`,
    "Cafe": `${cafeReal(25, 35, paint)}${patioTables(61, 46, paint)}`,
    "Community Dining Hall": `${diningHallReal(23, 34, paint)}`,
    "Restaurant": `${restaurantReal(25, 35, paint)}${patioTables(63, 46, paint)}`,
    "Community Activity Center": `${activityCenterReal(24, 35, paint)}${treeCluster(66, 39, paint)}`,
    "Pharmacy": `${pharmacyReal(27, 34, paint)}`,
    "Bank": `${bankReal(24, 33, paint)}`,
    "Barbershop": `${barbershopReal(27, 36, paint)}`,

    "Park": `${parkReal(18, 34, paint)}`,
    "Open Activity Area": `${openPlazaReal(20, 37, paint)}${shadeCanopy(66, 38, paint)}`,
    "Tai Chi Plaza": `${taiChiPlazaReal(24, 36, paint)}${curvedBenches(63, 40, paint)}`,
    "Outdoor Gathering Space": `${picnicShelter(20, 35, paint)}${patioTables(53, 45, paint)}${fireCircle(72, 43, paint)}`,
    "Sports Area": `${sportsFieldReal(paint)}`,
    "Theater": `${theaterReal(22, 34, paint)}`,
    "Recreation Center": `${recreationCenterReal(21, 35, paint)}`,
    "Stress Relief Space": `${healingGardenReal(20, 37, paint)}`,

    "Community Council Center": `${councilHallReal(24, 34, paint)}${isoFlag(66, 21, paint)}`,
    "Administration Center": `${administrationReal(24, 30, paint)}`,
    "Public Service Center": `${publicServiceReal(24, 35, paint)}${isoFlag(66, 23, paint)}`,
    "Information Service Center": `${informationCenterReal(25, 35, paint)}`,
    "Resource Dispatch Center": `${dispatchCenterReal(24, 36, paint)}`,
    "Community Meeting Space": `${meetingHallReal(25, 36, paint)}`,
    "Conflict Mediation Space": `${mediationCenterReal(24, 36, paint)}`,

    "School": `${schoolCampusReal(18, 35, paint)}${schoolYard(61, 47, paint)}`,
    "Kindergarten": `${kindergartenReal(20, 38, paint)}${playBlocks(56, 44, paint)}${slideSet(69, 39, paint)}`,
    "Training Center": `${trainingCenterReal(20, 34, paint)}${workshopScreens(62, 39, paint)}`,
    "Library": `${libraryReal(20, 34, paint)}${readingSteps(65, 45, paint)}`,
    "Community Learning Center": `${learningCenterReal(20, 35, paint)}${studyPods(65, 42, paint)}`,
    "Museum": `${museumReal(20, 33, paint)}${displayStatue(67, 43, paint)}`,
    "Art Gallery": `${galleryReal(20, 35, paint)}${sculptureYard(67, 45, paint)}`,
    "Cultural Activity Center": `${cultureCenterReal(24, 35, paint)}${treeCluster(68, 38, paint)}`,
    "Performing Arts Center": `${performingArtsReal(22, 34, paint)}`,

    "Medical Center": `${hospitalReal(19, 34, paint)}${ambulanceBay(64, 48, paint)}`,
    "Clinic": `${clinicReal(23, 36, paint)}${clinicCanopy(60, 45, paint)}`,
    "Counseling Room": `${counselingSuiteReal(22, 37, paint)}${privacyScreens(63, 43, paint)}`,
    "Rehabilitation Space": `${rehabFacilityReal(20, 38, paint)}${rehabTrack(62, 50, paint)}`,
    "Health Monitoring Center": `${healthMonitoringReal(20, 34, paint)}${monitorDish(67, 37, paint)}`,
    "Quiet Healing Space": `${quietHealingReal(24, 38, paint)}`,
    "Stress Support Area": `${stressSupportReal(26, 38, paint)}`,

    "Emergency Center": `${emergencyCenterReal(24, 34, paint)}${warningMast(65, 24, paint)}`,
    "Safety Station": `${safetyStationReal(25, 35, paint)}`,
    "Shelter Pod": `${shelterReal(24, 38, paint)}`,
    "Protective Facility": `${protectiveWallReal(18, 44, paint)}`,
    "Emergency Response Space": `${emergencyBayReal(23, 37, paint)}`,
    "Security Monitoring Station": `${monitoringStationReal(28, 20, paint)}`,

    "Road": `${roadAssetReal(paint)}`,
    "Pedestrian Corridor": `${pedestrianCorridorReal(20, 42, paint)}`,
    "Airtight Connector": `${airtightConnectorReal(18, 38, paint)}`,
    "Rover Docking Area": `${roverDockReal(23, 38, paint)}`,
    "Transport Center": `${transportCenterReal(23, 34, paint)}`,
    "Communication Tower": `${communicationTowerReal(46, 15, paint)}`,
    "Communication Center": `${communicationCenterReal(27, 34, paint)}`,
    "Landing Platform": `${landingPadReal(46, 43, paint)}`,

    "Greenhouse": `${greenhouse(14, 33, 15, paint)}${greenhouse(32, 28, 15, paint)}${greenhouse(50, 33, 15, paint)}`,
    "Agriculture Module": `${greenhouse(18, 35, 12, paint)}${cropRows(44, 42, paint)}${isoDome(65, 38, 9, paint)}`,
    "Water Recycling Center": `${waterTank(27, 34, 12, paint)}${waterTank(45, 26, 14, paint)}${waterTank(62, 38, 10, paint)}${isoPipe("M34 43C43 53 54 50 62 43", paint)}`,
    "Energy Station": `${solarPanel(20, 40, paint)}${solarPanel(36, 33, paint)}${isoDome(59, 35, 15, paint)}`,
    "Resource Processing Station": `${isoBlock(20, 38, 20, 15, 14, paint)}${waterTank(49, 32, 10, paint)}${isoPipe("M38 42H67", paint)}${isoTower(63, 21, 8, 30, paint)}`,
    "Maintenance Center": `${maintenanceCenterReal(24, 35, paint)}`,
    "Factory": `${factoryBuilding(22, 35, paint)}${smokeStacks(60, 24, paint)}`,
    "3D Printing Construction Center": `${printerGantry(25, 33, paint)}${isoBlock(50, 43, 18, 12, 10, paint)}`,
    "Supply Storage Center": `${storageDepot(22, 36, paint)}${smallCrates(58, 44, paint)}`,
  };
  if (namedScenes[assetName]) return `${base}${namedScenes[assetName]}`;

  if (categoryId === "production") {
    const scenes = [
      `${greenhouse(18, 31, 16, paint)}${greenhouse(35, 26, 16, paint)}${greenhouse(52, 31, 16, paint)}`,
      `${waterTank(27, 34, 12, paint)}${waterTank(45, 26, 14, paint)}${waterTank(62, 38, 10, paint)}${isoPipe("M34 43C43 53 54 50 62 43", paint)}`,
      `${solarPanel(23, 38, paint)}${solarPanel(37, 31, paint)}${isoDome(56, 34, 16, paint)}`,
      `${isoBlock(20, 38, 20, 15, 14, paint)}${waterTank(49, 32, 10, paint)}${isoPipe("M38 42H67", paint)}${isoTower(63, 21, 8, 30, paint)}`,
      `${isoBlock(19, 36, 20, 18, 14, paint)}${isoBlock(43, 29, 24, 22, 18, paint)}${smallCrates(28, 28, paint)}`,
      `${isoDome(28, 39, 12, paint)}${isoDome(46, 32, 16, paint)}${isoDome(64, 41, 10, paint)}`,
      `${waterTank(29, 35, 11, paint)}${waterTank(48, 32, 11, paint)}${isoPipe("M35 45C43 54 55 52 64 43", paint)}${isoBlock(61, 40, 16, 12, 10, paint)}`,
      `${isoBlock(26, 33, 40, 26, 20, paint)}${isoDoor(55, 48, paint)}${isoAntenna(28, 27, paint)}`,
      `${isoBlock(22, 36, 22, 17, 14, paint)}${isoBlock(46, 31, 24, 21, 16, paint)}${smallCrates(53, 48, paint)}`,
    ];
    return `${base}${scenes[assetIndex % scenes.length]}`;
  }

  if (categoryId === "transport") {
    const scenes = [
      `${roadStrip("M17 55C31 35 55 66 75 26", paint)}`,
      `${isoTube(18, 41, 48, paint)}${isoDome(25, 45, 7, paint)}${isoDome(66, 35, 7, paint)}`,
      `${isoTube(18, 38, 54, paint)}${isoPipe("M26 47H66", paint)}`,
      `${isoBlock(24, 38, 34, 14, 11, paint)}${wheelPair(32, 52, paint)}${wheelPair(56, 52, paint)}`,
      `${isoBlock(24, 33, 38, 22, 18, paint)}${roadStrip("M22 58H72", paint)}`,
      `${isoTower(46, 15, 10, 46, paint)}${signalArcs(46, 21, paint)}`,
      `${isoDome(36, 34, 14, paint)}${isoTower(58, 22, 8, 30, paint)}${signalArcs(58, 26, paint)}`,
      `${landingRing(46, 43, paint)}${isoBlock(52, 29, 16, 14, 12, paint)}`,
    ];
    return `${base}${scenes[assetIndex % scenes.length]}`;
  }

  const civicScenes = [
    `${isoBlock(24, 35, 28, 20, 17, paint)}${isoBlock(50, 30, 20, 18, 14, paint)}`,
    `${isoDome(36, 39, 14, paint)}${isoBlock(52, 33, 22, 17, 14, paint)}`,
    `${isoBlock(23, 35, 42, 22, 20, paint)}${windowBand(31, 41, paint)}`,
    `${isoBlock(25, 39, 20, 15, 13, paint)}${isoBlock(47, 31, 28, 22, 20, paint)}`,
    `${isoDome(30, 39, 11, paint)}${isoDome(48, 33, 13, paint)}${isoDome(65, 43, 9, paint)}`,
    `${isoTower(31, 24, 9, 31, paint)}${isoBlock(43, 36, 28, 18, 16, paint)}`,
    `${solarPanel(25, 39, paint)}${isoDome(54, 34, 17, paint)}`,
    `${isoBlock(21, 36, 20, 18, 16, paint)}${isoTube(45, 38, 31, paint)}`,
    `${isoBlock(27, 34, 34, 24, 20, paint)}${isoFlag(63, 21, paint)}`,
    `${isoBlock(20, 41, 22, 15, 12, paint)}${isoBlock(45, 30, 27, 24, 20, paint)}${smallCrates(25, 30, paint)}`,
  ];

  if (categoryId === "leisure") {
    const scenes = [
      `${treeCluster(30, 38, paint)}${treeCluster(57, 34, paint)}${pathCurve(paint)}`,
      `${landingRing(45, 42, paint)}${treeCluster(68, 35, paint)}`,
      `${landingRing(46, 41, paint)}${yinYang(46, 41, paint)}`,
      `${isoBlock(26, 41, 18, 12, 10, paint)}${isoBlock(50, 36, 22, 14, 12, paint)}${treeCluster(67, 40, paint)}`,
      `${sportsCourt(paint)}`,
      `${isoBlock(24, 36, 42, 22, 20, paint)}${stageArc(46, 33, paint)}`,
      `${isoDome(34, 39, 15, paint)}${isoBlock(54, 36, 18, 15, 13, paint)}`,
      `${isoDome(42, 39, 18, paint)}${treeCluster(63, 34, paint)}`,
    ];
    return `${base}${scenes[assetIndex % scenes.length]}`;
  }

  if (categoryId === "security") {
    const scenes = [
      `${isoBlock(28, 36, 34, 22, 18, paint)}${warningMast(61, 25, paint)}`,
      `${shieldBuilding(46, 38, paint)}`,
      `${isoDome(38, 40, 18, paint)}${isoBlock(56, 43, 16, 12, 10, paint)}`,
      `${wallSegment(22, 43, paint)}${wallSegment(44, 35, paint)}${wallSegment(62, 44, paint)}`,
      `${isoBlock(22, 40, 26, 16, 14, paint)}${roadStrip("M45 48H73", paint)}`,
      `${isoTower(38, 19, 10, 40, paint)}${isoDome(61, 41, 11, paint)}`,
    ];
    return `${base}${scenes[assetIndex % scenes.length]}`;
  }

  return `${base}${civicScenes[assetIndex % civicScenes.length]}`;
}

function isoPlate(cx, cy, w, h, fill) {
  return `<polygon points="${cx - w / 2},${cy} ${cx},${cy - h / 2} ${cx + w / 2},${cy} ${cx},${cy + h / 2}" fill="${fill}" opacity=".58" stroke="rgba(255,255,255,.55)" stroke-width="1"/>`;
}

function assetBasePlate(categoryId, assetName, assetIndex, paint) {
  const fill = shade(paint.accent, 58);
  const edge = "rgba(255,255,255,.58)";
  const key = Math.abs(hashString(`${categoryId}-${assetName}`)) % 14;
  const shapes = [
    `<polygon points="14,57 46,39 80,56 46,73" fill="${fill}" opacity=".58" stroke="${edge}" stroke-width="1"/>`,
    `<polygon points="16,55 35,43 76,49 80,62 42,73 13,64" fill="${fill}" opacity=".58" stroke="${edge}" stroke-width="1"/>`,
    `<ellipse cx="46" cy="57" rx="34" ry="15" fill="${fill}" opacity=".58" stroke="${edge}" stroke-width="1"/>`,
    `<path d="M18 58l23-16h32l8 9l-20 18H27z" fill="${fill}" opacity=".58" stroke="${edge}" stroke-width="1"/>`,
    `<polygon points="18,58 33,44 58,44 77,56 63,70 34,70" fill="${fill}" opacity=".58" stroke="${edge}" stroke-width="1"/>`,
    `<path d="M17 57c12-13 30-18 48-13c13 4 17 12 11 19c-9 10-35 14-53 6c-7-3-9-7-6-12z" fill="${fill}" opacity=".58" stroke="${edge}" stroke-width="1"/>`,
    `<polygon points="12,60 29,48 45,53 63,41 82,52 63,68 40,72" fill="${fill}" opacity=".58" stroke="${edge}" stroke-width="1"/>`,
    `<rect x="19" y="46" width="56" height="25" rx="12" fill="${fill}" opacity=".58" stroke="${edge}" stroke-width="1" transform="rotate(-8 47 58)"/>`,
    `<path d="M15 56l25-14h31l9 8v13l-26 11H24z" fill="${fill}" opacity=".58" stroke="${edge}" stroke-width="1"/>`,
    `<polygon points="20,52 43,39 74,48 74,64 43,73 20,62" fill="${fill}" opacity=".58" stroke="${edge}" stroke-width="1"/>`,
    `<path d="M14 62l19-15h24l7 8h15v10L51 73H22z" fill="${fill}" opacity=".58" stroke="${edge}" stroke-width="1"/>`,
    `<ellipse cx="46" cy="57" rx="38" ry="11" fill="${fill}" opacity=".58" stroke="${edge}" stroke-width="1"/>`,
    `<polygon points="11,59 31,47 46,50 63,43 82,56 62,70 33,71" fill="${fill}" opacity=".58" stroke="${edge}" stroke-width="1"/>`,
    `<path d="M16 58l18-13h21l8 7h15l5 8l-21 12H27z" fill="${fill}" opacity=".58" stroke="${edge}" stroke-width="1"/>`,
  ];
  return shapes[(key + assetIndex) % shapes.length];
}

function assetDetailOverlay(assetName, paint) {
  const white = "#fff";
  const dark = paint.roof;
  const blue = "#72b7ff";
  const green = "#78b96b";
  const yellow = "#ffd36d";
  const details = {
    "Convenience Store": `<path d="M27 32h23" stroke="${white}" stroke-width="3"/><rect x="31" y="35" width="7" height="9" fill="${paint.glass}"/><rect x="43" y="35" width="7" height="9" fill="${paint.glass}"/>`,
    "Family Housing Unit": `<path d="M27 48h39" stroke="${paint.glass}" stroke-width="3"/><circle cx="36" cy="47" r="3" fill="${white}"/><circle cx="55" cy="47" r="3" fill="${white}"/>`,
    "Single Apartment": `<path d="M39 24h12M39 33h12M39 42h12M39 51h12" stroke="${white}" stroke-width="2.2"/>`,
    "Cafe": `<path d="M57 45c3-5 11-5 14 0" stroke="${dark}" stroke-width="3" fill="none"/><circle cx="62" cy="44" r="3" fill="${yellow}"/>`,
    "Community Dining Hall": `<path d="M30 51h32M34 47v8M46 47v8M58 47v8" stroke="${white}" stroke-width="2.4"/>`,
    "Restaurant": `<circle cx="66" cy="48" r="7" fill="${white}" opacity=".9"/><circle cx="66" cy="48" r="3" fill="${dark}"/>`,
    "Community Activity Center": `<path d="M28 53c10-9 24-9 36 0" stroke="${white}" stroke-width="3.5" fill="none"/>`,
    "Pharmacy": `<rect x="58" y="30" width="17" height="17" rx="4" fill="${white}"/><path d="M66.5 34v9M62 38.5h9" stroke="${dark}" stroke-width="3.2"/>`,
    "Bank": `<path d="M30 55h32M34 42v14M44 38v18M54 42v14" stroke="${white}" stroke-width="2.4"/>`,
    "Barbershop": `${barberPole(67, 25, paint)}`,

    "Park": `<path d="M24 58c13-9 30 4 48-10" stroke="${dark}" stroke-width="3.2" fill="none"/><ellipse cx="55" cy="53" rx="11" ry="5" fill="${blue}" opacity=".7"/>`,
    "Open Activity Area": `<path d="M27 53h38M46 37v29" stroke="${white}" stroke-width="2.5" opacity=".85"/>`,
    "Tai Chi Plaza": `${yinYang(46, 51, paint)}`,
    "Outdoor Gathering Space": `<path d="M30 53h31M36 47h19" stroke="${white}" stroke-width="3"/><circle cx="33" cy="43" r="3" fill="${white}"/><circle cx="60" cy="43" r="3" fill="${white}"/>`,
    "Sports Area": `<path d="M25 49h42M46 34v29M32 43c8-7 20-7 28 0" stroke="${white}" stroke-width="2.2" fill="none"/>`,
    "Theater": `<path d="M33 52c8-8 18-8 26 0" stroke="${white}" stroke-width="3.5" fill="none"/><circle cx="33" cy="34" r="3" fill="${yellow}"/><circle cx="60" cy="34" r="3" fill="${yellow}"/>`,
    "Recreation Center": `<polygon points="58,41 73,48 58,55" fill="${white}" opacity=".88"/>`,
    "Stress Relief Space": `<path d="M53 47c7-7 15-7 22 0M56 56c5-4 11-4 16 0" stroke="${white}" stroke-width="2.5" fill="none"/>`,

    "Community Council Center": `<path d="M31 53h31M37 47h19M42 41h9" stroke="${white}" stroke-width="2.7"/>`,
    "Administration Center": `<path d="M43 24h12M43 32h12M43 40h12M43 48h12" stroke="${white}" stroke-width="2"/>`,
    "Public Service Center": `<circle cx="67" cy="44" r="8" fill="${white}" opacity=".86"/><path d="M67 38v12M61 44h12" stroke="${dark}" stroke-width="2.5"/>`,
    "Information Service Center": `<circle cx="67" cy="31" r="4" fill="${white}"/><rect x="64" y="38" width="6" height="18" fill="${white}"/>`,
    "Resource Dispatch Center": `<circle cx="31" cy="51" r="4" fill="${white}"/><circle cx="67" cy="47" r="4" fill="${white}"/><path d="M35 51h28" stroke="${white}" stroke-width="2.5"/>`,
    "Community Meeting Space": `<ellipse cx="62" cy="48" rx="13" ry="6" fill="${white}" opacity=".75"/><circle cx="56" cy="46" r="2.5" fill="${dark}"/><circle cx="66" cy="49" r="2.5" fill="${dark}"/>`,
    "Conflict Mediation Space": `<path d="M32 49h13l6-5h14" stroke="${white}" stroke-width="3" fill="none" stroke-linecap="round"/>`,

    "School": `<path d="M31 54h30M37 48h18" stroke="${white}" stroke-width="2.7"/><path d="M62 27v22" stroke="${dark}" stroke-width="2"/>`,
    "Kindergarten": `<circle cx="63" cy="48" r="6" fill="${yellow}"/><rect x="52" y="51" width="8" height="8" fill="${white}"/>`,
    "Training Center": `<path d="M31 45h29M31 52h20" stroke="${white}" stroke-width="3"/><circle cx="65" cy="40" r="4" fill="${blue}"/>`,
    "Library": `<path d="M30 39h14v22H30zM46 39h14v22H46z" fill="${white}" opacity=".75"/><path d="M36 44h5M52 44h5" stroke="${dark}" stroke-width="2"/>`,
    "Community Learning Center": `<path d="M28 55c8-5 14-4 18 2c4-6 10-7 18-2" stroke="${white}" stroke-width="3" fill="none"/>`,
    "Museum": `<path d="M28 52h37M33 42v12M43 39v15M53 42v12" stroke="${white}" stroke-width="2.5"/>`,
    "Art Gallery": `<rect x="58" y="39" width="14" height="10" fill="${white}" opacity=".8"/><path d="M60 47l4-5l3 3l2-2l3 4z" fill="${dark}"/>`,
    "Cultural Activity Center": `<circle cx="38" cy="48" r="5" fill="${white}" opacity=".8"/><circle cx="54" cy="46" r="5" fill="${white}" opacity=".65"/>`,
    "Performing Arts Center": `<path d="M34 48c8-10 18-10 26 0" stroke="${white}" stroke-width="3.5" fill="none"/><path d="M34 57h27" stroke="${white}" stroke-width="3"/>`,

    "Medical Center": `<rect x="61" y="31" width="18" height="18" rx="4" fill="${white}"/><path d="M70 35v10M65 40h10" stroke="${dark}" stroke-width="3.5"/>`,
    "Clinic": `<rect x="55" y="36" width="15" height="15" rx="4" fill="${white}"/><path d="M62.5 39v9M58 43.5h9" stroke="${dark}" stroke-width="3"/>`,
    "Counseling Room": `<path d="M63 56l-9-8c-6-6 3-13 9-6c6-7 15 0 9 6z" fill="${white}" opacity=".86"/>`,
    "Rehabilitation Space": `<path d="M52 55c8-16 20-16 28-2" stroke="${white}" stroke-width="3.5" fill="none"/><path d="M57 39h15" stroke="${white}" stroke-width="3"/>`,
    "Health Monitoring Center": `<path d="M49 48h9l4-8l7 18l5-10h10" stroke="${white}" stroke-width="3" fill="none"/>`,
    "Quiet Healing Space": `<ellipse cx="66" cy="51" rx="11" ry="6" fill="${blue}" opacity=".58"/><path d="M56 43c6-6 14-6 20 0" stroke="${white}" stroke-width="2.8" fill="none"/>`,
    "Stress Support Area": `<path d="M56 45c6-6 14-6 20 0M59 54c4-4 10-4 14 0" stroke="${white}" stroke-width="3" fill="none"/>`,

    "Emergency Center": `<path d="M63 34l12 21H51z" fill="${white}" opacity=".9"/><path d="M63 42v6" stroke="${dark}" stroke-width="2.5"/>`,
    "Safety Station": `<path d="M65 32l12 6v10c0 7-5 12-12 16c-7-4-12-9-12-16V38z" fill="${white}" opacity=".75"/>`,
    "Shelter Pod": `<path d="M54 54c2-13 9-20 15-20s13 7 15 20z" fill="${white}" opacity=".72"/>`,
    "Protective Facility": `<path d="M20 52h56" stroke="${white}" stroke-width="3.5" stroke-dasharray="7 5"/>`,
    "Emergency Response Space": `<path d="M47 49h29M64 38l13 11l-13 11" stroke="${white}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,
    "Security Monitoring Station": `<path d="M58 42h20l7 6l-7 6H58z" fill="${white}" opacity=".75"/><circle cx="68" cy="48" r="4" fill="${dark}"/>`,

    "Road": `<path d="M18 61C31 40 56 67 77 29" stroke="#fff" stroke-width="2.5" stroke-dasharray="7 6" fill="none"/>`,
    "Pedestrian Corridor": `<circle cx="34" cy="54" r="3" fill="${white}"/><circle cx="57" cy="54" r="3" fill="${white}"/><path d="M24 54h46" stroke="${white}" stroke-width="2" stroke-dasharray="4 4"/>`,
    "Airtight Connector": `<path d="M30 33v18M46 31v20M62 33v18" stroke="${white}" stroke-width="2.4"/>`,
    "Rover Docking Area": `<circle cx="35" cy="55" r="4" fill="${white}"/><circle cx="58" cy="55" r="4" fill="${white}"/><path d="M30 41h34" stroke="${white}" stroke-width="3"/>`,
    "Transport Center": `<path d="M25 61h51" stroke="#fff" stroke-width="2.3" stroke-dasharray="7 5"/><path d="M34 37h28" stroke="${white}" stroke-width="3"/>`,
    "Communication Tower": `<path d="M34 29c8-9 17-9 25 0M29 21c11-13 25-13 36 0" stroke="${white}" stroke-width="2.4" fill="none"/>`,
    "Communication Center": `<path d="M52 30c7-8 16-8 23 0M48 23c10-12 21-12 31 0" stroke="${white}" stroke-width="2.3" fill="none"/>`,
    "Landing Platform": `<path d="M38 53h16V34" stroke="${white}" stroke-width="4" fill="none"/><circle cx="46" cy="44" r="18" stroke="${white}" stroke-width="2.3" fill="none"/>`,

    "Greenhouse": `<path d="M18 54h54M24 37v19M39 33v23M54 37v19" stroke="${white}" stroke-width="2" opacity=".8"/>`,
    "Agriculture Module": `<path d="M32 58c6-15 17-20 29-20M35 53c7-7 16-10 27-11" stroke="${white}" stroke-width="2.5" fill="none"/>`,
    "Water Recycling Center": `<ellipse cx="46" cy="33" rx="12" ry="5" fill="${blue}" opacity=".78"/><path d="M33 50c11 8 24 8 36 0" stroke="${white}" stroke-width="2.5" fill="none"/>`,
    "Energy Station": `<path d="M29 45l17-9l18 8M29 54l17-9l18 8" stroke="${white}" stroke-width="2.3"/>`,
    "Resource Processing Station": `<circle cx="62" cy="39" r="8" fill="${white}" opacity=".72"/><path d="M62 28v22M51 39h22" stroke="${dark}" stroke-width="2"/>`,
    "Maintenance Center": `<path d="M58 48l17-17M69 31l7 7" stroke="${white}" stroke-width="3.5" stroke-linecap="round"/>`,
    "Factory": `<path d="M26 53V38l12 8V38l12 8V34h16v19" stroke="${white}" stroke-width="2.5" fill="none"/>`,
    "3D Printing Construction Center": `<path d="M31 35h31v8H31zM37 43h19v14H37z" fill="${white}" opacity=".72"/><path d="M46 43v14" stroke="${dark}" stroke-width="2.5"/>`,
    "Supply Storage Center": `<path d="M31 44h29M31 52h29M39 37v22M52 37v22" stroke="${white}" stroke-width="2.4"/>`,
  };
  return details[assetName] || "";
}

function isoBlock(x, y, w, d, h, paint) {
  const { accent, roof, light, glass } = paint;
  const p1 = `${x},${y + d / 2} ${x + w / 2},${y} ${x + w},${y + d / 2} ${x + w / 2},${y + d}`;
  return `<g>
    <polygon points="${p1}" fill="${light}" stroke="rgba(255,255,255,.75)" stroke-width="1"/>
    <polygon points="${x},${y + d / 2} ${x + w / 2},${y + d} ${x + w / 2},${y + d + h} ${x},${y + d / 2 + h}" fill="${accent}"/>
    <polygon points="${x + w},${y + d / 2} ${x + w / 2},${y + d} ${x + w / 2},${y + d + h} ${x + w},${y + d / 2 + h}" fill="${roof}"/>
    <path d="M${x + w * .24} ${y + d / 2 + h * .58}h${w * .2}M${x + w * .62} ${y + d / 2 + h * .45}h${w * .18}" stroke="${glass}" stroke-width="2" stroke-linecap="round"/>
  </g>`;
}

function isoDome(cx, cy, r, paint) {
  return `<g>
    <ellipse cx="${cx}" cy="${cy + r * .65}" rx="${r * 1.15}" ry="${r * .45}" fill="${paint.roof}"/>
    <path d="M${cx - r * 1.15} ${cy + r * .65}c2-${r * 1.45} ${r * 2.1}-${r * 1.45} ${r * 2.3} 0z" fill="url(#glass-${paint.id})" stroke="rgba(255,255,255,.75)" stroke-width="1"/>
    <ellipse cx="${cx}" cy="${cy + r * .52}" rx="${r * .45}" ry="${r * .2}" fill="#fff" opacity=".75"/>
  </g>`;
}

function waterTank(cx, cy, r, paint) {
  return `<g>
    <ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r * .42}" fill="${paint.light}" stroke="#fff" stroke-width="1"/>
    <rect x="${cx - r}" y="${cy}" width="${r * 2}" height="${r * .9}" fill="${paint.accent}"/>
    <ellipse cx="${cx}" cy="${cy + r * .9}" rx="${r}" ry="${r * .42}" fill="${paint.roof}"/>
    <ellipse cx="${cx}" cy="${cy + 1}" rx="${r * .55}" ry="${r * .22}" fill="${paint.glass}"/>
  </g>`;
}

function greenhouse(x, y, len, paint) {
  return `<g>
    <path d="M${x} ${y + 20}c2-17 ${len + 16}-17 ${len + 18} 0v9H${x}z" fill="url(#glass-${paint.id})" stroke="#fff" stroke-width="1.2"/>
    <path d="M${x + 5} ${y + 7}v21M${x + 15} ${y + 5}v23M${x + 25} ${y + 8}v20" stroke="${paint.roof}" stroke-width="1" opacity=".65"/>
    <path d="M${x + 5} ${y + 25}h${len + 9}" stroke="${paint.accent}" stroke-width="2"/>
  </g>`;
}

function solarPanel(x, y, paint) {
  return `<g>
    <polygon points="${x},${y} ${x + 22},${y - 9} ${x + 35},${y - 3} ${x + 13},${y + 7}" fill="#2f5fbd" stroke="#d7e8ff" stroke-width="1"/>
    <path d="M${x + 7} ${y - 3}l13 6M${x + 15} ${y - 6}l13 6M${x + 7} ${y + 4}l22-9" stroke="#8db8ff" stroke-width="1"/>
    <path d="M${x + 19} ${y + 3}v11" stroke="${paint.roof}" stroke-width="2"/>
  </g>`;
}

function isoTower(cx, y, w, h, paint) {
  return `<g>
    <rect x="${cx - w / 2}" y="${y}" width="${w}" height="${h}" rx="3" fill="${paint.accent}"/>
    <ellipse cx="${cx}" cy="${y}" rx="${w / 2}" ry="${w / 4}" fill="${paint.light}" stroke="#fff" stroke-width="1"/>
    <ellipse cx="${cx}" cy="${y + h}" rx="${w / 2}" ry="${w / 4}" fill="${paint.roof}"/>
    <path d="M${cx - w * .24} ${y + 7}v${h - 10}M${cx + w * .24} ${y + 7}v${h - 10}" stroke="${paint.glass}" stroke-width="1"/>
  </g>`;
}

function isoPipe(path, paint) {
  return `<path d="${path}" fill="none" stroke="${paint.roof}" stroke-width="5" stroke-linecap="round"/><path d="${path}" fill="none" stroke="${paint.glass}" stroke-width="2" stroke-linecap="round"/>`;
}

function isoTube(x, y, len, paint) {
  return `<g>
    <path d="M${x} ${y}h${len}" stroke="${paint.accent}" stroke-width="13" stroke-linecap="round"/>
    <path d="M${x + 3} ${y - 5}v10M${x + len * .35} ${y - 5}v10M${x + len * .7} ${y - 5}v10" stroke="${paint.glass}" stroke-width="2"/>
    <path d="M${x} ${y}h${len}" stroke="#fff" stroke-width="2" opacity=".55"/>
  </g>`;
}

function roadStrip(path, paint) {
  return `<path d="${path}" fill="none" stroke="${paint.roof}" stroke-width="12" stroke-linecap="round"/><path d="${path}" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="5 5" stroke-linecap="round"/>`;
}

function treeCluster(x, y, paint) {
  return `<g><circle cx="${x}" cy="${y}" r="7" fill="${paint.light}"/><circle cx="${x + 9}" cy="${y - 4}" r="8" fill="${paint.accent}"/><path d="M${x + 5} ${y + 4}v15" stroke="${paint.roof}" stroke-width="3"/></g>`;
}

function landingRing(cx, cy, paint) {
  return `<ellipse cx="${cx}" cy="${cy}" rx="22" ry="12" fill="none" stroke="${paint.accent}" stroke-width="5"/><ellipse cx="${cx}" cy="${cy}" rx="10" ry="5" fill="${paint.glass}" opacity=".8"/>`;
}

function signalArcs(cx, cy, paint) {
  return `<path d="M${cx - 14} ${cy + 2}c8-9 20-9 28 0M${cx - 21} ${cy - 6}c12-13 30-13 42 0" fill="none" stroke="${paint.roof}" stroke-width="2" stroke-linecap="round"/>`;
}

function smallCrates(x, y, paint) {
  return `${isoBlock(x, y, 10, 8, 7, paint)}${isoBlock(x + 13, y + 5, 10, 8, 7, paint)}${isoBlock(x + 3, y + 12, 10, 8, 7, paint)}`;
}

function isoDoor(x, y, paint) {
  return `<path d="M${x} ${y}v12h10V${y - 4}z" fill="${paint.glass}" opacity=".85"/>`;
}

function isoAntenna(x, y, paint) {
  return `<path d="M${x} ${y}v22" stroke="${paint.roof}" stroke-width="2"/><circle cx="${x}" cy="${y}" r="4" fill="${paint.light}"/>`;
}

function isoFlag(x, y, paint) {
  return `<path d="M${x} ${y}v28" stroke="${paint.roof}" stroke-width="2"/><path d="M${x} ${y}l17 5l-17 7z" fill="${paint.accent}"/>`;
}

function windowBand(x, y, paint) {
  return `<path d="M${x} ${y}h28M${x + 3} ${y + 6}h22" stroke="${paint.glass}" stroke-width="2.4" stroke-linecap="round"/>`;
}

function wheelPair(x, y, paint) {
  return `<circle cx="${x}" cy="${y}" r="4" fill="${paint.roof}"/><circle cx="${x + 16}" cy="${y}" r="4" fill="${paint.roof}"/>`;
}

function pathCurve(paint) {
  return `<path d="M21 57c16-16 33 0 51-17" fill="none" stroke="${paint.roof}" stroke-width="4" stroke-linecap="round" opacity=".75"/>`;
}

function yinYang(cx, cy, paint) {
  return `<path d="M${cx} ${cy - 10}a10 10 0 1 1 0 20a5 5 0 0 0 0-10a5 5 0 0 1 0-10z" fill="${paint.roof}"/><circle cx="${cx}" cy="${cy - 5}" r="2" fill="${paint.roof}"/><circle cx="${cx}" cy="${cy + 5}" r="2" fill="#fff"/>`;
}

function sportsCourt(paint) {
  return `<polygon points="22,46 49,32 72,43 45,59" fill="${paint.light}" stroke="#fff" stroke-width="1"/><path d="M31 45l25 12M47 33l22 11M47 33l-3 25" stroke="${paint.roof}" stroke-width="2" opacity=".8"/>`;
}

function stageArc(cx, cy, paint) {
  return `<path d="M${cx - 16} ${cy + 12}c6-18 26-18 32 0" fill="none" stroke="${paint.glass}" stroke-width="4" stroke-linecap="round"/>`;
}

function warningMast(x, y, paint) {
  return `<path d="M${x} ${y}v30" stroke="${paint.roof}" stroke-width="3"/><path d="M${x - 8} ${y + 12}h16l-8-13z" fill="${paint.light}"/>`;
}

function shieldBuilding(cx, cy, paint) {
  return `<path d="M${cx} ${cy - 25}l23 10v17c0 11-9 19-23 25c-14-6-23-14-23-25v-17z" fill="${paint.accent}" stroke="#fff" stroke-width="1.2"/><path d="M${cx} ${cy - 14}v28M${cx - 11} ${cy}h22" stroke="${paint.glass}" stroke-width="4"/>`;
}

function wallSegment(x, y, paint) {
  return `<polygon points="${x},${y} ${x + 18},${y - 8} ${x + 26},${y - 4} ${x + 8},${y + 6}" fill="${paint.light}"/><polygon points="${x},${y} ${x + 8},${y + 6} ${x + 8},${y + 16} ${x},${y + 10}" fill="${paint.accent}"/><polygon points="${x + 8},${y + 6} ${x + 26},${y - 4} ${x + 26},${y + 6} ${x + 8},${y + 16}" fill="${paint.roof}"/>`;
}

function clearIsometricScene(markup) {
  return `<g class="clean-asset">${markup}</g>`;
}

function gableRoof(x, y, w, paint) {
  return `<polygon points="${x},${y + 6} ${x + w / 2},${y - 5} ${x + w},${y + 6} ${x + w / 2},${y + 16}" fill="${paint.roof}" stroke="#fff" stroke-width="1"/>`;
}

function convenienceStoreReal(x, y, paint) {
  return `${isoBlock(x, y, 38, 22, 17, paint)}<path d="M${x + 6} ${y + 17}h26l5 6H${x + 1}z" fill="#fff" opacity=".9"/><path d="M${x + 5} ${y + 24}h27M${x + 9} ${y + 29}h8M${x + 21} ${y + 29}h8" stroke="${paint.roof}" stroke-width="3" stroke-linecap="round"/>`;
}

function familyHousingReal(x, y, paint) {
  return `${gableRoof(x + 1, y + 1, 24, paint)}${isoBlock(x, y + 7, 25, 17, 13, paint)}${gableRoof(x + 24, y - 6, 27, paint)}${isoBlock(x + 23, y, 28, 18, 16, paint)}${gableRoof(x + 52, y + 4, 22, paint)}${isoBlock(x + 51, y + 10, 23, 15, 12, paint)}<path d="M${x + 8} ${y + 29}h7M${x + 34} ${y + 24}h8M${x + 58} ${y + 32}h7" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`;
}

function apartmentReal(cx, y, paint) {
  return `${isoTower(cx, y, 18, 46, paint)}<path d="M${cx - 5} ${y + 8}h10M${cx - 5} ${y + 16}h10M${cx - 5} ${y + 24}h10M${cx - 5} ${y + 32}h10M${cx - 5} ${y + 40}h10" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`;
}

function cafeReal(x, y, paint) {
  return `${storefront(x, y, 31, 19, paint)}<path d="M${x + 5} ${y + 15}h22l4 6H${x + 1}z" fill="#fff" opacity=".85"/><path d="M${x + 32} ${y + 10}h8c7 0 7 11 0 11h-8" fill="none" stroke="${paint.roof}" stroke-width="4"/><path d="M${x + 12} ${y - 4}c-4 5 4 5 0 10M${x + 21} ${y - 5}c-4 5 4 5 0 10" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>`;
}

function diningHallReal(x, y, paint) {
  return `${isoBlock(x, y, 47, 24, 18, paint)}<path d="M${x + 11} ${y + 22}v18M${x + 24} ${y + 18}v18M${x + 35} ${y + 20}v15" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M${x + 15} ${y + 30}h24" stroke="${paint.glass}" stroke-width="4" stroke-linecap="round"/>`;
}

function restaurantReal(x, y, paint) {
  return `${storefront(x, y, 35, 21, paint)}<ellipse cx="${x + 47}" cy="${y + 21}" rx="11" ry="6" fill="#fff" opacity=".9"/><circle cx="${x + 47}" cy="${y + 21}" r="4" fill="${paint.roof}"/><path d="M${x + 8} ${y + 28}h19" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`;
}

function activityCenterReal(x, y, paint) {
  return `${isoBlock(x, y, 38, 22, 17, paint)}<path d="M${x + 9} ${y + 18}c7-8 18-8 25 0" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle cx="${x + 14}" cy="${y + 11}" r="4" fill="${paint.glass}"/><circle cx="${x + 31}" cy="${y + 11}" r="4" fill="${paint.glass}"/>`;
}

function pharmacyReal(x, y, paint) {
  return `${isoBlock(x, y, 35, 22, 18, paint)}<rect x="${x + 40}" y="${y + 4}" width="18" height="18" rx="4" fill="#fff"/><path d="M${x + 49} ${y + 8}v10M${x + 44} ${y + 13}h10" stroke="${paint.roof}" stroke-width="4" stroke-linecap="round"/><path d="M${x + 8} ${y + 26}h18" stroke="#fff" stroke-width="3"/>`;
}

function bankReal(x, y, paint) {
  return `${columnHall(x, y, 42, 22, paint)}<polygon points="${x - 2},${y + 4} ${x + 21},${y - 10} ${x + 44},${y + 4}" fill="${paint.light}" stroke="#fff" stroke-width="1"/><ellipse cx="${x + 54}" cy="${y + 30}" rx="8" ry="5" fill="${paint.glass}"/>`;
}

function barbershopReal(x, y, paint) {
  return `${storefront(x, y, 31, 19, paint)}<path d="M${x + 5} ${y + 16}h22l3 5H${x + 2}z" fill="#fff" opacity=".9"/>${barberPole(x + 43, y - 4, paint)}<path d="M${x + 9} ${y + 27}h14" stroke="#fff" stroke-width="3"/>`;
}

function shadeCanopy(x, y, paint) {
  return `<g><polygon points="${x - 12},${y} ${x},${y - 7} ${x + 13},${y} ${x},${y + 7}" fill="${paint.light}" stroke="#fff" stroke-width="1"/><path d="M${x} ${y + 6}v18" stroke="${paint.roof}" stroke-width="3"/></g>`;
}

function curvedBenches(x, y, paint) {
  return `<path d="M${x - 13} ${y}c7 8 18 8 26 0M${x - 11} ${y + 8}c7 6 16 6 22 0" stroke="${paint.roof}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
}

function fireCircle(x, y, paint) {
  return `<g><ellipse cx="${x}" cy="${y + 8}" rx="10" ry="5" fill="${paint.light}"/><path d="M${x} ${y + 6}c-6-8 5-8 0-16c9 8 12 15 0 16z" fill="${paint.roof}"/></g>`;
}

function schoolYard(x, y, paint) {
  return `<polygon points="${x - 7},${y} ${x + 12},${y - 7} ${x + 25},${y} ${x + 6},${y + 9}" fill="${paint.glass}" opacity=".72"/><path d="M${x - 1} ${y}h19" stroke="#fff" stroke-width="2"/>`;
}

function slideSet(x, y, paint) {
  return `<path d="M${x} ${y}v17h16M${x} ${y}c10 4 15 10 16 17" stroke="${paint.roof}" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="${x}" cy="${y}" r="4" fill="${paint.light}"/>`;
}

function workshopScreens(x, y, paint) {
  return `<rect x="${x - 10}" y="${y - 8}" width="20" height="14" rx="2" fill="${paint.glass}" stroke="#fff" stroke-width="1"/><path d="M${x - 5} ${y + 8}h10M${x} ${y + 6}v6" stroke="${paint.roof}" stroke-width="2"/>`;
}

function readingSteps(x, y, paint) {
  return `<path d="M${x - 12} ${y + 10}h27M${x - 8} ${y + 5}h22M${x - 4} ${y}h16" stroke="${paint.roof}" stroke-width="4" stroke-linecap="round"/>`;
}

function studyPods(x, y, paint) {
  return `${isoDome(x - 8, y, 7, paint)}${isoDome(x + 7, y - 4, 8, paint)}${isoDome(x + 21, y + 3, 6, paint)}`;
}

function displayStatue(x, y, paint) {
  return `<g><circle cx="${x}" cy="${y - 12}" r="5" fill="${paint.light}" stroke="#fff" stroke-width="1"/><path d="M${x} ${y - 7}v16M${x - 8} ${y + 9}h16" stroke="${paint.roof}" stroke-width="3" stroke-linecap="round"/></g>`;
}

function sculptureYard(x, y, paint) {
  return `<path d="M${x - 10} ${y + 10}c6-18 23-18 16 0c10-7 15-3 16 4" stroke="${paint.roof}" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse cx="${x + 5}" cy="${y + 16}" rx="17" ry="4" fill="${paint.glass}" opacity=".6"/>`;
}

function ambulanceBay(x, y, paint) {
  return `<g><rect x="${x - 12}" y="${y - 6}" width="24" height="13" rx="4" fill="#fff" stroke="${paint.roof}" stroke-width="1"/><circle cx="${x - 6}" cy="${y + 8}" r="3" fill="${paint.roof}"/><circle cx="${x + 7}" cy="${y + 8}" r="3" fill="${paint.roof}"/><path d="M${x} ${y - 3}v8M${x - 4} ${y + 1}h8" stroke="${paint.accent}" stroke-width="2"/></g>`;
}

function clinicCanopy(x, y, paint) {
  return `<path d="M${x - 12} ${y}h24l5 6h-34z" fill="#fff" opacity=".9"/><path d="M${x - 9} ${y + 8}h18" stroke="${paint.roof}" stroke-width="3"/>`;
}

function privacyScreens(x, y, paint) {
  return `<path d="M${x - 14} ${y}v18M${x} ${y - 4}v21M${x + 14} ${y}v18" stroke="${paint.light}" stroke-width="5" stroke-linecap="round"/><path d="M${x - 14} ${y + 6}h28" stroke="#fff" stroke-width="2"/>`;
}

function rehabTrack(x, y, paint) {
  return `<path d="M${x - 15} ${y}c7-9 23-9 30 0s-7 18-22 12" stroke="${paint.glass}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M${x - 11} ${y + 1}c6-5 16-5 22 0" stroke="#fff" stroke-width="2" fill="none"/>`;
}

function monitorDish(x, y, paint) {
  return `<g><path d="M${x - 12} ${y + 2}c5-12 19-12 24 0z" fill="${paint.light}" stroke="#fff" stroke-width="1"/><path d="M${x} ${y + 3}v15M${x - 9} ${y + 18}h18" stroke="${paint.roof}" stroke-width="3"/></g>`;
}

function parkReal(x, y, paint) {
  return `${treeCluster(x + 4, y + 5, paint)}${treeCluster(x + 27, y - 2, paint)}${treeCluster(x + 51, y + 8, paint)}<ellipse cx="${x + 42}" cy="${y + 26}" rx="13" ry="6" fill="${paint.glass}" opacity=".7"/><path d="M${x} ${y + 31}c18-13 31 4 59-14" fill="none" stroke="${paint.roof}" stroke-width="4" stroke-linecap="round"/>`;
}

function openPlazaReal(x, y, paint) {
  return `<polygon points="${x},${y + 18} ${x + 28},${y + 4} ${x + 56},${y + 18} ${x + 28},${y + 34}" fill="${paint.light}" stroke="#fff" stroke-width="1.2"/><path d="M${x + 14} ${y + 18}h28M${x + 28} ${y + 8}v22" stroke="${paint.roof}" stroke-width="2" opacity=".75"/>`;
}

function taiChiPlazaReal(x, y, paint) {
  return `${openPlazaReal(x, y, paint)}${yinYang(x + 28, y + 18, paint)}`;
}

function sportsFieldReal(paint) {
  return `<polygon points="18,48 49,30 76,43 45,61" fill="${paint.light}" stroke="#fff" stroke-width="1"/><path d="M27 47l29 13M49 31l26 12M49 31l-4 29M35 43c7-6 15-6 23 0" stroke="${paint.roof}" stroke-width="2" opacity=".82"/><path d="M25 43v10h10M66 40v10h-10" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
}

function theaterReal(x, y, paint) {
  return `${isoBlock(x, y, 45, 23, 19, paint)}<path d="M${x + 9} ${y + 17}h28" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M${x + 11} ${y + 25}c7-9 20-9 27 0" stroke="${paint.glass}" stroke-width="4" fill="none"/><circle cx="${x + 6}" cy="${y + 5}" r="4" fill="${paint.light}"/><circle cx="${x + 42}" cy="${y + 5}" r="4" fill="${paint.light}"/>`;
}

function recreationCenterReal(x, y, paint) {
  return `${isoBlock(x, y, 34, 21, 16, paint)}${sportsCourtSmall(x + 40, y + 10, paint)}<path d="M${x + 8} ${y + 24}h18" stroke="#fff" stroke-width="3"/>`;
}

function healingGardenReal(x, y, paint) {
  return `${quietGarden(x + 3, y + 3, paint)}<path d="M${x + 35} ${y + 20}c7-8 17-8 24 0M${x + 39} ${y + 29}c5-5 12-5 17 0" stroke="${paint.glass}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
}

function councilHallReal(x, y, paint) {
  return `${columnHall(x, y, 39, 21, paint)}<path d="M${x + 8} ${y + 31}h25" stroke="${paint.glass}" stroke-width="3" stroke-linecap="round"/>`;
}

function administrationReal(x, y, paint) {
  return `${isoBlock(x, y + 10, 30, 18, 15, paint)}${isoTower(x + 45, y - 1, 14, 45, paint)}${windowStack(x + 45, y + 8, paint)}`;
}

function publicServiceReal(x, y, paint) {
  return `${isoBlock(x, y, 43, 23, 17, paint)}<path d="M${x + 8} ${y + 24}h27M${x + 11} ${y + 31}h8M${x + 24} ${y + 31}h8" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="${x + 51}" cy="${y + 18}" r="7" fill="${paint.glass}"/>`;
}

function informationCenterReal(x, y, paint) {
  return `${isoBlock(x, y, 28, 20, 15, paint)}<circle cx="${x + 15}" cy="${y + 6}" r="4" fill="#fff"/><rect x="${x + 12}" y="${y + 15}" width="6" height="18" fill="#fff"/>${isoTower(x + 48, y - 2, 8, 34, paint)}`;
}

function dispatchCenterReal(x, y, paint) {
  return `${isoBlock(x, y, 35, 20, 16, paint)}${isoPipe(`M${x + 34} ${y + 28}H${x + 62}`, paint)}<circle cx="${x + 61}" cy="${y + 28}" r="7" fill="${paint.glass}"/><path d="M${x + 10} ${y + 24}h18" stroke="#fff" stroke-width="3"/>`;
}

function meetingHallReal(x, y, paint) {
  return `${isoBlock(x, y, 36, 21, 15, paint)}<ellipse cx="${x + 48}" cy="${y + 23}" rx="13" ry="7" fill="${paint.glass}" opacity=".85"/><circle cx="${x + 42}" cy="${y + 20}" r="3" fill="${paint.roof}"/><circle cx="${x + 53}" cy="${y + 23}" r="3" fill="${paint.roof}"/>`;
}

function mediationCenterReal(x, y, paint) {
  return `${isoBlock(x, y, 24, 18, 14, paint)}${isoBlock(x + 28, y, 24, 18, 14, paint)}<path d="M${x + 25} ${y + 17}h8M${x + 10} ${y + 25}h10M${x + 38} ${y + 25}h10" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`;
}

function schoolCampusReal(x, y, paint) {
  return `${isoBlock(x, y, 43, 22, 18, paint)}${gableRoof(x + 8, y - 2, 28, paint)}<path d="M${x + 11} ${y + 24}h24M${x + 12} ${y + 31}h8M${x + 25} ${y + 31}h8" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`;
}

function kindergartenReal(x, y, paint) {
  return `${gableRoof(x + 1, y - 2, 26, paint)}${isoBlock(x, y + 5, 28, 18, 12, paint)}<circle cx="${x + 44}" cy="${y + 20}" r="7" fill="${paint.glass}"/><path d="M${x + 39} ${y + 32}h16" stroke="${paint.roof}" stroke-width="4" stroke-linecap="round"/>`;
}

function trainingCenterReal(x, y, paint) {
  return `${isoBlock(x, y, 39, 22, 17, paint)}<path d="M${x + 9} ${y + 18}h23M${x + 9} ${y + 25}h18M${x + 9} ${y + 32}h14" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`;
}

function libraryReal(x, y, paint) {
  return `${isoBlock(x, y, 36, 22, 16, paint)}${bookBuilding(x + 52, y + 18, paint)}<path d="M${x + 8} ${y + 24}h18M${x + 8} ${y + 31}h18" stroke="#fff" stroke-width="3"/>`;
}

function learningCenterReal(x, y, paint) {
  return `${isoBlock(x, y, 29, 20, 15, paint)}${isoBlock(x + 31, y + 6, 26, 18, 13, paint)}<path d="M${x + 9} ${y + 23}h15M${x + 39} ${y + 27}h12" stroke="#fff" stroke-width="3"/>`;
}

function museumReal(x, y, paint) {
  return `${museumBuilding(x, y, paint)}<ellipse cx="${x + 55}" cy="${y + 29}" rx="8" ry="5" fill="${paint.glass}" opacity=".8"/>`;
}

function galleryReal(x, y, paint) {
  return `${galleryBuilding(x, y, paint)}<path d="M${x + 8} ${y + 25}h21" stroke="#fff" stroke-width="3"/>`;
}

function cultureCenterReal(x, y, paint) {
  return `${isoBlock(x, y, 29, 20, 15, paint)}${isoDome(x + 45, y + 9, 13, paint)}<path d="M${x + 8} ${y + 24}h15" stroke="#fff" stroke-width="3"/>`;
}

function performingArtsReal(x, y, paint) {
  return `${performingArtsHall(x, y, paint)}${spotLights(x + 8, y - 3, paint)}`;
}

function hospitalReal(x, y, paint) {
  return `${isoBlock(x, y, 42, 23, 19, paint)}<rect x="${x + 47}" y="${y + 4}" width="18" height="18" rx="4" fill="#fff"/><path d="M${x + 56} ${y + 8}v10M${x + 51} ${y + 13}h10" stroke="${paint.roof}" stroke-width="4" stroke-linecap="round"/><path d="M${x + 9} ${y + 27}h25" stroke="#fff" stroke-width="3"/>`;
}

function clinicReal(x, y, paint) {
  return `${isoBlock(x, y, 33, 20, 15, paint)}<rect x="${x + 37}" y="${y + 7}" width="16" height="16" rx="4" fill="#fff"/><path d="M${x + 45} ${y + 10}v10M${x + 40} ${y + 15}h10" stroke="${paint.roof}" stroke-width="3.5"/>`;
}

function counselingSuiteReal(x, y, paint) {
  return `${isoBlock(x, y, 34, 19, 14, paint)}<path d="M${x + 10} ${y + 24}c5-7 15-7 20 0" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="${x + 49}" cy="${y + 23}" rx="10" ry="6" fill="${paint.glass}" opacity=".75"/>`;
}

function rehabFacilityReal(x, y, paint) {
  return `${isoBlock(x, y, 35, 19, 14, paint)}<path d="M${x + 42} ${y + 31}c8-17 21-17 28-2" stroke="${paint.roof}" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M${x + 9} ${y + 24}h18" stroke="#fff" stroke-width="3"/>`;
}

function healthMonitoringReal(x, y, paint) {
  return `${isoBlock(x, y, 34, 21, 17, paint)}${isoTower(x + 49, y - 3, 8, 32, paint)}${pulseLine(x + 48, y + 30, paint)}`;
}

function quietHealingReal(x, y, paint) {
  return `${treeCluster(x + 3, y + 3, paint)}${isoDome(x + 38, y + 5, 14, paint)}<path d="M${x + 50} ${y + 27}c6-6 13-6 19 0" stroke="${paint.glass}" stroke-width="3" fill="none"/>`;
}

function stressSupportReal(x, y, paint) {
  return `${isoBlock(x, y, 31, 18, 13, paint)}${calmWaves(x + 49, y + 21, paint)}<path d="M${x + 9} ${y + 23}h15" stroke="#fff" stroke-width="3"/>`;
}

function emergencyCenterReal(x, y, paint) {
  return `${isoBlock(x, y, 37, 22, 18, paint)}<path d="M${x + 42} ${y + 7}l12 21h-24z" fill="#fff" opacity=".92"/><path d="M${x + 42} ${y + 15}v7" stroke="${paint.roof}" stroke-width="2.5"/>`;
}

function safetyStationReal(x, y, paint) {
  return `${isoBlock(x, y, 34, 20, 16, paint)}<path d="M${x + 48} ${y + 2}l14 6v11c0 8-5 13-14 17c-9-4-14-9-14-17V${y + 8}z" fill="${paint.accent}" stroke="#fff" stroke-width="1"/>`;
}

function shelterReal(x, y, paint) {
  return `${isoDome(x + 17, y + 3, 17, paint)}${isoBlock(x + 40, y + 10, 22, 14, 10, paint)}<path d="M${x + 10} ${y + 23}h14" stroke="#fff" stroke-width="3"/>`;
}

function protectiveWallReal(x, y, paint) {
  return `${wallSegment(x, y, paint)}${wallSegment(x + 21, y - 8, paint)}${wallSegment(x + 42, y, paint)}<path d="M${x + 6} ${y - 2}l58-19" stroke="${paint.glass}" stroke-width="2" opacity=".7"/>`;
}

function emergencyBayReal(x, y, paint) {
  return `${maintenanceGarage(x, y, paint)}<path d="M${x + 41} ${y + 31}h26" stroke="#666f76" stroke-width="10" stroke-linecap="round"/><path d="M${x + 41} ${y + 31}h26" stroke="#fff" stroke-width="2" stroke-dasharray="5 5"/><path d="M${x + 50} ${y + 18}l12 7l-12 7" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
}

function monitoringStationReal(x, y, paint) {
  return `${isoTower(x + 12, y, 10, 42, paint)}${cameraPod(x + 44, y + 25, paint)}<path d="M${x + 12} ${y + 10}l32 15" stroke="${paint.roof}" stroke-width="2"/>`;
}

function roadAssetReal(paint) {
  return `<path d="M17 57C30 35 55 65 76 26" fill="none" stroke="#626b72" stroke-width="14" stroke-linecap="round"/><path d="M17 57C30 35 55 65 76 26" fill="none" stroke="#fff" stroke-width="2.5" stroke-dasharray="7 6" stroke-linecap="round"/>`;
}

function pedestrianCorridorReal(x, y, paint) {
  return `<path d="M${x} ${y + 11}h53" stroke="${paint.light}" stroke-width="12" stroke-linecap="round"/><path d="M${x} ${y + 11}h53" stroke="#fff" stroke-width="2" stroke-dasharray="4 5"/><circle cx="${x + 14}" cy="${y + 11}" r="3.5" fill="${paint.roof}"/><circle cx="${x + 38}" cy="${y + 11}" r="3.5" fill="${paint.roof}"/>`;
}

function airtightConnectorReal(x, y, paint) {
  return `${isoTube(x, y, 54, paint)}${airlockRings(x + 11, y, paint)}${airlockRings(x + 46, y, paint)}`;
}

function roverDockReal(x, y, paint) {
  return `${roverDock(x, y, paint)}${wheelPair(x + 10, y + 15, paint)}${wheelPair(x + 33, y + 15, paint)}<path d="M${x - 2} ${y + 24}h58" stroke="#666f76" stroke-width="6" stroke-linecap="round"/>`;
}

function transportCenterReal(x, y, paint) {
  return `${transportHub(x, y, paint)}<path d="M${x + 2} ${y + 25}h55" stroke="#666f76" stroke-width="10" stroke-linecap="round"/><path d="M${x + 2} ${y + 25}h55" stroke="#fff" stroke-width="2" stroke-dasharray="6 6"/>`;
}

function communicationTowerReal(cx, y, paint) {
  return `${isoTower(cx, y, 10, 46, paint)}${signalArcs(cx, y + 6, paint)}<path d="M${cx - 15} ${y + 48}h30" stroke="${paint.roof}" stroke-width="3"/>`;
}

function communicationCenterReal(x, y, paint) {
  return `${isoBlock(x, y, 31, 20, 15, paint)}${isoTower(x + 48, y - 8, 8, 38, paint)}${signalArcs(x + 48, y - 2, paint)}`;
}

function landingPadReal(cx, cy, paint) {
  return `${landingRing(cx, cy, paint)}${landingLegs(cx, cy, paint)}<path d="M${cx - 8} ${cy + 7}h16V${cy - 10}" stroke="${paint.roof}" stroke-width="4" fill="none" stroke-linejoin="round"/>`;
}

function maintenanceCenterReal(x, y, paint) {
  return `${maintenanceGarage(x, y, paint)}<path d="M${x + 42} ${y + 28}l18-18M${x + 54} ${y + 10}l8 8" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M${x + 8} ${y + 27}h20" stroke="${paint.glass}" stroke-width="3"/>`;
}

function storefront(x, y, w, d, paint) {
  return `${isoBlock(x, y, w, d, 15, paint)}<path d="M${x + 6} ${y + d / 2 + 14}h${w * .38}" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M${x + w * .52} ${y + d / 2 + 12}h${w * .27}" stroke="${paint.glass}" stroke-width="5" stroke-linecap="round"/>`;
}

function columnHall(x, y, w, d, paint) {
  return `<g>${isoBlock(x, y, w, d, 16, paint)}<path d="M${x + 8} ${y + d / 2 + 9}v16M${x + 17} ${y + d / 2 + 6}v16M${x + 26} ${y + d / 2 + 4}v16M${x + 35} ${y + d / 2 + 2}v16" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g>`;
}

function medicalCross(cx, cy, paint) {
  return `<g><rect x="${cx - 3}" y="${cy - 12}" width="6" height="24" rx="1.5" fill="#fff"/><rect x="${cx - 12}" y="${cy - 3}" width="24" height="6" rx="1.5" fill="#fff"/><path d="M${cx - 3} ${cy - 12}h6v24h-6zM${cx - 12} ${cy - 3}h24v6h-24z" fill="${paint.roof}" opacity=".25"/></g>`;
}

function windowStack(cx, y, paint) {
  return `<path d="M${cx - 5} ${y}h10M${cx - 5} ${y + 8}h10M${cx - 5} ${y + 16}h10M${cx - 5} ${y + 24}h10" stroke="${paint.glass}" stroke-width="2.2" stroke-linecap="round"/>`;
}

function cafeBuilding(x, y, paint) {
  return `${storefront(x, y, 27, 18, paint)}<path d="M${x + 30} ${y + 12}h9c7 0 7 11 0 11h-8" fill="none" stroke="${paint.roof}" stroke-width="4"/><path d="M${x + 12} ${y - 4}c-4 5 4 5 0 10M${x + 21} ${y - 5}c-4 5 4 5 0 10" stroke="${paint.glass}" stroke-width="2" fill="none" stroke-linecap="round"/>`;
}

function patioTables(x, y, paint) {
  return `<g><ellipse cx="${x}" cy="${y}" rx="6" ry="3" fill="${paint.light}"/><path d="M${x} ${y + 2}v8" stroke="${paint.roof}" stroke-width="2"/><ellipse cx="${x + 15}" cy="${y + 5}" rx="5" ry="2.5" fill="${paint.light}"/><path d="M${x + 15} ${y + 7}v7" stroke="${paint.roof}" stroke-width="2"/></g>`;
}

function diningHall(x, y, paint) {
  return `${isoBlock(x, y, 43, 22, 17, paint)}<path d="M${x + 12} ${y + 19}v18M${x + 25} ${y + 15}v18M${x + 32} ${y + 16}v15" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M${x + 17} ${y + 25}h18" stroke="${paint.glass}" stroke-width="3" stroke-linecap="round"/>`;
}

function restaurantBuilding(x, y, paint) {
  return `${isoBlock(x, y, 35, 21, 16, paint)}<ellipse cx="${x + 44}" cy="${y + 21}" rx="11" ry="6" fill="${paint.light}"/><circle cx="${x + 44}" cy="${y + 21}" r="4" fill="${paint.glass}"/>`;
}

function barberPole(x, y, paint) {
  return `<g><rect x="${x - 3}" y="${y}" width="6" height="30" rx="3" fill="#fff" stroke="${paint.roof}" stroke-width="1"/><path d="M${x - 2} ${y + 6}l5 4M${x - 2} ${y + 15}l5 4M${x - 2} ${y + 24}l5 4" stroke="${paint.accent}" stroke-width="2"/></g>`;
}

function picnicShelter(x, y, paint) {
  return `<g><polygon points="${x},${y} ${x + 18},${y - 10} ${x + 37},${y} ${x + 18},${y + 10}" fill="${paint.light}" stroke="#fff" stroke-width="1"/><path d="M${x + 8} ${y + 4}v18M${x + 28} ${y + 4}v18" stroke="${paint.roof}" stroke-width="3"/><path d="M${x + 8} ${y + 18}h20" stroke="${paint.accent}" stroke-width="4"/></g>`;
}

function goalPost(x, y, paint) {
  return `<path d="M${x} ${y}v12h12v-12" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>`;
}

function spotLights(x, y, paint) {
  return `<g><path d="M${x} ${y}v20M${x + 39} ${y - 2}v20" stroke="${paint.roof}" stroke-width="2"/><circle cx="${x}" cy="${y}" r="4" fill="${paint.glass}"/><circle cx="${x + 39}" cy="${y - 2}" r="4" fill="${paint.glass}"/></g>`;
}

function sportsCourtSmall(x, y, paint) {
  return `<polygon points="${x},${y} ${x + 20},${y - 9} ${x + 35},${y - 2} ${x + 15},${y + 8}" fill="${paint.light}" stroke="#fff" stroke-width="1"/><path d="M${x + 8} ${y - 1}l15 7M${x + 17} ${y - 7}v13" stroke="${paint.roof}" stroke-width="1.6"/>`;
}

function quietGarden(x, y, paint) {
  return `${treeCluster(x, y, paint)}${pathCurve(paint)}<ellipse cx="${x + 28}" cy="${y + 6}" rx="12" ry="6" fill="${paint.glass}" opacity=".65"/>`;
}

function councilChamber(x, y, paint) {
  return `${isoDome(x + 18, y + 8, 16, paint)}${columnHall(x + 26, y + 17, 30, 16, paint)}`;
}

function officeTower(cx, y, paint) {
  return `${isoTower(cx, y, 15, 42, paint)}${windowStack(cx, y + 8, paint)}`;
}

function serviceHub(cx, cy, paint) {
  return `${isoDome(cx, cy, 17, paint)}${medicalCross(cx, cy + 5, paint)}`;
}

function infoKiosk(x, y, paint) {
  return `${isoBlock(x, y, 22, 18, 16, paint)}<circle cx="${x + 26}" cy="${y + 4}" r="4" fill="${paint.light}"/><rect x="${x + 23}" y="${y + 12}" width="6" height="20" fill="${paint.roof}"/>`;
}

function dispatchHub(cx, cy, paint) {
  return `<g>${isoDome(cx, cy, 14, paint)}<circle cx="${cx}" cy="${cy + 5}" r="5" fill="${paint.glass}"/><circle cx="${cx - 22}" cy="${cy + 7}" r="5" fill="${paint.accent}"/><circle cx="${cx + 23}" cy="${cy + 3}" r="5" fill="${paint.accent}"/><path d="M${cx - 17} ${cy + 7}h34" stroke="${paint.roof}" stroke-width="3"/></g>`;
}

function roundMeetingPods(x, y, paint) {
  return `${isoDome(x, y, 11, paint)}${isoDome(x + 18, y - 6, 12, paint)}${isoDome(x + 36, y + 2, 10, paint)}`;
}

function twoRoomMediation(x, y, paint) {
  return `${isoBlock(x, y, 24, 18, 14, paint)}${isoBlock(x + 28, y, 24, 18, 14, paint)}<path d="M${x + 25} ${y + 16}h8" stroke="${paint.glass}" stroke-width="4"/>`;
}

function schoolBuilding(x, y, paint) {
  return `${isoBlock(x, y, 42, 22, 18, paint)}<polygon points="${x + 8},${y + 2} ${x + 22},${y - 7} ${x + 36},${y + 2} ${x + 22},${y + 9}" fill="${paint.roof}"/><path d="M${x + 12} ${y + 20}h24" stroke="#fff" stroke-width="3"/>`;
}

function kindergartenBuilding(x, y, paint) {
  return `${isoDome(x + 12, y + 1, 11, paint)}${isoBlock(x + 22, y, 27, 18, 12, paint)}<circle cx="${x + 55}" cy="${y + 15}" r="5" fill="${paint.glass}"/>`;
}

function playBlocks(x, y, paint) {
  return `${isoBlock(x, y, 9, 8, 7, paint)}${isoBlock(x + 11, y + 2, 9, 8, 10, paint)}${isoBlock(x + 22, y + 6, 9, 8, 7, paint)}`;
}

function trainingCenter(x, y, paint) {
  return `${isoBlock(x, y, 38, 22, 17, paint)}<path d="M${x + 9} ${y + 18}h21M${x + 9} ${y + 25}h16" stroke="${paint.glass}" stroke-width="3"/>`;
}

function bookBuilding(cx, cy, paint) {
  return `<g><path d="M${cx - 28} ${cy}c10-7 19-7 28 1v20c-9-8-18-8-28-2z" fill="${paint.accent}" stroke="#fff" stroke-width="1"/><path d="M${cx} ${cy + 1}c9-8 18-8 28-1v19c-10-6-19-6-28 2z" fill="${paint.roof}" stroke="#fff" stroke-width="1"/><path d="M${cx} ${cy + 2}v21" stroke="${paint.glass}" stroke-width="2"/></g>`;
}

function museumBuilding(x, y, paint) {
  return `${columnHall(x, y, 38, 21, paint)}<polygon points="${x - 2},${y + 4} ${x + 19},${y - 10} ${x + 40},${y + 4}" fill="${paint.light}" stroke="#fff" stroke-width="1"/>`;
}

function galleryBuilding(x, y, paint) {
  return `${isoBlock(x, y, 36, 22, 16, paint)}${artFrames(x + 42, y + 13, paint)}`;
}

function artFrames(x, y, paint) {
  return `<g><rect x="${x}" y="${y}" width="13" height="10" rx="1" fill="${paint.light}" stroke="#fff" stroke-width="1"/><path d="M${x + 2} ${y + 8}l4-5l3 3l2-2l2 4z" fill="${paint.roof}"/><rect x="${x + 17}" y="${y + 5}" width="12" height="9" rx="1" fill="${paint.glass}" stroke="#fff" stroke-width="1"/></g>`;
}

function cultureCenter(x, y, paint) {
  return `${isoDome(x + 16, y + 4, 13, paint)}${isoDome(x + 36, y, 13, paint)}${isoBlock(x + 43, y + 13, 18, 13, 10, paint)}`;
}

function performingArtsHall(x, y, paint) {
  return `${isoBlock(x, y, 42, 22, 18, paint)}<path d="M${x + 10} ${y + 14}c7-9 18-9 25 0" fill="none" stroke="${paint.glass}" stroke-width="4"/><path d="M${x + 8} ${y + 30}h28" stroke="#fff" stroke-width="3"/>`;
}

function medicalCampus(x, y, paint) {
  return `${isoBlock(x, y, 30, 22, 18, paint)}${isoDome(x + 45, y + 8, 12, paint)}`;
}

function clinicBuilding(x, y, paint) {
  return `${isoBlock(x, y, 32, 20, 15, paint)}<path d="M${x + 9} ${y + 21}h16" stroke="#fff" stroke-width="3"/>`;
}

function counselingPod(cx, cy, paint) {
  return `${isoDome(cx, cy, 17, paint)}<path d="M${cx - 9} ${cy + 8}c4-8 14-8 18 0" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>`;
}

function heartMark(cx, cy, paint) {
  return `<path d="M${cx} ${cy + 11}l-11-10c-8-8 4-18 11-8c7-10 19 0 11 8z" fill="${paint.roof}" stroke="#fff" stroke-width="1"/>`;
}

function rehabCenter(x, y, paint) {
  return `${isoBlock(x, y, 34, 19, 14, paint)}<path d="M${x + 42} ${y + 31}c8-17 21-17 28-2" stroke="${paint.roof}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
}

function walkingPath(x, y, paint) {
  return `<path d="M${x} ${y}c9-8 18-8 27 0" stroke="${paint.glass}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
}

function monitoringCenter(x, y, paint) {
  return `${isoBlock(x, y, 34, 21, 17, paint)}${isoTower(x + 48, y - 3, 8, 32, paint)}`;
}

function pulseLine(x, y, paint) {
  return `<path d="M${x - 16} ${y}h9l4-8l7 18l5-10h13" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>`;
}

function calmWaves(x, y, paint) {
  return `<path d="M${x - 18} ${y}c6-7 13-7 19 0s13 7 19 0M${x - 15} ${y + 8}c5-5 11-5 16 0s11 5 16 0" stroke="${paint.glass}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
}

function emergencyCenter(x, y, paint) {
  return `${isoBlock(x, y, 36, 22, 18, paint)}<path d="M${x + 18} ${y + 9}l13 23h-26z" fill="#fff" opacity=".9"/><path d="M${x + 18} ${y + 18}v8" stroke="${paint.roof}" stroke-width="2"/>`;
}

function emergencyArrow(x, y, paint) {
  return `<path d="M${x - 15} ${y}h30M${x + 4} ${y - 11}l13 11l-13 11" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
}

function cameraPod(cx, cy, paint) {
  return `<g><path d="M${cx - 14} ${cy - 5}h24l8 7l-8 7h-24z" fill="${paint.accent}" stroke="#fff" stroke-width="1"/><circle cx="${cx - 1}" cy="${cy + 2}" r="5" fill="${paint.glass}"/></g>`;
}

function walkway(x, y, paint) {
  return `<path d="M${x} ${y}h50" stroke="${paint.accent}" stroke-width="12" stroke-linecap="round"/><path d="M${x} ${y}h50" stroke="#fff" stroke-width="2" stroke-dasharray="3 5" stroke-linecap="round"/>`;
}

function smallPeopleDots(x, y, paint) {
  return `<circle cx="${x}" cy="${y - 6}" r="3" fill="${paint.roof}"/><circle cx="${x + 12}" cy="${y + 5}" r="3" fill="${paint.roof}"/><circle cx="${x + 26}" cy="${y - 4}" r="3" fill="${paint.roof}"/>`;
}

function airlockRings(cx, cy, paint) {
  return `<ellipse cx="${cx}" cy="${cy}" rx="7" ry="10" fill="none" stroke="${paint.glass}" stroke-width="3"/>`;
}

function roverDock(x, y, paint) {
  return `${isoBlock(x, y, 38, 16, 11, paint)}<rect x="${x + 12}" y="${y - 7}" width="18" height="9" rx="4" fill="${paint.glass}"/>`;
}

function transportHub(x, y, paint) {
  return `${isoBlock(x, y, 38, 23, 18, paint)}<path d="M${x + 9} ${y + 24}h22" stroke="${paint.glass}" stroke-width="4"/>`;
}

function landingLegs(cx, cy, paint) {
  return `<path d="M${cx - 12} ${cy + 10}l-9 9M${cx + 12} ${cy + 10}l9 9M${cx} ${cy - 10}v24" stroke="${paint.roof}" stroke-width="3" stroke-linecap="round"/>`;
}

function cropRows(x, y, paint) {
  return `<path d="M${x} ${y}h26M${x - 2} ${y + 6}h28M${x - 4} ${y + 12}h30" stroke="${paint.roof}" stroke-width="2" stroke-linecap="round"/>`;
}

function maintenanceGarage(x, y, paint) {
  return `${isoBlock(x, y, 41, 23, 17, paint)}${isoDoor(x + 24, y + 20, paint)}`;
}

function toolMark(x, y, paint) {
  return `<path d="M${x - 9} ${y - 9}l8 8l-12 12l5 5l12-12l8 8l4-4l-22-22z" fill="#fff" opacity=".9" stroke="${paint.roof}" stroke-width="1"/>`;
}

function factoryBuilding(x, y, paint) {
  return `<g>${isoBlock(x, y + 6, 43, 20, 16, paint)}<path d="M${x} ${y + 17}l11-8v8l11-8v8l11-8v8" fill="none" stroke="${paint.light}" stroke-width="5" stroke-linejoin="round"/></g>`;
}

function smokeStacks(x, y, paint) {
  return `${isoTower(x, y, 8, 32, paint)}${isoTower(x + 13, y + 6, 7, 25, paint)}`;
}

function printerGantry(x, y, paint) {
  return `<g><path d="M${x} ${y}h38v9h-38z" fill="${paint.light}" stroke="#fff" stroke-width="1"/><path d="M${x + 7} ${y + 9}v26M${x + 31} ${y + 9}v26" stroke="${paint.roof}" stroke-width="4"/><rect x="${x + 15}" y="${y + 16}" width="14" height="10" rx="2" fill="${paint.glass}"/></g>`;
}

function storageDepot(x, y, paint) {
  return `${isoBlock(x, y, 24, 17, 14, paint)}${isoBlock(x + 25, y - 2, 24, 17, 14, paint)}${isoBlock(x + 12, y + 15, 24, 17, 14, paint)}`;
}

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = ((hash << 5) - hash + value.charCodeAt(index)) | 0;
  }
  return hash;
}

function facilityMark(assetName, accent, dark) {
  const markColor = dark;
  const secondary = shade(accent, 48);
  const marks = {
    "Convenience Store": `<path d="M33 36h26v18H33z" fill="${markColor}"/><path d="M36 31h20l5 8H31z" fill="${secondary}"/><path d="M39 45h14" stroke="${dark}" stroke-width="3"/>`,
    "Family Housing Unit": `<circle cx="38" cy="36" r="5" fill="${markColor}"/><circle cx="50" cy="34" r="6" fill="${markColor}"/><circle cx="58" cy="39" r="4" fill="${markColor}"/>`,
    "Single Apartment": `<rect x="42" y="30" width="9" height="22" rx="3" fill="${markColor}"/><circle cx="46.5" cy="26" r="5" fill="${markColor}"/>`,
    "Cafe": `<path d="M35 36h18v11c0 6-4 10-9 10s-9-4-9-10z" fill="${markColor}"/><path d="M53 39h5c5 0 5 9 0 9h-5" stroke="${markColor}" stroke-width="4" fill="none"/><path d="M39 28c-3 4 3 5 0 9M48 28c-3 4 3 5 0 9" stroke="${dark}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    "Community Dining Hall": `<rect x="35" y="31" width="8" height="23" rx="3" fill="${markColor}"/><path d="M52 31v23M47 31v9c0 5 10 5 10 0v-9" stroke="${markColor}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
    "Restaurant": `<circle cx="46" cy="42" r="13" fill="${markColor}" opacity=".94"/><circle cx="46" cy="42" r="6" fill="${secondary}"/>`,
    "Community Activity Center": `<path d="M31 48c7-16 23-16 30 0" stroke="${markColor}" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="36" cy="36" r="5" fill="${markColor}"/><circle cx="56" cy="36" r="5" fill="${markColor}"/>`,
    "Pharmacy": `<path d="M34 34h24v20H34z" fill="${markColor}"/><path d="M46 38v12M40 44h12" stroke="#fff" stroke-width="4" stroke-linecap="round"/>`,
    "Bank": `<path d="M30 35l16-10l16 10z" fill="${markColor}"/><path d="M34 39h24v5H34zM36 48h20v5H36z" fill="${markColor}"/><path d="M38 39v13M46 39v13M54 39v13" stroke="${dark}" stroke-width="3"/>`,
    "Barbershop": `<circle cx="40" cy="40" r="7" fill="${markColor}"/><circle cx="54" cy="40" r="7" fill="${markColor}"/><path d="M35 54l27-27M57 54L30 27" stroke="${dark}" stroke-width="3" stroke-linecap="round"/>`,
    "Park": `<circle cx="36" cy="35" r="9" fill="${markColor}"/><circle cx="55" cy="32" r="11" fill="${markColor}" opacity=".86"/><path d="M46 40v16" stroke="${dark}" stroke-width="4"/>`,
    "Open Activity Area": `<circle cx="46" cy="43" r="18" fill="none" stroke="${markColor}" stroke-width="5"/><circle cx="46" cy="43" r="4" fill="${markColor}"/>`,
    "Tai Chi Plaza": `<circle cx="46" cy="42" r="16" fill="${markColor}"/><path d="M46 26a16 16 0 0 1 0 32a8 8 0 0 0 0-16a8 8 0 0 1 0-16z" fill="${dark}"/><circle cx="46" cy="34" r="3" fill="${dark}"/><circle cx="46" cy="50" r="3" fill="${markColor}"/>`,
    "Outdoor Gathering Space": `<path d="M28 50h36" stroke="${markColor}" stroke-width="5" stroke-linecap="round"/><path d="M34 40h24" stroke="${markColor}" stroke-width="5" stroke-linecap="round"/><circle cx="34" cy="32" r="4" fill="${markColor}"/><circle cx="58" cy="32" r="4" fill="${markColor}"/>`,
    "Sports Area": `<circle cx="46" cy="42" r="15" fill="none" stroke="${markColor}" stroke-width="4"/><path d="M33 42h26M46 29v26" stroke="${markColor}" stroke-width="3"/>`,
    "Theater": `<path d="M31 33h30v18c-8 8-22 8-30 0z" fill="${markColor}"/><circle cx="40" cy="41" r="2" fill="${dark}"/><circle cx="52" cy="41" r="2" fill="${dark}"/><path d="M39 49c4 3 10 3 14 0" stroke="${dark}" stroke-width="2" fill="none"/>`,
    "Recreation Center": `<path d="M32 45c8-10 20-10 28 0v9H32z" fill="${markColor}"/><circle cx="46" cy="33" r="8" fill="${markColor}"/>`,
    "Entertainment Pod": `<rect x="31" y="34" width="30" height="18" rx="6" fill="${markColor}"/><circle cx="40" cy="43" r="3" fill="${dark}"/><path d="M52 40v6M49 43h6" stroke="${dark}" stroke-width="2"/>`,
    "Stress Relief Space": `<path d="M34 49c3-15 21-20 24-4c-8-4-16 1-24 4z" fill="${markColor}"/><path d="M37 50c8 6 18 3 24-5" stroke="${markColor}" stroke-width="3" fill="none"/>`,
    "Community Council Center": `<path d="M30 49h32M35 41h22M40 33h12" stroke="${markColor}" stroke-width="5" stroke-linecap="round"/>`,
    "Administration Center": `<rect x="33" y="29" width="26" height="25" fill="${markColor}"/><path d="M38 35h16M38 42h16M38 49h10" stroke="${dark}" stroke-width="2"/>`,
    "Public Service Center": `<circle cx="46" cy="41" r="16" fill="${markColor}"/><path d="M46 31v20M36 41h20" stroke="${dark}" stroke-width="3"/>`,
    "Information Service Center": `<circle cx="46" cy="31" r="4" fill="${markColor}"/><rect x="42" y="38" width="8" height="17" fill="${markColor}"/>`,
    "Resource Dispatch Center": `<path d="M30 42h32M46 28v28" stroke="${markColor}" stroke-width="4"/><circle cx="46" cy="42" r="8" fill="${markColor}"/><circle cx="30" cy="42" r="5" fill="${markColor}"/><circle cx="62" cy="42" r="5" fill="${markColor}"/>`,
    "Community Meeting Space": `<rect x="29" y="36" width="34" height="17" rx="4" fill="${markColor}"/><circle cx="35" cy="31" r="4" fill="${markColor}"/><circle cx="46" cy="29" r="4" fill="${markColor}"/><circle cx="57" cy="31" r="4" fill="${markColor}"/>`,
    "Conflict Mediation Space": `<path d="M33 37h18l8-7v24H33z" fill="${markColor}"/><path d="M38 43h15" stroke="${dark}" stroke-width="2"/>`,
    "School": `<path d="M28 34l18-9l18 9l-18 9z" fill="${markColor}"/><path d="M34 41v10c8 5 16 5 24 0V41" fill="${markColor}"/>`,
    "Kindergarten": `<path d="M32 42h28l-4 12H36z" fill="${markColor}"/><circle cx="38" cy="56" r="4" fill="${dark}"/><circle cx="54" cy="56" r="4" fill="${dark}"/><circle cx="46" cy="32" r="7" fill="${secondary}"/>`,
    "Training Center": `<rect x="31" y="32" width="30" height="22" rx="4" fill="${markColor}"/><path d="M38 39h16M38 46h12" stroke="${dark}" stroke-width="3" stroke-linecap="round"/>`,
    "Library": `<path d="M31 31h14v24H31zM47 31h14v24H47z" fill="${markColor}"/><path d="M36 36h5M52 36h5" stroke="${dark}" stroke-width="2"/>`,
    "Community Learning Center": `<path d="M29 34c8-4 14-3 17 2c3-5 9-6 17-2v22c-8-4-14-3-17 2c-3-5-9-6-17-2z" fill="${markColor}"/>`,
    "Museum": `<path d="M29 32l17-10l17 10z" fill="${markColor}"/><path d="M33 35h26v19H33z" fill="${markColor}"/><circle cx="46" cy="44" r="5" fill="${dark}"/>`,
    "Art Gallery": `<path d="M34 53l7-24l20 15z" fill="${markColor}"/><circle cx="38" cy="40" r="3" fill="${dark}"/><circle cx="46" cy="37" r="3" fill="${dark}"/><circle cx="51" cy="45" r="3" fill="${dark}"/>`,
    "Cultural Activity Center": `<circle cx="37" cy="38" r="9" fill="${markColor}"/><circle cx="55" cy="38" r="9" fill="${markColor}" opacity=".76"/><path d="M35 51h23" stroke="${markColor}" stroke-width="5"/>`,
    "Performing Arts Center": `<path d="M31 33h30v18c-8 8-22 8-30 0z" fill="${markColor}"/><circle cx="40" cy="41" r="2" fill="${dark}"/><circle cx="52" cy="41" r="2" fill="${dark}"/><path d="M39 49c4 3 10 3 14 0" stroke="${dark}" stroke-width="2" fill="none"/>`,
    "Medical Center": `<rect x="42" y="29" width="8" height="26" fill="${markColor}"/><rect x="33" y="38" width="26" height="8" fill="${markColor}"/>`,
    "Clinic": `<path d="M33 34h26v20H33z" fill="${markColor}"/><path d="M46 38v12M40 44h12" stroke="${dark}" stroke-width="3"/>`,
    "Counseling Room": `<path d="M34 39c0-9 10-14 18-8c9-1 13 11 5 18l-11 9l-11-9c-2-2-2-6-1-10z" fill="${markColor}"/>`,
    "Rehabilitation Space": `<path d="M34 54c10-20 24-20 30-3" stroke="${markColor}" stroke-width="5" fill="none"/><path d="M37 35h19" stroke="${markColor}" stroke-width="5" stroke-linecap="round"/>`,
    "Health Monitoring Center": `<path d="M30 45h10l4-10l6 20l5-10h8" stroke="${markColor}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
    "Quiet Healing Space": `<path d="M32 51c12-24 28-24 32 0c-9-8-21-8-32 0z" fill="${markColor}"/>`,
    "Stress Support Area": `<path d="M32 44c7-12 21-12 28 0M36 54c5-8 15-8 20 0" stroke="${markColor}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
    "Emergency Center": `<path d="M46 25l18 31H28z" fill="${markColor}"/><rect x="44" y="35" width="4" height="11" fill="${dark}"/><circle cx="46" cy="51" r="2" fill="${dark}"/>`,
    "Safety Station": `<path d="M46 25l18 8v13c0 9-7 14-18 18c-11-4-18-9-18-18V33z" fill="${markColor}"/>`,
    "Shelter Pod": `<path d="M29 52c3-18 11-27 17-27s14 9 17 27z" fill="${markColor}"/><rect x="40" y="42" width="12" height="13" fill="${dark}" opacity=".6"/>`,
    "Protective Facility": `<path d="M29 52l8-22h18l8 22z" fill="${markColor}"/><path d="M37 42h18" stroke="${dark}" stroke-width="3"/>`,
    "Emergency Response Space": `<path d="M30 43h32" stroke="${markColor}" stroke-width="5"/><path d="M51 30l12 13l-12 13" fill="none" stroke="${markColor}" stroke-width="5" stroke-linecap="round"/>`,
    "Security Monitoring Station": `<path d="M31 39h25l8 7l-8 7H31z" fill="${markColor}"/><circle cx="43" cy="46" r="5" fill="${dark}"/>`,
    "Road": `<path d="M30 56c6-20 25-23 32-46" stroke="${markColor}" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M35 51c6-14 18-18 22-35" stroke="${dark}" stroke-width="2" fill="none" stroke-dasharray="4 4"/>`,
    "Pedestrian Corridor": `<path d="M27 50h38" stroke="${markColor}" stroke-width="8" stroke-linecap="round"/><circle cx="35" cy="50" r="4" fill="${dark}"/><circle cx="57" cy="50" r="4" fill="${dark}"/>`,
    "Airtight Connector": `<path d="M29 45h34" stroke="${markColor}" stroke-width="13" stroke-linecap="round"/><path d="M34 37v16M46 37v16M58 37v16" stroke="${dark}" stroke-width="2"/>`,
    "Rover Docking Area": `<rect x="30" y="39" width="32" height="14" rx="5" fill="${markColor}"/><circle cx="37" cy="55" r="4" fill="${dark}"/><circle cx="55" cy="55" r="4" fill="${dark}"/><path d="M39 35h14" stroke="${markColor}" stroke-width="4"/>`,
    "Transport Center": `<path d="M28 50h36l-6-14H34z" fill="${markColor}"/><path d="M34 36h24" stroke="${dark}" stroke-width="3"/>`,
    "Communication Tower": `<path d="M46 25v31" stroke="${markColor}" stroke-width="5"/><path d="M33 35c8-8 18-8 26 0M29 28c11-12 23-12 34 0" stroke="${markColor}" stroke-width="3" fill="none"/>`,
    "Communication Center": `<circle cx="46" cy="43" r="7" fill="${markColor}"/><path d="M34 43c2-10 22-10 24 0M30 43c2-17 30-17 32 0" stroke="${markColor}" stroke-width="3" fill="none"/>`,
    "Landing Platform": `<circle cx="46" cy="43" r="18" fill="none" stroke="${markColor}" stroke-width="5"/><path d="M39 52h15V30" stroke="${markColor}" stroke-width="5" fill="none"/>`,
    "Greenhouse": `<path d="M28 53c5-28 31-28 36 0z" fill="${markColor}" opacity=".9"/><path d="M46 31v22M35 45h22" stroke="${dark}" stroke-width="2"/>`,
    "Agriculture Module": `<path d="M33 54c1-14 9-23 13-23s12 9 13 23z" fill="${markColor}"/><path d="M46 53c-1-10-7-15-15-17M46 53c1-10 7-15 15-17" stroke="${dark}" stroke-width="3" fill="none"/>`,
    "Water Recycling Center": `<path d="M46 26c12 13 16 19 16 26c0 8-7 12-16 12s-16-4-16-12c0-7 4-13 16-26z" fill="${markColor}"/>`,
    "Energy Station": `<path d="M49 24L34 45h12l-3 18l16-24H47z" fill="${markColor}"/>`,
    "Resource Processing Station": `<circle cx="46" cy="42" r="15" fill="none" stroke="${markColor}" stroke-width="5"/><path d="M46 24v7M46 53v7M28 42h7M57 42h7" stroke="${markColor}" stroke-width="4"/>`,
    "Maintenance Center": `<path d="M34 30l10 10l-12 12l7 7l12-12l10 10l5-5l-27-27z" fill="${markColor}"/>`,
    "Factory": `<path d="M28 53V35l12 8V35l12 8V31h12v22z" fill="${markColor}"/>`,
    "3D Printing Construction Center": `<path d="M31 31h30v8H31zM37 39h18v16H37z" fill="${markColor}"/><path d="M46 39v16" stroke="${dark}" stroke-width="3"/>`,
    "Supply Storage Center": `<path d="M31 36l15-8l15 8v18H31z" fill="${markColor}"/><path d="M36 42h20M36 49h20" stroke="${dark}" stroke-width="3"/>`,
  };
  return marks[assetName] || `<path d="M46 27l5 10l11 2l-8 8l2 11l-10-5l-10 5l2-11l-8-8l11-2z" fill="${markColor}"/>`;
}

function shade(hex, amount) {
  const value = hex.replace("#", "");
  const number = parseInt(value, 16);
  const r = Math.max(0, Math.min(255, (number >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((number >> 8) & 0xff) + amount));
  const b = Math.max(0, Math.min(255, (number & 0xff) + amount));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function renderLibrary() {
  categoryList.innerHTML = categories.map((category, index) => `
    <section class="category" data-category="${category.id}">
      <button type="button" class="category-toggle">
        <span class="category-dot" style="background:${category.color}"></span>
        <span>
          <span class="category-name">${index + 1}. ${category.name}</span>
          <small>${category.zh}</small>
        </span>
        <small>${category.assets.length}</small>
      </button>
      <div class="asset-grid">
        ${category.assets.map((asset) => `
          <article class="asset-card" draggable="true" data-asset="${asset}" data-category="${category.name}" style="--asset-tint:${category.color}12">
            <div class="asset-preview">${iconSvg(category.id, category.color, asset)}</div>
            <strong>${asset}</strong>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");

  document.querySelectorAll(".asset-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.pendingAsset = {
        name: card.dataset.asset,
        category: card.dataset.category,
      };
      document.querySelectorAll(".asset-card").forEach((item) => item.classList.toggle("armed", item === card));
      activeToolHint.textContent = `Ready to place: ${card.dataset.asset}. Click the canvas.`;
      setTool("select");
      activeToolHint.textContent = `Ready to place: ${card.dataset.asset}. Click the canvas.`;
    });
    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("application/json", JSON.stringify({
        name: card.dataset.asset,
        category: card.dataset.category,
      }));
      event.dataTransfer.effectAllowed = "copy";
    });
  });
}

function renderSteps() {
  $("#stepList").innerHTML = steps.map((step, index) => `
    <li class="${state.currentStep === index ? "active" : ""}" data-step="${index}">${step}</li>
  `).join("");
  $("#stepPill").textContent = `Step ${state.currentStep + 1} · Learning Flow`;
  document.querySelectorAll("#stepList li").forEach((item) => {
    item.addEventListener("click", () => {
      pushHistory();
      state.currentStep = Number(item.dataset.step);
      renderSteps();
    });
  });
}

function renderAllocation() {
  categories.forEach((category) => {
    state.allocation[category.name] ||= { area: "", ratio: "", reason: "" };
  });
  $("#allocationTable").innerHTML = categories.map((category) => {
    const row = state.allocation[category.name];
    return `
      <div class="allocation-row" style="border-left:4px solid ${category.color}; padding-left:7px">
        <strong><span>${category.zh}</span></strong>
        <span class="field-with-unit"><input data-allocation="${category.name}" data-field="area" type="text" value="${escapeHtml(row.area)}" placeholder="Enter" /><em>km²</em></span>
        <span class="field-with-unit"><input data-allocation="${category.name}" data-field="ratio" type="text" value="${escapeHtml(row.ratio)}" placeholder="Enter" /><em>%</em></span>
        <textarea data-allocation="${category.name}" data-field="reason" placeholder="Design reason">${escapeHtml(row.reason)}</textarea>
      </div>
    `;
  }).join("");

  document.querySelectorAll("[data-allocation]").forEach((input) => {
    input.addEventListener("change", () => {
      pushHistory();
      const name = input.dataset.allocation;
      state.allocation[name][input.dataset.field] = input.value;
    });
  });
}

function renderPeople() {
  $("#peopleGrid").innerHTML = people.map((person) => `
    <article class="person-card" style="--person-color:${person.color}">
      <button type="button">
        <span class="avatar"></span>
        <span>
          <h4>${person.name}</h4>
          <p>${person.meta}</p>
        </span>
      </button>
      <div class="person-detail">
        <strong>Space Needs</strong>
        <ul>${person.needs.map((need) => `<li>${need}</li>`).join("")}</ul>
        <strong>Community Design Ideas</strong>
        <p>${person.insight}</p>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".person-card button").forEach((button) => {
    button.addEventListener("click", () => button.closest(".person-card").classList.toggle("open"));
  });
}

function renderFunctionOptions() {
  selectedFunction.innerHTML = categories.map((category) => `<option>${category.name}</option>`).join("");
}

function gridWidth() {
  return 40 * GRID.cell;
}

function renderCanvas() {
  updateGridDisplay();
  drawingLayer.classList.toggle("selectable-zones", state.activeTool === "select");
  renderObjects();
  renderAnnotations();
  renderZones();
  renderPaths();
  renderResizeBox();
  updateScaleNote();
  updateLayers();
  updateCanvasTransform();
  renderSelection();
}

function updateGridDisplay() {
  const cols = 40;
  state.gridCols = cols;
  marsCanvas.style.setProperty("--grid-width", `${cols * GRID.cell}px`);
  drawingLayer.setAttribute("viewBox", `0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`);
  pathLayer.setAttribute("viewBox", `0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`);
  $("#gridInfoText").textContent = `1000 km² boundary · ${cols} × 25 grid · each small square has a 1 cm side length`;
}

function renderObjects() {
  objectLayer.innerHTML = state.objects.map((object) => {
    const category = getCategory(object.category);
    const selected = state.selectedId === object.id ? "selected" : "";
    return `
      <div class="habitat-object ${selected}" data-id="${object.id}" style="left:${object.x}px; top:${object.y}px; transform:translate(-50%, -50%) rotate(${object.rotation}deg) scale(${object.scale});">
        ${iconSvg(category.id, category.color, object.name)}
        <span class="object-label">${escapeHtml(object.name)}${object.area ? `<br>${escapeHtml(object.area)} km²` : ""}</span>
      </div>
    `;
  }).join("");

  document.querySelectorAll(".habitat-object").forEach((node) => attachMovableHandlers(node, "object"));
}

function renderAnnotations() {
  const html = [
    ...state.annotations.map((annotation) => `
      <div class="annotation-object ${state.selectedId === annotation.id ? "selected" : ""}" data-id="${annotation.id}" style="left:${annotation.x}px; top:${annotation.y}px; transform:translate(-50%, -50%) rotate(${annotation.rotation || 0}deg) scale(${annotation.scale || 1});">
        ${escapeHtml(annotation.text)}
      </div>
    `),
  ].join("");
  annotationLayer.innerHTML = html;
  document.querySelectorAll(".annotation-object").forEach((node) => attachMovableHandlers(node, "annotation"));
}

function renderZones() {
  drawingLayer.innerHTML = state.zones.map((zone) => zoneMarkup(zone)).join("");
  drawingLayer.querySelectorAll(".zone-group").forEach((node) => attachMovableHandlers(node, "zone"));
}

function zoneMarkup(zone, draft = false) {
  const selected = state.selectedId === zone.id ? "selected" : "";
  const shape = zone.shape === "freeform"
    ? `<path class="zone-rect ${selected}" data-id="${zone.id}" d="${zonePathD(zone)}"
        fill="${zone.color}24" stroke="${zone.color}" stroke-width="3" stroke-dasharray="10 7"></path>`
    : zone.shape === "circle"
    ? `<circle class="zone-rect ${selected}" data-id="${zone.id}" cx="${zone.x + zone.w / 2}" cy="${zone.y + zone.h / 2}" r="${Math.min(zone.w, zone.h) / 2}"
        fill="${zone.color}24" stroke="${zone.color}" stroke-width="3" stroke-dasharray="10 7"></circle>
       <circle class="zone-center-dot" data-id="${zone.id}" cx="${zone.x + zone.w / 2}" cy="${zone.y + zone.h / 2}" r="5"></circle>
       <circle class="zone-center-ring" data-id="${zone.id}" cx="${zone.x + zone.w / 2}" cy="${zone.y + zone.h / 2}" r="13"></circle>`
    : `<rect class="zone-rect ${selected}" data-id="${zone.id}" x="${zone.x}" y="${zone.y}" width="${zone.w}" height="${zone.h}" rx="8"
        fill="${zone.color}24" stroke="${zone.color}" stroke-width="3" stroke-dasharray="10 7"></rect>`;
  return `
    <g class="zone-group ${draft ? "draft-zone" : ""}" data-id="${zone.id}" transform="rotate(${zone.rotation || 0} ${zone.x + zone.w / 2} ${zone.y + zone.h / 2})">
      ${shape}
      ${draft ? "" : zoneLabelMarkup(zone)}
    </g>
  `;
}

function zoneLabelMarkup(zone) {
  const label = [zone.name || "Functional Zone", zone.categoryZh || getCategory(zone.category).zh].filter(Boolean).join(" | ");
  const area = zone.area ? `Actual area: ${zone.area} km²` : "Actual area: ______ km²";
  const width = zone.shape === "circle"
    ? Math.min(Math.max(zone.w * 0.74, 170), 290)
    : Math.min(Math.max(zone.w - 24, 130), 280);
  const x = zone.shape === "circle" ? zone.x + zone.w / 2 - width / 2 : zone.x + Math.min(14, Math.max(6, zone.w * 0.06));
  const y = zone.shape === "circle" ? zone.y + zone.h * 0.18 : zone.y + 12;
  return `
    <foreignObject class="zone-display" data-id="${zone.id}" x="${x}" y="${y}" width="${width}" height="64">
      <div xmlns="http://www.w3.org/1999/xhtml" class="zone-display-card">
        <strong>${escapeHtml(label)}</strong>
        <span>${escapeHtml(area)}</span>
      </div>
    </foreignObject>
  `;
}

function zonePathD(zone) {
  const points = zone.points || [];
  if (!points.length) return "";
  return `${points.map((point, index) => `${index ? "L" : "M"}${point.x} ${point.y}`).join(" ")} Z`;
}

function zoneBoundsFromPoints(points) {
  const xs = points.map((point) => point.x);
  const ys = points.map((point) => point.y);
  const x = Math.min(...xs);
  const y = Math.min(...ys);
  return { x, y, w: Math.max(24, Math.max(...xs) - x), h: Math.max(24, Math.max(...ys) - y) };
}

function cleanFreeformPoints(points) {
  const reduced = points.filter((point, index, list) => {
    if (index === 0) return true;
    const prev = list[index - 1];
    return Math.hypot(point.x - prev.x, point.y - prev.y) >= 7;
  });
  const step = Math.max(1, Math.ceil(reduced.length / 72));
  return reduced.filter((_, index) => index % step === 0);
}

function renderPaths() {
  pathLayer.innerHTML = state.paths.map((path) => roadMarkup(path)).join("");
  pathLayer.querySelectorAll(".road-object").forEach((node) => attachRoadHandlers(node));
}

function roadMarkup(path, extraClass = "") {
  const d = roadPathD(path);
  const selected = state.selectedId === path.id ? "selected" : "";
  const width = path.width || 18;
  return `
    <g class="road-object ${selected} ${extraClass}" data-id="${path.id}">
      <path class="road-hit" data-id="${path.id}" d="${d}" fill="none" stroke="transparent" stroke-width="${width + 24}" stroke-linecap="round"></path>
      <path class="road-surface" data-id="${path.id}" d="${d}" fill="none" stroke="${path.color || "#626b72"}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"></path>
      <path class="road-edge" data-id="${path.id}" d="${d}" fill="none" stroke="rgba(33,37,39,.45)" stroke-width="1.2" stroke-linecap="round"></path>
      <path class="road-lane" data-id="${path.id}" d="${d}" fill="none" stroke="#ffffff" stroke-width="${Math.max(2, width * 0.14)}" stroke-dasharray="18 14" stroke-linecap="round"></path>
    </g>
  `;
}

function draftRoad(start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const distance = Math.hypot(dx, dy) || 1;
  const bend = Math.min(120, Math.max(0, distance * 0.12));
  const c1 = {
    x: start.x + dx * 0.34 - dy / distance * bend,
    y: start.y + dy * 0.34 + dx / distance * bend,
  };
  const c2 = {
    x: start.x + dx * 0.66 - dy / distance * bend,
    y: start.y + dy * 0.66 + dx / distance * bend,
  };
  return {
    id: "draft-road",
    name: "Road / Path",
    points: [start, c1, c2, end],
    color: "#666f76",
    width: 20,
    note: "",
  };
}

function roadPathD(path) {
  const points = roadPoints(path);
  return `M${points[0].x} ${points[0].y} C${points[1].x} ${points[1].y} ${points[2].x} ${points[2].y} ${points[3].x} ${points[3].y}`;
}

function roadPoints(path) {
  if (Array.isArray(path.points) && path.points.length === 4) {
    return path.points.map((point) => ({ x: point.x, y: point.y }));
  }
  const start = { x: path.x1, y: path.y1 };
  const end = { x: path.x2, y: path.y2 };
  const control = { x: path.cx ?? (path.x1 + path.x2) / 2, y: path.cy ?? (path.y1 + path.y2) / 2 };
  return [
    start,
    { x: (start.x + control.x * 2) / 3, y: (start.y + control.y * 2) / 3 },
    { x: (end.x + control.x * 2) / 3, y: (end.y + control.y * 2) / 3 },
    end,
  ];
}

function commitRoadPoints(path, points) {
  const next = points.map((point) => ({
    x: clamp(point.x, 0, CANVAS_WIDTH),
    y: clamp(point.y, 0, CANVAS_HEIGHT),
  }));
  path.points = next;
  path.x1 = next[0].x;
  path.y1 = next[0].y;
  path.cx = (next[1].x + next[2].x) / 2;
  path.cy = (next[1].y + next[2].y) / 2;
  path.x2 = next[3].x;
  path.y2 = next[3].y;
}

function roadBounds(path) {
  const points = roadPoints(path);
  const xs = points.map((point) => point.x);
  const ys = points.map((point) => point.y);
  const pad = (path.width || 18) / 2 + 12;
  const minX = Math.min(...xs) - pad;
  const maxX = Math.max(...xs) + pad;
  const minY = Math.min(...ys) - pad;
  const maxY = Math.max(...ys) + pad;
  return { x: minX, y: minY, w: Math.max(30, maxX - minX), h: Math.max(30, maxY - minY), rotation: 0 };
}

function roadCenter(path) {
  const bounds = roadBounds(path);
  return { x: bounds.x + bounds.w / 2, y: bounds.y + bounds.h / 2 };
}

function transformRoadPoints(path, transformer) {
  commitRoadPoints(path, roadPoints(path).map((point) => transformer(point)));
}

function rotatePoint(point, center, degrees) {
  const angle = degrees * Math.PI / 180;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const dx = point.x - center.x;
  const dy = point.y - center.y;
  return { x: center.x + dx * cos - dy * sin, y: center.y + dx * sin + dy * cos };
}

function renderBuildingRecords() {
  if (!state.objects.length) {
    $("#buildingRecords").innerHTML = `<p>After you drag building assets onto the canvas, manual record fields will appear here.</p>`;
    return;
  }
  $("#buildingRecords").innerHTML = state.objects.map((object) => `
    <div class="building-record" data-record="${object.id}">
      <div>
        <strong>${escapeHtml(object.name)}</strong>
        <span>${escapeHtml(object.category)}</span>
      </div>
      <input data-record-area="${object.id}" value="${escapeHtml(object.area)}" placeholder="km²" />
    </div>
  `).join("");
  document.querySelectorAll("[data-record-area]").forEach((input) => {
    input.addEventListener("change", () => {
      pushHistory();
      const object = state.objects.find((item) => item.id === input.dataset.recordArea);
      if (object) object.area = input.value;
      renderCanvas();
      renderBuildingRecords();
    });
  });
}

function renderSelection() {
  const entry = selectedEntry();
  const item = entry?.item;
  selectionCard.hidden = !item;
  if (!item) return;
  selectedKind.textContent = entry.type === "object"
    ? "Facility Edit"
    : entry.type === "zone"
      ? "Zone Edit"
      : entry.type === "path"
        ? "Road / Path Edit"
        : "Text Label Edit";
  selectedName.value = item.name || item.text || "";
  selectedFunction.value = item.category || categories[0].name;
  selectedFunction.disabled = entry.type === "annotation" || entry.type === "path";
  selectedArea.value = item.area || "";
  selectedArea.disabled = entry.type === "annotation" || entry.type === "path";
  selectedNote.value = item.note || "";
  const pathSelected = entry.type === "path";
  $("#rotateLeftBtn").disabled = pathSelected;
  $("#rotateRightBtn").disabled = pathSelected;
  $("#scaleDownBtn").disabled = pathSelected;
  $("#scaleUpBtn").disabled = pathSelected;
}

function selectedItem() {
  return selectedEntry()?.item;
}

function selectedEntry() {
  const object = state.objects.find((item) => item.id === state.selectedId);
  if (object) return { type: "object", item: object };
  const annotation = state.annotations.find((item) => item.id === state.selectedId);
  if (annotation) return { type: "annotation", item: annotation };
  const zone = state.zones.find((item) => item.id === state.selectedId);
  if (zone) return { type: "zone", item: zone };
  const path = state.paths.find((item) => item.id === state.selectedId);
  if (path) return { type: "path", item: path };
  return null;
}

function renderResizeBox() {
  const entry = selectedEntry();
  if (!entry) {
    resizeBox.hidden = true;
    resizeBox.innerHTML = "";
    resizeBox.className = "resize-box";
    return;
  }
  if (entry.type === "path") {
    renderRoadEditHandles(entry.item);
    return;
  }
  const bounds = selectedBounds(entry);
  resizeBox.className = `resize-box ${entry.type === "zone" && entry.item.shape === "circle" ? "circle-zone-edit" : ""}`;
  resizeBox.hidden = false;
  resizeBox.style.left = `${bounds.x}px`;
  resizeBox.style.top = `${bounds.y}px`;
  resizeBox.style.width = `${bounds.w}px`;
  resizeBox.style.height = `${bounds.h}px`;
  resizeBox.style.transform = `rotate(${bounds.rotation || 0}deg)`;
  const rotateHandle = `<span class="rotate-handle" data-handle="rotate" title="Drag to rotate"></span>`;
  resizeBox.innerHTML = `${rotateHandle}${["nw", "n", "ne", "e", "se", "s", "sw", "w"]
    .map((handle) => `<span class="resize-handle" data-handle="${handle}"></span>`)
    .join("")}${entry.type === "zone" && entry.item.shape === "circle" ? '<span class="circle-center-handle" title="Circle center"></span>' : ""}`;
  resizeBox.querySelectorAll(".resize-handle").forEach((handle) => {
    handle.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
      const point = canvasPoint(event);
      dragInfo = {
        type: "resize",
        id: state.selectedId,
        itemType: entry.type,
        handle: handle.dataset.handle,
        start: point,
        original: JSON.parse(JSON.stringify(entry.item)),
        before: cloneState(),
      };
      safeSetPointerCapture(handle, event.pointerId);
    });
  });
  const rotateNode = resizeBox.querySelector(".rotate-handle");
  if (rotateNode) {
    rotateNode.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
      const point = canvasPoint(event);
      dragInfo = {
        type: "rotate",
        id: state.selectedId,
        itemType: entry.type,
        start: point,
        original: JSON.parse(JSON.stringify(entry.item)),
        before: cloneState(),
      };
      safeSetPointerCapture(rotateNode, event.pointerId);
    });
  }
}

function renderRoadEditHandles(path) {
  const points = roadPoints(path);
  resizeBox.hidden = false;
  resizeBox.className = "resize-box road-edit-box";
  resizeBox.style.left = "0px";
  resizeBox.style.top = "0px";
  resizeBox.style.width = `${CANVAS_WIDTH}px`;
  resizeBox.style.height = `${CANVAS_HEIGHT}px`;
  resizeBox.style.transform = "none";
  resizeBox.innerHTML = `
    <svg class="road-control-lines" viewBox="0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}" aria-hidden="true">
      <path d="M${points[0].x} ${points[0].y} L${points[1].x} ${points[1].y} M${points[3].x} ${points[3].y} L${points[2].x} ${points[2].y}"></path>
    </svg>
    ${points.map((point, index) => `
      <span class="road-point ${index === 0 || index === 3 ? "end-point" : "curve-point"}"
        data-road-point="${index}"
        title="${index === 0 || index === 3 ? "Drag to extend or shorten the road" : "Drag to bend the road"}"
        style="left:${point.x}px; top:${point.y}px"></span>
    `).join("")}
  `;
  resizeBox.querySelectorAll(".road-point").forEach((handle) => {
    handle.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
      const index = Number(handle.dataset.roadPoint);
      dragInfo = {
        type: "road-point",
        id: path.id,
        pointIndex: index,
        start: canvasPoint(event),
        original: JSON.parse(JSON.stringify(path)),
        before: cloneState(),
        moved: false,
      };
      safeSetPointerCapture(handle, event.pointerId);
    });
  });
}

function selectedBounds(entry) {
  if (entry.type === "zone") {
    return { x: entry.item.x, y: entry.item.y, w: entry.item.w, h: entry.item.h, rotation: entry.item.rotation || 0 };
  }
  if (entry.type === "annotation") {
    const scale = entry.item.scale || 1;
    const w = (entry.item.w || 180) * scale;
    const h = (entry.item.h || 72) * scale;
    return { x: entry.item.x - w / 2, y: entry.item.y - h / 2, w, h, rotation: entry.item.rotation || 0 };
  }
  if (entry.type === "path") return roadBounds(entry.item);
  const scale = entry.item.scale || 1;
  const w = 86 * scale;
  const h = 70 * scale;
  return { x: entry.item.x - w / 2, y: entry.item.y - h / 2, w, h, rotation: entry.item.rotation || 0 };
}

function updateSelectionClasses() {
  document.querySelectorAll(".habitat-object, .annotation-object, .zone-rect, .road-object").forEach((node) => {
    node.classList.toggle("selected", node.dataset.id === state.selectedId);
  });
  renderResizeBox();
  renderSelection();
}

function updateScaleNote() {
  const ratio = state.scaleRatio || "______";
  const km = state.scaleKm || "______";
  $("#canvasScaleNote").textContent = `Scale: 1 : ${ratio} | On the map, 1 cm = ${km} km in real life`;
  $("#presentationScale").textContent = $("#canvasScaleNote").textContent;
}

function updateLayers() {
  Object.entries(state.layers).forEach(([layer, visible]) => {
    document.querySelectorAll(`[data-layer="${layer}"], .layer-${layer}`).forEach((node) => {
      node.style.display = visible ? "" : "none";
    });
  });
  gridToggle.classList.toggle("toggled", state.layers.grid);
}

function updateCanvasTransform() {
  marsCanvas.style.transform = `translate(-50%, -50%) translate(${state.view.panX}px, ${state.view.panY}px) scale(${state.view.zoom})`;
}

function renderAll() {
  ensureDefaults();
  $("#teamName").value = state.teamName;
  $("#difficultyLevel").value = state.difficulty;
  state.gridCols = 40;
  $("#scaleRatio").value = state.scaleRatio;
  $("#scaleKm").value = state.scaleKm;
  $("#resourceReason").value = state.reflections.resourceReason;
  $("#equityReason").value = state.reflections.equityReason;
  $("#lifeReason").value = state.reflections.lifeReason;
  renderSteps();
  renderAllocation();
  renderCanvas();
  renderBuildingRecords();
  updateLevelGuide();
}

function ensureDefaults() {
  if (!["level1", "level2", "level3"].includes(state.difficulty)) state.difficulty = "level2";
  state.gridCols = 40;
  state.view = { zoom: 0.62, panX: 0, panY: 0, ...state.view };
  if (state.view.zoom > 0.68) state.view.zoom = 0.62;
  state.layers = { map: true, grid: true, buildings: true, zones: true, labels: true, ...state.layers };
  delete state.layers.people;
  state.reflections = { resourceReason: "", equityReason: "", lifeReason: "", ...state.reflections };
  state.objects.forEach((object) => {
    object.name = translateLegacyText(object.name);
    object.note = translateLegacyText(object.note || "");
  });
  state.zones.forEach((zone, index) => {
    const fallback = categories[index % categories.length];
    const category = getCategory(zone.category || fallback.name);
    zone.name = translateLegacyText(zone.name || "");
    zone.category = category.name;
    zone.categoryZh = category.zh;
    zone.color = zone.color || category.color;
    zone.rotation = zone.rotation || 0;
    zone.area = zone.area || "";
    zone.note = translateLegacyText(zone.note || "");
  });
  state.annotations.forEach((annotation) => {
    annotation.text = translateLegacyText(annotation.text || "");
    annotation.note = translateLegacyText(annotation.note || "");
  });
  state.annotations = state.annotations.filter((annotation) => ![
    "The total area is fixed at 1000 square kilometers.\nAllocate zones and ratios yourself.",
    "Use your map to manually label each building's actual area.",
  ].includes(annotation.text));
  document.querySelectorAll("[data-layer-toggle]").forEach((input) => {
    input.checked = state.layers[input.dataset.layerToggle] !== false;
  });
}

function updateLevelGuide() {
  $("#levelGuideText").textContent = levelGuides[state.difficulty] || levelGuides.level2;
}

function canvasPoint(event) {
  const rect = marsCanvas.getBoundingClientRect();
  return {
    x: clamp((event.clientX - rect.left) * CANVAS_WIDTH / rect.width, 0, CANVAS_WIDTH),
    y: clamp((event.clientY - rect.top) * CANVAS_HEIGHT / rect.height, 0, CANVAS_HEIGHT),
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function safeSetPointerCapture(node, pointerId) {
  if (pointerId === undefined || !node.setPointerCapture) return;
  try {
    node.setPointerCapture(pointerId);
  } catch {
    // Synthetic browser tests may not create an active pointer capture target.
  }
}

function safeReleasePointerCapture(node, pointerId) {
  if (pointerId === undefined || !node.releasePointerCapture) return;
  try {
    node.releasePointerCapture(pointerId);
  } catch {
    // Ignore capture cleanup when the browser has already released the pointer.
  }
}

function attachMovableHandlers(node, type) {
  node.addEventListener("click", (event) => {
    event.stopPropagation();
    if (state.activeTool !== "select") setTool("select");
    const id = node.dataset.id;
    if (!id) return;
    state.selectedId = id;
    updateSelectionClasses();
    renderSelection();
  });
  node.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
    if (state.activeTool !== "select") setTool("select");
    const id = node.dataset.id;
    const collections = {
      object: state.objects,
      annotation: state.annotations,
      zone: state.zones,
    };
    const item = collections[type].find((entry) => entry.id === id);
    if (!item) return;
    state.selectedId = id;
    updateSelectionClasses();
    const point = canvasPoint(event);
    dragInfo = { type, id, dx: point.x - item.x, dy: point.y - item.y, start: point, original: JSON.parse(JSON.stringify(item)), moved: false, before: cloneState() };
    safeSetPointerCapture(node, event.pointerId);
  });
}

function attachRoadHandlers(node) {
  const startRoadDrag = (event) => {
    event.stopPropagation();
    if (state.activeTool !== "select") setTool("select");
    const id = node.dataset.id;
    const path = state.paths.find((entry) => entry.id === id);
    if (!path) return;
    state.selectedId = id;
    updateSelectionClasses();
    const point = canvasPoint(event);
    dragInfo = {
      type: "path",
      id,
      start: point,
      original: JSON.parse(JSON.stringify(path)),
      moved: false,
      before: cloneState(),
    };
    safeSetPointerCapture(node, event.pointerId);
  };
  node.addEventListener("click", (event) => {
    event.stopPropagation();
    if (state.activeTool !== "select") setTool("select");
    state.selectedId = node.dataset.id;
    updateSelectionClasses();
    renderSelection();
  });
  node.addEventListener("pointerdown", startRoadDrag);
}

function createObject(assetName, categoryName, point) {
  const category = getCategory(categoryName) || categoryByAsset(assetName);
  state.objects.push({
    id: uid("object"),
    name: assetName,
    category: category.name,
    x: point.x,
    y: point.y,
    rotation: 0,
    scale: 1,
    area: "",
    note: "",
  });
  state.selectedId = state.objects[state.objects.length - 1].id;
}

function createAnnotation(text, point) {
  state.annotations.push({
    id: uid("label"),
    text,
    x: point.x,
    y: point.y,
    w: 180,
    h: 72,
    rotation: 0,
    scale: 1,
    note: "",
  });
  state.selectedId = state.annotations[state.annotations.length - 1].id;
}

function finishZone(start, end, shape = "rect") {
  const x = Math.min(start.x, end.x);
  const y = Math.min(start.y, end.y);
  let w = Math.abs(start.x - end.x);
  let h = Math.abs(start.y - end.y);
  if (w < 24 || h < 24) return;
  if (shape === "circle") {
    const size = Math.max(32, Math.min(w, h));
    const cx = (start.x + end.x) / 2;
    const cy = (start.y + end.y) / 2;
    w = size;
    h = size;
    const circleX = clamp(cx - size / 2, 0, CANVAS_WIDTH - size);
    const circleY = clamp(cy - size / 2, 0, CANVAS_HEIGHT - size);
    return createZone(circleX, circleY, w, h, shape);
  }
  createZone(x, y, w, h, shape);
}

function finishFreeformZone(points) {
  const cleanPoints = cleanFreeformPoints(points);
  if (cleanPoints.length < 4) return;
  const bounds = zoneBoundsFromPoints(cleanPoints);
  if (bounds.w < 24 || bounds.h < 24) return;
  createZone(bounds.x, bounds.y, bounds.w, bounds.h, "freeform", cleanPoints);
}

function createZone(x, y, w, h, shape = "rect", points = null) {
  const category = categories[state.zones.length % categories.length];
  state.zones.push({
    id: uid("zone"),
    name: "Custom Zone",
    x,
    y,
    w,
    h,
    shape,
    points,
    color: category.color,
    category: category.name,
    categoryZh: category.zh,
    rotation: shape === "circle" || shape === "freeform" ? 0 : 0,
    area: "",
    note: "",
  });
  state.selectedId = state.zones[state.zones.length - 1].id;
}

function finishPath(start, end) {
  const distance = Math.hypot(start.x - end.x, start.y - end.y);
  if (distance < 18) return;
  const road = draftRoad(start, end);
  road.id = uid("path");
  state.paths.push({
    ...road,
    name: "Road / Path",
    note: "",
  });
  state.selectedId = road.id;
}

function moveRoad(path, original, dx, dy) {
  commitRoadPoints(path, roadPoints(original).map((point) => ({ x: point.x + dx, y: point.y + dy })));
}

function editRoadPoint(path, original, pointIndex, point) {
  const points = roadPoints(original);
  points[pointIndex] = point;
  commitRoadPoints(path, points);
}

function clampRoadToCanvas(path) {
  const bounds = roadBounds(path);
  const dx = bounds.x < 0 ? -bounds.x : bounds.x + bounds.w > CANVAS_WIDTH ? CANVAS_WIDTH - bounds.x - bounds.w : 0;
  const dy = bounds.y < 0 ? -bounds.y : bounds.y + bounds.h > CANVAS_HEIGHT ? CANVAS_HEIGHT - bounds.y - bounds.h : 0;
  if (dx || dy) moveRoad(path, path, dx, dy);
}

function resizeSelected(point) {
  const entry = selectedEntry();
  if (!entry || !dragInfo?.original) return;
  const dx = point.x - dragInfo.start.x;
  const dy = point.y - dragInfo.start.y;
  const handle = dragInfo.handle;
  dragInfo.moved = true;

  if (entry.type === "path") return;
  if (entry.type === "zone") {
    const original = dragInfo.original;
    let x = original.x;
    let y = original.y;
    let w = original.w;
    let h = original.h;
    if (original.shape === "freeform") {
      if (handle.includes("e")) w = original.w + dx;
      if (handle.includes("s")) h = original.h + dy;
      if (handle.includes("w")) {
        x = original.x + dx;
        w = original.w - dx;
      }
      if (handle.includes("n")) {
        y = original.y + dy;
        h = original.h - dy;
      }
      w = Math.max(32, w);
      h = Math.max(32, h);
      x = clamp(x, 0, CANVAS_WIDTH - w);
      y = clamp(y, 0, CANVAS_HEIGHT - h);
      const sx = w / original.w;
      const sy = h / original.h;
      entry.item.points = original.points.map((zonePoint) => ({
        x: x + (zonePoint.x - original.x) * sx,
        y: y + (zonePoint.y - original.y) * sy,
      }));
    } else if (original.shape === "circle") {
      const center = { x: original.x + original.w / 2, y: original.y + original.h / 2 };
      const currentRadius = Math.max(18, Math.hypot(point.x - center.x, point.y - center.y));
      const size = clamp(currentRadius * 2, 32, Math.min(CANVAS_WIDTH, CANVAS_HEIGHT));
      w = size;
      h = size;
      x = clamp(center.x - size / 2, 0, CANVAS_WIDTH - size);
      y = clamp(center.y - size / 2, 0, CANVAS_HEIGHT - size);
    } else {
      if (handle.includes("e")) w = original.w + dx;
      if (handle.includes("s")) h = original.h + dy;
      if (handle.includes("w")) {
        x = original.x + dx;
        w = original.w - dx;
      }
      if (handle.includes("n")) {
        y = original.y + dy;
        h = original.h - dy;
      }
      w = Math.max(32, w);
      h = Math.max(32, h);
      x = clamp(x, 0, CANVAS_WIDTH - w);
      y = clamp(y, 0, CANVAS_HEIGHT - h);
    }
    Object.assign(entry.item, { x, y, w, h });
    renderZones();
  } else {
    const original = dragInfo.original;
    const baseW = entry.type === "object" ? 86 : (original.w || 180);
    const baseH = entry.type === "object" ? 70 : (original.h || 72);
    const deltas = [];
    if (handle.includes("w")) deltas.push(-dx);
    if (handle.includes("e")) deltas.push(dx);
    if (handle.includes("n")) deltas.push(-dy);
    if (handle.includes("s")) deltas.push(dy);
    const axisDelta = deltas.reduce((winner, value) => Math.abs(value) > Math.abs(winner) ? value : winner, 0);
    const scaleDelta = axisDelta / Math.max(baseW, baseH);
    entry.item.scale = clamp((original.scale || 1) + scaleDelta, 0.35, 3);
    if (entry.type === "object") renderObjects();
    else renderAnnotations();
  }
  renderResizeBox();
  renderSelection();
}

function rotateSelected(point) {
  const entry = selectedEntry();
  if (!entry || !dragInfo?.original) return;
  const item = entry.item;
  if (entry.type === "path") return;
  const center = entry.type === "zone"
    ? { x: dragInfo.original.x + dragInfo.original.w / 2, y: dragInfo.original.y + dragInfo.original.h / 2 }
    : { x: dragInfo.original.x, y: dragInfo.original.y };
  const startAngle = Math.atan2(dragInfo.start.y - center.y, dragInfo.start.x - center.x);
  const currentAngle = Math.atan2(point.y - center.y, point.x - center.x);
  item.rotation = (dragInfo.original.rotation || 0) + (currentAngle - startAngle) * 180 / Math.PI;
  dragInfo.moved = true;
  if (entry.type === "object") renderObjects();
  else if (entry.type === "zone") renderZones();
  else renderAnnotations();
  renderResizeBox();
  renderSelection();
}

function setTool(tool) {
  state.activeTool = tool;
  if (tool !== "select") {
    state.pendingAsset = null;
    document.querySelectorAll(".asset-card").forEach((item) => item.classList.remove("armed"));
  }
  const zoneTools = ["zone", "circleZone", "freeformZone"];
  document.querySelectorAll(".tool[data-tool]").forEach((button) => button.classList.toggle("active", button.dataset.tool === tool));
  $("#zoneToolMenuBtn")?.classList.toggle("active", zoneTools.includes(tool));
  document.querySelectorAll(".zone-shape-option").forEach((button) => button.classList.toggle("active", button.dataset.zoneTool === tool));
  drawingLayer.classList.toggle("selectable-zones", tool === "select");
  const labels = { select: "Select", pan: "Pan Canvas", zone: "Draw Rectangular Zone", circleZone: "Draw Circular Zone", freeformZone: "Draw Irregular Zone", path: "Draw Path", label: "Add Label", legend: "Add Legend" };
  activeToolHint.textContent = `Current tool: ${labels[tool]}`;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function translateLegacyText(value = "") {
  let text = String(value);
  Object.entries(legacyText).forEach(([from, to]) => {
    text = text.replaceAll(from, to);
  });
  return text;
}

function bindEvents() {
  marsCanvas.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  });

  drawingLayer.addEventListener("pointerdown", (event) => {
    const target = event.target.closest?.("[data-id]");
    if (!target) {
      if (state.activeTool !== "select") return;
      state.selectedId = null;
      renderCanvas();
      return;
    }
    event.stopPropagation();
    const zone = state.zones.find((item) => item.id === target.dataset.id);
    if (!zone) return;
    if (state.activeTool !== "select") setTool("select");
    state.selectedId = zone.id;
    updateSelectionClasses();
    const point = canvasPoint(event);
    dragInfo = { type: "zone", id: zone.id, dx: point.x - zone.x, dy: point.y - zone.y, start: point, original: JSON.parse(JSON.stringify(zone)), moved: false, before: cloneState() };
  });

  marsCanvas.addEventListener("drop", (event) => {
    event.preventDefault();
    const raw = event.dataTransfer.getData("application/json");
    if (!raw) return;
    pushHistory();
    const data = JSON.parse(raw);
    createObject(data.name, data.category, canvasPoint(event));
    renderCanvas();
    renderBuildingRecords();
  });

  marsCanvas.addEventListener("pointerdown", (event) => {
    const point = canvasPoint(event);
    if (state.pendingAsset && state.activeTool === "select") {
      pushHistory();
      createObject(state.pendingAsset.name, state.pendingAsset.category, point);
      state.pendingAsset = null;
      document.querySelectorAll(".asset-card").forEach((item) => item.classList.remove("armed"));
      activeToolHint.textContent = "Current tool: Select";
      renderCanvas();
      renderBuildingRecords();
      return;
    }
    if (state.activeTool === "select") {
      state.selectedId = null;
      renderCanvas();
      dragInfo = { type: "pan", startX: event.clientX, startY: event.clientY, panX: state.view.panX, panY: state.view.panY };
      safeSetPointerCapture(marsCanvas, event.pointerId);
      return;
    }
    if (state.activeTool === "label" || state.activeTool === "legend") {
      pushHistory();
      createAnnotation(state.activeTool === "legend" ? "Legend: color / function / area" : "Building name: ______\nActual area: ______ km²", point);
      renderCanvas();
      setTool("select");
      return;
    }
    if (state.activeTool === "zone" || state.activeTool === "circleZone" || state.activeTool === "freeformZone" || state.activeTool === "path") {
      draftShape = { tool: state.activeTool, start: point, end: point, points: [point] };
      safeSetPointerCapture(marsCanvas, event.pointerId);
    }
    if (state.activeTool === "pan") {
      dragInfo = { type: "pan", startX: event.clientX, startY: event.clientY, panX: state.view.panX, panY: state.view.panY };
      safeSetPointerCapture(marsCanvas, event.pointerId);
    }
  });

  marsCanvas.addEventListener("pointermove", (event) => {
    if (dragInfo?.type === "pan") {
      state.view.panX = dragInfo.panX + event.clientX - dragInfo.startX;
      state.view.panY = dragInfo.panY + event.clientY - dragInfo.startY;
      updateCanvasTransform();
      return;
    }
    if (dragInfo?.type === "path") {
      const point = canvasPoint(event);
      const path = state.paths.find((entry) => entry.id === dragInfo.id);
      if (!path) return;
      moveRoad(path, dragInfo.original, point.x - dragInfo.start.x, point.y - dragInfo.start.y);
      clampRoadToCanvas(path);
      dragInfo.moved = true;
      renderPaths();
      renderResizeBox();
      renderSelection();
      return;
    }
    if (dragInfo?.type === "road-point") {
      const point = canvasPoint(event);
      const path = state.paths.find((entry) => entry.id === dragInfo.id);
      if (!path) return;
      editRoadPoint(path, dragInfo.original, dragInfo.pointIndex, point);
      clampRoadToCanvas(path);
      dragInfo.moved = true;
      renderPaths();
      renderResizeBox();
      renderSelection();
      return;
    }
    if (dragInfo && (dragInfo.type === "object" || dragInfo.type === "annotation" || dragInfo.type === "zone")) {
      const point = canvasPoint(event);
      const collection = dragInfo.type === "object" ? state.objects : dragInfo.type === "annotation" ? state.annotations : state.zones;
      const item = collection.find((entry) => entry.id === dragInfo.id);
      if (!item) return;
      if (dragInfo.type === "zone") {
        const original = dragInfo.original || item;
        const nextX = clamp(point.x - dragInfo.dx, 0, CANVAS_WIDTH - item.w);
        const nextY = clamp(point.y - dragInfo.dy, 0, CANVAS_HEIGHT - item.h);
        item.x = nextX;
        item.y = nextY;
        if (item.shape === "freeform" && original.points) {
          const dx = nextX - original.x;
          const dy = nextY - original.y;
          item.points = original.points.map((zonePoint) => ({ x: zonePoint.x + dx, y: zonePoint.y + dy }));
        }
      } else {
        item.x = clamp(point.x - dragInfo.dx, 20, CANVAS_WIDTH - 20);
        item.y = clamp(point.y - dragInfo.dy, 20, CANVAS_HEIGHT - 20);
      }
      dragInfo.moved = true;
      if (dragInfo.type === "object") renderObjects();
      else if (dragInfo.type === "annotation") renderAnnotations();
      else renderZones();
      renderResizeBox();
      renderSelection();
      return;
    }
    if (dragInfo?.type === "resize") {
      resizeSelected(canvasPoint(event));
      return;
    }
    if (dragInfo?.type === "rotate") {
      rotateSelected(canvasPoint(event));
      return;
    }
    if (draftShape) {
      draftShape.end = canvasPoint(event);
      if (draftShape.tool === "freeformZone") {
        const last = draftShape.points[draftShape.points.length - 1];
        if (Math.hypot(draftShape.end.x - last.x, draftShape.end.y - last.y) >= 7) {
          draftShape.points.push(draftShape.end);
        }
      }
      drawDraft();
    }
  });

  marsCanvas.addEventListener("pointerup", finishPointerInteraction);
  document.addEventListener("pointerup", finishPointerInteraction);
  document.addEventListener("pointercancel", finishPointerInteraction);
  document.addEventListener("mouseup", finishPointerInteraction);

  marsCanvas.addEventListener("wheel", (event) => {
    event.preventDefault();
    const next = state.view.zoom + (event.deltaY > 0 ? -0.04 : 0.04);
    state.view.zoom = clamp(next, 0.46, 1.5);
    updateCanvasTransform();
  }, { passive: false });

  document.querySelectorAll(".tool[data-tool]").forEach((button) => {
    button.addEventListener("click", () => setTool(button.dataset.tool));
  });

  $("#zoneToolMenuBtn").addEventListener("click", (event) => {
    event.stopPropagation();
    $("#zoneShapeMenu").hidden = !$("#zoneShapeMenu").hidden;
  });

  document.querySelectorAll(".zone-shape-option").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      setTool(button.dataset.zoneTool);
      $("#zoneShapeMenu").hidden = true;
    });
  });

  document.addEventListener("click", (event) => {
    if (!$("#zoneToolGroup").contains(event.target)) $("#zoneShapeMenu").hidden = true;
  });

  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
      button.classList.add("active");
      $(`#tab-${button.dataset.tab}`).classList.add("active");
    });
  });

  $("#teamName").addEventListener("change", (event) => {
    pushHistory();
    state.teamName = event.target.value;
  });
  $("#difficultyLevel").addEventListener("change", (event) => {
    pushHistory();
    state.difficulty = event.target.value;
    updateLevelGuide();
  });
  $("#applyScaleBtn").addEventListener("click", () => {
    pushHistory();
    state.scaleRatio = $("#scaleRatio").value.trim();
    state.scaleKm = $("#scaleKm").value.trim();
    updateScaleNote();
  });
  $("#scaleFocusBtn").addEventListener("click", () => {
    document.querySelector('[data-tab="math"]').click();
    $("#scaleModule").scrollIntoView({ block: "nearest" });
    $("#scaleRatio").focus();
  });

  [selectedName, selectedFunction, selectedArea, selectedNote].forEach((input) => {
    input.addEventListener("change", updateSelectedFromInspector);
  });
  [selectedName, selectedFunction, selectedArea].forEach((input) => {
    input.addEventListener("input", updateSelectedPreview);
  });

  $("#closeSelection").addEventListener("click", () => {
    state.selectedId = null;
    renderCanvas();
  });

  const selectionHead = selectionCard.querySelector(".selection-head");
  const startSelectionCardDrag = (event) => {
    if (event.target.closest("button")) return;
    const cardRect = selectionCard.getBoundingClientRect();
    const stageRect = selectionCard.closest(".canvas-stage").getBoundingClientRect();
    selectionCardDrag = {
      dx: event.clientX - cardRect.left,
      dy: event.clientY - cardRect.top,
      stageRect,
    };
    safeSetPointerCapture(selectionCard, event.pointerId);
    selectionCard.classList.add("dragging");
    event.preventDefault();
  };

  const moveSelectionCard = (event) => {
    if (!selectionCardDrag) return;
    const cardRect = selectionCard.getBoundingClientRect();
    const stageRect = selectionCardDrag.stageRect;
    const nextLeft = clamp(event.clientX - stageRect.left - selectionCardDrag.dx, 8, stageRect.width - cardRect.width - 8);
    const nextTop = clamp(event.clientY - stageRect.top - selectionCardDrag.dy, 8, stageRect.height - cardRect.height - 8);
    selectionCard.style.left = `${nextLeft}px`;
    selectionCard.style.top = `${nextTop}px`;
    selectionCard.style.bottom = "auto";
  };

  const stopSelectionCardDrag = (event) => {
    if (!selectionCardDrag) return;
    safeReleasePointerCapture(selectionCard, event.pointerId);
    selectionCardDrag = null;
    selectionCard.classList.remove("dragging");
  };

  selectionHead.addEventListener("pointerdown", startSelectionCardDrag);
  selectionHead.addEventListener("mousedown", startSelectionCardDrag);
  document.addEventListener("pointermove", moveSelectionCard);
  document.addEventListener("mousemove", moveSelectionCard);
  document.addEventListener("pointerup", stopSelectionCardDrag);
  document.addEventListener("mouseup", stopSelectionCardDrag);
  document.addEventListener("pointercancel", () => {
    selectionCardDrag = null;
    selectionCard.classList.remove("dragging");
  });

  $("#rotateLeftBtn").addEventListener("click", () => transformSelected({ rotation: -15 }));
  $("#rotateRightBtn").addEventListener("click", () => transformSelected({ rotation: 15 }));
  $("#scaleDownBtn").addEventListener("click", () => transformSelected({ scale: -0.1 }));
  $("#scaleUpBtn").addEventListener("click", () => transformSelected({ scale: 0.1 }));
  $("#copyBtn").addEventListener("click", copySelected);
  $("#deleteBtn").addEventListener("click", deleteSelected);
  $("#undoBtn").addEventListener("click", undo);
  $("#redoBtn").addEventListener("click", redo);
  gridToggle.addEventListener("click", () => {
    pushHistory();
    state.layers.grid = !state.layers.grid;
    updateLayers();
  });
  $("#layerToggleBtn").addEventListener("click", () => {
    layerMenu.hidden = !layerMenu.hidden;
  });
  document.querySelectorAll("[data-layer-toggle]").forEach((input) => {
    input.addEventListener("change", () => {
      pushHistory();
      state.layers[input.dataset.layerToggle] = input.checked;
      updateLayers();
    });
  });
  $("#resetViewBtn").addEventListener("click", () => {
    state.view = { zoom: 0.62, panX: 0, panY: 0 };
    updateCanvasTransform();
  });

  ["resourceReason", "equityReason", "lifeReason"].forEach((id) => {
    $(`#${id}`).addEventListener("change", (event) => {
      pushHistory();
      state.reflections[id] = event.target.value;
    });
  });

  $("#saveBtn").addEventListener("click", saveProject);
  $("#exportBtn").addEventListener("click", () => {
    exportReport().catch((error) => {
      console.error(error);
      flash($("#exportBtn"), "Export failed");
    });
  });
  $("#presentationBtn").addEventListener("click", enterPresentation);
  $("#exitPresentationBtn").addEventListener("click", exitPresentation);
  $("#tutorialBtn").addEventListener("click", startTour);
  $("#closeTutorialBtn").addEventListener("click", closeTutorial);
  $("#tourNextBtn").addEventListener("click", nextTourStep);
  $("#tourPrevBtn").addEventListener("click", previousTourStep);
  $("#tourSkipBtn").addEventListener("click", endTour);

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z") {
      event.preventDefault();
      event.shiftKey ? redo() : undo();
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "c") {
      if (state.selectedId) copySelected();
    }
    if (event.key === "Delete" || event.key === "Backspace") {
      if (state.selectedId && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) deleteSelected();
    }
  });
}

function drawDraft() {
  if (!draftShape) return;
  if (draftShape.tool === "zone" || draftShape.tool === "circleZone") {
    const x = Math.min(draftShape.start.x, draftShape.end.x);
    const y = Math.min(draftShape.start.y, draftShape.end.y);
    let w = Math.abs(draftShape.start.x - draftShape.end.x);
    let h = Math.abs(draftShape.start.y - draftShape.end.y);
    let draftZone = { id: "draft-zone", x, y, w, h, color: "#2d8fd7", shape: "rect" };
    if (draftShape.tool === "circleZone") {
      const size = Math.min(w, h);
      draftZone = {
        id: "draft-zone",
        x: (draftShape.start.x + draftShape.end.x) / 2 - size / 2,
        y: (draftShape.start.y + draftShape.end.y) / 2 - size / 2,
        w: size,
        h: size,
        color: "#2d8fd7",
        shape: "circle",
      };
    }
    drawingLayer.innerHTML = `${state.zones.map((zone) => zoneMarkup(zone)).join("")}${zoneMarkup(draftZone, true)}`;
  }
  if (draftShape.tool === "freeformZone") {
    const points = cleanFreeformPoints(draftShape.points || []);
    const draftMarkup = points.length > 1
      ? `<path class="freeform-draft-line" d="${points.map((point, index) => `${index ? "L" : "M"}${point.x} ${point.y}`).join(" ")}"></path>
         <circle class="freeform-draft-tip" cx="${points.at(-1).x}" cy="${points.at(-1).y}" r="5"></circle>`
      : "";
    drawingLayer.innerHTML = `${state.zones.map((zone) => zoneMarkup(zone)).join("")}${draftMarkup}`;
  }
  if (draftShape.tool === "path") {
    pathLayer.innerHTML = `${state.paths.map((path) => roadMarkup(path)).join("")}${roadMarkup(draftRoad(draftShape.start, draftShape.end), "draft-road")}`;
  }
}

function finishPointerInteraction() {
  if (dragInfo && dragInfo.type !== "pan" && dragInfo.moved) {
    history.push(dragInfo.before);
    if (history.length > 60) history.shift();
    future = [];
    renderCanvas();
  } else if (dragInfo && dragInfo.type !== "pan" && !dragInfo.moved) {
    renderSelection();
  }
  dragInfo = null;
  if (!draftShape) return;
  pushHistory();
  if (draftShape.tool === "zone") finishZone(draftShape.start, draftShape.end, "rect");
  if (draftShape.tool === "circleZone") finishZone(draftShape.start, draftShape.end, "circle");
  if (draftShape.tool === "freeformZone") finishFreeformZone(draftShape.points || []);
  if (draftShape.tool === "path") finishPath(draftShape.start, draftShape.end);
  setTool("select");
  draftShape = null;
  renderCanvas();
}

function updateSelectedFromInspector() {
  const entry = selectedEntry();
  const item = entry?.item;
  if (!item) return;
  pushHistory();
  if (entry.type === "object") {
    item.name = selectedName.value;
    item.category = selectedFunction.value;
    item.area = selectedArea.value;
    item.note = selectedNote.value;
  } else if (entry.type === "zone") {
    item.name = selectedName.value;
    item.category = selectedFunction.value;
    const category = getCategory(item.category);
    item.categoryZh = category.zh;
    item.color = category.color;
    item.area = selectedArea.value;
    item.note = selectedNote.value;
  } else if (entry.type === "path") {
    item.name = selectedName.value;
    item.note = selectedNote.value;
  } else {
    item.text = selectedName.value;
    item.note = selectedNote.value;
  }
  renderCanvas();
  renderBuildingRecords();
}

function updateSelectedPreview() {
  const entry = selectedEntry();
  if (!entry) return;
  if (entry.type === "object") {
    entry.item.name = selectedName.value;
    entry.item.category = selectedFunction.value;
    entry.item.area = selectedArea.value;
    renderObjects();
  } else if (entry.type === "zone") {
    entry.item.name = selectedName.value;
    entry.item.category = selectedFunction.value;
    const category = getCategory(entry.item.category);
    entry.item.categoryZh = category.zh;
    entry.item.color = category.color;
    entry.item.area = selectedArea.value;
    renderZones();
  } else if (entry.type === "path") {
    entry.item.name = selectedName.value;
    renderPaths();
  } else {
    entry.item.text = selectedName.value;
    renderAnnotations();
  }
  renderResizeBox();
}

function transformSelected(delta) {
  const entry = selectedEntry();
  if (!entry) return;
  const item = entry.item;
  pushHistory();
  if (entry.type === "path") {
    return;
  } else if (delta.rotation) item.rotation = (item.rotation || 0) + delta.rotation;
  if (entry.type !== "path" && delta.scale && entry.type === "zone") {
    if (item.shape === "circle") {
      const center = { x: item.x + item.w / 2, y: item.y + item.h / 2 };
      const size = clamp(item.w + delta.scale * 180, 32, Math.min(CANVAS_WIDTH, CANVAS_HEIGHT));
      item.w = size;
      item.h = size;
      item.x = clamp(center.x - size / 2, 0, CANVAS_WIDTH - size);
      item.y = clamp(center.y - size / 2, 0, CANVAS_HEIGHT - size);
    } else if (item.shape === "freeform" && item.points) {
      const center = { x: item.x + item.w / 2, y: item.y + item.h / 2 };
      const factor = clamp(1 + delta.scale, 0.45, 2);
      item.points = item.points.map((point) => ({
        x: center.x + (point.x - center.x) * factor,
        y: center.y + (point.y - center.y) * factor,
      }));
      const bounds = zoneBoundsFromPoints(item.points);
      Object.assign(item, bounds);
    } else {
      item.w = clamp(item.w + delta.scale * 180, 32, CANVAS_WIDTH - item.x);
      item.h = clamp(item.h + delta.scale * 140, 32, CANVAS_HEIGHT - item.y);
    }
  } else if (entry.type !== "path" && delta.scale) {
    item.scale = clamp((item.scale || 1) + delta.scale, 0.35, 3);
  }
  renderCanvas();
}

function copySelected() {
  const entry = selectedEntry();
  if (!entry) return;
  const item = entry.item;
  pushHistory();
  const copy = JSON.parse(JSON.stringify(item));
  copy.id = uid(entry.type);
  if (entry.type === "path") {
    moveRoad(copy, copy, 42, 36);
  } else {
    copy.x += 42;
    copy.y += 36;
  }
  if (entry.type === "object") {
    copy.name = `${copy.name} copy`;
    state.objects.push(copy);
  } else if (entry.type === "zone") {
    copy.name = `${copy.name} copy`;
    state.zones.push(copy);
  } else if (entry.type === "path") {
    copy.name = `${copy.name || "Road / Path"} copy`;
    state.paths.push(copy);
  } else {
    state.annotations.push(copy);
  }
  state.selectedId = copy.id;
  renderCanvas();
  renderBuildingRecords();
}

function deleteSelected() {
  if (!state.selectedId) return;
  pushHistory();
  state.objects = state.objects.filter((object) => object.id !== state.selectedId);
  state.annotations = state.annotations.filter((annotation) => annotation.id !== state.selectedId);
  state.zones = state.zones.filter((zone) => zone.id !== state.selectedId);
  state.paths = state.paths.filter((path) => path.id !== state.selectedId);
  state.selectedId = null;
  renderCanvas();
  renderBuildingRecords();
}

function undo() {
  if (!history.length) return;
  future.push(cloneState());
  restore(history.pop());
}

function redo() {
  if (!future.length) return;
  history.push(cloneState());
  restore(future.pop());
}

function saveProject() {
  captureInputs();
  localStorage.setItem("mars-habitat-design-platform", JSON.stringify(cloneState()));
  flash($("#saveBtn"), "Saved");
}

function loadProject() {
  const saved = localStorage.getItem("mars-habitat-design-platform");
  if (!saved) return;
  try {
    const snapshot = JSON.parse(saved);
    Object.assign(state, snapshot);
  } catch {
    localStorage.removeItem("mars-habitat-design-platform");
  }
}

function captureInputs() {
  state.teamName = $("#teamName").value;
  state.difficulty = $("#difficultyLevel").value;
  state.gridCols = 40;
  state.scaleRatio = $("#scaleRatio").value;
  state.scaleKm = $("#scaleKm").value;
  state.reflections.resourceReason = $("#resourceReason").value;
  state.reflections.equityReason = $("#equityReason").value;
  state.reflections.lifeReason = $("#lifeReason").value;
}

async function exportReport() {
  captureInputs();
  await exportDesignJpg();
  const rows = categories.map((category) => {
    const row = state.allocation[category.name] || {};
    return `<tr><td>${category.name}</td><td>${escapeHtml(row.area || "")}</td><td>${escapeHtml(row.ratio || "")}</td><td>${escapeHtml(row.reason || "")}</td></tr>`;
  }).join("");
  const buildings = state.objects.map((object) => `<li>${escapeHtml(object.name)} · ${escapeHtml(object.category)} · Actual area: ${escapeHtml(object.area || "______")} km² · ${escapeHtml(object.note || "")}</li>`).join("");
  const report = `<!doctype html>
<html lang="zh-CN"><meta charset="utf-8"><title>Mars Habitat Report</title>
<style>body{font-family:system-ui,"PingFang SC",sans-serif;line-height:1.55;padding:32px;color:#203142}table{border-collapse:collapse;width:100%;margin:16px 0}td,th{border:1px solid #cfd9df;padding:8px;text-align:left}h1{color:#b44924}</style>
<h1>Mars Habitat Design Report</h1>
<p><strong>Team:</strong> ${escapeHtml(state.teamName || "______")} <strong>Total Area:</strong> 1000 km²</p>
<p><strong>Student Level:</strong> ${escapeHtml($("#difficultyLevel").selectedOptions[0]?.textContent || state.difficulty)}</p>
<p><strong>Canvas Grid:</strong> 40 × 25. Each small square has a 1 cm side length on the map.</p>
<p><strong>Scale:</strong> 1 : ${escapeHtml(state.scaleRatio || "______")} | On the map, 1 cm = ${escapeHtml(state.scaleKm || "______")} km in real life</p>
<h2>Function Area / Ratio Record</h2>
<table><thead><tr><th>Social Function</th><th>Area km²</th><th>Percentage %</th><th>Design Reason</th></tr></thead><tbody>${rows}</tbody></table>
<h2>Building Actual Area Records</h2><ul>${buildings || "<li>No buildings recorded yet.</li>"}</ul>
<h2>Design Reflection</h2>
<h3>Resource Allocation Reason</h3><p>${escapeHtml(state.reflections.resourceReason || "______")}</p>
<h3>Fairness, Inclusion, and Peaceful Community Life</h3><p>${escapeHtml(state.reflections.equityReason || "______")}</p>
<h3>Habitat Life Highlights</h3><p>${escapeHtml(state.reflections.lifeReason || "______")}</p>
<p>Note: This report organizes student-entered content only. It does not calculate, check, or optimize automatically.</p></html>`;
  const blob = new Blob([report], { type: "text/html;charset=utf-8" });
  downloadBlob(blob, `mars-habitat-report-${Date.now()}.html`);
  flash($("#exportBtn"), "Exported");
}

function svgText(value = "", maxLength = 46) {
  const text = String(value);
  const clipped = text.length > maxLength ? `${text.slice(0, maxLength - 1)}...` : text;
  return escapeHtml(clipped);
}

function buildDesignSvg() {
  const zoneMarkup = state.zones.map((zone) => {
    const shape = zone.shape === "freeform"
      ? `<path d="${zonePathD(zone)}" fill="${zone.color}24" stroke="${zone.color}" stroke-width="3" stroke-dasharray="10 7"/>`
      : zone.shape === "circle"
      ? `<circle cx="${zone.x + zone.w / 2}" cy="${zone.y + zone.h / 2}" r="${Math.min(zone.w, zone.h) / 2}" fill="${zone.color}24" stroke="${zone.color}" stroke-width="3" stroke-dasharray="10 7"/>
         <circle cx="${zone.x + zone.w / 2}" cy="${zone.y + zone.h / 2}" r="5" fill="#fff" stroke="#203142" stroke-width="2"/>
         <circle cx="${zone.x + zone.w / 2}" cy="${zone.y + zone.h / 2}" r="13" fill="none" stroke="rgba(32,49,66,.36)" stroke-width="2" stroke-dasharray="4 4"/>`
      : `<rect x="${zone.x}" y="${zone.y}" width="${zone.w}" height="${zone.h}" rx="8" fill="${zone.color}24" stroke="${zone.color}" stroke-width="3" stroke-dasharray="10 7"/>`;
    const labelWidth = zone.shape === "circle"
      ? Math.min(Math.max(zone.w * 0.74, 170), 290)
      : Math.min(Math.max(zone.w - 24, 130), 280);
    const labelX = zone.shape === "circle" ? zone.x + zone.w / 2 - labelWidth / 2 : zone.x + 12;
    const labelY = zone.shape === "circle" ? zone.y + zone.h * 0.18 : zone.y + 12;
    return `
    <g transform="rotate(${zone.rotation || 0} ${zone.x + zone.w / 2} ${zone.y + zone.h / 2})">
      ${shape}
      <rect x="${labelX}" y="${labelY}" width="${labelWidth}" height="52" rx="7" fill="rgba(255,255,255,.88)" stroke="rgba(32,49,66,.14)"/>
      <text x="${labelX + 9}" y="${labelY + 20}" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#203142">${svgText([zone.name || "Functional Zone", zone.categoryZh || getCategory(zone.category).zh].filter(Boolean).join(" | "), 36)}</text>
      <text x="${labelX + 9}" y="${labelY + 39}" font-family="system-ui, sans-serif" font-size="11" fill="#526674">Actual area: ${svgText(zone.area || "______", 18)} km²</text>
    </g>
  `;
  }).join("");
  const pathMarkup = state.paths.map((path) => {
    const d = roadPathD(path);
    const width = path.width || 18;
    return `
      <path d="${d}" fill="none" stroke="${path.color || "#626b72"}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="${d}" fill="none" stroke="#ffffff" stroke-width="${Math.max(2, width * 0.14)}" stroke-dasharray="18 14" stroke-linecap="round"/>
    `;
  }).join("");
  const objectMarkup = state.objects.map((object) => {
    const category = getCategory(object.category);
    return `
      <g transform="translate(${object.x - 43} ${object.y - 35}) rotate(${object.rotation} 43 35) scale(${object.scale})">
        ${iconSvg(category.id, category.color, object.name).replace('class="asset-svg"', 'width="86" height="66"')}
      </g>
      <text x="${object.x}" y="${object.y + 46}" text-anchor="middle" font-size="12" font-weight="700" fill="#203142">${escapeHtml(object.name)}</text>
      <text x="${object.x}" y="${object.y + 61}" text-anchor="middle" font-size="11" fill="#203142">Actual area: ${escapeHtml(object.area || "______")} km²</text>
    `;
  }).join("");
  const annotationMarkup = state.annotations.map((annotation) => {
    const lines = String(annotation.text || "").split(/\n/).slice(0, 4);
    const x = annotation.x - 80;
    const y = annotation.y - 24;
    const height = Math.max(38, 18 + lines.length * 17);
    return `
      <g transform="rotate(${annotation.rotation || 0} ${annotation.x} ${annotation.y}) scale(${annotation.scale || 1})">
        <rect x="${x}" y="${y}" width="180" height="${height}" rx="6" fill="rgba(255,255,255,.86)" stroke="#cfd9df"/>
        ${lines.map((line, index) => `<text x="${x + 8}" y="${y + 20 + index * 17}" font-family="system-ui, sans-serif" font-size="13" fill="#203142">${svgText(line, 28)}</text>`).join("")}
      </g>
    `;
  }).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${CANVAS_WIDTH}" height="${CANVAS_HEIGHT}" viewBox="0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}">
    <defs>
      <pattern id="grid" width="${GRID.cell}" height="${GRID.cell}" patternUnits="userSpaceOnUse">
        <path d="M${GRID.cell} 0H0V${GRID.cell}" fill="none" stroke="#37637a" stroke-opacity=".22"/>
      </pattern>
      <linearGradient id="surface" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#e9935c"/><stop offset=".52" stop-color="#f7d3a8"/><stop offset="1" stop-color="#ec9f67"/>
      </linearGradient>
    </defs>
    <rect width="${CANVAS_WIDTH}" height="${CANVAS_HEIGHT}" fill="url(#surface)"/>
    <circle cx="145" cy="140" r="45" fill="#a7542f" opacity=".22"/>
    <circle cx="870" cy="140" r="63" fill="#ffefcd" opacity=".46"/>
    <circle cx="335" cy="500" r="74" fill="#b05935" opacity=".18"/>
    <rect x="${GRID.x}" y="${GRID.y}" width="${gridWidth()}" height="${GRID.height}" rx="10" fill="rgba(255,253,248,.16)" stroke="#fff" stroke-width="3"/>
    <rect x="${GRID.x}" y="${GRID.y}" width="${gridWidth()}" height="${GRID.height}" rx="10" fill="url(#grid)"/>
    ${zoneMarkup}
    ${pathMarkup}
    ${objectMarkup}
    ${annotationMarkup}
  </svg>`;
}

function exportDesignJpg() {
  const svg = buildDesignSvg();
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = CANVAS_WIDTH;
      canvas.height = CANVAS_HEIGHT;
      const context = canvas.getContext("2d");
      context.fillStyle = "#fff1ea";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0);
      canvas.toBlob((jpgBlob) => {
        URL.revokeObjectURL(url);
        if (!jpgBlob) {
          reject(new Error("Unable to export JPG image."));
          return;
        }
        downloadBlob(jpgBlob, `mars-habitat-design-${Date.now()}.jpg`);
        resolve();
      }, "image/jpeg", 0.94);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Unable to load design image for JPG export."));
    };
    image.src = url;
  });
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function flash(button, label) {
  const old = button.innerHTML;
  button.textContent = label;
  setTimeout(() => {
    button.innerHTML = old;
  }, 1200);
}

function openTutorial() {
  startTour();
}

function closeTutorial() {
  $("#tutorialOverlay").hidden = true;
}

function startTour() {
  tourIndex = 0;
  tourOverlay.hidden = false;
  showTourStep();
}

function nextTourStep() {
  if (tourIndex >= tourSteps.length - 1) {
    endTour();
    return;
  }
  tourIndex += 1;
  showTourStep();
}

function previousTourStep() {
  tourIndex = Math.max(0, tourIndex - 1);
  showTourStep();
}

function endTour() {
  tourOverlay.hidden = true;
  clearTourHighlight();
  removeTourSample();
  document.querySelector('[data-tab="mission"]').click();
}

function showTourStep() {
  clearTourHighlight();
  const step = tourSteps[tourIndex];
  if (step.prepare) step.prepare();
  const target = document.querySelector(step.target);
  if (target) {
    target.scrollIntoView({ block: "nearest", inline: "nearest" });
  }
  $("#tourProgress").textContent = `${tourIndex + 1} / ${tourSteps.length}`;
  $("#tourTitle").textContent = step.title;
  $("#tourText").textContent = step.text;
  $("#tourPrevBtn").disabled = tourIndex === 0;
  $("#tourNextBtn").textContent = tourIndex === tourSteps.length - 1 ? "Finish" : "Next";
  requestAnimationFrame(() => {
    positionTourFocus(target);
    positionTourPopover(target);
  });
}

function clearTourHighlight() {
  if (tourFocus) tourFocus.hidden = true;
}

function positionTourFocus(target) {
  if (!target) {
    tourFocus.hidden = true;
    return;
  }
  const rect = target.getBoundingClientRect();
  const pad = 5;
  tourFocus.hidden = false;
  tourFocus.style.left = `${Math.max(4, rect.left - pad)}px`;
  tourFocus.style.top = `${Math.max(4, rect.top - pad)}px`;
  tourFocus.style.width = `${Math.min(window.innerWidth - rect.left - 8, rect.width + pad * 2)}px`;
  tourFocus.style.height = `${Math.min(window.innerHeight - rect.top - 8, rect.height + pad * 2)}px`;
}

function positionTourPopover(target) {
  const margin = 14;
  const popoverRect = tourPopover.getBoundingClientRect();
  if (!target) {
    tourPopover.style.left = `${Math.max(margin, (window.innerWidth - popoverRect.width) / 2)}px`;
    tourPopover.style.top = `${Math.max(margin, (window.innerHeight - popoverRect.height) / 2)}px`;
    return;
  }
  const rect = target.getBoundingClientRect();
  let left = rect.right + margin;
  let top = rect.top;
  if (left + popoverRect.width > window.innerWidth - margin) left = rect.left - popoverRect.width - margin;
  if (left < margin) left = Math.min(window.innerWidth - popoverRect.width - margin, margin);
  if (top + popoverRect.height > window.innerHeight - margin) top = window.innerHeight - popoverRect.height - margin;
  if (top < margin) top = margin;
  tourPopover.style.left = `${left}px`;
  tourPopover.style.top = `${top}px`;
}

function ensureTourSample() {
  let object = state.objects.find((item) => item.id === tourSampleId);
  if (!object) {
    object = {
      id: uid("tour-object"),
      name: "Sample Convenience Store",
      category: "Residential Life",
      x: 500,
      y: 300,
      rotation: 0,
      scale: 1,
      area: "",
      note: "Tutorial sample. It will be removed when the tutorial ends.",
      tourSample: true,
    };
    tourSampleId = object.id;
    state.objects.push(object);
  }
  state.selectedId = object.id;
  setTool("select");
  renderCanvas();
  renderBuildingRecords();
}

function ensureTourZoneSample() {
  let zone = state.zones.find((item) => item.tourZoneSample);
  if (!zone) {
    const category = getCategory("Residential Life");
    zone = {
      id: uid("tour-zone"),
      name: "Residential Zone",
      category: category.name,
      categoryZh: category.zh,
      x: 420,
      y: 210,
      w: 260,
      h: 160,
      color: category.color,
      rotation: 0,
      area: "______",
      note: "Tutorial sample. It will be removed when the tutorial ends.",
      tourZoneSample: true,
    };
    state.zones.push(zone);
  }
  state.selectedId = zone.id;
  setTool("select");
  renderCanvas();
}

function removeTourSample() {
  if (tourSampleId) state.objects = state.objects.filter((object) => object.id !== tourSampleId);
  if (state.selectedId === tourSampleId) state.selectedId = null;
  tourSampleId = null;
  state.zones = state.zones.filter((zone) => !zone.tourZoneSample);
  renderCanvas();
  renderBuildingRecords();
}

function enterPresentation() {
  captureInputs();
  const overlay = $("#presentationOverlay");
  const map = $("#presentationMap");
  map.innerHTML = "";
  const clone = marsCanvas.cloneNode(true);
  clone.removeAttribute("id");
  clone.style.transform = "translate(-50%, -50%) scale(0.66)";
  clone.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"));
  clone.querySelectorAll(".resize-box").forEach((node) => node.remove());
  clone.querySelectorAll(".selected").forEach((node) => node.classList.remove("selected"));
  map.appendChild(clone);
  $("#presentationTitle").textContent = state.teamName
    ? `${state.teamName} · Mars Habitat Plan`
    : "Mars Habitat Design Platform · Mars Habitat Plan";
  $("#presentationScale").textContent = $("#canvasScaleNote").textContent;
  $("#presentationAllocation").innerHTML = categories.map((category) => {
    const row = state.allocation[category.name] || {};
    return `<p><strong>${category.zh}</strong> ${escapeHtml(row.area || "____")} km² · ${escapeHtml(row.ratio || "____")}%</p>`;
  }).join("");
  $("#presentationHighlights").textContent = state.reflections.lifeReason || "Complete this in your design reflection.";
  overlay.hidden = false;
}

function exitPresentation() {
  $("#presentationOverlay").hidden = true;
}

function initStarterObjects() {
  if (state.objects.length || state.annotations.length || state.zones.length) return;
}

function init() {
  renderLibrary();
  renderFunctionOptions();
  renderPeople();
  loadProject();
  initStarterObjects();
  bindEvents();
  renderAll();
  startTour();
}

init();
