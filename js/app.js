// Café & Restaurant Sushi Arij - Application Logic (Fully Dynamic & Admin Modifiable)

// Full Default Menu Database with Nutritional Facts & Allergens
const defaultMenuItems = [
  // --- SUSHI & JAPANESE SPECIALTIES ---
  {
    id: 's1',
    category: 'sushi',
    badge: 'chef',
    price: 85,
    calories: '420 kcal',
    allergens: 'Crustacés, Poissons, Soja, Sésame',
    ingredients: 'Crevette tempura, saumon, avocat, anguille, sauce unagi, sésame',
    name: { fr: 'Dragon Roll Supreme (8 pcs)', en: 'Dragon Roll Supreme (8 pcs)', ar: 'دراغون رول سوبريم (8 قطع)' },
    desc: {
      fr: 'Crevette tempura croustillante, avocat creamy, anguille grillée, sauce unagi & sésame doré.',
      en: 'Crispy tempura shrimp, creamy avocado, grilled eel, unagi glaze & toasted sesame.',
      ar: 'جمبري تمبورا مقرمش، أفوكادو، ثعبان البحر المشوي، صوص أوناجي وسمسم.'
    },
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
    desc: {
      fr: 'Saumon frais du Nord, fromage frais, concombre croquant, nappe saumon braisé & teriyaki.',
      en: 'Fresh Nordic salmon, cream cheese, crisp cucumber, seared salmon top & teriyaki glaze.',
      ar: 'سلمون طازج، جبنة كريمة، خيار مقرمش، سلمون مشوح وصوص ترياكي.'
    },
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
    desc: {
      fr: 'Chair de surimi royale, avocat frais, concombre, enrobage tobiko orange croustillant.',
      en: 'Surimi crab, fresh avocado, cucumber, coated with crunchy orange tobiko.',
      ar: 'سلطعون كاليفورنيا، أفوكادو، خيار وتغليفة بيض السمك التوبيكو.'
    },
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
    desc: {
      fr: '6 Sashimi Saumon & Thon, 6 Nigiri Saumon, 4 Dragon Roll, 4 California & 4 Crispy Roll.',
      en: '6 Salmon & Tuna Sashimi, 6 Salmon Nigiri, 4 Dragon Roll, 4 California & 4 Crispy Roll.',
      ar: '6 ساشيمي سلمون وتونة، 6 نيقيريسلمون، 4 دراغون رول، 4 كاليفورنيا و4 كريسبي.'
    },
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
    desc: {
      fr: 'Avocat creamy, concombre croquant, mangue douce & wakame mariné.',
      en: 'Creamy avocado, crunchy cucumber, sweet mango & marinated wakame.',
      ar: 'أفوكادو كريمي، خيار مقرمش، مانجو حلوة وأعشاب واكامي.'
    },
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
    desc: {
      fr: 'Nouilles artisanales, bouillon miso riche, poulet croustillant, œuf mariné & ciboule.',
      en: 'Artisanal noodles, rich miso broth, crispy chicken, marinated egg & scallions.',
      ar: 'نودلز طازجة، حساء ميسو غني، دجاج مقرمش، بيض متبل وبصل أخضر.'
    },
    image: 'assets/hero_sushi_cafe.png'
  },

  // --- CAFÉ & BEVERAGES ---
  {
    id: 'c1',
    category: 'cafe',
    badge: 'popular',
    price: 22,
    calories: '5 kcal',
    allergens: 'Aucun',
    ingredients: '100% Arabica sélectionné',
    name: { fr: 'Expresso Italien Spécial', en: 'Special Italian Espresso', ar: 'إسبريسو إيطالي فاخر' },
    desc: {
      fr: 'Grains Arabica sélectionnés torréfiés sur mesure, arômes intenses et crème onctueuse.',
      en: 'Selected custom-roasted Arabica beans, intense aroma & velvety crema.',
      ar: 'حبوب أرابيكا مختارة بعناية، نكهة غنية ورغوة مخملية.'
    },
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
    desc: {
      fr: 'Double shot expresso, lait moussé onctueux, coulis de caramel beurre salé.',
      en: 'Double shot espresso, velvety steamed milk, salted butter caramel drizzle.',
      ar: 'جرعة مضاعفة إسبريسو، حليب مبخر كريمي، وصوص كراميل مميز.'
    },
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
    desc: {
      fr: 'Poudre de Matcha cérémoniel importé du Japon, lait d\'amande velouté.',
      en: 'Imported Japanese ceremonial Matcha, velvety almond milk.',
      ar: 'بودرة ماتشا يابانية فاخرة مع حليب اللوز المخملي.'
    },
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
    desc: {
      fr: 'Pressé à la minute à partir de fruits frais naturels marocains sans sucre ajouté.',
      en: 'Freshly squeezed natural Moroccan fruits with no added sugar.',
      ar: 'معصور فوراً من فواكه طبيعية طازجة بدون سكر مضاف.'
    },
    image: 'assets/breakfast_pastries.png'
  },

  // --- BREAKFAST ---
  {
    id: 'b1',
    category: 'breakfast',
    badge: 'chef',
    price: 48,
    calories: '580 kcal',
    allergens: 'Gluten, Fruits à coque (Amandes), Lait, Œufs',
    ingredients: 'Huile d\'olive, amlou, miel, fromage, msemmen, harcha, œufs, thé',
    name: { fr: 'Petit-Déjeuner Beldi Marocain', en: 'Moroccan Beldi Breakfast', ar: 'فطور بلدي مغربي أصيل' },
    desc: {
      fr: 'Huile d\'olive pure, amlou d\'essaouira, miel pur, fromage frais, msemmen, harcha, œufs et thé à la menthe.',
      en: 'Pure olive oil, Essaouira amlou, natural honey, fresh cheese, msemmen, harcha, eggs & mint tea.',
      ar: 'زيت زيتون أصيل، أملو، عسل طبيعي، جبن طري، مسمن، حرشة، بيض وشاي بالنعناع.'
    },
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
    desc: {
      fr: 'Pain de campagne au levain, guacamole maison, œufs pochés coulant & graines de chia.',
      en: 'Sourdough bread, house guacamole, runny poached eggs & chia seeds.',
      ar: 'خبز التوست الطازج، غواكامولي منزلي، بيض مسلوق ورشة بذور الشيا.'
    },
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
    desc: {
      fr: '2 Viennoiseries au beurre (Croissant/Pain au chocolat), jus d\'orange frais & café au choix.',
      en: '2 Butter pastries (Croissant/Pain au chocolat), fresh orange juice & coffee of choice.',
      ar: '2 كرواسون بالزبدة، عصير برتقال طازج وقهوة من اختيارك.'
    },
    image: 'assets/breakfast_pastries.png'
  },

  // --- LUNCH & DINNER ---
  {
    id: 'm1',
    category: 'mains',
    badge: 'chef',
    price: 88,
    calories: '540 kcal',
    allergens: 'Poissons, Soja, Sésame, Gluten',
    ingredients: 'Saumon frais, sauce teriyaki, riz jasmin, légumes wok',
    name: { fr: 'Filet de Saumon Grillé Teriyaki', en: 'Grilled Teriyaki Salmon Fillet', ar: 'فيليه سلمون مشوي بترياكي' },
    desc: {
      fr: 'Saumon frais rôti, sauce teriyaki sucrée-salée, riz jasmin et légumes sautés au wok.',
      en: 'Seared salmon fillet, sweet teriyaki glaze, jasmine rice & wok-sautéed veggies.',
      ar: 'سلمون مشوي، صوص ترياكي، أرز ياسمين وخضار سوتيه.'
    },
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
    desc: {
      fr: 'Pâtes fraîches italiennes, crème parmesan onctueuse, émincé de poulet & champignons de paris.',
      en: 'Fresh Italian pasta, rich parmesan cream sauce, tender chicken & button mushrooms.',
      ar: 'باستا طازجة، كريمة البارميزان الغنية، قطع الدجاج وفطر طازج.'
    },
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
    desc: {
      fr: 'Saumon mariné soya-sésame, riz vinaigré, avocat, edamame, mangue & chou rouge.',
      en: 'Soy-sesame marinated salmon, sushi rice, avocado, edamame, mango & red cabbage.',
      ar: 'سلمون متبل بالصويا والسمسم، أرز السوشي، أفوكادو، إيدامامي ومانجو.'
    },
    image: 'assets/sushi_specialty.png'
  },

  // --- DESSERTS ---
  {
    id: 'd1',
    category: 'desserts',
    badge: 'chef',
    price: 42,
    calories: '280 kcal',
    allergens: 'Lait',
    ingredients: 'Riz gluant, glace Matcha, Mangue, Thé vert',
    name: { fr: 'Mochi Glacé Japonais (3 pcs)', en: 'Japanese Ice Cream Mochi (3 pcs)', ar: 'موتشي ياباني بمثلجات (3 قطع)' },
    desc: {
      fr: 'Pâte de riz gluante artisanale fourrée glace Matcha, Mangue & Thé Vert.',
      en: 'Artisanal rice dough filled with Matcha, Mango & Green Tea ice cream.',
      ar: 'عجين الأرز الياباني بحشوة آيس كريم الماتشا والمانجو والشاي الأخضر.'
    },
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
    desc: {
      fr: 'Biscuit boudoir imbibé d\'expresso maison, crème mascarpone et saupoudrage cacao brut.',
      en: 'Ladyfingers soaked in house espresso, mascarpone cream & raw cacao dusting.',
      ar: 'بسكويت مغموس في الإسبريسو، كريمة الماسكاربوني ورشة كاكاو غنية.'
    },
    image: 'assets/breakfast_pastries.png'
  }
];

