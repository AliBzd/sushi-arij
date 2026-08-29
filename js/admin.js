// Café & Restaurant Sushi Arij - Admin Full Site & Image Editor Engine (With Drag & Drop)

const DEFAULT_PASS = 'arij2026';
const PROD_DOMAIN = 'https://sushiarij.app';

// Full 18 Default Menu Database fallback for Admin Portal
const adminDefaultMenuItems = [
  {
    id: 's1',
    category: 'sushi',
    badge: 'chef',
    price: 85,
    calories: '420 kcal',
    allergens: 'Crustacés, Poissons, Soja, Sésame',
    ingredients: 'Crevette tempura, saumon, avocat, anguille, sauce unagi, sésame',
    name: { fr: 'Dragon Roll Supreme (8 pcs)', en: 'Dragon Roll Supreme (8 pcs)', ar: 'دراغون رول سوبريم (8 قطع)' },
    desc: { fr: 'Crevette tempura croustillante, avocat creamy, anguille grillée, sauce unagi & sésame doré.' },
    image: 'assets/sushi_specialty.png'
  },
  {
    id: 's2',
    category: 'sushi',
    badge: 'popular',
    price: 75,
    calories: '380 kcal',
    allergens: 'Poissons, Lait (Lactose), Soja',
    ingredients: 'Saumon frais, cream cheese, concombre, sauce teriyaki',
    name: { fr: 'Salmon Crunch Roll (8 pcs)', en: 'Salmon Crunch Roll (8 pcs)', ar: 'سالمن كرنش رول (8 قطع)' },
    desc: { fr: 'Saumon frais du Nord, fromage frais, concombre croquant, nappe saumon braisé & teriyaki.' },
    image: 'assets/hero_sushi_cafe.png'
  },
  {
    id: 's3',
    category: 'sushi',
    badge: 'popular',
    price: 65,
    calories: '350 kcal',
    allergens: 'Crustacés, Poisson, Œufs, Sésame',
    ingredients: 'Chair de crabe, avocat, concombre, tobiko orange, mayonnaise japonaise',
    name: { fr: 'California Tobiko Roll (8 pcs)', en: 'California Tobiko Roll (8 pcs)', ar: 'كاليفورنيا توبيكو رول (8 قطع)' },
    desc: { fr: 'Chair de surimi royale, avocat frais, concombre, enrobage tobiko orange croustillant.' },
    image: 'assets/sushi_specialty.png'
  },
  {
    id: 's4',
    category: 'sushi',
    badge: 'chef',
    price: 149,
    calories: '850 kcal',
    allergens: 'Poissons, Crustacés, Soja, Gluten, Sésame',
    ingredients: 'Saumon, Thon rouge, Crevette tempura, Riz à sushi, Algues Nori',
    name: { fr: 'Plateau Master Arij (24 pcs)', en: 'Arij Master Platter (24 pcs)', ar: 'طبق أريج الماستر (24 قطعة)' },
    desc: { fr: '6 Sashimi Saumon & Thon, 6 Nigiri Saumon, 4 Dragon Roll, 4 California & 4 Crispy Roll.' },
    image: 'assets/sushi_specialty.png'
  },
  {
    id: 's5',
    category: 'sushi',
    badge: 'veg',
    price: 55,
    calories: '290 kcal',
    allergens: 'Sésame, Soja',
    ingredients: 'Avocat, concombre, mangue, algues Wakame',
    name: { fr: 'Maki Veggie Green (8 pcs)', en: 'Maki Veggie Green (8 pcs)', ar: 'ماكي فيجي كرين (8 قطع)' },
    desc: { fr: 'Avocat creamy, concombre croquant, mangue douce & wakame mariné.' },
    image: 'assets/sushi_specialty.png'
  },
  {
    id: 's6',
    category: 'sushi',
    badge: 'popular',
    price: 68,
    calories: '520 kcal',
    allergens: 'Gluten, Œufs, Soja',
    ingredients: 'Nouilles japonaises, bouillon Miso, dromon poulet Katsu, œuf ajitama',
    name: { fr: 'Ramen au Poulet Katsu', en: 'Chicken Katsu Ramen', ar: 'رامن دجاج كاتسو' },
    desc: { fr: 'Nouilles artisanales, bouillon miso riche, poulet croustillant, œuf mariné & ciboule.' },
    image: 'assets/hero_sushi_cafe.png'
  },
  {
    id: 'c1',
    category: 'cafe',
    badge: 'popular',
    price: 22,
    calories: '5 kcal',
    allergens: 'Aucun',
    ingredients: '100% Arabica sélectionné',
    name: { fr: 'Expresso Italien Spécial', en: 'Special Italian Espresso', ar: 'إسبريسو إيطالي فاخر' },
    desc: { fr: 'Grains Arabica sélectionnés torréfiés sur mesure, arômes intenses et crème onctueuse.' },
    image: 'assets/hero_sushi_cafe.png'
  },
  {
    id: 'c2',
    category: 'cafe',
    badge: 'chef',
    price: 28,
    calories: '180 kcal',
    allergens: 'Lait (Lactose)',
    ingredients: 'Expresso, lait entier moussé, coulis de caramel beurre salé',
    name: { fr: 'Cappuccino Arij Caramel', en: 'Arij Caramel Cappuccino', ar: 'كابوتشينو أريج بالكراميل' },
    desc: { fr: 'Double shot expresso, lait moussé onctueux, coulis de caramel beurre salé.' },
    image: 'assets/breakfast_pastries.png'
  },
  {
    id: 'c3',
    category: 'cafe',
    badge: 'chef',
    price: 35,
    calories: '140 kcal',
    allergens: 'Fruits à coque (Amandes)',
    ingredients: 'Poudre Matcha cérémoniel du Japon, lait d\'amande',
    name: { fr: 'Matcha Latte Japonais', en: 'Japanese Matcha Latte', ar: 'ماتشا لاتيه ياباني' },
    desc: { fr: 'Poudre de Matcha cérémoniel importé du Japon, lait d\'amande velouté.' },
    image: 'assets/hero_sushi_cafe.png'
  },
  {
    id: 'c4',
    category: 'cafe',
    badge: 'popular',
    price: 32,
    calories: '120 kcal',
    allergens: 'Aucun',
    ingredients: 'Oranges & fraises fraîches du Maroc',
    name: { fr: 'Jus d\'Orange & Fraise Frais', en: 'Fresh Orange & Strawberry Juice', ar: 'عصير برتقال وفرولة طازج' },
    desc: { fr: 'Pressé à la minute à partir de fruits frais naturels marocains sans sucre ajouté.' },
    image: 'assets/breakfast_pastries.png'
  },
  {
    id: 'b1',
    category: 'breakfast',
    badge: 'chef',
    price: 48,
    calories: '580 kcal',
    allergens: 'Gluten, Fruits à coque (Amandes), Lait, Œufs',
    ingredients: 'Huile d\'olive, amlou, miel, fromage, msemmen, harcha, œufs, thé',
    name: { fr: 'Petit-Déjeuner Beldi Marocain', en: 'Moroccan Beldi Breakfast', ar: 'فطور بلدي مغربي أصيل' },
    desc: { fr: 'Huile d\'olive pure, amlou d\'essaouira, miel pur, fromage frais, msemmen, harcha, œufs et thé à la menthe.' },
    image: 'assets/breakfast_pastries.png'
  },
  {
    id: 'b2',
    category: 'breakfast',
    badge: 'popular',
    price: 45,
    calories: '410 kcal',
    allergens: 'Gluten, Œufs, Sésame',
    ingredients: 'Pain au levain, avocat, œufs pochés, graines de chia',
    name: { fr: 'Avocado Toast & Œufs Pochés', en: 'Avocado Toast & Poached Eggs', ar: 'توست الأفوكادو والبيض المسلوق' },
    desc: { fr: 'Pain de campagne au levain, guacamole maison, œufs pochés coulant & graines de chia.' },
    image: 'assets/breakfast_pastries.png'
  },
  {
    id: 'b3',
    category: 'breakfast',
    badge: 'popular',
    price: 38,
    calories: '460 kcal',
    allergens: 'Gluten, Lait, Œufs',
    ingredients: 'Viennoiserie au beurre pur, jus d\'orange, café',
    name: { fr: 'Formule Parisienne Viennoiserie', en: 'Parisian Viennoiserie Combo', ar: 'فطور باريزيان بالفينوازري' },
    desc: { fr: '2 Viennoiseries au beurre (Croissant/Pain au chocolat), jus d\'orange frais & café au choix.' },
    image: 'assets/breakfast_pastries.png'
  },
  {
    id: 'm1',
    category: 'mains',
    badge: 'chef',
    price: 88,
    calories: '540 kcal',
    allergens: 'Poissons, Soja, Sésame, Gluten',
    ingredients: 'Saumon frais, sauce teriyaki, riz jasmin, légumes wok',
    name: { fr: 'Filet de Saumon Grillé Teriyaki', en: 'Grilled Teriyaki Salmon Fillet', ar: 'فيليه سلمون مشوي بترياكي' },
    desc: { fr: 'Saumon frais rôti, sauce teriyaki sucrée-salée, riz jasmin et légumes sautés au wok.' },
    image: 'assets/hero_sushi_cafe.png'
  },
  {
    id: 'm2',
    category: 'mains',
    badge: 'popular',
    price: 72,
    calories: '610 kcal',
    allergens: 'Gluten, Lait',
    ingredients: 'Tagliatelles fraîches, crème fraîche, poulet, champignons',
    name: { fr: 'Tagliatelles au Poulet & Champignons', en: 'Chicken & Mushroom Tagliatelle', ar: 'تالياتيلي بالدجاج والفطر' },
    desc: { fr: 'Pâtes fraîches italiennes, crème parmesan onctueuse, émincé de poulet & champignons de paris.' },
    image: 'assets/cafe_ambiance.png'
  },
  {
    id: 'm3',
    category: 'mains',
    badge: 'chef',
    price: 65,
    calories: '450 kcal',
    allergens: 'Poissons, Soja, Sésame',
    ingredients: 'Saumon mariné, riz à sushi, avocat, edamame, mangue',
    name: { fr: 'Salade Arij Poké Bowl Saumon', en: 'Arij Salmon Poké Bowl', ar: 'بوكي بول السلمون أريج' },
    desc: { fr: 'Saumon mariné soya-sésame, riz vinaigré, avocat, edamame, mangue & chou rouge.' },
    image: 'assets/sushi_specialty.png'
  },
  {
    id: 'd1',
    category: 'desserts',
    badge: 'chef',
    price: 42,
    calories: '280 kcal',
    allergens: 'Lait',
    ingredients: 'Riz gluant, glace Matcha, Mangue, Thé vert',
    name: { fr: 'Mochi Glacé Japonais (3 pcs)', en: 'Japanese Ice Cream Mochi (3 pcs)', ar: 'موتشي ياباني بمثلجات (3 قطع)' },
    desc: { fr: 'Pâte de riz gluante artisanale fourrée glace Matcha, Mangue & Thé Vert.' },
    image: 'assets/hero_sushi_cafe.png'
  },
  {
    id: 'd2',
    category: 'desserts',
    badge: 'popular',
    price: 35,
    calories: '340 kcal',
    allergens: 'Gluten, Lait, Œufs',
    ingredients: 'Biscuit boudoir, expresso, crème mascarpone, cacao',
    name: { fr: 'Tiramisu Mascarpone Café', en: 'Classic Coffee Tiramisu', ar: 'تيراميسو ماسكاربوني بالقهوة' },
    desc: { fr: 'Biscuit boudoir imbibé d\'expresso maison, crème mascarpone et saupoudrage cacao brut.' },
    image: 'assets/breakfast_pastries.png'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  seedInitialData();
  initAdminAuth();
  initNavTabs();
  initDragAndDropUploader();
});

