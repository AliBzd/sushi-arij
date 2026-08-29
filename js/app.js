
// 100% Bulletproof Safe Extractors for Titles & Descriptions
function getItemTitle(item, lang = currentLang) {
  if (!item || !item.name) return 'Plat';
  if (typeof item.name === 'string') return item.name;
  return item.name[lang] || item.name.fr || item.name.en || item.name.ar || Object.values(item.name)[0] || 'Plat';
}

function getItemDesc(item, lang = currentLang) {
  if (!item || !item.desc) return '';
  if (typeof item.desc === 'string') return item.desc;
  return item.desc[lang] || item.desc.fr || item.desc.en || item.desc.ar || Object.values(item.desc)[0] || '';
}

// Café & Restaurant Sushi Arij - Application Logic (Fully Dynamic & Admin Modifiable)

// Full Default Menu Database with Nutritional Facts & Allergens
const defaultMenuItems = [
  {
    "id": "m_1",
    "category": "plateaux",
    "badge": "popular",
    "price": 115,
    "calories": "750 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame, Gluten",
    "ingredients": "6pcs pizza , 5pcs ebi tempura, 8pcs maki crevette",
    "name": {
      "fr": "Assortiment Combo",
      "en": "Platter Combo",
      "ar": "طبق كومبو مشكل (19 قطعة)"
    },
    "desc": {
      "fr": "6pcs pizza , 5pcs ebi tempura, 8pcs maki crevette",
      "en": "Fresh specialty crafted to order: 6pcs pizza , 5pcs ebi tempura, 8pcs maki crevette.",
      "ar": "طبق طازج ومعد عند الطلب: 6pcs pizza , 5pcs ebi tempura, 8pcs maki crevette."
    },
    "image": "assets/menu/assortiment_combo.webp"
  },
  {
    "id": "m_2",
    "category": "plateaux",
    "badge": "popular",
    "price": 135,
    "calories": "750 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame, Gluten",
    "ingredients": "5pcs crunchy, 5pcs eby tempura, 6pcs pizza saumon",
    "name": {
      "fr": "Assortiment Lovers",
      "en": "Platter Lovers",
      "ar": "طبق العشاق المتنوع (16 قطعة)"
    },
    "desc": {
      "fr": "5pcs crunchy, 5pcs eby tempura, 6pcs pizza saumon",
      "en": "Fresh specialty crafted to order: 5pcs crunchy, 5pcs eby tempura, 6pcs pizza saumon.",
      "ar": "طبق طازج ومعد عند الطلب: 5pcs crunchy, 5pcs eby tempura, 6pcs pizza saumon."
    },
    "image": "assets/menu/assortiment_lovers.webp"
  },
  {
    "id": "m_3",
    "category": "plateaux",
    "badge": "chef",
    "price": 160,
    "calories": "750 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame, Gluten",
    "ingredients": "4pcs wasabi , 8pc  maki avocat , 4pcs massago, 4pcs Miami, 4pcs black",
    "name": {
      "fr": "Assortiment Signature",
      "en": "Platter Signature",
      "ar": "طبق سيغنتشر الخاص (24 قطعة)"
    },
    "desc": {
      "fr": "4pcs wasabi , 8pc  maki avocat , 4pcs massago, 4pcs Miami, 4pcs black",
      "en": "Fresh specialty crafted to order: 4pcs wasabi , 8pc  maki avocat , 4pcs massago, 4pcs Miami, 4pcs black.",
      "ar": "طبق طازج ومعد عند الطلب: 4pcs wasabi , 8pc  maki avocat , 4pcs massago, 4pcs Miami, 4pcs black."
    },
    "image": "assets/menu/assortiment_signature.webp"
  },
  {
    "id": "m_4",
    "category": "plateaux",
    "badge": "chef",
    "price": 180,
    "calories": "750 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame, Gluten",
    "ingredients": "4pcs dream ,4pcs mango , 4pcs Oslo ,4pcs nigiri",
    "name": {
      "fr": "Assortiment Arij",
      "en": "Platter Arij",
      "ar": "طبق أريج الفاخر (16 قطعة)"
    },
    "desc": {
      "fr": "4pcs dream ,4pcs mango , 4pcs Oslo ,4pcs nigiri",
      "en": "Fresh specialty crafted to order: 4pcs dream ,4pcs mango , 4pcs Oslo ,4pcs nigiri.",
      "ar": "طبق طازج ومعد عند الطلب: 4pcs dream ,4pcs mango , 4pcs Oslo ,4pcs nigiri."
    },
    "image": "assets/menu/assortiment_arij.webp"
  },
  {
    "id": "m_5",
    "category": "plateaux",
    "badge": "chef",
    "price": 175,
    "calories": "750 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame, Gluten",
    "ingredients": "4pcs tiger, 4pcs mango, 4pcs Oslo , 4pcs dragon",
    "name": {
      "fr": "Assortiment Hot Arij",
      "en": "Platter Hot Arij",
      "ar": "طبق هوت أريج المميز (16 قطعة)"
    },
    "desc": {
      "fr": "4pcs tiger, 4pcs mango, 4pcs Oslo , 4pcs dragon",
      "en": "Fresh specialty crafted to order: 4pcs tiger, 4pcs mango, 4pcs Oslo , 4pcs dragon.",
      "ar": "طبق طازج ومعد عند الطلب: 4pcs tiger, 4pcs mango, 4pcs Oslo , 4pcs dragon."
    },
    "image": "assets/menu/assortiment_hot_arij.webp"
  },
  {
    "id": "m_6",
    "category": "plateaux",
    "badge": "popular",
    "price": 150,
    "calories": "750 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame, Gluten",
    "ingredients": "4pcs tobiko,  4pcs majestique, 4pcs sésame, 4pcs mango",
    "name": {
      "fr": "Assortiment Rainbow",
      "en": "Platter Rainbow",
      "ar": "طبق رينبو المتنوع (16 قطعة)"
    },
    "desc": {
      "fr": "4pcs tobiko,  4pcs majestique, 4pcs sésame, 4pcs mango",
      "en": "Fresh specialty crafted to order: 4pcs tobiko,  4pcs majestique, 4pcs sésame, 4pcs mango.",
      "ar": "طبق طازج ومعد عند الطلب: 4pcs tobiko,  4pcs majestique, 4pcs sésame, 4pcs mango."
    },
    "image": "assets/menu/assortiment_rainbow.webp"
  },
  {
    "id": "m_7",
    "category": "plateaux",
    "badge": "popular",
    "price": 145,
    "calories": "750 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame, Gluten",
    "ingredients": "4pcs crabe, 4pcs Philadelphia, 4pcs rouleau saumon, 8pcs maki saumon",
    "name": {
      "fr": "Assortiment Fresh",
      "en": "Platter Fresh",
      "ar": "طبق فريش الطازج (20 قطعة)"
    },
    "desc": {
      "fr": "4pcs crabe, 4pcs Philadelphia, 4pcs rouleau saumon, 8pcs maki saumon",
      "en": "Fresh specialty crafted to order: 4pcs crabe, 4pcs Philadelphia, 4pcs rouleau saumon, 8pcs maki saumon.",
      "ar": "طبق طازج ومعد عند الطلب: 4pcs crabe, 4pcs Philadelphia, 4pcs rouleau saumon, 8pcs maki saumon."
    },
    "image": "assets/menu/assortiment_fresh.webp"
  },
  {
    "id": "m_8",
    "category": "plateaux",
    "badge": "popular",
    "price": 135,
    "calories": "750 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame, Gluten",
    "ingredients": "4pcs majestique, 4pcs tobiko , 4pcs wasabi, 4pcs black",
    "name": {
      "fr": "Assortiment Mix",
      "en": "Platter Mix",
      "ar": "طبق ميكس المتنوع (16 قطعة)"
    },
    "desc": {
      "fr": "4pcs majestique, 4pcs tobiko , 4pcs wasabi, 4pcs black",
      "en": "Fresh specialty crafted to order: 4pcs majestique, 4pcs tobiko , 4pcs wasabi, 4pcs black.",
      "ar": "طبق طازج ومعد عند الطلب: 4pcs majestique, 4pcs tobiko , 4pcs wasabi, 4pcs black."
    },
    "image": "assets/menu/assortiment_mix.webp"
  },
  {
    "id": "m_9",
    "category": "plateaux",
    "badge": "popular",
    "price": 130,
    "calories": "750 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame, Gluten",
    "ingredients": "4pcs tobiko , 4pcs ebi fry, 8pcs maki surimi , 2pcs nigiri saumon",
    "name": {
      "fr": "Assortiment Box",
      "en": "Platter Box",
      "ar": "بوكس السوشي المشكل (18 قطعة)"
    },
    "desc": {
      "fr": "4pcs tobiko , 4pcs ebi fry, 8pcs maki surimi , 2pcs nigiri saumon",
      "en": "Fresh specialty crafted to order: 4pcs tobiko , 4pcs ebi fry, 8pcs maki surimi , 2pcs nigiri saumon.",
      "ar": "طبق طازج ومعد عند الطلب: 4pcs tobiko , 4pcs ebi fry, 8pcs maki surimi , 2pcs nigiri saumon."
    },
    "image": "assets/menu/assortiment_box.webp"
  },
  {
    "id": "m_10",
    "category": "plateaux",
    "badge": "popular",
    "price": 130,
    "calories": "750 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame, Gluten",
    "ingredients": "6pcs pizza , 5pcs eby tempura , 4pcs aromaki panée",
    "name": {
      "fr": "Assortiment Delight",
      "en": "Platter Delight",
      "ar": "طبق ديلايت المقرمش (15 قطعة)"
    },
    "desc": {
      "fr": "6pcs pizza , 5pcs eby tempura , 4pcs aromaki panée",
      "en": "Fresh specialty crafted to order: 6pcs pizza , 5pcs eby tempura , 4pcs aromaki panée.",
      "ar": "طبق طازج ومعد عند الطلب: 6pcs pizza , 5pcs eby tempura , 4pcs aromaki panée."
    },
    "image": "assets/menu/assortiment_delight.webp"
  },
  {
    "id": "m_11",
    "category": "bentos",
    "badge": "chef",
    "price": 170,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Crevette grillée, saumon grillé, fromage panée, nems",
    "name": {
      "fr": "Bento Golden",
      "en": "Bento Box Golden",
      "ar": "بينتو جولدن الملكي"
    },
    "desc": {
      "fr": "Crevette grillée, saumon grillé, fromage panée, nems",
      "en": "Fresh specialty crafted to order: Crevette grillée, saumon grillé, fromage panée, nems.",
      "ar": "طبق طازج ومعد عند الطلب: Crevette grillée, saumon grillé, fromage panée, nems."
    },
    "image": "assets/menu/bento_golden.webp"
  },
  {
    "id": "m_12",
    "category": "bentos",
    "badge": "popular",
    "price": 155,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Maki saumon, boulettes poulet, 5pcs cranche,fromage panée",
    "name": {
      "fr": "Bento Mix",
      "en": "Bento Box Mix",
      "ar": "بينتو ميكس المتنوع"
    },
    "desc": {
      "fr": "Maki saumon, boulettes poulet, 5pcs cranche,fromage panée",
      "en": "Fresh specialty crafted to order: Maki saumon, boulettes poulet, 5pcs cranche,fromage panée.",
      "ar": "طبق طازج ومعد عند الطلب: Maki saumon, boulettes poulet, 5pcs cranche,fromage panée."
    },
    "image": "assets/menu/bento_mix.webp"
  },
  {
    "id": "m_13",
    "category": "bentos",
    "badge": "popular",
    "price": 150,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "5pcs cranche, boeuf fromage, 4pcs sushi, 4pcs aromaki panée",
    "name": {
      "fr": "Bento Yakitori",
      "en": "Bento Box Yakitori",
      "ar": "بينتو ياكيتوري الدجاج والجبن"
    },
    "desc": {
      "fr": "5pcs cranche, boeuf fromage, 4pcs sushi, 4pcs aromaki panée",
      "en": "Fresh specialty crafted to order: 5pcs cranche, boeuf fromage, 4pcs sushi, 4pcs aromaki panée.",
      "ar": "طبق طازج ومعد عند الطلب: 5pcs cranche, boeuf fromage, 4pcs sushi, 4pcs aromaki panée."
    },
    "image": "assets/menu/bento_yakitori.webp"
  },
  {
    "id": "m_14",
    "category": "plateaux",
    "badge": "popular",
    "price": 145,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Salade , croquettes saumon, saumon pané , 5pcs cranche",
    "name": {
      "fr": "Bento Fresh",
      "en": "Bento Box Fresh",
      "ar": "بينتو فريش بالسلمون"
    },
    "desc": {
      "fr": "Salade , croquettes saumon, saumon pané , 5pcs cranche",
      "en": "Fresh specialty crafted to order: Salade , croquettes saumon, saumon pané , 5pcs cranche.",
      "ar": "طبق طازج ومعد عند الطلب: Salade , croquettes saumon, saumon pané , 5pcs cranche."
    },
    "image": "assets/menu/bento_fresh.webp"
  },
  {
    "id": "m_15",
    "category": "plateaux",
    "badge": "chef",
    "price": 140,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "5pcs cranche,4pcs sushi, boulettes poulet, les nouilles",
    "name": {
      "fr": "Bento Signature",
      "en": "Bento Box Signature",
      "ar": "بينتو سيغنتشر الخاص"
    },
    "desc": {
      "fr": "5pcs cranche,4pcs sushi, boulettes poulet, les nouilles",
      "en": "Fresh specialty crafted to order: 5pcs cranche,4pcs sushi, boulettes poulet, les nouilles.",
      "ar": "طبق طازج ومعد عند الطلب: 5pcs cranche,4pcs sushi, boulettes poulet, les nouilles."
    },
    "image": "assets/menu/bento_signature.webp"
  },
  {
    "id": "m_16",
    "category": "bentos",
    "badge": "popular",
    "price": 140,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Salade, fromage panne, 5pcs cranche, poulet panee",
    "name": {
      "fr": "Bento Gourmand",
      "en": "Bento Box Gourmand",
      "ar": "بينتو غورماند المقرمش"
    },
    "desc": {
      "fr": "Salade, fromage panne, 5pcs cranche, poulet panee",
      "en": "Fresh specialty crafted to order: Salade, fromage panne, 5pcs cranche, poulet panee.",
      "ar": "طبق طازج ومعد عند الطلب: Salade, fromage panne, 5pcs cranche, poulet panee."
    },
    "image": "assets/menu/bento_gourmand.webp"
  },
  {
    "id": "m_17",
    "category": "bentos",
    "badge": "popular",
    "price": 120,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Salade , poulet teriyaki, boeuf teriyaki, 6 PCS Sushi.",
    "name": {
      "fr": "Bento Sea",
      "en": "Bento Box Sea",
      "ar": "بينتو سي فود والسوشي"
    },
    "desc": {
      "fr": "Salade , poulet teriyaki, boeuf teriyaki, 6 PCS Sushi.",
      "en": "Fresh specialty crafted to order: Salade , poulet teriyaki, boeuf teriyaki, 6 PCS Sushi..",
      "ar": "طبق طازج ومعد عند الطلب: Salade , poulet teriyaki, boeuf teriyaki, 6 PCS Sushi.."
    },
    "image": "assets/menu/bento_sea.webp"
  },
  {
    "id": "m_18",
    "category": "bentos",
    "badge": "popular",
    "price": 120,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Salade, boulettes poulet, poulet panée,riz cantonais",
    "name": {
      "fr": "Bento Super",
      "en": "Bento Box Super",
      "ar": "بينتو سوبر بالدجاج"
    },
    "desc": {
      "fr": "Salade, boulettes poulet, poulet panée,riz cantonais",
      "en": "Fresh specialty crafted to order: Salade, boulettes poulet, poulet panée,riz cantonais.",
      "ar": "طبق طازج ومعد عند الطلب: Salade, boulettes poulet, poulet panée,riz cantonais."
    },
    "image": "assets/menu/bento_super.webp"
  },
  {
    "id": "m_19",
    "category": "bentos",
    "badge": "popular",
    "price": 110,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Salade , 6pcs sushi, nems, les nouilles",
    "name": {
      "fr": "Bento Duo",
      "en": "Bento Box Duo",
      "ar": "بينتو دويتو مع النودلز"
    },
    "desc": {
      "fr": "Salade , 6pcs sushi, nems, les nouilles",
      "en": "Fresh specialty crafted to order: Salade , 6pcs sushi, nems, les nouilles.",
      "ar": "طبق طازج ومعد عند الطلب: Salade , 6pcs sushi, nems, les nouilles."
    },
    "image": "assets/menu/bento_duo.webp"
  },
  {
    "id": "m_20",
    "category": "salades",
    "badge": "chef",
    "price": 72,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Laitue, concombre, crevettes, calamar, surimi, wakame, avocat, mangue, saumon",
    "name": {
      "fr": "Salade Arij",
      "en": "Salad Arij",
      "ar": "سلطة أريج الفاخرة المأكولات البحرية"
    },
    "desc": {
      "fr": "Laitue, concombre, crevettes, calamar, surimi, wakame, avocat, mangue, saumon",
      "en": "Fresh specialty crafted to order: Laitue, concombre, crevettes, calamar, surimi, wakame, avocat, mangue, saumon.",
      "ar": "طبق طازج ومعد عند الطلب: Laitue, concombre, crevettes, calamar, surimi, wakame, avocat, mangue, saumon."
    },
    "image": "assets/menu/salade_arij.webp"
  },
  {
    "id": "m_21",
    "category": "salades",
    "badge": "popular",
    "price": 65,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Laitue, concombre, crevettes panées, surimi, mangue, avocat, wakame",
    "name": {
      "fr": "Salade Gambas",
      "en": "Salad Gambas",
      "ar": "سلطة Gambas"
    },
    "desc": {
      "fr": "Laitue, concombre, crevettes panées, surimi, mangue, avocat, wakame",
      "en": "Fresh specialty crafted to order: Laitue, concombre, crevettes panées, surimi, mangue, avocat, wakame.",
      "ar": "طبق طازج ومعد عند الطلب: Laitue, concombre, crevettes panées, surimi, mangue, avocat, wakame."
    },
    "image": "assets/menu/salade_gambas.webp"
  },
  {
    "id": "m_22",
    "category": "salades",
    "badge": "popular",
    "price": 59,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Laitue, concombre, poulet, mangue, surimi, avocat, wakame",
    "name": {
      "fr": "Salade Chicken",
      "en": "Salad Chicken",
      "ar": "سلطة Chicken"
    },
    "desc": {
      "fr": "Laitue, concombre, poulet, mangue, surimi, avocat, wakame",
      "en": "Fresh specialty crafted to order: Laitue, concombre, poulet, mangue, surimi, avocat, wakame.",
      "ar": "طبق طازج ومعد عند الطلب: Laitue, concombre, poulet, mangue, surimi, avocat, wakame."
    },
    "image": "assets/menu/salade_chicken.webp"
  },
  {
    "id": "m_23",
    "category": "salades",
    "badge": "popular",
    "price": 52,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Laitue, concombre, calamar, surimi, mangue, avocat, wakame",
    "name": {
      "fr": "Salade Ika",
      "en": "Salad Ika",
      "ar": "سلطة Ika"
    },
    "desc": {
      "fr": "Laitue, concombre, calamar, surimi, mangue, avocat, wakame",
      "en": "Fresh specialty crafted to order: Laitue, concombre, calamar, surimi, mangue, avocat, wakame.",
      "ar": "طبق طازج ومعد عند الطلب: Laitue, concombre, calamar, surimi, mangue, avocat, wakame."
    },
    "image": "assets/menu/salade_ika.webp"
  },
  {
    "id": "m_24",
    "category": "brochettes",
    "badge": "popular",
    "price": 72,
    "calories": "520 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame",
    "ingredients": "Riz, légumes, 6 pièces nems crevettes",
    "name": {
      "fr": "Nems Crevette",
      "en": "Spring Rolls Shrimp",
      "ar": "سبرينغ رول (نيمس) جمبري"
    },
    "desc": {
      "fr": "Riz, légumes, 6 pièces nems crevettes",
      "en": "Fresh specialty crafted to order: Riz, légumes, 6 pièces nems crevettes.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, légumes, 6 pièces nems crevettes."
    },
    "image": "assets/menu/nems_crevette.webp"
  },
  {
    "id": "m_25",
    "category": "brochettes",
    "badge": "popular",
    "price": 65,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Riz , légumes,6pc nems",
    "name": {
      "fr": "Nems boeuf",
      "en": "Spring Rolls Beef",
      "ar": "سبرينغ رول (نيمس) boeuf"
    },
    "desc": {
      "fr": "Riz , légumes,6pc nems",
      "en": "Fresh specialty crafted to order: Riz , légumes,6pc nems.",
      "ar": "طبق طازج ومعد عند الطلب: Riz , légumes,6pc nems."
    },
    "image": "assets/menu/nems_boeuf.webp"
  },
  {
    "id": "m_26",
    "category": "brochettes",
    "badge": "popular",
    "price": 65,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Riz, légumes, 6 pièces nems poulet",
    "name": {
      "fr": "Nems Poulet",
      "en": "Spring Rolls Chicken",
      "ar": "سبرينغ رول (نيمس) دجاج"
    },
    "desc": {
      "fr": "Riz, légumes, 6 pièces nems poulet",
      "en": "Fresh specialty crafted to order: Riz, légumes, 6 pièces nems poulet.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, légumes, 6 pièces nems poulet."
    },
    "image": "assets/menu/nems_poulet.webp"
  },
  {
    "id": "m_27",
    "category": "brochettes",
    "badge": "popular",
    "price": 52,
    "calories": "520 kcal",
    "allergens": "Lait (Lactose), Gluten",
    "ingredients": "Riz, légumes, 6 pièces nems fromage",
    "name": {
      "fr": "Nems Fromage",
      "en": "Spring Rolls Cheese",
      "ar": "سبرينغ رول (نيمس) جبن"
    },
    "desc": {
      "fr": "Riz, légumes, 6 pièces nems fromage",
      "en": "Fresh specialty crafted to order: Riz, légumes, 6 pièces nems fromage.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, légumes, 6 pièces nems fromage."
    },
    "image": "assets/menu/nems_fromage.webp"
  },
  {
    "id": "m_28",
    "category": "brochettes",
    "badge": "popular",
    "price": 72,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Crevette, mangue, avocat, cheese",
    "name": {
      "fr": "Rouleau Mangue Crevette",
      "en": "Fresh Roll Mango Shrimp",
      "ar": "لفائف طازجة مانجو جمبري"
    },
    "desc": {
      "fr": "Crevette, mangue, avocat, cheese",
      "en": "Fresh specialty crafted to order: Crevette, mangue, avocat, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Crevette, mangue, avocat, cheese."
    },
    "image": "assets/menu/rouleau_mangue_crevette.webp"
  },
  {
    "id": "m_29",
    "category": "brochettes",
    "badge": "popular",
    "price": 72,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Crabe, surimi, avocat, cheese",
    "name": {
      "fr": "Rouleau Crabe",
      "en": "Fresh Roll Crab",
      "ar": "لفائف طازجة سلطعون (كابوريا)"
    },
    "desc": {
      "fr": "Crabe, surimi, avocat, cheese",
      "en": "Fresh specialty crafted to order: Crabe, surimi, avocat, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Crabe, surimi, avocat, cheese."
    },
    "image": "assets/menu/rouleau_crabe.webp"
  },
  {
    "id": "m_30",
    "category": "brochettes",
    "badge": "popular",
    "price": 72,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Crevette, saumon, avocat, cheese",
    "name": {
      "fr": "Rouleau Saumon Crevette",
      "en": "Fresh Roll Salmon Shrimp",
      "ar": "لفائف طازجة سلمون جمبري"
    },
    "desc": {
      "fr": "Crevette, saumon, avocat, cheese",
      "en": "Fresh specialty crafted to order: Crevette, saumon, avocat, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Crevette, saumon, avocat, cheese."
    },
    "image": "assets/menu/rouleau_saumon_crevette.webp"
  },
  {
    "id": "m_31",
    "category": "salades",
    "badge": "chef",
    "price": 52,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Crevettes, saumon, calamar, surimi, poulpe, wakame",
    "name": {
      "fr": "Soupe Royale",
      "en": "Soup Royale",
      "ar": "شوربة Royale"
    },
    "desc": {
      "fr": "Crevettes, saumon, calamar, surimi, poulpe, wakame",
      "en": "Fresh specialty crafted to order: Crevettes, saumon, calamar, surimi, poulpe, wakame.",
      "ar": "طبق طازج ومعد عند الطلب: Crevettes, saumon, calamar, surimi, poulpe, wakame."
    },
    "image": "assets/menu/soupe_royale.webp"
  },
  {
    "id": "m_32",
    "category": "salades",
    "badge": "popular",
    "price": 52,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Poulet, champignon, lait de coco",
    "name": {
      "fr": "Soupe Tom Kha Kai",
      "en": "Soup Tom Kha Kai",
      "ar": "شوربة Tom Kha Kai"
    },
    "desc": {
      "fr": "Poulet, champignon, lait de coco",
      "en": "Fresh specialty crafted to order: Poulet, champignon, lait de coco.",
      "ar": "طبق طازج ومعد عند الطلب: Poulet, champignon, lait de coco."
    },
    "image": "assets/menu/soupe_tom_kha_kai.webp"
  },
  {
    "id": "m_33",
    "category": "salades",
    "badge": "popular",
    "price": 45,
    "calories": "520 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame",
    "ingredients": "Crevettes, saumon, calamar, wakame, légumes",
    "name": {
      "fr": "Soupe Poissons",
      "en": "Soup Poissons",
      "ar": "شوربة Poissons"
    },
    "desc": {
      "fr": "Crevettes, saumon, calamar, wakame, légumes",
      "en": "Fresh specialty crafted to order: Crevettes, saumon, calamar, wakame, légumes.",
      "ar": "طبق طازج ومعد عند الطلب: Crevettes, saumon, calamar, wakame, légumes."
    },
    "image": "assets/menu/soupe_poissons.webp"
  },
  {
    "id": "m_34",
    "category": "woks",
    "badge": "popular",
    "price": 78,
    "calories": "520 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame",
    "ingredients": "Crevettes, calamar, légumes, les nouilles",
    "name": {
      "fr": "Nouilles Crevettes Calamars",
      "en": "Noodles Shrimps Calamars",
      "ar": "نودلز جمبري Calamars"
    },
    "desc": {
      "fr": "Crevettes, calamar, légumes, les nouilles",
      "en": "Fresh specialty crafted to order: Crevettes, calamar, légumes, les nouilles.",
      "ar": "طبق طازج ومعد عند الطلب: Crevettes, calamar, légumes, les nouilles."
    },
    "image": "assets/menu/nouilles_crevettes_calamars.webp"
  },
  {
    "id": "m_35",
    "category": "woks",
    "badge": "popular",
    "price": 72,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "BÅuf, légumes, les nouilles",
    "name": {
      "fr": "Nouilles BÅuf",
      "en": "Noodles BÅuf",
      "ar": "نودلز BÅuf"
    },
    "desc": {
      "fr": "BÅuf, légumes, les nouilles",
      "en": "Fresh specialty crafted to order: BÅuf, légumes, les nouilles.",
      "ar": "طبق طازج ومعد عند الطلب: BÅuf, légumes, les nouilles."
    },
    "image": "assets/menu/nouilles_b_uf.webp"
  },
  {
    "id": "m_36",
    "category": "woks",
    "badge": "popular",
    "price": 78,
    "calories": "520 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame",
    "ingredients": "Crevettes, calamar, riz cantonais",
    "name": {
      "fr": "Riz Crevette Calamar",
      "en": "Rice Shrimp Calamar",
      "ar": "أرز جمبري Calamar"
    },
    "desc": {
      "fr": "Crevettes, calamar, riz cantonais",
      "en": "Fresh specialty crafted to order: Crevettes, calamar, riz cantonais.",
      "ar": "طبق طازج ومعد عند الطلب: Crevettes, calamar, riz cantonais."
    },
    "image": "assets/menu/riz_crevette_calamar.webp"
  },
  {
    "id": "m_37",
    "category": "woks",
    "badge": "popular",
    "price": 72,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Boeuf, riz cantonais",
    "name": {
      "fr": "Riz Boeuf",
      "en": "Rice Beef",
      "ar": "أرز لحم بقري"
    },
    "desc": {
      "fr": "Boeuf, riz cantonais",
      "en": "Fresh specialty crafted to order: Boeuf, riz cantonais.",
      "ar": "طبق طازج ومعد عند الطلب: Boeuf, riz cantonais."
    },
    "image": "assets/menu/riz_boeuf.webp"
  },
  {
    "id": "m_38",
    "category": "woks",
    "badge": "popular",
    "price": 65,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Poulet, riz cantonais",
    "name": {
      "fr": "Riz Poulet",
      "en": "Rice Chicken",
      "ar": "أرز دجاج"
    },
    "desc": {
      "fr": "Poulet, riz cantonais",
      "en": "Fresh specialty crafted to order: Poulet, riz cantonais.",
      "ar": "طبق طازج ومعد عند الطلب: Poulet, riz cantonais."
    },
    "image": "assets/menu/riz_poulet.webp"
  },
  {
    "id": "m_39",
    "category": "brochettes",
    "badge": "popular",
    "price": 84,
    "calories": "520 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame",
    "ingredients": "Riz, légumes, brochette de saumon",
    "name": {
      "fr": "Brochette Saumon",
      "en": "Skewers Salmon",
      "ar": "بروشيت (سفود) سلمون"
    },
    "desc": {
      "fr": "Riz, légumes, brochette de saumon",
      "en": "Fresh specialty crafted to order: Riz, légumes, brochette de saumon.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, légumes, brochette de saumon."
    },
    "image": "assets/menu/brochette_saumon.webp"
  },
  {
    "id": "m_40",
    "category": "brochettes",
    "badge": "popular",
    "price": 78,
    "calories": "520 kcal",
    "allergens": "Lait (Lactose), Gluten",
    "ingredients": "Riz, légumes, bÅuf fromage",
    "name": {
      "fr": "Brochette BÅuf Fromage",
      "en": "Skewers BÅuf Cheese",
      "ar": "بروشيت لحم بقري بالجبن"
    },
    "desc": {
      "fr": "Riz, légumes, bÅuf fromage",
      "en": "Fresh specialty crafted to order: Riz, légumes, bÅuf fromage.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, légumes, bÅuf fromage."
    },
    "image": "assets/menu/brochette_b_uf_fromage.webp"
  },
  {
    "id": "m_41",
    "category": "brochettes",
    "badge": "popular",
    "price": 65,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Riz, légumes, brochette de poulet",
    "name": {
      "fr": "Brochette De Poulet",
      "en": "Skewers De Chicken",
      "ar": "بروشيت (سفود) De دجاج"
    },
    "desc": {
      "fr": "Riz, légumes, brochette de poulet",
      "en": "Fresh specialty crafted to order: Riz, légumes, brochette de poulet.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, légumes, brochette de poulet."
    },
    "image": "assets/menu/brochette_de_poulet.webp"
  },
  {
    "id": "m_42",
    "category": "brochettes",
    "badge": "popular",
    "price": 65,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Riz, légumes, boulette de poulet",
    "name": {
      "fr": "Boulette De Poulet",
      "en": "Meatballs De Chicken",
      "ar": "كرات De دجاج"
    },
    "desc": {
      "fr": "Riz, légumes, boulette de poulet",
      "en": "Fresh specialty crafted to order: Riz, légumes, boulette de poulet.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, légumes, boulette de poulet."
    },
    "image": "assets/menu/boulette_de_poulet.webp"
  },
  {
    "id": "m_43",
    "category": "woks",
    "badge": "popular",
    "price": 84,
    "calories": "520 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame",
    "ingredients": "Riz, crevettes, calamar, poivrons, onion, maà¯s, champignon",
    "name": {
      "fr": "Wok Crevettes Calamars",
      "en": "Wok Shrimps Calamars",
      "ar": "ووك جمبري Calamars"
    },
    "desc": {
      "fr": "Riz, crevettes, calamar, poivrons, onion, maà¯s, champignon",
      "en": "Fresh specialty crafted to order: Riz, crevettes, calamar, poivrons, onion, maà¯s, champignon.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, crevettes, calamar, poivrons, onion, maà¯s, champignon."
    },
    "image": "assets/menu/wok_crevettes_calamars.webp"
  },
  {
    "id": "m_44",
    "category": "woks",
    "badge": "popular",
    "price": 78,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Riz, poulet, poivrons, onion, maà¯s, champignon, ananas",
    "name": {
      "fr": "Wok Poulet Ananas",
      "en": "Wok Chicken Ananas",
      "ar": "ووك دجاج Ananas"
    },
    "desc": {
      "fr": "Riz, poulet, poivrons, onion, maà¯s, champignon, ananas",
      "en": "Fresh specialty crafted to order: Riz, poulet, poivrons, onion, maà¯s, champignon, ananas.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, poulet, poivrons, onion, maà¯s, champignon, ananas."
    },
    "image": "assets/menu/wok_poulet_ananas.webp"
  },
  {
    "id": "m_45",
    "category": "woks",
    "badge": "popular",
    "price": 72,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Riz, bÅuf, poivrons, onion, maà¯s, champignon",
    "name": {
      "fr": "Wok BÅuf",
      "en": "Wok BÅuf",
      "ar": "ووك BÅuf"
    },
    "desc": {
      "fr": "Riz, bÅuf, poivrons, onion, maà¯s, champignon",
      "en": "Fresh specialty crafted to order: Riz, bÅuf, poivrons, onion, maà¯s, champignon.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, bÅuf, poivrons, onion, maà¯s, champignon."
    },
    "image": "assets/menu/wok_b_uf.webp"
  },
  {
    "id": "m_46",
    "category": "brochettes",
    "badge": "popular",
    "price": 78,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Riz, légumes, 6 pièces crevettes aux amandes",
    "name": {
      "fr": "Crevettes Aux Amandes",
      "en": "Shrimps Aux Amandes",
      "ar": "جمبري Aux Amandes"
    },
    "desc": {
      "fr": "Riz, légumes, 6 pièces crevettes aux amandes",
      "en": "Fresh specialty crafted to order: Riz, légumes, 6 pièces crevettes aux amandes.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, légumes, 6 pièces crevettes aux amandes."
    },
    "image": "assets/menu/crevettes_aux_amandes.webp"
  },
  {
    "id": "m_47",
    "category": "rolls",
    "badge": "popular",
    "price": 78,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Riz, poivrons, poulet pané, sauce aigre doux",
    "name": {
      "fr": "Poulet Aigre Doux",
      "en": "Chicken Aigre Doux",
      "ar": "دجاج Aigre Doux"
    },
    "desc": {
      "fr": "Riz, poivrons, poulet pané, sauce aigre doux",
      "en": "Fresh specialty crafted to order: Riz, poivrons, poulet pané, sauce aigre doux.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, poivrons, poulet pané, sauce aigre doux."
    },
    "image": "assets/menu/poulet_aigre_doux.webp"
  },
  {
    "id": "m_48",
    "category": "brochettes",
    "badge": "popular",
    "price": 78,
    "calories": "520 kcal",
    "allergens": "Lait (Lactose), Gluten",
    "ingredients": "Riz, légumes, 6 pièces fromage pané",
    "name": {
      "fr": "Fromage Pané",
      "en": "Cheese Crispy Tempura",
      "ar": "جبن مقرمش بانيه"
    },
    "desc": {
      "fr": "Riz, légumes, 6 pièces fromage pané",
      "en": "Fresh specialty crafted to order: Riz, légumes, 6 pièces fromage pané.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, légumes, 6 pièces fromage pané."
    },
    "image": "assets/menu/fromage_pan.webp"
  },
  {
    "id": "m_49",
    "category": "brochettes",
    "badge": "popular",
    "price": 72,
    "calories": "520 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame",
    "ingredients": "Riz, légumes, 6 pièces crevettes panées",
    "name": {
      "fr": "Crevette Panée",
      "en": "Shrimp Crispy Tempura",
      "ar": "جمبري مقرمش بانيه"
    },
    "desc": {
      "fr": "Riz, légumes, 6 pièces crevettes panées",
      "en": "Fresh specialty crafted to order: Riz, légumes, 6 pièces crevettes panées.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, légumes, 6 pièces crevettes panées."
    },
    "image": "assets/menu/crevette_pan_e.webp"
  },
  {
    "id": "m_50",
    "category": "brochettes",
    "badge": "popular",
    "price": 65,
    "calories": "520 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame",
    "ingredients": "Riz, légumes, 3 pièces croquettes de saumon",
    "name": {
      "fr": "Croquettes Saumon",
      "en": "Croquettes Salmon",
      "ar": "Croquettes سلمون"
    },
    "desc": {
      "fr": "Riz, légumes, 3 pièces croquettes de saumon",
      "en": "Fresh specialty crafted to order: Riz, légumes, 3 pièces croquettes de saumon.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, légumes, 3 pièces croquettes de saumon."
    },
    "image": "assets/menu/croquettes_saumon.webp"
  },
  {
    "id": "m_51",
    "category": "salades",
    "badge": "popular",
    "price": 84,
    "calories": "520 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame",
    "ingredients": "Riz, légumes, saumon grillé",
    "name": {
      "fr": "Saumon Grillé",
      "en": "Salmon Grilled",
      "ar": "سلمون مشوي"
    },
    "desc": {
      "fr": "Riz, légumes, saumon grillé",
      "en": "Fresh specialty crafted to order: Riz, légumes, saumon grillé.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, légumes, saumon grillé."
    },
    "image": "assets/menu/saumon_grill.webp"
  },
  {
    "id": "m_52",
    "category": "salades",
    "badge": "popular",
    "price": 78,
    "calories": "520 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame",
    "ingredients": "4 pcs crevettes, avocat, mangue, maà¯s, onion crispy, riz, carotte",
    "name": {
      "fr": "Poke Bowl Crevettes",
      "en": "Poke Bowl Shrimps",
      "ar": "Poke Bowl جمبري"
    },
    "desc": {
      "fr": "4 pcs crevettes, avocat, mangue, maà¯s, onion crispy, riz, carotte",
      "en": "Fresh specialty crafted to order: 4 pcs crevettes, avocat, mangue, maà¯s, onion crispy, riz, carotte.",
      "ar": "طبق طازج ومعد عند الطلب: 4 pcs crevettes, avocat, mangue, maà¯s, onion crispy, riz, carotte."
    },
    "image": "assets/menu/crevette.webp"
  },
  {
    "id": "m_53",
    "category": "salades",
    "badge": "popular",
    "price": 72,
    "calories": "520 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame",
    "ingredients": "Saumon, avocat, mangue, maà¯s, riz, concombre, poivrons",
    "name": {
      "fr": "Poke Bowl Saumon",
      "en": "Poke Bowl Salmon",
      "ar": "Poke Bowl سلمون"
    },
    "desc": {
      "fr": "Saumon, avocat, mangue, maà¯s, riz, concombre, poivrons",
      "en": "Fresh specialty crafted to order: Saumon, avocat, mangue, maà¯s, riz, concombre, poivrons.",
      "ar": "طبق طازج ومعد عند الطلب: Saumon, avocat, mangue, maà¯s, riz, concombre, poivrons."
    },
    "image": "assets/menu/saumon.webp"
  },
  {
    "id": "m_54",
    "category": "salades",
    "badge": "popular",
    "price": 65,
    "calories": "520 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame",
    "ingredients": "8pcs de saumon, sésame",
    "name": {
      "fr": "Tataki Saumon",
      "en": "Tataki Salmon",
      "ar": "Tataki سلمون"
    },
    "desc": {
      "fr": "8pcs de saumon, sésame",
      "en": "Fresh specialty crafted to order: 8pcs de saumon, sésame.",
      "ar": "طبق طازج ومعد عند الطلب: 8pcs de saumon, sésame."
    },
    "image": "assets/menu/tataki_saumon.webp"
  },
  {
    "id": "m_55",
    "category": "salades",
    "badge": "popular",
    "price": 59,
    "calories": "520 kcal",
    "allergens": "Poissons, Crustacés, Soja, Sésame",
    "ingredients": "8pcs de saumon",
    "name": {
      "fr": "Carpaccio Saumon",
      "en": "Carpaccio Salmon",
      "ar": "Carpaccio سلمون"
    },
    "desc": {
      "fr": "8pcs de saumon",
      "en": "Fresh specialty crafted to order: 8pcs de saumon.",
      "ar": "طبق طازج ومعد عند الطلب: 8pcs de saumon."
    },
    "image": "assets/menu/carpaccio_saumon.webp"
  },
  {
    "id": "m_56",
    "category": "nigiri",
    "badge": "popular",
    "price": 39,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Saumon, avocat, riz, cheese, tobiko",
    "name": {
      "fr": "Temaki Saumon Avocat",
      "en": "Temaki Salmon Avocado",
      "ar": "Temaki سلمون أفوكادو"
    },
    "desc": {
      "fr": "Saumon, avocat, riz, cheese, tobiko",
      "en": "Fresh specialty crafted to order: Saumon, avocat, riz, cheese, tobiko.",
      "ar": "طبق طازج ومعد عند الطلب: Saumon, avocat, riz, cheese, tobiko."
    },
    "image": "assets/menu/temaki_saumon_avocat.webp"
  },
  {
    "id": "m_57",
    "category": "nigiri",
    "badge": "popular",
    "price": 39,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Crabe, avocat, riz, cheese, tobiko",
    "name": {
      "fr": "Temaki Crabe Avocat",
      "en": "Temaki Crab Avocado",
      "ar": "Temaki سلطعون (كابوريا) أفوكادو"
    },
    "desc": {
      "fr": "Crabe, avocat, riz, cheese, tobiko",
      "en": "Fresh specialty crafted to order: Crabe, avocat, riz, cheese, tobiko.",
      "ar": "طبق طازج ومعد عند الطلب: Crabe, avocat, riz, cheese, tobiko."
    },
    "image": "assets/menu/temaki_crabe_avocat.webp"
  },
  {
    "id": "m_58",
    "category": "nigiri",
    "badge": "popular",
    "price": 39,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Crevette, avocat, riz, cheese, tobiko",
    "name": {
      "fr": "Temaki Crevette Avocat",
      "en": "Temaki Shrimp Avocado",
      "ar": "Temaki جمبري أفوكادو"
    },
    "desc": {
      "fr": "Crevette, avocat, riz, cheese, tobiko",
      "en": "Fresh specialty crafted to order: Crevette, avocat, riz, cheese, tobiko.",
      "ar": "طبق طازج ومعد عند الطلب: Crevette, avocat, riz, cheese, tobiko."
    },
    "image": "assets/menu/temaki_crevette_avocat.webp"
  },
  {
    "id": "m_59",
    "category": "nigiri",
    "badge": "popular",
    "price": 39,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Saumon, avocat, crevette, thon, crabe, surimi, riz, cheese, tobiko",
    "name": {
      "fr": "Temaki Mixte Avocat",
      "en": "Temaki Mixte Avocado",
      "ar": "Temaki Mixte أفوكادو"
    },
    "desc": {
      "fr": "Saumon, avocat, crevette, thon, crabe, surimi, riz, cheese, tobiko",
      "en": "Fresh specialty crafted to order: Saumon, avocat, crevette, thon, crabe, surimi, riz, cheese, tobiko.",
      "ar": "طبق طازج ومعد عند الطلب: Saumon, avocat, crevette, thon, crabe, surimi, riz, cheese, tobiko."
    },
    "image": "assets/menu/temaki_mixte_avocat.webp"
  },
  {
    "id": "m_60",
    "category": "nigiri",
    "badge": "popular",
    "price": 32,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Surimi, avocat, riz, cheese, tobiko",
    "name": {
      "fr": "Temaki Surimi Avocat",
      "en": "Temaki Surimi Avocado",
      "ar": "Temaki Surimi أفوكادو"
    },
    "desc": {
      "fr": "Surimi, avocat, riz, cheese, tobiko",
      "en": "Fresh specialty crafted to order: Surimi, avocat, riz, cheese, tobiko.",
      "ar": "طبق طازج ومعد عند الطلب: Surimi, avocat, riz, cheese, tobiko."
    },
    "image": "assets/menu/temaki_surimi_avocat.webp"
  },
  {
    "id": "m_61",
    "category": "nigiri",
    "badge": "popular",
    "price": 59,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Ebi, mangue, crabe, saumon, cheese",
    "name": {
      "fr": "Futomaki Ebi",
      "en": "Futomaki Ebi",
      "ar": "Futomaki Ebi"
    },
    "desc": {
      "fr": "Ebi, mangue, crabe, saumon, cheese",
      "en": "Fresh specialty crafted to order: Ebi, mangue, crabe, saumon, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Ebi, mangue, crabe, saumon, cheese."
    },
    "image": "assets/menu/futomaki_ebi.webp"
  },
  {
    "id": "m_62",
    "category": "nigiri",
    "badge": "popular",
    "price": 59,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Crevette, avocat, saumon, cheese",
    "name": {
      "fr": "Futomaki Saumon Crevette",
      "en": "Futomaki Salmon Shrimp",
      "ar": "Futomaki سلمون جمبري"
    },
    "desc": {
      "fr": "Crevette, avocat, saumon, cheese",
      "en": "Fresh specialty crafted to order: Crevette, avocat, saumon, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Crevette, avocat, saumon, cheese."
    },
    "image": "assets/menu/futomaki_saumon_crevette.webp"
  },
  {
    "id": "m_63",
    "category": "nigiri",
    "badge": "popular",
    "price": 45,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Saumon, riz, crevette",
    "name": {
      "fr": "Umi Gunkan Crevette",
      "en": "Umi Gunkan Shrimp",
      "ar": "Umi Gunkan جمبري"
    },
    "desc": {
      "fr": "Saumon, riz, crevette",
      "en": "Fresh specialty crafted to order: Saumon, riz, crevette.",
      "ar": "طبق طازج ومعد عند الطلب: Saumon, riz, crevette."
    },
    "image": "assets/menu/umi_gunkan_crevette.webp"
  },
  {
    "id": "m_64",
    "category": "nigiri",
    "badge": "popular",
    "price": 45,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Saumon, riz, saumon au cebollite",
    "name": {
      "fr": "Umi Gunkan Saumon",
      "en": "Umi Gunkan Salmon",
      "ar": "Umi Gunkan سلمون"
    },
    "desc": {
      "fr": "Saumon, riz, saumon au cebollite",
      "en": "Fresh specialty crafted to order: Saumon, riz, saumon au cebollite.",
      "ar": "طبق طازج ومعد عند الطلب: Saumon, riz, saumon au cebollite."
    },
    "image": "assets/menu/umi_gunkan_saumon.webp"
  },
  {
    "id": "m_65",
    "category": "nigiri",
    "badge": "popular",
    "price": 39,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Saumon, riz, cheese",
    "name": {
      "fr": "Umi Gunkan Cheese",
      "en": "Umi Gunkan Cheese",
      "ar": "Umi Gunkan Cheese"
    },
    "desc": {
      "fr": "Saumon, riz, cheese",
      "en": "Fresh specialty crafted to order: Saumon, riz, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Saumon, riz, cheese."
    },
    "image": "assets/menu/umi_gunkan_cheese.webp"
  },
  {
    "id": "m_66",
    "category": "rolls",
    "badge": "popular",
    "price": 59,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Surimi, avocat, cheese, tobiko",
    "name": {
      "fr": "Volcano Roll Cheese",
      "en": "Volcano Roll Cheese",
      "ar": "Volcano Roll Cheese"
    },
    "desc": {
      "fr": "Surimi, avocat, cheese, tobiko",
      "en": "Fresh specialty crafted to order: Surimi, avocat, cheese, tobiko.",
      "ar": "طبق طازج ومعد عند الطلب: Surimi, avocat, cheese, tobiko."
    },
    "image": "assets/menu/volcano_roll_cheese.webp"
  },
  {
    "id": "m_67",
    "category": "rolls",
    "badge": "popular",
    "price": 52,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Surimi, avocat, cheese, crevette, tobiko",
    "name": {
      "fr": "Volcano Roll Crevette",
      "en": "Volcano Roll Shrimp",
      "ar": "Volcano Roll جمبري"
    },
    "desc": {
      "fr": "Surimi, avocat, cheese, crevette, tobiko",
      "en": "Fresh specialty crafted to order: Surimi, avocat, cheese, crevette, tobiko.",
      "ar": "طبق طازج ومعد عند الطلب: Surimi, avocat, cheese, crevette, tobiko."
    },
    "image": "assets/menu/volcano_roll_crevette.webp"
  },
  {
    "id": "m_68",
    "category": "rolls",
    "badge": "popular",
    "price": 52,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Surimi, avocat, cheese, saumon, tobiko",
    "name": {
      "fr": "Volcano Roll Saumon",
      "en": "Volcano Roll Salmon",
      "ar": "Volcano Roll سلمون"
    },
    "desc": {
      "fr": "Surimi, avocat, cheese, saumon, tobiko",
      "en": "Fresh specialty crafted to order: Surimi, avocat, cheese, saumon, tobiko.",
      "ar": "طبق طازج ومعد عند الطلب: Surimi, avocat, cheese, saumon, tobiko."
    },
    "image": "assets/menu/volcano_roll_saumon.webp"
  },
  {
    "id": "m_69",
    "category": "rolls",
    "badge": "popular",
    "price": 39,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Shichimi, saumon, avocat",
    "name": {
      "fr": "California Shichimi",
      "en": "California Shichimi",
      "ar": "California Shichimi"
    },
    "desc": {
      "fr": "Shichimi, saumon, avocat",
      "en": "Fresh specialty crafted to order: Shichimi, saumon, avocat.",
      "ar": "طبق طازج ومعد عند الطلب: Shichimi, saumon, avocat."
    },
    "image": "assets/menu/california_shichimi.webp"
  },
  {
    "id": "m_70",
    "category": "rolls",
    "badge": "popular",
    "price": 39,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Tobiko noir, surimi, avocat, cheese",
    "name": {
      "fr": "California Black",
      "en": "California Black",
      "ar": "California Black"
    },
    "desc": {
      "fr": "Tobiko noir, surimi, avocat, cheese",
      "en": "Fresh specialty crafted to order: Tobiko noir, surimi, avocat, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Tobiko noir, surimi, avocat, cheese."
    },
    "image": "assets/menu/california_black.webp"
  },
  {
    "id": "m_71",
    "category": "rolls",
    "badge": "popular",
    "price": 39,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Poulet pané, cheese, avocat",
    "name": {
      "fr": "California Pavot Noir",
      "en": "California Pavot Noir",
      "ar": "California Pavot Noir"
    },
    "desc": {
      "fr": "Poulet pané, cheese, avocat",
      "en": "Fresh specialty crafted to order: Poulet pané, cheese, avocat.",
      "ar": "طبق طازج ومعد عند الطلب: Poulet pané, cheese, avocat."
    },
    "image": "assets/menu/california_pavot_noir.webp"
  },
  {
    "id": "m_72",
    "category": "rolls",
    "badge": "popular",
    "price": 39,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Sesame, saumon, avocat",
    "name": {
      "fr": "California Sesame",
      "en": "California Sesame",
      "ar": "California Sesame"
    },
    "desc": {
      "fr": "Sesame, saumon, avocat",
      "en": "Fresh specialty crafted to order: Sesame, saumon, avocat.",
      "ar": "طبق طازج ومعد عند الطلب: Sesame, saumon, avocat."
    },
    "image": "assets/menu/california_sesame.webp"
  },
  {
    "id": "m_73",
    "category": "rolls",
    "badge": "popular",
    "price": 39,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Tobiko rouge, crevette, avocat, cheese",
    "name": {
      "fr": "California Majestic",
      "en": "California Majestic",
      "ar": "California Majestic"
    },
    "desc": {
      "fr": "Tobiko rouge, crevette, avocat, cheese",
      "en": "Fresh specialty crafted to order: Tobiko rouge, crevette, avocat, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Tobiko rouge, crevette, avocat, cheese."
    },
    "image": "assets/menu/california_majestic.webp"
  },
  {
    "id": "m_74",
    "category": "rolls",
    "badge": "popular",
    "price": 39,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Tobiko vert, saumon pané, avocat, cheese",
    "name": {
      "fr": "California Wasabi",
      "en": "California Wasabi",
      "ar": "California Wasabi"
    },
    "desc": {
      "fr": "Tobiko vert, saumon pané, avocat, cheese",
      "en": "Fresh specialty crafted to order: Tobiko vert, saumon pané, avocat, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Tobiko vert, saumon pané, avocat, cheese."
    },
    "image": "assets/menu/california_wasabi.webp"
  },
  {
    "id": "m_75",
    "category": "rolls",
    "badge": "popular",
    "price": 39,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Tobiko orange, saumon, avocat, surimi, cheese",
    "name": {
      "fr": "California Tobiko",
      "en": "California Tobiko",
      "ar": "California Tobiko"
    },
    "desc": {
      "fr": "Tobiko orange, saumon, avocat, surimi, cheese",
      "en": "Fresh specialty crafted to order: Tobiko orange, saumon, avocat, surimi, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Tobiko orange, saumon, avocat, surimi, cheese."
    },
    "image": "assets/menu/california_tobiko.webp"
  },
  {
    "id": "m_76",
    "category": "rolls",
    "badge": "popular",
    "price": 45,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Saumon, avocat, cheese",
    "name": {
      "fr": "Saumon Flash",
      "en": "Salmon Flash",
      "ar": "سلمون Flash"
    },
    "desc": {
      "fr": "Saumon, avocat, cheese",
      "en": "Fresh specialty crafted to order: Saumon, avocat, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Saumon, avocat, cheese."
    },
    "image": "assets/menu/saumon_flash.webp"
  },
  {
    "id": "m_77",
    "category": "rolls",
    "badge": "popular",
    "price": 45,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Crevette, avocat, surimi, cheese",
    "name": {
      "fr": "Crunchy Roll",
      "en": "Crunchy Roll",
      "ar": "Crunchy Roll"
    },
    "desc": {
      "fr": "Crevette, avocat, surimi, cheese",
      "en": "Fresh specialty crafted to order: Crevette, avocat, surimi, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Crevette, avocat, surimi, cheese."
    },
    "image": "assets/menu/crunchy_roll.webp"
  },
  {
    "id": "m_78",
    "category": "rolls",
    "badge": "popular",
    "price": 45,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Crevette, avocat, cheese",
    "name": {
      "fr": "Ebi Tempora",
      "en": "Ebi Tempora",
      "ar": "Ebi Tempora"
    },
    "desc": {
      "fr": "Crevette, avocat, cheese",
      "en": "Fresh specialty crafted to order: Crevette, avocat, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Crevette, avocat, cheese."
    },
    "image": "assets/menu/ebi_tempora.webp"
  },
  {
    "id": "m_79",
    "category": "rolls",
    "badge": "popular",
    "price": 45,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Saumon, surimi, avocat, cheese",
    "name": {
      "fr": "Pizza Saumon Crispy",
      "en": "Pizza Salmon Crispy",
      "ar": "Pizza سلمون Crispy"
    },
    "desc": {
      "fr": "Saumon, surimi, avocat, cheese",
      "en": "Fresh specialty crafted to order: Saumon, surimi, avocat, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Saumon, surimi, avocat, cheese."
    },
    "image": "assets/menu/pizza_saumon1.webp"
  },
  {
    "id": "m_80",
    "category": "brochettes",
    "badge": "popular",
    "price": 45,
    "calories": "520 kcal",
    "allergens": "Gluten, Soja, Sésame",
    "ingredients": "Saumon, surimi, avocat, cheese",
    "name": {
      "fr": "Aromaki Panée",
      "en": "Aromaki Crispy Tempura",
      "ar": "Aromaki مقرمش بانيه"
    },
    "desc": {
      "fr": "Saumon, surimi, avocat, cheese",
      "en": "Fresh specialty crafted to order: Saumon, surimi, avocat, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Saumon, surimi, avocat, cheese."
    },
    "image": "assets/menu/aromaki_pan_e.webp"
  },
  {
    "id": "m_81",
    "category": "nigiri",
    "badge": "popular",
    "price": 39,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Riz, unagi",
    "name": {
      "fr": "Nigiri Unagi",
      "en": "Nigiri Unagi",
      "ar": "Nigiri Unagi"
    },
    "desc": {
      "fr": "Riz, unagi",
      "en": "Fresh specialty crafted to order: Riz, unagi.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, unagi."
    },
    "image": "assets/menu/nigiri_unagi.webp"
  },
  {
    "id": "m_82",
    "category": "nigiri",
    "badge": "popular",
    "price": 32,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Riz, saumon",
    "name": {
      "fr": "Nigiri Saumon",
      "en": "Nigiri Salmon",
      "ar": "نيغيري سلمون طازج"
    },
    "desc": {
      "fr": "Riz, saumon",
      "en": "Fresh specialty crafted to order: Riz, saumon.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, saumon."
    },
    "image": "assets/menu/nigiri_saumon.webp"
  },
  {
    "id": "m_83",
    "category": "nigiri",
    "badge": "popular",
    "price": 32,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Riz, crevette",
    "name": {
      "fr": "Nigiri Crevette",
      "en": "Nigiri Shrimp",
      "ar": "Nigiri جمبري"
    },
    "desc": {
      "fr": "Riz, crevette",
      "en": "Fresh specialty crafted to order: Riz, crevette.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, crevette."
    },
    "image": "assets/menu/nigiri_crevette.webp"
  },
  {
    "id": "m_84",
    "category": "nigiri",
    "badge": "popular",
    "price": 29,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Riz, surimi",
    "name": {
      "fr": "Nigiri Surimi",
      "en": "Nigiri Surimi",
      "ar": "Nigiri Surimi"
    },
    "desc": {
      "fr": "Riz, surimi",
      "en": "Fresh specialty crafted to order: Riz, surimi.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, surimi."
    },
    "image": "assets/menu/nigiri_surimi.webp"
  },
  {
    "id": "m_85",
    "category": "rolls",
    "badge": "chef",
    "price": 48,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Saumon, surimi, avocat, cheese",
    "name": {
      "fr": "Special Roll Dream",
      "en": "Special Roll Dream",
      "ar": "Special Roll Dream"
    },
    "desc": {
      "fr": "Saumon, surimi, avocat, cheese",
      "en": "Fresh specialty crafted to order: Saumon, surimi, avocat, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Saumon, surimi, avocat, cheese."
    },
    "image": "assets/menu/special_roll_dream.webp"
  },
  {
    "id": "m_86",
    "category": "rolls",
    "badge": "chef",
    "price": 48,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Saumon, crevette, avocat, cheese",
    "name": {
      "fr": "Special Roll Philadelphie",
      "en": "Special Roll Philadelphie",
      "ar": "Special Roll Philadelphie"
    },
    "desc": {
      "fr": "Saumon, crevette, avocat, cheese",
      "en": "Fresh specialty crafted to order: Saumon, crevette, avocat, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Saumon, crevette, avocat, cheese."
    },
    "image": "assets/menu/special_roll_philadelphie.webp"
  },
  {
    "id": "m_87",
    "category": "rolls",
    "badge": "chef",
    "price": 48,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Mangue, surimi, avocat, cheese",
    "name": {
      "fr": "Special Roll Mango",
      "en": "Special Roll Mango",
      "ar": "مانغو رول طازج"
    },
    "desc": {
      "fr": "Mangue, surimi, avocat, cheese",
      "en": "Fresh specialty crafted to order: Mangue, surimi, avocat, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Mangue, surimi, avocat, cheese."
    },
    "image": "assets/menu/special_roll_mango.webp"
  },
  {
    "id": "m_88",
    "category": "rolls",
    "badge": "chef",
    "price": 48,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Saumon, surimi, avocat, cheese",
    "name": {
      "fr": "Special Roll Oslo",
      "en": "Special Roll Oslo",
      "ar": "أوسلو رول بالسلمون"
    },
    "desc": {
      "fr": "Saumon, surimi, avocat, cheese",
      "en": "Fresh specialty crafted to order: Saumon, surimi, avocat, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Saumon, surimi, avocat, cheese."
    },
    "image": "assets/menu/special_roll_oslo.webp"
  },
  {
    "id": "m_89",
    "category": "rolls",
    "badge": "chef",
    "price": 48,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Unagi, surimi, avocat, cheese",
    "name": {
      "fr": "Special Roll Dragon",
      "en": "Special Roll Dragon",
      "ar": "دراغون رول فاخر"
    },
    "desc": {
      "fr": "Unagi, surimi, avocat, cheese",
      "en": "Fresh specialty crafted to order: Unagi, surimi, avocat, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Unagi, surimi, avocat, cheese."
    },
    "image": "assets/menu/special_roll_dragon.webp"
  },
  {
    "id": "m_90",
    "category": "rolls",
    "badge": "chef",
    "price": 48,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Ebi sushi, crevette, surimi, avocat, cheese",
    "name": {
      "fr": "Special Roll Tigre",
      "en": "Special Roll Tigre",
      "ar": "تايغر رول"
    },
    "desc": {
      "fr": "Ebi sushi, crevette, surimi, avocat, cheese",
      "en": "Fresh specialty crafted to order: Ebi sushi, crevette, surimi, avocat, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Ebi sushi, crevette, surimi, avocat, cheese."
    },
    "image": "assets/menu/special_roll_tigre.webp"
  },
  {
    "id": "m_91",
    "category": "rolls",
    "badge": "chef",
    "price": 48,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Poulet pané, carotte, avocat, cheese",
    "name": {
      "fr": "Special Roll Tokyo",
      "en": "Special Roll Tokyo",
      "ar": "Special Roll Tokyo"
    },
    "desc": {
      "fr": "Poulet pané, carotte, avocat, cheese",
      "en": "Fresh specialty crafted to order: Poulet pané, carotte, avocat, cheese.",
      "ar": "طبق طازج ومعد عند الطلب: Poulet pané, carotte, avocat, cheese."
    },
    "image": "assets/menu/special_roll_tokyo.webp"
  },
  {
    "id": "m_92",
    "category": "rolls",
    "badge": "popular",
    "price": 39,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Riz, crabe, mangue",
    "name": {
      "fr": "Maki Crabe Mangue",
      "en": "Maki Crab Mango",
      "ar": "Maki سلطعون (كابوريا) مانجو"
    },
    "desc": {
      "fr": "Riz, crabe, mangue",
      "en": "Fresh specialty crafted to order: Riz, crabe, mangue.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, crabe, mangue."
    },
    "image": "assets/menu/maki_crabe_mangue.webp"
  },
  {
    "id": "m_93",
    "category": "rolls",
    "badge": "popular",
    "price": 35,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Riz, saumon",
    "name": {
      "fr": "Maki Saumon",
      "en": "Maki Salmon",
      "ar": "ماكي سلمون طازج (8 قطع)"
    },
    "desc": {
      "fr": "Riz, saumon",
      "en": "Fresh specialty crafted to order: Riz, saumon.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, saumon."
    },
    "image": "assets/menu/maki_saumon.webp"
  },
  {
    "id": "m_94",
    "category": "rolls",
    "badge": "popular",
    "price": 35,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Riz, crevette",
    "name": {
      "fr": "Maki Crevette",
      "en": "Maki Shrimp",
      "ar": "Maki جمبري"
    },
    "desc": {
      "fr": "Riz, crevette",
      "en": "Fresh specialty crafted to order: Riz, crevette.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, crevette."
    },
    "image": "assets/menu/maki_crevette.webp"
  },
  {
    "id": "m_95",
    "category": "rolls",
    "badge": "popular",
    "price": 35,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Riz, saumon, avocat",
    "name": {
      "fr": "Maki Saumon Avocat",
      "en": "Maki Salmon Avocado",
      "ar": "ماكي سلمون طازج (8 قطع)"
    },
    "desc": {
      "fr": "Riz, saumon, avocat",
      "en": "Fresh specialty crafted to order: Riz, saumon, avocat.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, saumon, avocat."
    },
    "image": "assets/menu/maki_saumon_avocat.webp"
  },
  {
    "id": "m_96",
    "category": "rolls",
    "badge": "popular",
    "price": 32,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Riz, surimi",
    "name": {
      "fr": "Maki Surimi",
      "en": "Maki Surimi",
      "ar": "Maki Surimi"
    },
    "desc": {
      "fr": "Riz, surimi",
      "en": "Fresh specialty crafted to order: Riz, surimi.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, surimi."
    },
    "image": "assets/menu/maki_surimi.webp"
  },
  {
    "id": "m_97",
    "category": "rolls",
    "badge": "popular",
    "price": 26,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Riz, avocat",
    "name": {
      "fr": "Maki Avocat",
      "en": "Maki Avocado",
      "ar": "ماكي أفوكادو (8 قطع)"
    },
    "desc": {
      "fr": "Riz, avocat",
      "en": "Fresh specialty crafted to order: Riz, avocat.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, avocat."
    },
    "image": "assets/menu/maki_avocat.webp"
  },
  {
    "id": "m_98",
    "category": "rolls",
    "badge": "popular",
    "price": 23,
    "calories": "380 kcal",
    "allergens": "Poissons, Soja, Sésame",
    "ingredients": "Riz, concombre",
    "name": {
      "fr": "Maki Concombre",
      "en": "Maki Cucumber",
      "ar": "Maki خيار"
    },
    "desc": {
      "fr": "Riz, concombre",
      "en": "Fresh specialty crafted to order: Riz, concombre.",
      "ar": "طبق طازج ومعد عند الطلب: Riz, concombre."
    },
    "image": "assets/menu/maki_concombre.webp"
  }
];