// Dynamically Load Menu from Admin storage
function getActiveMenuItems() {
  try {
    const custom = localStorage.getItem('arij_custom_menu');
    if (custom) return JSON.parse(custom);
  } catch (e) {}
  return defaultMenuItems;
}

let menuItems = getActiveMenuItems();

// App State
let currentLang = 'fr';
let currentTheme = 'dark';
let activeCategory = 'all';
let activeFilter = 'all';
let searchQuery = '';
let cart = [];
let currentPairing = null;
let appliedDiscount = 0;

// Target Phone Number for WhatsApp
function getWhatsAppPhone() {
  return localStorage.getItem('arij_whatsapp_phone') || '212612560803';
}

// Apply Admin Custom Site Content Dynamic Overrides
function applyAdminSiteOverrides() {
  const brandSub = localStorage.getItem('arij_brand_sub');
  const heroTitle = localStorage.getItem('arij_hero_title');
  const heroSubtext = localStorage.getItem('arij_hero_subtext');
  const pushTitle = localStorage.getItem('arij_push_title');
  const pushDesc = localStorage.getItem('arij_push_desc');

  if (heroTitle) {
    const titleEl = document.querySelector('.hero-title');
    if (titleEl) titleEl.innerHTML = heroTitle;
  }
  if (heroSubtext) {
    const subEl = document.querySelector('.hero-subtitle');
    if (subEl) subEl.textContent = heroSubtext;
  }
  if (pushTitle) {
    const pTitle = document.querySelector('.push-banner strong');
    if (pTitle) pTitle.textContent = pushTitle;
  }
  if (pushDesc) {
    const pDesc = document.querySelector('.push-banner span');
    if (pDesc) pDesc.textContent = pushDesc;
  }

  // Daily Promos Overrides
  const p1t = localStorage.getItem('arij_p1_title');
  const p1d = localStorage.getItem('arij_p1_desc');
  const p1p = localStorage.getItem('arij_p1_price');
  if (p1t) {
    const el = document.querySelector('[data-i18n="combo1_title"]');
    if (el) el.textContent = p1t;
  }
  if (p1d) {
    const el = document.querySelector('[data-i18n="combo1_desc"]');
    if (el) el.textContent = p1d;
  }
  if (p1p) {
    const el = document.querySelector('[data-i18n="combo1_price"]');
    if (el) el.textContent = p1p;
  }
}