// Drag & Drop Image Uploader Logic
function initDragAndDropUploader() {
  const dropzone = document.getElementById('item-image-dropzone');
  const fileInput = document.getElementById('item-file-input');
  const urlInput = document.getElementById('item-image-url');
  const previewWrap = document.getElementById('image-preview-wrap');
  const previewImg = document.getElementById('image-preview-img');

  if (!dropzone || !fileInput) return;

  dropzone.addEventListener('click', () => fileInput.click());

  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add('dragover');
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove('dragover');
    });
  });

  dropzone.addEventListener('drop', (e) => {
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleImageFile(files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleImageFile(e.target.files[0]);
    }
  });

  function handleImageFile(file) {
    if (!file.type.startsWith('image/')) {
      alert('Veuillez sélectionner un fichier image valide.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const base64Url = e.target.result;
      if (urlInput) urlInput.value = base64Url;
      if (previewImg) previewImg.src = base64Url;
      if (previewWrap) previewWrap.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}

// Seed Initial Default Data into LocalStorage if not present
function seedInitialData() {
  const existingMenu = localStorage.getItem('arij_custom_menu');
  if (!existingMenu || existingMenu === '[]') {
    const defaults = (typeof defaultMenuItems !== 'undefined') ? defaultMenuItems : adminDefaultMenuItems;
    localStorage.setItem('arij_custom_menu', JSON.stringify(defaults));
  }

  if (!localStorage.getItem('arij_brand_name')) {
    localStorage.setItem('arij_brand_name', 'Café & Restaurant Sushi Arij');
  }
  if (!localStorage.getItem('arij_brand_sub')) {
    localStorage.setItem('arij_brand_sub', 'Café & Restaurant');
  }
  if (!localStorage.getItem('arij_hero_title')) {
    localStorage.setItem('arij_hero_title', 'Cuisine Japonaise Fraîche & Expérience Café Exceptionnelle à Sala Al Jadida');
  }
  if (!localStorage.getItem('arij_hero_subtext')) {
    localStorage.setItem('arij_hero_subtext', "Découvrez l'harmonie parfaite entre l'art du sushi japonais artisanal et l'élégance d'un café contemporain. Produits frais préparés chaque jour sur l'Avenue Hssaine.");
  }
  if (!localStorage.getItem('arij_push_title')) {
    localStorage.setItem('arij_push_title', '🔔 Restez Informé de nos Promos du Jour !');
  }
  if (!localStorage.getItem('arij_push_desc')) {
    localStorage.setItem('arij_push_desc', 'Activer les notifications pour recevoir nos offres exclusives à Sala Al Jadida.');
  }

  if (!localStorage.getItem('arij_p1_title')) {
    localStorage.setItem('arij_p1_title', '☕ Formule Café Matinal (06:30 - 09:30)');
    localStorage.setItem('arij_p1_desc', "Expresso Italien + Croissant au Beurre frais + Jus d'Orange Pressé");
    localStorage.setItem('arij_p1_price', '35 MAD');
  }
  if (!localStorage.getItem('arij_p2_title')) {
    localStorage.setItem('arij_p2_title', '🍱 Combo Sushi Duo (16 pcs)');
    localStorage.setItem('arij_p2_desc', '8 Dragon Rolls + 8 Salmon Crunch + 2 Soupes Miso offertes');
    localStorage.setItem('arij_p2_price', '139 MAD');
  }

  if (!localStorage.getItem('arij_feat1_title')) {
    localStorage.setItem('arij_feat1_title', 'Ouvert dès 06h30');
    localStorage.setItem('arij_feat1_desc', 'Savourez votre café matinal, expresso italien et viennoiseries fraîches dès 06h30.');
  }
  if (!localStorage.getItem('arij_feat2_title')) {
    localStorage.setItem('arij_feat2_title', 'Sushi Frais Préparé à la Minute');
    localStorage.setItem('arij_feat2_desc', 'Nos chefs sushimans découpent les meilleurs saumons et thons frais à la commande.');
  }
  if (!localStorage.getItem('arij_rev1_author')) {
    localStorage.setItem('arij_rev1_author', 'Youssef B. • Guide Local (5/5)');
    localStorage.setItem('arij_rev1_text', 'Le meilleur sushi de Sala Al Jadida ! Les saumons sont ultra frais et l\'ambiance café le matin est parfaite.');
  }

  if (!localStorage.getItem('arij_whatsapp_phone')) {
    localStorage.setItem('arij_whatsapp_phone', '212530007780');
  }
}

// Authentication Engine
function initAdminAuth() {
  const isAuth = sessionStorage.getItem('arij_admin_auth') === 'true';
  const loginScreen = document.getElementById('login-screen');
  const dashboardUI = document.getElementById('dashboard-ui');

  if (isAuth) {
    if (loginScreen) loginScreen.style.display = 'none';
    if (dashboardUI) dashboardUI.style.display = 'flex';
    loadDashboardData();
  } else {
    if (loginScreen) loginScreen.style.display = 'block';
    if (dashboardUI) dashboardUI.style.display = 'none';
  }

  const loginForm = document.getElementById('admin-login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputPass = document.getElementById('admin-pass')?.value;
      const storedPass = localStorage.getItem('arij_admin_password') || DEFAULT_PASS;

      if (inputPass === storedPass) {
        sessionStorage.setItem('arij_admin_auth', 'true');
        loginScreen.style.display = 'none';
        dashboardUI.style.display = 'flex';
        loadDashboardData();
      } else {
        const errorEl = document.getElementById('login-error');
        if (errorEl) errorEl.style.display = 'block';
      }
    });
  }
}