// Dynamically Load Menu from Admin storage
// Dynamically Load Menu from Admin storage
function getActiveMenuItems() {
  const CURRENT_MENU_VERSION = 'v7.2';
  const savedVersion = localStorage.getItem('arij_menu_version');
  if (savedVersion !== CURRENT_MENU_VERSION) {
    localStorage.removeItem('arij_custom_menu');
    localStorage.setItem('arij_menu_version', CURRENT_MENU_VERSION);
    return defaultMenuItems;
  }
  try {
    const custom = localStorage.getItem('arij_custom_menu');
    if (custom && custom !== '[]') {
      const parsed = JSON.parse(custom);
      if (Array.isArray(parsed) && parsed.length >= 90) {
        return parsed;
      }
    }
  } catch (e) {}
  localStorage.removeItem('arij_custom_menu');
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

// Sub-Category Configurations (Phase 5 Enhancements)
let activeSubCategory = 'all';
let currentDetectedTable = null;

const subCategoryConfigs = {
  plateaux: [
    { key: 'all', labelKey: 'sub_all' },
    { key: 'signature', labelKey: 'sub_plat_signature', match: ['signature', 'arij', 'hot arij'] },
    { key: 'duo', labelKey: 'sub_plat_duo', match: ['lovers', 'combo', 'box', 'delight', 'fresh', 'rainbow', 'mix'] }
  ],
  rolls: [
    { key: 'all', labelKey: 'sub_all' },
    { key: 'special', labelKey: 'sub_rolls_special', match: ['special roll', 'dragon', 'tiger', 'mango', 'oslo', 'dream', 'tokyo', 'philadelphie', 'crunchy', 'pizza', 'aromaki'] },
    { key: 'california', labelKey: 'sub_rolls_california', match: ['california'] },
    { key: 'maki', labelKey: 'sub_rolls_maki', match: ['maki'] },
    { key: 'volcano', labelKey: 'sub_rolls_volcano', match: ['volcano', 'ebi tempora'] }
  ],
  nigiri: [
    { key: 'all', labelKey: 'sub_all' },
    { key: 'nigiri', labelKey: 'sub_nig_nigiri', match: ['nigiri', 'sashimi'] },
    { key: 'temaki', labelKey: 'sub_nig_temaki', match: ['temaki', 'futomaki', 'gunkan'] }
  ],
  bentos: [
    { key: 'all', labelKey: 'sub_all' },
    { key: 'poulet', labelKey: 'sub_bento_poulet', match: ['gourmand', 'super', 'yakitori', 'poulet'] },
    { key: 'poisson', labelKey: 'sub_bento_poisson', match: ['golden', 'sea', 'fresh', 'mix', 'signature', 'duo', 'sushi'] }
  ],
  woks: [
    { key: 'all', labelKey: 'sub_all' },
    { key: 'saute', labelKey: 'sub_wok_saute', match: ['wok'] },
    { key: 'nouilles', labelKey: 'sub_wok_nouilles', match: ['nouilles', 'riz'] }
  ],
  brochettes: [
    { key: 'all', labelKey: 'sub_all' },
    { key: 'grill', labelKey: 'sub_broch_grill', match: ['brochette', 'boulette'] },
    { key: 'nems', labelKey: 'sub_broch_nems', match: ['nems', 'pané', 'panée', 'amandes', 'croquettes', 'rouleau'] }
  ],
  salades: [
    { key: 'all', labelKey: 'sub_all' },
    { key: 'salades', labelKey: 'sub_sal_salades', match: ['salade', 'tataki', 'carpaccio', 'grillé'] },
    { key: 'soupes', labelKey: 'sub_sal_soupes', match: ['soupe'] }
  ]
};

function renderSubFilterChips() {
  const container = document.getElementById('sub-filter-chips');
  if (!container) return;

  const currentConfigs = subCategoryConfigs[activeCategory];
  if (!currentConfigs || activeCategory === 'all') {
    container.parentElement.style.display = 'none';
    container.innerHTML = '';
    return;
  }

  container.parentElement.style.display = 'block';
  container.innerHTML = currentConfigs.map(cfg => {
    const label = translations[currentLang][cfg.labelKey] || cfg.labelKey;
    const isActive = activeSubCategory === cfg.key;
    return `<button class="sub-chip ${isActive ? 'active' : ''}" data-subkey="${cfg.key}">${label}</button>`;
  }).join('');

  container.querySelectorAll('.sub-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      activeSubCategory = btn.dataset.subkey;
      renderSubFilterChips();
      renderMenu();
    });
  });
}