// Log Order to Admin Storage
function logOrderToAdmin(orderData) {
  try {
    const orders = JSON.parse(localStorage.getItem('arij_orders') || '[]');
    orders.unshift(orderData);
    localStorage.setItem('arij_orders', JSON.stringify(orders));
  } catch (e) {
    console.error('Failed to log order to admin storage', e);
  }
}

// DOM Elements Initialization
document.addEventListener('DOMContentLoaded', () => {
  applyAdminSiteOverrides();
  initLanguage();
  initTheme();
  checkOperatingStatus();
  renderMenu();
  setupEventListeners();
  setupMinDate();
  registerServiceWorker();
  selectPairingMood('fresh');
});

// Register PWA Service Worker
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(() => {
      console.log('Sushi Arij Service Worker Registered');
    }).catch(err => {
      console.log('SW registration error:', err);
    });
  }
}

// Request Web Push Notification Permission
function requestNotificationPermission() {
  if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        alert(currentLang === 'ar' ? 'تم تفعيل الإشعارات بنجاح!' : 'Notifications activées avec succès !');
      } else {
        alert('Permission non accordée.');
      }
    });
  } else {
    alert('Notifications non supportées par votre navigateur.');
  }
}

// Apply Coupon Code
function applyCartCoupon() {
  const codeInput = document.getElementById('cart-coupon-input')?.value.trim().toUpperCase();
  if (!codeInput) return;

  let coupons = [];
  try {
    coupons = JSON.parse(localStorage.getItem('arij_coupons') || '[]');
  } catch (e) {}

  if (coupons.length === 0) {
    coupons = [
      { code: 'ARIJ10', discount: '10%', type: 'percentage', active: true },
      { code: 'WELCOME', discount: '15 MAD', type: 'fixed', active: true }
    ];
  }

  const found = coupons.find(c => c.code === codeInput && c.active !== false);
  if (found) {
    if (found.type === 'percentage') {
      const pct = parseFloat(found.discount) || 10;
      appliedDiscount = pct;
      alert(`Code ${found.code} appliqué ! -${pct}% de remise`);
    } else {
      const fix = parseFloat(found.discount) || 15;
      appliedDiscount = -fix;
      alert(`Code ${found.code} appliqué ! -${fix} MAD de remise`);
    }
    updateCartUI();
  } else {
    alert('Code promo non valide.');
  }
}