function logoutAdmin() {
  sessionStorage.removeItem('arij_admin_auth');
  window.location.reload();
}

// Navigation Tabs
function initNavTabs() {
  document.querySelectorAll('.admin-nav-item[data-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.admin-nav-item[data-tab]').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.admin-tab-content').forEach(c => c.style.display = 'none');

      tab.classList.add('active');
      const target = document.getElementById(`tab-${tab.dataset.tab}`);
      if (target) target.style.display = 'block';
    });
  });
}

// Load Dashboard & Data
function loadDashboardData() {
  seedInitialData();
  renderOrdersTable();
  renderAdminMenu();
  loadPromosAndSettings();
  renderSalesChart();
  renderTopDishesRanking();
  renderCouponsTable();
  loadSiteContentFields();
}

// Load Dynamic Site Content Fields into Admin Inputs
function loadSiteContentFields() {
  const brandName = localStorage.getItem('arij_brand_name') || 'Café & Restaurant Sushi Arij';
  const brandSub = localStorage.getItem('arij_brand_sub') || 'Café & Restaurant';
  const heroTitle = localStorage.getItem('arij_hero_title') || 'Cuisine Japonaise Fraîche & Expérience Café Exceptionnelle à Sala Al Jadida';
  const heroSubtext = localStorage.getItem('arij_hero_subtext') || "Découvrez l'harmonie parfaite entre l'art du sushi japonais artisanal et l'élégance d'un café contemporain. Produits frais préparés chaque jour sur l'Avenue Hssaine.";
  const pushTitle = localStorage.getItem('arij_push_title') || '🔔 Restez Informé de nos Promos du Jour !';
  const pushDesc = localStorage.getItem('arij_push_desc') || 'Activer les notifications pour recevoir nos offres exclusives à Sala Al Jadida.';

  if (document.getElementById('edit-brand-name')) document.getElementById('edit-brand-name').value = brandName;
  if (document.getElementById('edit-brand-sub')) document.getElementById('edit-brand-sub').value = brandSub;
  if (document.getElementById('edit-hero-title')) document.getElementById('edit-hero-title').value = heroTitle;
  if (document.getElementById('edit-hero-subtext')) document.getElementById('edit-hero-subtext').value = heroSubtext;
  if (document.getElementById('edit-push-title')) document.getElementById('edit-push-title').value = pushTitle;
  if (document.getElementById('edit-push-desc')) document.getElementById('edit-push-desc').value = pushDesc;

  const f1t = localStorage.getItem('arij_feat1_title') || 'Ouvert dès 06h30';
  const f1d = localStorage.getItem('arij_feat1_desc') || 'Savourez votre café matinal, expresso italien et viennoiseries fraîches dès 06h30.';
  const f2t = localStorage.getItem('arij_feat2_title') || 'Sushi Frais Préparé à la Minute';
  const f2d = localStorage.getItem('arij_feat2_desc') || 'Nos chefs sushimans découpent les meilleurs saumons et thons frais à la commande.';

  if (document.getElementById('edit-feat1-title')) document.getElementById('edit-feat1-title').value = f1t;
  if (document.getElementById('edit-feat1-desc')) document.getElementById('edit-feat1-desc').value = f1d;
  if (document.getElementById('edit-feat2-title')) document.getElementById('edit-feat2-title').value = f2t;
  if (document.getElementById('edit-feat2-desc')) document.getElementById('edit-feat2-desc').value = f2d;

  const r1a = localStorage.getItem('arij_rev1_author') || 'Youssef B. • Guide Local (5/5)';
  const r1t = localStorage.getItem('arij_rev1_text') || 'Le meilleur sushi de Sala Al Jadida ! Les saumons sont ultra frais et l\'ambiance café le matin est parfaite.';

  if (document.getElementById('edit-rev1-author')) document.getElementById('edit-rev1-author').value = r1a;
  if (document.getElementById('edit-rev1-text')) document.getElementById('edit-rev1-text').value = r1t;
}