function detectTableFromURL() {
  try {
    const params = new URLSearchParams(window.location.search);
    const table = params.get('table') || params.get('t');
    if (table) {
      currentDetectedTable = table;
      localStorage.setItem('arij_current_table', table);
      
      const banner = document.getElementById('cart-table-banner');
      const textEl = document.getElementById('cart-table-text');
      const dineInRadio = document.getElementById('order-type-dinein');
      
      if (banner && textEl) {
        banner.style.display = 'flex';
        textEl.textContent = `${translations[currentLang].table_detected || 'Table :'} ${table}`;
      }
      if (dineInRadio) {
        dineInRadio.checked = true;
      }
    }
  } catch (e) {}
}


// Target Phone Number for WhatsApp
function getRestaurantPhone() {
  return localStorage.getItem('arij_tel_phone') || '+212530007780';
}

function getWhatsAppPhone() {
  const customPhone = localStorage.getItem('arij_whatsapp_phone');
  if (customPhone) return customPhone.replace(/[^0-9]/g, '');
  return '212530007780';
}
/* old func replaced */
function _old_getWhatsAppPhone() {
  return localStorage.getItem('arij_whatsapp_phone') || '212530007780';
}

// Apply 100% Comprehensive Admin Custom Site Content Dynamic Overrides
function applyAdminSiteOverrides() {
  // 1. Brand & Header
  const brandTitle = localStorage.getItem('arij_brand_name');
  const brandSub = localStorage.getItem('arij_brand_sub');
  if (brandTitle) {
    document.querySelectorAll('.brand-title').forEach(el => el.innerHTML = `Sushi <span>${brandTitle.replace(/^sushi/i, '').trim()}</span>`);
  }
  if (brandSub) {
    document.querySelectorAll('.brand-sub').forEach(el => el.textContent = brandSub);
  }

  // 2. Announcement Push Banner
  const pushTitle = localStorage.getItem('arij_push_title');
  const pushDesc = localStorage.getItem('arij_push_desc');
  const pushActive = localStorage.getItem('arij_push_active');
  const bannerEl = document.querySelector('.push-banner');
  if (bannerEl) {
    if (pushActive === 'false') {
      bannerEl.style.display = 'none';
    } else {
      bannerEl.style.display = 'block';
      if (pushTitle) {
        const strong = bannerEl.querySelector('strong');
        if (strong) strong.textContent = pushTitle;
      }
      if (pushDesc) {
        const span = bannerEl.querySelector('span');
        if (span) span.textContent = pushDesc;
      }
    }
  }

  // 3. Hero Section
  const heroTitle = localStorage.getItem('arij_hero_title');
  const heroSubtext = localStorage.getItem('arij_hero_subtext');
  const heroImg = localStorage.getItem('arij_hero_img');
  if (heroTitle) {
    const el = document.querySelector('.hero-title');
    if (el) el.innerHTML = heroTitle;
  }
  if (heroSubtext) {
    const el = document.querySelector('.hero-subtitle');
    if (el) el.textContent = heroSubtext;
  }
  if (heroImg) {
    const heroEl = document.querySelector('.hero');
    if (heroEl) heroEl.style.backgroundImage = `linear-gradient(to bottom, rgba(18, 21, 25, 0.6), rgba(18, 21, 25, 0.95)), url('${heroImg}')`;
  }

  // 4. Daily Specials & Combos
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

  const p2t = localStorage.getItem('arij_p2_title');
  const p2d = localStorage.getItem('arij_p2_desc');
  const p2p = localStorage.getItem('arij_p2_price');
  if (p2t) {
    const el = document.querySelector('[data-i18n="combo2_title"]');
    if (el) el.textContent = p2t;
  }
  if (p2d) {
    const el = document.querySelector('[data-i18n="combo2_desc"]');
    if (el) el.textContent = p2d;
  }
  if (p2p) {
    const el = document.querySelector('[data-i18n="combo2_price"]');
    if (el) el.textContent = p2p;
  }

  // 5. Features (Les 4 Avantages)
  for (let i = 1; i <= 4; i++) {
    const ft = localStorage.getItem(`arij_feat${i}_title`);
    const fd = localStorage.getItem(`arij_feat${i}_desc`);
    if (ft) {
      const el = document.querySelector(`[data-i18n="feat_${i}_title"]`);
      if (el) el.textContent = ft;
    }
    if (fd) {
      const el = document.querySelector(`[data-i18n="feat_${i}_desc"]`);
      if (el) el.textContent = fd;
    }
  }

  // 6. Gallery (Les 4 Photos Ambiance)
  const galItems = document.querySelectorAll('.ambiance-grid .ambiance-item');
  if (galItems.length >= 4) {
    for (let i = 1; i <= 4; i++) {
      const gImg = localStorage.getItem(`arij_gal${i}_img`);
      const gTitle = localStorage.getItem(`arij_gal${i}_title`);
      const itemEl = galItems[i - 1];
      if (itemEl) {
        if (gImg) {
          const imgEl = itemEl.querySelector('img');
          if (imgEl) imgEl.src = gImg;
        }
        if (gTitle) {
          const titleEl = itemEl.querySelector('h4');
          if (titleEl) titleEl.textContent = gTitle;
        }
      }
    }
  }

  // 7. Customer Reviews
  for (let i = 1; i <= 3; i++) {
    const ra = localStorage.getItem(`arij_rev${i}_author`);
    const rr = localStorage.getItem(`arij_rev${i}_role`);
    const rt = localStorage.getItem(`arij_rev${i}_text`);
    if (ra) {
      const el = document.querySelector(`[data-i18n="review${i}_author"]`);
      if (el) el.textContent = ra;
    }
    if (rr) {
      const el = document.querySelector(`[data-i18n="review${i}_role"]`);
      if (el) el.textContent = rr;
    }
    if (rt) {
      const el = document.querySelector(`[data-i18n="review${i}_text"]`);
      if (el) el.textContent = `"${rt.replace(/^"|"$/g, '')}"`;
    }
  }

  // 8. Loyalty Program
  const loyaltyReward = localStorage.getItem('arij_loyalty_reward');
  if (loyaltyReward) {
    const subEl = document.querySelector('[data-i18n="loyalty_sub"]');
    if (subEl) subEl.textContent = loyaltyReward;
  }

  // 9. Contact & Socials
  const addr = localStorage.getItem('arij_contact_addr');
  const hours = localStorage.getItem('arij_contact_hours');
  const telPhone = localStorage.getItem('arij_tel_phone') || '+212 5 30 00 77 80';
  const waPhone = localStorage.getItem('arij_whatsapp_phone') || '212530007780';
  const cleanWa = waPhone.replace(/[^0-9]/g, '');

  const phoneEl = document.getElementById('contact-phone-display');
  if (phoneEl) {
    phoneEl.textContent = telPhone;
    phoneEl.href = `tel:${telPhone.replace(/\s+/g, '')}`;
  }

  const callBtn = document.getElementById('btn-call-action');
  if (callBtn) {
    callBtn.href = `tel:${telPhone.replace(/\s+/g, '')}`;
  }

  const waEl = document.getElementById('contact-whatsapp-display');
  if (waEl) {
    waEl.textContent = `+${cleanWa}`;
    waEl.href = `https://wa.me/${cleanWa}`;
  }

  const waBtn = document.getElementById('btn-whatsapp-action');
  if (waBtn) {
    waBtn.href = `https://wa.me/${cleanWa}`;
  }
  if (addr) {
    const el = document.querySelector('[data-i18n="info_loc_desc"]');
    if (el) el.textContent = addr;
  }
  if (hours) {
    const el = document.querySelector('[data-i18n="info_hours_desc"]');
    if (el) el.textContent = hours;
  }
  if (phone) {
    const el = document.querySelector('[data-i18n="info_phone_desc"]');
    if (el) el.textContent = `+${phone}`;
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
// DOM Elements Initialization with Error Isolation
document.addEventListener('DOMContentLoaded', () => {
  try { applyAdminSiteOverrides(); } catch (e) { console.error('Overrides error', e); }
  try { initLanguage(); } catch (e) { console.error('Language error', e); }
  try { initTheme(); } catch (e) { console.error('Theme error', e); }
  try { checkOperatingStatus(); } catch (e) { console.error('Status error', e); }
  try { detectTableFromURL(); } catch (e) { console.error('Table error', e); }
  try { renderSubFilterChips(); } catch (e) { console.error('Subchips error', e); }
  try { renderMenu(); } catch (e) { console.error('Menu error', e); }
  try { setupEventListeners(); } catch (e) { console.error('Listeners error', e); }
  try { setupMinDate(); } catch (e) { console.error('Date error', e); }
  try { registerServiceWorker(); } catch (e) { console.error('SW error', e); }
  try { selectPairingMood('fresh'); } catch (e) { console.error('Pairing error', e); }
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
    fresh: { mainId: 'm_1', drinkId: 'm_4', comboPrice: 190 },
    rich: { mainId: 'm_3', drinkId: 'm_16', comboPrice: 220 },
    breakfast: { mainId: 'm_15', drinkId: 'm_22', comboPrice: 140 },
    sweet: { mainId: 'm_7', drinkId: 'm_28', comboPrice: 160 }
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
  renderSubFilterChips();
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
      activeSubCategory = 'all';
      renderSubFilterChips();
      renderMenu();
    });
  });

  // Pickup time visibility handler
  document.querySelectorAll('input[name="cart-order-type"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const pickupBox = document.getElementById('pickup-time-container');
      if (pickupBox) {
        pickupBox.style.display = radio.value === 'takeaway' ? 'block' : 'none';
      }
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

  try {
    const menu = getActiveMenuItems();
    const filtered = menu.filter(item => {
      if (!item) return false;
      if (activeCategory !== 'all' && item.category !== activeCategory) return false;
      if (activeFilter !== 'all' && item.badge !== activeFilter) return false;
      
      // Sub-category matching
      if (activeCategory !== 'all' && activeSubCategory !== 'all') {
        const configs = subCategoryConfigs[activeCategory];
        const cfg = configs?.find(c => c.key === activeSubCategory);
        if (cfg && cfg.match) {
          const itemStr = (getItemTitle(item, 'fr') + ' ' + getItemDesc(item, 'fr')).toLowerCase();
          const matches = cfg.match.some(m => itemStr.includes(m.toLowerCase()));
          if (!matches) return false;
        }
      }

      if (searchQuery) {
        const name = getItemTitle(item).toLowerCase();
        const desc = getItemDesc(item).toLowerCase();
        if (!name.includes(searchQuery) && !desc.includes(searchQuery)) return false;
      }
      return true;
    });

    // Update Dynamic Counter Badge
    const counterBadge = document.getElementById('menu-counter-badge');
    if (counterBadge) {
      const unit = filtered.length <= 1 ? (translations[currentLang]?.results_count_single || '1 plat disponible') : `${filtered.length} ${translations[currentLang]?.results_count_multi || 'plats disponibles'}`;
      counterBadge.textContent = unit;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="menu-empty" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
          <i class="fas fa-utensils" style="font-size: 2.5rem; color: var(--accent-gold); margin-bottom: 1rem; opacity: 0.7;"></i>
          <p style="color: var(--text-muted); font-size: 1.1rem;">${currentLang === 'ar' ? 'لم يتم العثور على أطباق تطابق البحث' : currentLang === 'fr' ? 'Aucun plat ne correspond à votre recherche' : 'No items match your search'}</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(item => {
      const badgeText = getBadgeLabel(item.badge);
      const itemTitle = getItemTitle(item);
      const itemDesc = getItemDesc(item);
      const cartQty = getItemCartQuantity(item.id);
      const isOutOfStock = item.inStock === false || item.outOfStock === true;

      return `
        <div class="menu-card glass-card ${isOutOfStock ? 'item-out-of-stock' : ''}" data-id="${item.id}">
          <div class="menu-card-img-wrap">
            <img src="${item.image}" alt="${itemTitle}" loading="lazy" onerror="this.src='assets/menu/assortiment_arij.webp'">
            ${isOutOfStock ? `<span class="card-badge out-of-stock" style="background:#e63946;color:#fff;">Épuisé</span>` : (badgeText ? `<span class="card-badge ${item.badge}">${badgeText}</span>` : '')}
            <button class="nutri-info-btn" onclick="openNutritionalModal('${item.id}')" title="Infos Nutritionnelles"><i class="fas fa-info-circle"></i></button>
          </div>
          <div class="menu-card-body">
            <div class="menu-card-header">
              <h3 class="menu-card-title">${itemTitle}</h3>
              <span class="menu-card-price">${item.price} <small>MAD</small></span>
            </div>
            <p class="menu-card-desc">${itemDesc}</p>
            <div class="menu-card-footer">
              ${isOutOfStock ? `
                <button class="add-to-cart-btn disabled" disabled style="opacity:0.5;cursor:not-allowed;background:rgba(255,255,255,0.05);color:#888;">
                  <i class="fas fa-ban"></i>
                  <span>Temporairement Épuisé</span>
                </button>
              ` : (cartQty > 0 ? `
                <div class="qty-control">
                  <button onclick="updateCartItemQty('${item.id}', -1)" aria-label="Decrease"><i class="fas fa-minus"></i></button>
                  <span>${cartQty}</span>
                  <button onclick="updateCartItemQty('${item.id}', 1)" aria-label="Increase"><i class="fas fa-plus"></i></button>
                </div>
              ` : `
                <button class="add-to-cart-btn" onclick="addToCart('${item.id}')">
                  <i class="fas fa-plus-circle"></i>
                  <span data-i18n="cart_add_btn">${translations[currentLang]?.cart_add_btn || 'Ajouter'}</span>
                </button>
              `)}
            </div>
          </div>
        </div>
      `;
    }).join('');
  } catch (err) {
    console.error('Error rendering menu:', err);
  }
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
    cart.push({ id: item.id, qty: 1, mode: 'dine-in' });
  }

  updateCartUI();
  renderMenu();
}