// Pairing Wizard Engine
function selectPairingMood(moodKey) {
  document.querySelectorAll('.pairing-option-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mood === moodKey);
  });

  const menu = getActiveMenuItems();
  const pairingMap = {
    fresh: { mainId: 's3', drinkId: 'c4', comboPrice: 97 },
    rich: { mainId: 's1', drinkId: 'c3', comboPrice: 120 },
    breakfast: { mainId: 'b3', drinkId: 'c1', comboPrice: 60 },
    sweet: { mainId: 'd1', drinkId: 'c2', comboPrice: 70 }
  };

  const selected = pairingMap[moodKey] || pairingMap.fresh;
  const mainItem = menu.find(m => m.id === selected.mainId) || menu[0];
  const drinkItem = menu.find(m => m.id === selected.drinkId) || menu[1];

  currentPairing = { main: mainItem, drink: drinkItem, price: selected.comboPrice };

  const resultContainer = document.getElementById('pairing-result-card');
  if (resultContainer && mainItem && drinkItem) {
    const mainTitle = mainItem.name[currentLang] || mainItem.name.fr || mainItem.name;
    const drinkTitle = drinkItem.name[currentLang] || drinkItem.name.fr || drinkItem.name;

    resultContainer.innerHTML = `
      <div style="display: flex; gap: 1.5rem; align-items: center; justify-content: center; flex-wrap: wrap;">
        <div style="text-align: center;">
          <img src="${mainItem.image}" style="width: 110px; height: 90px; object-fit: cover; border-radius: var(--radius-sm); margin: 0 auto 0.5rem;">
          <h4 style="font-size: 0.95rem;">${mainTitle}</h4>
        </div>
        <div style="font-size: 1.5rem; color: var(--accent-gold); font-weight: 800;">+</div>
        <div style="text-align: center;">
          <img src="${drinkItem.image}" style="width: 110px; height: 90px; object-fit: cover; border-radius: var(--radius-sm); margin: 0 auto 0.5rem;">
          <h4 style="font-size: 0.95rem;">${drinkTitle}</h4>
        </div>
      </div>
      <div style="margin-top: 1.2rem; text-align: center;">
        <span style="font-size: 1.4rem; font-weight: 800; color: var(--accent-gold);">${selected.comboPrice} MAD</span>
      </div>
    `;
  }
}

function addCurrentPairingToCart() {
  if (!currentPairing) return;
  addToCart(currentPairing.main.id);
  addToCart(currentPairing.drink.id);
  
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');
  if (cartDrawer) cartDrawer.classList.add('active');
  if (cartOverlay) cartOverlay.classList.add('active');
}

// Theme Engine (Dark / Light)
function initTheme() {
  const savedTheme = localStorage.getItem('arij_theme') || 'dark';
  setTheme(savedTheme);
}

function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('arij_theme', theme);
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  
  if (theme === 'light') {
    document.body.classList.add('light-theme');
    if (themeToggleIcon) themeToggleIcon.className = 'fas fa-moon';
  } else {
    document.body.classList.remove('light-theme');
    if (themeToggleIcon) themeToggleIcon.className = 'fas fa-sun';
  }
}