function saveAllSiteContent() {
  const brandName = document.getElementById('edit-brand-name')?.value;
  const brandSub = document.getElementById('edit-brand-sub')?.value;
  const heroTitle = document.getElementById('edit-hero-title')?.value;
  const heroSubtext = document.getElementById('edit-hero-subtext')?.value;
  const pushTitle = document.getElementById('edit-push-title')?.value;
  const pushDesc = document.getElementById('edit-push-desc')?.value;

  if (brandName) localStorage.setItem('arij_brand_name', brandName);
  if (brandSub) localStorage.setItem('arij_brand_sub', brandSub);
  if (heroTitle) localStorage.setItem('arij_hero_title', heroTitle);
  if (heroSubtext) localStorage.setItem('arij_hero_subtext', heroSubtext);
  if (pushTitle) localStorage.setItem('arij_push_title', pushTitle);
  if (pushDesc) localStorage.setItem('arij_push_desc', pushDesc);

  alert('Tout le contenu du site a été sauvegardé avec succès !');
}

function saveFeaturesAndReviews() {
  const f1t = document.getElementById('edit-feat1-title')?.value;
  const f1d = document.getElementById('edit-feat1-desc')?.value;
  const f2t = document.getElementById('edit-feat2-title')?.value;
  const f2d = document.getElementById('edit-feat2-desc')?.value;

  if (f1t) localStorage.setItem('arij_feat1_title', f1t);
  if (f1d) localStorage.setItem('arij_feat1_desc', f1d);
  if (f2t) localStorage.setItem('arij_feat2_title', f2t);
  if (f2d) localStorage.setItem('arij_feat2_desc', f2d);

  const r1a = document.getElementById('edit-rev1-author')?.value;
  const r1t = document.getElementById('edit-rev1-text')?.value;
  if (r1a) localStorage.setItem('arij_rev1_author', r1a);
  if (r1t) localStorage.setItem('arij_rev1_text', r1t);

  alert('Avantages et témoignages sauvegardés avec succès !');
}