function toggleCartItemMode(id) {
  const item = cart.find(c => c.id === id);
  if (item) {
    item.mode = item.mode === 'takeaway' ? 'dine-in' : 'takeaway';
    updateCartUI();
  }
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
      const itemMode = c.mode || 'dine-in';
      const modeLabel = itemMode === 'takeaway' ? '🛍️ À Emporter' : '🍽️ Sur Place';

      return `
        <div class="cart-item">
          <div class="cart-item-details">
            <span class="cart-item-title">${title}</span>
            <span class="cart-item-price">${item.price} MAD x ${c.qty} = <strong>${lineTotal} MAD</strong></span>
            <div>
              <button class="cart-mode-tag" onclick="toggleCartItemMode('${c.id}')" title="Cliquez pour changer le mode de ce plat">
                ${modeLabel} <i class="fas fa-sync-alt" style="font-size:0.65rem; opacity:0.7;"></i>
              </button>
            </div>
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
    if (discountType === 'percentage') {
      finalTotal = subtotal * (1 - appliedDiscount / 100);
    } else {
      finalTotal = Math.max(0, subtotal - appliedDiscount);
    }
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
  const pickupTime = document.getElementById('cart-pickup-time')?.value;
  const menu = getActiveMenuItems();
  const tableNum = currentDetectedTable || localStorage.getItem('arij_current_table');

  let message = `📌 *NOUVELLE COMMANDE - SUSHI ARIJ*\n`;
  message += `---------------------------------\n`;
  message += `🛵 Mode: *${orderType.toUpperCase()}*`;
  if (orderType === 'dine-in' && tableNum) {
    message += ` (🍽️ Table: ${tableNum})`;
  } else if (orderType === 'takeaway' && pickupTime) {
    message += ` (⏰ Retrait: ${pickupTime})`;
  }
  message += `\n\n`;
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
        <p>Av. Hssaine, Sala Al Jadida • Tél & WhatsApp: +212 5 30 00 77 80 • Site: https://sushiarij.app</p>
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