function toggleTheme() {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// Operating Status Check
function checkOperatingStatus() {
  const override = localStorage.getItem('arij_store_status_override');
  const badgeEl = document.getElementById('open-status-badge');
  
  if (badgeEl) {
    if (override === 'open') {
      badgeEl.className = 'status-badge open';
      badgeEl.innerHTML = `<span class="pulse-dot"></span> <span data-i18n="status_open">${translations[currentLang].status_open}</span>`;
      return;
    } else if (override === 'closed') {
      badgeEl.className = 'status-badge closed';
      badgeEl.innerHTML = `<span class="pulse-dot-red"></span> <span data-i18n="status_closed">${translations[currentLang].status_closed}</span>`;
      return;
    }
  }

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeNum = hours * 100 + minutes;
  
  const isOpen = timeNum >= 630 && timeNum < 2330;
  
  if (badgeEl) {
    if (isOpen) {
      badgeEl.className = 'status-badge open';
      badgeEl.innerHTML = `<span class="pulse-dot"></span> <span data-i18n="status_open">${translations[currentLang].status_open}</span>`;
    } else {
      badgeEl.className = 'status-badge closed';
      badgeEl.innerHTML = `<span class="pulse-dot-red"></span> <span data-i18n="status_closed">${translations[currentLang].status_closed}</span>`;
    }
  }
}

// Language Switcher Engine
function initLanguage() {
  const savedLang = localStorage.getItem('arij_lang') || 'fr';
  setLanguage(savedLang);
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('arij_lang', lang);
  
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  if (lang === 'ar') {
    html.setAttribute('dir', 'rtl');
    document.body.classList.add('rtl-mode');
  } else {
    html.setAttribute('dir', 'ltr');
    document.body.classList.remove('rtl-mode');
  }
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  applyAdminSiteOverrides();
  renderMenu();
  updateCartUI();
  checkOperatingStatus();
}

function openNutritionalModal(itemId) {
  const menu = getActiveMenuItems();
  const item = menu.find(m => m.id === itemId);
  if (!item) return;

  const modal = document.getElementById('nutri-modal');
  const overlay = document.getElementById('nutri-modal-overlay');
  const content = document.getElementById('nutri-modal-content');

  if (modal && content) {
    const title = item.name[currentLang] || item.name.fr || item.name;
    content.innerHTML = `
      <h3 style="font-family: var(--font-heading); font-size: 1.3rem; margin-bottom: 1rem;">${title}</h3>
      <div style="display: flex; flex-direction: column; gap: 0.8rem; font-size: 0.9rem;">
        <p><strong>🔥 ${translations[currentLang].lbl_calories}</strong> ${item.calories || 'N/A'}</p>
        <p><strong>⚠️ ${translations[currentLang].lbl_allergens}</strong> ${item.allergens || 'Aucun'}</p>
        <p><strong>🥗 ${translations[currentLang].lbl_ingredients}</strong> ${item.ingredients || item.desc?.fr || ''}</p>
      </div>
    `;
    modal.classList.add('active');
    if (overlay) overlay.classList.add('active');
  }
}

function orderCombo(comboTitleKey, priceVal) {
  const title = translations[currentLang][comboTitleKey] || comboTitleKey;
  let message = `🔥 *COMMANDE OFFRE SPÉCIALE - SUSHI ARIJ*\n`;
  message += `---------------------------------\n`;
  message += `🎁 *Offre :* ${title}\n`;
  message += `💰 *Prix :* ${priceVal}\n`;
  message += `---------------------------------\n`;
  message += `📍 Envoyé depuis le site web Café & Restaurant Sushi Arij (Av. Hssaine, Sala Al Jadida)`;

  // Log to admin storage
  logOrderToAdmin({
    id: 'CMB_' + Math.floor(1000 + Math.random() * 9000),
    date: new Date().toLocaleString('fr-FR'),
    type: 'Offre Spéciale',
    name: 'Client Offre',
    phone: 'WhatsApp Direct',
    details: title,
    total: parseFloat(priceVal) || 35,
    status: 'En attente'
  });

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${getWhatsAppPhone()}?text=${encoded}`, '_blank');
}

function sendEventWhatsApp() {
  const name = document.getElementById('evt-name')?.value.trim();
  const phone = document.getElementById('evt-phone')?.value.trim();
  const type = document.getElementById('evt-type')?.value;
  const date = document.getElementById('evt-date')?.value;
  const guests = document.getElementById('evt-guests')?.value;

  if (!name || !phone || !date) {
    alert('Veuillez remplir tous les champs.');
    return;
  }

  let message = `🎉 *DEMANDE D'ÉVÉNEMENT PRIVÉ - SUSHI ARIJ*\n`;
  message += `---------------------------------\n`;
  message += `👤 *Nom :* ${name}\n`;
  message += `📞 *Téléphone :* ${phone}\n`;
  message += `🎈 *Type d'événement :* ${type}\n`;
  message += `📅 *Date :* ${date}\n`;
  message += `👥 *Invités :* ${guests}\n`;
  message += `---------------------------------\n`;
  message += `📍 Café & Restaurant Sushi Arij (Av. Hssaine, Sala Al Jadida)`;

  // Log to admin storage
  logOrderToAdmin({
    id: 'EVT_' + Math.floor(1000 + Math.random() * 9000),
    date: new Date().toLocaleString('fr-FR'),
    type: 'Événement Privé',
    name: name,
    phone: phone,
    details: `${type} pour ${guests} personnes le ${date}`,
    total: 0,
    status: 'En attente'
  });

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${getWhatsAppPhone()}?text=${encoded}`, '_blank');

  const evtModal = document.getElementById('event-modal');
  const evtOverlay = document.getElementById('event-modal-overlay');
  if (evtModal) evtModal.classList.remove('active');
  if (evtOverlay) evtOverlay.classList.remove('active');
}

// Event Listeners
function setupEventListeners() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  // Event Modal Triggers
  const evtBtn = document.getElementById('evt-modal-btn');
  const evtModal = document.getElementById('event-modal');
  const evtOverlay = document.getElementById('event-modal-overlay');
  const evtClose = document.getElementById('evt-modal-close');

  if (evtBtn && evtModal) {
    evtBtn.addEventListener('click', () => {
      evtModal.classList.add('active');
      if (evtOverlay) evtOverlay.classList.add('active');
    });
  }

  if (evtClose && evtModal) {
    const closeEvt = () => {
      evtModal.classList.remove('active');
      if (evtOverlay) evtOverlay.classList.remove('active');
    };
    evtClose.addEventListener('click', closeEvt);
    if (evtOverlay) evtOverlay.addEventListener('click', closeEvt);
  }

  const evtForm = document.getElementById('event-form');
  if (evtForm) {
    evtForm.addEventListener('submit', (e) => {
      e.preventDefault();
      sendEventWhatsApp();
    });
  }

  const qrBtn = document.getElementById('qr-modal-btn');
  const qrModal = document.getElementById('qr-modal');
  const qrOverlay = document.getElementById('qr-modal-overlay');
  const qrCloseBtn = document.getElementById('qr-modal-close');

  if (qrBtn && qrModal) {
    qrBtn.addEventListener('click', () => {
      qrModal.classList.add('active');
      if (qrOverlay) qrOverlay.classList.add('active');
    });
  }

  if (qrCloseBtn && qrModal) {
    const closeQR = () => {
      qrModal.classList.remove('active');
      if (qrOverlay) qrOverlay.classList.remove('active');
    };
    qrCloseBtn.addEventListener('click', closeQR);
    if (qrOverlay) qrOverlay.addEventListener('click', closeQR);
  }

  const nutriModal = document.getElementById('nutri-modal');
  const nutriOverlay = document.getElementById('nutri-modal-overlay');
  const nutriClose = document.getElementById('nutri-modal-close');
  if (nutriClose && nutriModal) {
    const closeNutri = () => {
      nutriModal.classList.remove('active');
      if (nutriOverlay) nutriOverlay.classList.remove('active');
    };
    nutriClose.addEventListener('click', closeNutri);
    if (nutriOverlay) nutriOverlay.addEventListener('click', closeNutri);
  }

  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });
    
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('active');
      });
    });
  }

  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.category;
      renderMenu();
    });
  });

  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;
      renderMenu();
    });
  });

  const searchInput = document.getElementById('menu-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderMenu();
    });
  }

  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartOverlay = document.getElementById('cart-overlay');

  if (cartToggleBtn && cartDrawer) {
    cartToggleBtn.addEventListener('click', () => {
      cartDrawer.classList.add('active');
      cartOverlay.classList.add('active');
    });
  }

  if (cartCloseBtn && cartOverlay) {
    const closeCart = () => {
      cartDrawer.classList.remove('active');
      cartOverlay.classList.remove('active');
    };
    cartCloseBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
  }

  const resModal = document.getElementById('reservation-modal');
  const openResBtns = document.querySelectorAll('.trigger-reservation-modal');
  const closeResBtn = document.getElementById('res-modal-close');
  const resOverlay = document.getElementById('res-modal-overlay');

  openResBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (resModal) {
        resModal.classList.add('active');
        if (resOverlay) resOverlay.classList.add('active');
      }
    });
  });

  if (closeResBtn && resModal) {
    const closeRes = () => {
      resModal.classList.remove('active');
      if (resOverlay) resOverlay.classList.remove('active');
    };
    closeResBtn.addEventListener('click', closeRes);
    if (resOverlay) resOverlay.addEventListener('click', closeRes);
  }

  const resForm = document.getElementById('reservation-form');
  if (resForm) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      sendReservationWhatsApp();
    });
  }

  const cartSubmitBtn = document.getElementById('cart-submit-btn');
  if (cartSubmitBtn) {
    cartSubmitBtn.addEventListener('click', () => {
      sendCartWhatsApp();
    });
  }
}

function setupMinDate() {
  const dateInput = document.getElementById('res-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }
}

function renderMenu() {
  const container = document.getElementById('menu-items-grid');
  if (!container) return;

  const menu = getActiveMenuItems();
  const filtered = menu.filter(item => {
    if (activeCategory !== 'all' && item.category !== activeCategory) return false;
    if (activeFilter !== 'all' && item.badge !== activeFilter) return false;
    if (searchQuery) {
      const name = (item.name[currentLang] || item.name.fr || item.name || '').toLowerCase();
      const desc = (item.desc[currentLang] || item.desc.fr || item.desc || '').toLowerCase();
      if (!name.includes(searchQuery) && !desc.includes(searchQuery)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="menu-empty">
        <i class="fas fa-utensils"></i>
        <p>${currentLang === 'ar' ? 'لم يتم العثور على أطباق تطابق البحث' : currentLang === 'fr' ? 'Aucun plat ne correspond à votre recherche' : 'No items match your search'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const badgeText = getBadgeLabel(item.badge);
    const itemTitle = item.name[currentLang] || item.name.fr || item.name;
    const itemDesc = item.desc[currentLang] || item.desc.fr || item.desc;
    const cartQty = getItemCartQuantity(item.id);

    return `
      <div class="menu-card glass-card" data-id="${item.id}">
        <div class="menu-card-img-wrap">
          <img src="${item.image}" alt="${itemTitle}" loading="lazy">
          ${badgeText ? `<span class="card-badge ${item.badge}">${badgeText}</span>` : ''}
          <button class="nutri-info-btn" onclick="openNutritionalModal('${item.id}')" title="Infos Nutritionnelles"><i class="fas fa-info-circle"></i></button>
        </div>
        <div class="menu-card-body">
          <div class="menu-card-header">
            <h3 class="menu-card-title">${itemTitle}</h3>
            <span class="menu-card-price">${item.price} <small>MAD</small></span>
          </div>
          <p class="menu-card-desc">${itemDesc}</p>
          <div class="menu-card-footer">
            ${cartQty > 0 ? `
              <div class="qty-control">
                <button onclick="updateCartItemQty('${item.id}', -1)" aria-label="Decrease"><i class="fas fa-minus"></i></button>
                <span>${cartQty}</span>
                <button onclick="updateCartItemQty('${item.id}', 1)" aria-label="Increase"><i class="fas fa-plus"></i></button>
              </div>
            ` : `
              <button class="add-to-cart-btn" onclick="addToCart('${item.id}')">
                <i class="fas fa-plus-circle"></i>
                <span data-i18n="cart_add_btn">${translations[currentLang].cart_add_btn}</span>
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function getBadgeLabel(badgeKey) {
  if (!badgeKey) return '';
  const map = {
    chef: translations[currentLang].filter_chef,
    popular: translations[currentLang].filter_popular,
    veg: translations[currentLang].filter_veg
  };
  return map[badgeKey] || '';
}

function addToCart(id) {
  const menu = getActiveMenuItems();
  const item = menu.find(m => m.id === id);
  if (!item) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: item.id, qty: 1 });
  }

  updateCartUI();
  renderMenu();
}

function updateCartItemQty(id, delta) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx !== -1) {
    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) {
      cart.splice(idx, 1);
    }
  }
  updateCartUI();
  renderMenu();
}

function getItemCartQuantity(id) {
  const found = cart.find(c => c.id === id);
  return found ? found.qty : 0;
}

function updateCartUI() {
  const countBadge = document.getElementById('cart-count-badge');
  const cartList = document.getElementById('cart-items-list');
  const subtotalEl = document.getElementById('cart-subtotal-val');

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  if (countBadge) {
    countBadge.textContent = totalQty;
    countBadge.style.display = totalQty > 0 ? 'flex' : 'none';
  }

  let subtotal = 0;
  if (!cartList) return;

  const menu = getActiveMenuItems();

  if (cart.length === 0) {
    cartList.innerHTML = `
      <div class="cart-empty-msg">
        <i class="fas fa-shopping-basket"></i>
        <p data-i18n="cart_empty">${translations[currentLang].cart_empty}</p>
      </div>
    `;
  } else {
    cartList.innerHTML = cart.map(c => {
      const item = menu.find(m => m.id === c.id);
      if (!item) return '';
      const lineTotal = item.price * c.qty;
      subtotal += lineTotal;
      const title = item.name[currentLang] || item.name.fr || item.name;

      return `
        <div class="cart-item">
          <div class="cart-item-details">
            <span class="cart-item-title">${title}</span>
            <span class="cart-item-price">${item.price} MAD x ${c.qty} = <strong>${lineTotal} MAD</strong></span>
          </div>
          <div class="qty-control small">
            <button onclick="updateCartItemQty('${c.id}', -1)"><i class="fas fa-minus"></i></button>
            <span>${c.qty}</span>
            <button onclick="updateCartItemQty('${c.id}', 1)"><i class="fas fa-plus"></i></button>
          </div>
        </div>
      `;
    }).join('');
  }

  let finalTotal = subtotal;
  if (appliedDiscount > 0) {
    finalTotal = Math.round(subtotal * (1 - appliedDiscount / 100));
  } else if (appliedDiscount < 0) {
    finalTotal = Math.max(0, subtotal + appliedDiscount);
  }

  if (subtotalEl) {
    subtotalEl.textContent = `${finalTotal} MAD ${appliedDiscount !== 0 ? `(Remise)` : ''}`;
  }
}

function sendCartWhatsApp() {
  if (cart.length === 0) {
    alert(currentLang === 'ar' ? 'سلتك فارغة' : currentLang === 'fr' ? 'Votre panier est vide' : 'Your cart is empty');
    return;
  }

  const orderType = document.querySelector('input[name="cart-order-type"]:checked')?.value || 'takeaway';
  const notes = document.getElementById('cart-notes')?.value.trim();
  const menu = getActiveMenuItems();

  let message = `📌 *NOUVELLE COMMANDE - SUSHI ARIJ*\n`;
  message += `---------------------------------\n`;
  message += `🛵 Mode: *${orderType.toUpperCase()}*\n\n`;
  message += `📋 *Détail des Plats :*\n`;

  let total = 0;
  let itemsSummary = [];
  cart.forEach(c => {
    const item = menu.find(m => m.id === c.id);
    if (item) {
      const title = item.name[currentLang] || item.name.fr || item.name;
      const cost = item.price * c.qty;
      total += cost;
      message += `• ${c.qty}x ${title} - ${cost} MAD\n`;
      itemsSummary.push(`${c.qty}x ${title}`);
    }
  });

  let finalTotal = total;
  if (appliedDiscount > 0) {
    finalTotal = Math.round(total * (1 - appliedDiscount / 100));
  } else if (appliedDiscount < 0) {
    finalTotal = Math.max(0, total + appliedDiscount);
  }

  message += `\n💰 *Total Estimé : ${finalTotal} MAD* ${appliedDiscount !== 0 ? '(Remise Appliquée)' : ''}\n`;

  if (notes) {
    message += `📝 *Notes :* ${notes}\n`;
  }
  message += `---------------------------------\n`;
  message += `📍 Envoyé depuis le site web Café & Restaurant Sushi Arij (Av. Hssaine, Sala Al Jadida)`;

  // Log to Admin Order History
  logOrderToAdmin({
    id: 'ORD_' + Math.floor(1000 + Math.random() * 9000),
    date: new Date().toLocaleString('fr-FR'),
    type: orderType.toUpperCase(),
    name: 'Client Web',
    phone: 'WhatsApp Line',
    details: itemsSummary.join(', ') + (notes ? ` (Notes: ${notes})` : ''),
    total: finalTotal,
    status: 'En attente'
  });

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${getWhatsAppPhone()}?text=${encoded}`, '_blank');
}

function sendReservationWhatsApp() {
  const name = document.getElementById('res-name')?.value.trim();
  const phone = document.getElementById('res-phone')?.value.trim();
  const date = document.getElementById('res-date')?.value;
  const time = document.getElementById('res-time')?.value;
  const guests = document.getElementById('res-guests')?.value;
  const seating = document.getElementById('res-seating')?.value;

  if (!name || !phone || !date || !time) {
    alert(currentLang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Veuillez remplir tous les champs obligatoires.');
    return;
  }

  let message = `🍽️ *DEMANDE DE RÉSERVATION DE TABLE*\n`;
  message += `---------------------------------\n`;
  message += `👤 *Nom :* ${name}\n`;
  message += `📞 *Téléphone :* ${phone}\n`;
  message += `📅 *Date :* ${date}\n`;
  message += `⏰ *Heure :* ${time}\n`;
  message += `👥 *Nombre de personnes :* ${guests}\n`;
  message += `🪑 *Emplacement :* ${seating}\n`;
  message += `---------------------------------\n`;
  message += `📍 Café & Restaurant Sushi Arij (Av. Hssaine, Sala Al Jadida)`;

  // Log to Admin Order History
  logOrderToAdmin({
    id: 'RES_' + Math.floor(1000 + Math.random() * 9000),
    date: new Date().toLocaleString('fr-FR'),
    type: 'Réservation Table',
    name: name,
    phone: phone,
    details: `${guests} pers. le ${date} à ${time} (${seating})`,
    total: 0,
    status: 'En attente'
  });

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${getWhatsAppPhone()}?text=${encoded}`, '_blank');

  const resModal = document.getElementById('reservation-modal');
  const resOverlay = document.getElementById('res-modal-overlay');
  if (resModal) resModal.classList.remove('active');
  if (resOverlay) resOverlay.classList.remove('active');
}

// PDF Menu Generator
function downloadMenuPDF() {
  const menu = getActiveMenuItems();
  const brandName = localStorage.getItem('arij_brand_name') || 'Café & Restaurant Sushi Arij';
  
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Veuillez autoriser les fenêtres surgissantes (popups) pour télécharger le PDF.');
    return;
  }

  const categoryNames = {
    sushi: '🍣 SUSHI & SPÉCIALITÉS JAPONAISES',
    cafe: '☕ CAFÉ & BOISSONS CHAUDES / FRAÎCHES',
    breakfast: '🥐 PETIT-DÉJEUNER & BRUNCH',
    mains: '🍽️ PLATS, PÂTES & POKÉ BOWLS',
    desserts: '🍰 DESSERTS & GOURMANDISES'
  };

  const grouped = {};
  menu.forEach(item => {
    const cat = item.category || 'sushi';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(item);
  });

  let contentHtml = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Carte du Menu - ${brandName}</title>
      <style>
        body { font-family: 'Helvetica Neue', Arial, sans-serif; color: #1a1e24; margin: 0; padding: 25px; background: #fff; }
        .header { text-align: center; border-bottom: 2px solid #d4a373; padding-bottom: 15px; margin-bottom: 25px; }
        .header h1 { margin: 0; color: #d4a373; font-size: 26px; text-transform: uppercase; letter-spacing: 1px; }
        .header p { margin: 5px 0 0; color: #666; font-size: 13px; }
        .cat-title { background: #fdf8f3; color: #b58352; padding: 8px 12px; font-size: 15px; font-weight: bold; border-left: 4px solid #d4a373; margin-top: 25px; margin-bottom: 12px; }
        .item-row { display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px dotted #ccc; padding: 8px 0; font-size: 13px; }
        .item-name { font-weight: bold; color: #111; }
        .item-desc { font-size: 11px; color: #666; margin-top: 2px; }
        .item-price { font-size: 14px; font-weight: bold; color: #d4a373; white-space: nowrap; margin-left: 15px; }
        .footer { text-align: center; margin-top: 35px; border-top: 1px solid #eee; padding-top: 15px; font-size: 11px; color: #888; }
        @media print {
          body { padding: 0; }
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      <div class="no-print" style="text-align: right; margin-bottom: 15px;">
        <button onclick="window.print()" style="background: #d4a373; color: #fff; border: none; padding: 10px 20px; font-size: 14px; font-weight: bold; border-radius: 4px; cursor: pointer;">🖨️ Enregistrer en PDF / Imprimer</button>
      </div>

      <div class="header">
        <h1>${brandName}</h1>
        <p>Av. Hssaine, Sala Al Jadida • Tél & WhatsApp: +212 6 12 56 08 03 • Site: https://sushiarij.app</p>
      </div>
  `;

  for (const cat in grouped) {
    contentHtml += `<div class="cat-title">${categoryNames[cat] || cat.toUpperCase()}</div>`;
    grouped[cat].forEach(item => {
      const name = item.name?.fr || item.name || 'Plat';
      const desc = item.desc?.fr || item.desc || '';
      contentHtml += `
        <div class="item-row">
          <div>
            <div class="item-name">${name}</div>
            ${desc ? `<div class="item-desc">${desc}</div>` : ''}
          </div>
          <div class="item-price">${item.price} MAD</div>
        </div>
      `;
    });
  }

  contentHtml += `
      <div class="footer">
        <p>Café & Restaurant Sushi Arij • Produits frais préparés chaque jour • Ouvert 06:30 - 23:30</p>
      </div>
      <script>
        window.onload = function() {
          setTimeout(function() { window.print(); }, 500);
        };
      </script>
    </body>
    </html>
  `;

  printWindow.document.write(contentHtml);
  printWindow.document.close();
}