// Sound Audio Alert
function playAlertSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    osc.start();
    osc.stop(ctx.currentTime + 0.3);
  } catch (e) {
    console.log('Audio not supported or blocked');
  }
}

// Order Management & Searchable History
function getStoredOrders() {
  try {
    return JSON.parse(localStorage.getItem('arij_orders') || '[]');
  } catch (e) {
    return [];
  }
}

function renderOrdersTable() {
  const orders = getStoredOrders();
  const search = (document.getElementById('order-search-input')?.value || '').toLowerCase().trim();
  const statusFilter = document.getElementById('order-status-filter')?.value || 'all';

  const filtered = orders.filter(o => {
    if (statusFilter !== 'all' && o.status !== statusFilter) return false;
    if (search) {
      const name = (o.name || '').toLowerCase();
      const phone = (o.phone || '').toLowerCase();
      const details = (o.details || '').toLowerCase();
      const id = (o.id || '').toLowerCase();
      if (!name.includes(search) && !phone.includes(search) && !details.includes(search) && !id.includes(search)) return false;
    }
    return true;
  });

  const totalRevenue = orders.reduce((sum, o) => sum + (parseFloat(o.total) || 0), 0);
  const aov = orders.length > 0 ? Math.round(totalRevenue / orders.length) : 0;
  
  const revEl = document.getElementById('stat-revenue');
  const countEl = document.getElementById('stat-orders-count');
  const aovEl = document.getElementById('stat-aov');

  if (revEl) revEl.textContent = `${totalRevenue} MAD`;
  if (countEl) countEl.textContent = orders.length;
  if (aovEl) aovEl.textContent = `${aov} MAD`;

  const recentBody = document.getElementById('recent-orders-body');
  if (recentBody) {
    recentBody.innerHTML = orders.slice(0, 5).map(o => `
      <tr>
        <td><strong>#${o.id || 'N/A'}</strong></td>
        <td>${o.date || ''}</td>
        <td>${o.name || 'Client Web'}<br><small style="color: var(--text-muted);">${o.phone || ''}</small></td>
        <td><span class="card-badge popular">${o.type || 'WhatsApp'}</span></td>
        <td><strong>${o.total || 0} MAD</strong></td>
        <td><span class="status-badge open">${o.status || 'En attente'}</span></td>
        <td>
          <button class="btn-secondary" onclick="printKitchenTicket('${o.id}')" style="padding: 0.2rem 0.5rem; font-size: 0.75rem;"><i class="fas fa-print"></i></button>
        </td>
      </tr>
    `).join('') || '<tr><td colspan="7" style="text-align:center; color:var(--text-muted);">Aucune commande enregistrée</td></tr>';
  }

  const allBody = document.getElementById('all-orders-body');
  if (!allBody) return;

  if (filtered.length === 0) {
    allBody.innerHTML = '<tr><td colspan="8" style="text-align:center; padding: 2rem; color:var(--text-muted);">Aucune commande ne correspond aux filtres.</td></tr>';
    return;
  }

  allBody.innerHTML = filtered.map(o => `
    <tr>
      <td><strong>#${o.id}</strong></td>
      <td>${o.date}</td>
      <td><span class="filter-chip">${o.type}</span></td>
      <td style="max-width: 250px;">
        <div><strong>${o.name || 'Client'}</strong> (${o.phone || 'N/A'})</div>
        <div style="font-size: 0.8rem; color: var(--text-muted);">${o.details}</div>
      </td>
      <td><strong style="color: var(--accent-gold);">${o.total} MAD</strong></td>
      <td>
        <select class="status-select" onchange="updateOrderStatus('${o.id}', this.value)">
          <option value="En attente" ${o.status === 'En attente' ? 'selected' : ''}>En attente</option>
          <option value="En préparation" ${o.status === 'En préparation' ? 'selected' : ''}>En préparation</option>
          <option value="Livré" ${o.status === 'Livré' ? 'selected' : ''}>Livré</option>
          <option value="Annulé" ${o.status === 'Annulé' ? 'selected' : ''}>Annulé</option>
        </select>
      </td>
      <td>
        <button class="btn-whatsapp" onclick="sendWhatsAppReply('${o.id}', '${o.phone}', 'confirm')" style="padding: 0.2rem 0.5rem; font-size: 0.72rem;" title="Confirmer"><i class="fas fa-check"></i></button>
        <button class="btn-whatsapp" onclick="sendWhatsAppReply('${o.id}', '${o.phone}', 'ready')" style="padding: 0.2rem 0.5rem; font-size: 0.72rem; background: #3498db;" title="Prêt"><i class="fas fa-motorcycle"></i></button>
      </td>
      <td>
        <button class="btn-secondary" onclick="printKitchenTicket('${o.id}')" style="padding: 0.2rem 0.5rem; font-size: 0.75rem;"><i class="fas fa-print"></i></button>
        <button class="close-btn" onclick="deleteOrder('${o.id}')" title="Supprimer" style="color: var(--accent-crimson);"><i class="fas fa-trash"></i></button>
      </td>
    </tr>
  `).join('');
}

function updateOrderStatus(id, newStatus) {
  const orders = getStoredOrders();
  const order = orders.find(o => o.id === id);
  if (order) {
    order.status = newStatus;
    localStorage.setItem('arij_orders', JSON.stringify(orders));
    renderOrdersTable();
  }
}

function sendWhatsAppReply(orderId, phoneNum, type) {
  const cleanPhone = (phoneNum || '').replace(/[^0-9]/g, '') || '212530007780';
  let msg = '';

  if (type === 'confirm') {
    msg = `✅ *SUSHI ARIJ*: Votre commande #${orderId} a été bien reçue et est en cours de préparation par nos chefs ! Merci pour votre confiance.`;
  } else if (type === 'ready') {
    msg = `🛵 *SUSHI ARIJ*: Votre commande #${orderId} est prête et en cours d'acheminement / livraison ! Bon appétit !`;
  }

  window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function printKitchenTicket(orderId) {
  const orders = getStoredOrders();
  const order = orders.find(o => o.id === orderId) || {
    id: orderId,
    date: new Date().toLocaleString(),
    name: 'Client Web',
    phone: '+212530007780',
    type: 'À EMPORTER',
    details: '1x Dragon Roll Supreme, 1x Expresso Italien',
    total: 107
  };

  const area = document.getElementById('ticket-print-area');
  if (area) {
    document.getElementById('ticket-id-date').textContent = `#${order.id} - ${order.date}`;
    document.getElementById('ticket-customer').textContent = order.name || 'Client Web';
    document.getElementById('ticket-phone').textContent = order.phone || 'N/A';
    document.getElementById('ticket-mode').textContent = order.type || 'COMMANDE';
    document.getElementById('ticket-items-list').innerHTML = `<p>${(order.details || '').replace(/,/g, '<br>')}</p>`;
    document.getElementById('ticket-total').textContent = `${order.total} MAD`;
    
    area.style.display = 'block';
    window.print();
    area.style.display = 'none';
  }
}

function deleteOrder(id) {
  if (confirm('Supprimer cette commande de l\'historique ?')) {
    let orders = getStoredOrders();
    orders = orders.filter(o => o.id !== id);
    localStorage.setItem('arij_orders', JSON.stringify(orders));
    renderOrdersTable();
  }
}

function exportOrdersCSV() {
  const orders = getStoredOrders();
  if (orders.length === 0) {
    alert('Aucune commande à exporter.');
    return;
  }

  let csv = 'ID;Date;Nom;Telephone;Type;Details;Total_MAD;Statut\n';
  orders.forEach(o => {
    csv += `"${o.id}";"${o.date}";"${o.name || ''}";"${o.phone || ''}";"${o.type}";"${(o.details || '').replace(/\n/g, ' ')}";"${o.total}";"${o.status}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `sushi_arij_orders_${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
}

// Visual Analytics & Charts Engine
function renderSalesChart() {
  const chartContainer = document.getElementById('sales-chart-bars');
  if (!chartContainer) return;

  const mockWeeklyData = [
    { day: 'Lun', sales: 420 },
    { day: 'Mar', sales: 580 },
    { day: 'Mer', sales: 710 },
    { day: 'Jeu', sales: 650 },
    { day: 'Ven', sales: 1120 },
    { day: 'Sam', sales: 1450 },
    { day: 'Dim', sales: 1290 }
  ];

  const maxVal = Math.max(...mockWeeklyData.map(d => d.sales));

  chartContainer.innerHTML = mockWeeklyData.map(d => {
    const heightPercent = Math.round((d.sales / maxVal) * 100);
    return `
      <div class="chart-bar" style="height: ${heightPercent}%;">
        <span class="chart-bar-val">${d.sales}</span>
        <span class="chart-bar-lbl">${d.day}</span>
      </div>
    `;
  }).join('');
}

function renderTopDishesRanking() {
  const rankingContainer = document.getElementById('top-dishes-ranking');
  if (!rankingContainer) return;

  const topDishes = [
    { name: 'Dragon Roll Supreme (8 pcs)', count: 48, pct: '92%' },
    { name: 'Salmon Crunch Roll (8 pcs)', count: 41, pct: '82%' },
    { name: 'Formule Café Matinal', count: 35, pct: '70%' },
    { name: 'Cappuccino Arij Caramel', count: 29, pct: '58%' }
  ];

  rankingContainer.innerHTML = topDishes.map(d => `
    <div>
      <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.3rem;">
        <span>${d.name}</span>
        <span style="color: var(--accent-gold);">${d.count} comm.</span>
      </div>
      <div style="background: rgba(255,255,255,0.05); height: 8px; border-radius: 4px; overflow: hidden;">
        <div style="background: linear-gradient(to right, var(--accent-gold), var(--accent-wood)); height: 100%; width: ${d.pct};"></div>
      </div>
    </div>
  `).join('');
}

// Table QR Generator (Production Domain aware)
function generateTableQR() {
  const tableVal = document.getElementById('table-number-select')?.value || '1';
  const imgEl = document.getElementById('table-qr-img');
  const lblEl = document.getElementById('table-qr-lbl');

  if (imgEl) {
    const currentOrigin = (window.location.origin && !window.location.origin.includes('localhost')) ? window.location.origin : PROD_DOMAIN;
    imgEl.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(currentOrigin + '/#menu?table=' + tableVal)}`;
  }
  if (lblEl) {
    lblEl.textContent = `QR Code Autocollant pour Table N° ${tableVal}`;
  }
}

// Coupon Manager
function getStoredCoupons() {
  try {
    return JSON.parse(localStorage.getItem('arij_coupons') || '[]');
  } catch (e) {
    return [
      { code: 'ARIJ10', discount: '10%', type: 'percentage', active: true },
      { code: 'WELCOME', discount: '15 MAD', type: 'fixed', active: true }
    ];
  }
}

function renderCouponsTable() {
  const coupons = getStoredCoupons();
  const body = document.getElementById('coupons-table-body');
  if (!body) return;

  body.innerHTML = coupons.map(c => `
    <tr>
      <td><strong style="color: var(--accent-gold);">${c.code}</strong></td>
      <td>${c.type === 'percentage' ? 'Pourcentage' : 'Montant Fixe'}</td>
      <td><strong>${c.discount}</strong></td>
      <td><span class="status-badge open">${c.active ? 'Actif' : 'Inactif'}</span></td>
      <td>
        <button class="close-btn" onclick="deleteCoupon('${c.code}')" style="color: var(--accent-crimson);"><i class="fas fa-trash"></i></button>
      </td>
    </tr>
  `).join('');
}

function deleteCoupon(code) {
  let coupons = getStoredCoupons().filter(c => c.code !== code);
  localStorage.setItem('arij_coupons', JSON.stringify(coupons));
  renderCouponsTable();
}

function openAddCouponModal() {
  const code = prompt('Entrez le nouveau code promo (ex: SUSHI15):');
  if (!code) return;
  const discount = prompt('Entrez la réduction (ex: 15% ou 20 MAD):');
  if (!discount) return;

  const coupons = getStoredCoupons();
  coupons.push({
    code: code.toUpperCase().trim(),
    discount: discount.trim(),
    type: discount.includes('%') ? 'percentage' : 'fixed',
    active: true
  });
  localStorage.setItem('arij_coupons', JSON.stringify(coupons));
  renderCouponsTable();
}

// Menu Manager (CRUD & Image URLs)
function getStoredMenu() {
  try {
    const custom = localStorage.getItem('arij_custom_menu');
    if (custom && custom !== '[]') return JSON.parse(custom);
  } catch (e) {}
  return adminDefaultMenuItems;
}

function renderAdminMenu() {
  const menu = getStoredMenu();
  const countEl = document.getElementById('stat-menu-count');
  if (countEl) countEl.textContent = menu.length;

  const menuBody = document.getElementById('admin-menu-body');
  if (!menuBody) return;

  menuBody.innerHTML = menu.map(m => {
    const title = m.name?.fr || m.name || 'Plat';
    return `
      <tr>
        <td><img src="${m.image}" style="width: 52px; height: 44px; object-fit: cover; border-radius: 6px; border: 1px solid var(--border-glass);"></td>
        <td><strong>${title}</strong></td>
        <td><span class="filter-chip">${m.category}</span></td>
        <td><strong style="color: var(--accent-gold);">${m.price} MAD</strong></td>
        <td><span class="card-badge ${m.badge || ''}">${m.badge || 'Standard'}</span></td>
        <td><span class="status-badge open">En stock</span></td>
        <td>
          <button class="btn-secondary" onclick="editMenuItem('${m.id}')" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;"><i class="fas fa-edit"></i> Modifier</button>
          <button class="btn-secondary" onclick="deleteMenuItem('${m.id}')" style="padding: 0.25rem 0.6rem; font-size: 0.75rem; color: var(--accent-crimson);"><i class="fas fa-trash"></i> Supprimer</button>
        </td>
      </tr>
    `;
  }).join('');
}

function openAddMenuItemModal() {
  document.getElementById('item-edit-id').value = '';
  document.getElementById('admin-item-form').reset();
  document.getElementById('item-image-url').value = 'assets/sushi_specialty.png';
  document.getElementById('admin-modal-title').textContent = 'Ajouter un Plat au Menu';
  const previewWrap = document.getElementById('image-preview-wrap');
  if (previewWrap) previewWrap.style.display = 'none';
  
  document.getElementById('admin-item-modal').classList.add('active');
  document.getElementById('admin-modal-overlay').classList.add('active');
}

function closeAdminItemModal() {
  document.getElementById('admin-item-modal').classList.remove('active');
  document.getElementById('admin-modal-overlay').classList.remove('active');
}

function editMenuItem(id) {
  const menu = getStoredMenu();
  const item = menu.find(m => m.id === id);
  if (!item) return;

  document.getElementById('item-edit-id').value = item.id;
  document.getElementById('item-name-fr').value = item.name?.fr || item.name || '';
  document.getElementById('item-name-en').value = item.name?.en || '';
  document.getElementById('item-name-ar').value = item.name?.ar || '';
  document.getElementById('item-category').value = item.category || 'sushi';
  document.getElementById('item-price').value = item.price || 50;
  document.getElementById('item-badge').value = item.badge || '';
  document.getElementById('item-calories').value = item.calories || '';
  document.getElementById('item-image-url').value = item.image || 'assets/sushi_specialty.png';
  document.getElementById('item-desc-fr').value = item.desc?.fr || item.desc || '';
  document.getElementById('item-allergens').value = item.allergens || '';

  const previewWrap = document.getElementById('image-preview-wrap');
  const previewImg = document.getElementById('image-preview-img');
  if (previewWrap && previewImg) {
    previewImg.src = item.image || 'assets/sushi_specialty.png';
    previewWrap.style.display = 'block';
  }

  document.getElementById('admin-modal-title').textContent = 'Modifier le Plat & l\'Image #' + item.id;
  document.getElementById('admin-item-modal').classList.add('active');
  document.getElementById('admin-modal-overlay').classList.add('active');
}

function deleteMenuItem(id) {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce plat du menu ?')) {
    let menu = getStoredMenu();
    menu = menu.filter(m => m.id !== id);
    localStorage.setItem('arij_custom_menu', JSON.stringify(menu));
    renderAdminMenu();
  }
}

const itemForm = document.getElementById('admin-item-form');
if (itemForm) {
  itemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const editId = document.getElementById('item-edit-id').value;
    let menu = getStoredMenu();
    const imageUrl = document.getElementById('item-image-url').value.trim();

    const newItem = {
      id: editId || 'item_' + Date.now(),
      category: document.getElementById('item-category').value,
      badge: document.getElementById('item-badge').value,
      price: parseFloat(document.getElementById('item-price').value) || 0,
      calories: document.getElementById('item-calories').value || '350 kcal',
      allergens: document.getElementById('item-allergens').value || 'Aucun',
      ingredients: document.getElementById('item-allergens').value || '',
      name: {
        fr: document.getElementById('item-name-fr').value,
        en: document.getElementById('item-name-en').value || document.getElementById('item-name-fr').value,
        ar: document.getElementById('item-name-ar').value || document.getElementById('item-name-fr').value
      },
      desc: {
        fr: document.getElementById('item-desc-fr').value,
        en: document.getElementById('item-desc-fr').value,
        ar: document.getElementById('item-desc-fr').value
      },
      image: imageUrl || 'assets/sushi_specialty.png'
    };

    if (editId) {
      const index = menu.findIndex(m => m.id === editId);
      if (index !== -1) menu[index] = newItem;
    } else {
      menu.unshift(newItem);
    }

    localStorage.setItem('arij_custom_menu', JSON.stringify(menu));
    closeAdminItemModal();
    renderAdminMenu();
    alert('Plat et image enregistrés avec succès !');
  });
}

// Promos & Settings Manager
function loadPromosAndSettings() {
  const p1Title = localStorage.getItem('arij_p1_title');
  const p1Desc = localStorage.getItem('arij_p1_desc');
  const p1Price = localStorage.getItem('arij_p1_price');
  if (p1Title) document.getElementById('promo1-title').value = p1Title;
  if (p1Desc) document.getElementById('promo1-desc').value = p1Desc;
  if (p1Price) document.getElementById('promo1-price').value = p1Price;

  const phone = localStorage.getItem('arij_whatsapp_phone') || '212530007780';
  const phoneStat = document.getElementById('stat-phone');
  if (phoneStat) phoneStat.textContent = `+${phone}`;
  const setPhone = document.getElementById('set-whatsapp');
  if (setPhone) setPhone.value = phone;
}

function savePromos() {
  const t1 = document.getElementById('promo1-title').value;
  const d1 = document.getElementById('promo1-desc').value;
  const p1 = document.getElementById('promo1-price').value;
  const t2 = document.getElementById('promo2-title').value;
  const d2 = document.getElementById('promo2-desc').value;
  const p2 = document.getElementById('promo2-price').value;

  localStorage.setItem('arij_p1_title', t1);
  localStorage.setItem('arij_p1_desc', d1);
  localStorage.setItem('arij_p1_price', p1);
  localStorage.setItem('arij_p2_title', t2);
  localStorage.setItem('arij_p2_desc', d2);
  localStorage.setItem('arij_p2_price', p2);

  alert('Promotions enregistrées et mises à jour sur le site !');
}

const settingsForm = document.getElementById('settings-form');
if (settingsForm) {
  settingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const phone = document.getElementById('set-whatsapp').value.trim();
    const status = document.getElementById('set-store-status').value;
    const newPass = document.getElementById('set-new-pass').value.trim();

    if (phone) localStorage.setItem('arij_whatsapp_phone', phone);
    if (status) localStorage.setItem('arij_store_status_override', status);
    if (newPass) localStorage.setItem('arij_admin_password', newPass);

    alert('Paramètres du site sauvegardés avec succès !');
    loadPromosAndSettings();
  });
}
