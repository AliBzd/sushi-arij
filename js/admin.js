// Café & Restaurant Sushi Arij - Admin Full Site & Image Editor Engine (With Drag & Drop)

const DEFAULT_PASS = 'arij2026';
const PROD_DOMAIN = 'https://sushiarij.app';

// Full 18 Default Menu Database fallback for Admin Portal
const adminDefaultMenuItems = [
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
  loadAllSiteContent();
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
  const CURRENT_MENU_VERSION = 'v7.1';
  const savedVersion = localStorage.getItem('arij_menu_version');
  if (savedVersion !== CURRENT_MENU_VERSION) {
    localStorage.removeItem('arij_custom_menu');
    localStorage.setItem('arij_menu_version', CURRENT_MENU_VERSION);
    return adminDefaultMenuItems;
  }
  try {
    const custom = localStorage.getItem('arij_custom_menu');
    if (custom && custom !== '[]') return JSON.parse(custom);
  } catch (e) {}
  return adminDefaultMenuItems;
}

let adminSearchQuery = '';
let adminCatFilter = 'all';

function filterAdminMenuTable() {
  const sInput = document.getElementById('admin-menu-search');
  const cSelect = document.getElementById('admin-menu-cat-filter');
  adminSearchQuery = sInput ? sInput.value.toLowerCase().trim() : '';
  adminCatFilter = cSelect ? cSelect.value : 'all';
  renderAdminMenu();
  loadAllSiteContent();
}

function renderAdminMenu() {
  const menu = getStoredMenu();
  const countEl = document.getElementById('stat-menu-count');
  if (countEl) countEl.textContent = menu.length;

  const menuBody = document.getElementById('admin-menu-body');
  if (!menuBody) return;

  const filtered = menu.filter(m => {
    if (adminCatFilter !== 'all' && m.category !== adminCatFilter) return false;
    if (adminSearchQuery) {
      const name = (m.name?.fr || m.name || '').toLowerCase();
      const ing = (m.ingredients || '').toLowerCase();
      if (!name.includes(adminSearchQuery) && !ing.includes(adminSearchQuery)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    menuBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 2rem; color: var(--text-muted);">Aucun plat trouvé dans cette catégorie.</td></tr>`;
    return;
  }

  menuBody.innerHTML = filtered.map(m => {
    const title = m.name?.fr || m.name || 'Plat';
    const isInStock = m.inStock !== false && m.outOfStock !== true;
    return `
      <tr class="${isInStock ? '' : 'row-out-of-stock'}">
        <td><img src="${m.image}" style="width: 54px; height: 46px; object-fit: cover; border-radius: 6px; border: 1px solid var(--border-glass);" onerror="this.src='assets/menu/assortiment_arij.webp'"></td>
        <td><strong>${title}</strong></td>
        <td><span class="filter-chip" style="font-size:0.75rem;">${m.category}</span></td>
        <td><strong style="color: var(--accent-gold);">${m.price} MAD</strong></td>
        <td>
          <button class="btn-secondary" onclick="toggleItemStock('${m.id}')" style="padding: 0.25rem 0.6rem; font-size: 0.75rem; border-color: ${isInStock ? '#2ec4b6' : '#e63946'}; color: ${isInStock ? '#2ec4b6' : '#e63946'};" title="Cliquez pour changer la disponibilité">
            <i class="fas fa-${isInStock ? 'check-circle' : 'ban'}"></i> ${isInStock ? 'En Stock' : 'Épuisé (Rupture)'}
          </button>
        </td>
        <td><span class="card-badge ${m.badge || ''}">${m.badge || 'Standard'}</span></td>
        <td>
          <div style="display: flex; gap: 0.4rem;">
            <button class="btn-secondary" onclick="editMenuItem('${m.id}')" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;"><i class="fas fa-edit"></i> Modifier</button>
            <button class="btn-secondary" onclick="deleteMenuItem('${m.id}')" style="padding: 0.25rem 0.6rem; font-size: 0.75rem; color: var(--accent-crimson);"><i class="fas fa-trash"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function toggleItemStock(id) {
  let menu = getStoredMenu();
  const item = menu.find(m => m.id === id);
  if (item) {
    const currentState = item.inStock !== false && item.outOfStock !== true;
    item.inStock = !currentState;
    item.outOfStock = currentState;
    localStorage.setItem('arij_custom_menu', JSON.stringify(menu));
    renderAdminMenu();
  loadAllSiteContent();
  }
}

function handleItemImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const base64 = e.target.result;
    document.getElementById('item-image-url').value = base64;
    const previewWrap = document.getElementById('image-preview-wrap');
    const previewImg = document.getElementById('image-preview-img');
    if (previewWrap && previewImg) {
      previewImg.src = base64;
      previewWrap.style.display = 'block';
    }
  };
  reader.readAsDataURL(file);
}

function openAddMenuItemModal() {
  document.getElementById('item-edit-id').value = '';
  document.getElementById('admin-item-form').reset();
  document.getElementById('item-image-url').value = 'assets/menu/special_roll_dragon.webp';
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
  document.getElementById('item-category').value = item.category || 'rolls';
  document.getElementById('item-price').value = item.price || 50;
  document.getElementById('item-badge').value = item.badge || '';
  document.getElementById('item-calories').value = item.calories || '';
  document.getElementById('item-image-url').value = item.image || 'assets/menu/special_roll_dragon.webp';
  document.getElementById('item-desc-fr').value = item.desc?.fr || item.desc || '';
  document.getElementById('item-allergens').value = item.allergens || '';

  const previewWrap = document.getElementById('image-preview-wrap');
  const previewImg = document.getElementById('image-preview-img');
  if (previewWrap && previewImg) {
    previewImg.src = item.image || 'assets/menu/special_roll_dragon.webp';
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
  loadAllSiteContent();
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
      image: imageUrl || 'assets/menu/special_roll_dragon.webp'
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
  loadAllSiteContent();
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


// Export Menu to JSON Backup
function exportMenuJSON() {
  const menu = getStoredMenu();
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(menu, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `sushi_arij_menu_backup_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// Import Menu from JSON Backup
function importMenuJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (!Array.isArray(imported)) {
        throw new Error("Format de fichier invalide (doit être un tableau JSON).");
      }
      if (confirm(`Voulez-vous importer ${imported.length} plats dans le menu ? Cela mettra à jour la carte.`)) {
        localStorage.setItem('arij_custom_menu', JSON.stringify(imported));
        renderAdminMenu();
  loadAllSiteContent();
        alert(`✅ ${imported.length} plats importés et synchronisés avec succès !`);
      }
    } catch (err) {
      alert("Erreur lors de l'importation : " + err.message);
    }
  };
  reader.readAsText(file);
}


// 100% Comprehensive Site Content & Features Manager
function loadAllSiteContent() {
  const brandName = localStorage.getItem('arij_brand_name') || 'Café & Restaurant Sushi Arij';
  const brandSub = localStorage.getItem('arij_brand_sub') || 'Café & Restaurant';
  const heroTitle = localStorage.getItem('arij_hero_title') || 'Cuisine Japonaise Fraîche & Expérience Café Exceptionnelle à Sala Al Jadida';
  const heroSub = localStorage.getItem('arij_hero_subtext') || 'Découvrez l\'harmonie parfaite entre l\'art du sushi japonais artisanal et l\'élégance d\'un café contemporain. Produits frais préparés chaque jour sur l\'Avenue Hssaine.';
  const pushTitle = localStorage.getItem('arij_push_title') || '🔔 Restez Informé de nos Promos du Jour !';
  const pushDesc = localStorage.getItem('arij_push_desc') || 'Activer les notifications pour recevoir nos offres exclusives à Sala Al Jadida.';

  if (document.getElementById('edit-brand-name')) document.getElementById('edit-brand-name').value = brandName;
  if (document.getElementById('edit-brand-sub')) document.getElementById('edit-brand-sub').value = brandSub;
  if (document.getElementById('edit-hero-title')) document.getElementById('edit-hero-title').value = heroTitle;
  if (document.getElementById('edit-hero-subtext')) document.getElementById('edit-hero-subtext').value = heroSub;
  if (document.getElementById('edit-push-title')) document.getElementById('edit-push-title').value = pushTitle;
  if (document.getElementById('edit-push-desc')) document.getElementById('edit-push-desc').value = pushDesc;

  // Features (4 Avantages)
  for (let i = 1; i <= 4; i++) {
    const ft = localStorage.getItem(`arij_feat${i}_title`);
    const fd = localStorage.getItem(`arij_feat${i}_desc`);
    const tEl = document.getElementById(`edit-feat${i}_title`);
    const dEl = document.getElementById(`edit-feat${i}_desc`);
    if (ft && tEl) tEl.value = ft;
    if (fd && dEl) dEl.value = fd;
  }

  // Gallery (4 Photos)
  for (let i = 1; i <= 4; i++) {
    const gi = localStorage.getItem(`arij_gal${i}_img`);
    const gt = localStorage.getItem(`arij_gal${i}_title`);
    const iEl = document.getElementById(`edit-gal${i}-img`);
    const tEl = document.getElementById(`edit-gal${i}-title`);
    if (gi && iEl) iEl.value = gi;
    if (gt && tEl) tEl.value = gt;
  }

  // Reviews (3 Avis)
  for (let i = 1; i <= 3; i++) {
    const ra = localStorage.getItem(`arij_rev${i}_author`);
    const rr = localStorage.getItem(`arij_rev${i}_role`);
    const rt = localStorage.getItem(`arij_rev${i}_text`);
    const aEl = document.getElementById(`edit-rev${i}-author`);
    const rEl = document.getElementById(`edit-rev${i}-role`);
    const tEl = document.getElementById(`edit-rev${i}-text`);
    if (ra && aEl) aEl.value = ra;
    if (rr && rEl) rEl.value = rr;
    if (rt && tEl) tEl.value = rt;
  }

  // Loyalty
  const loy = localStorage.getItem('arij_loyalty_reward');
  const loyEl = document.getElementById('edit-loyalty-reward');
  if (loy && loyEl) loyEl.value = loy;
}

function saveAllSiteContent() {
  const brandName = document.getElementById('edit-brand-name')?.value.trim();
  const brandSub = document.getElementById('edit-brand-sub')?.value.trim();
  const heroTitle = document.getElementById('edit-hero-title')?.value.trim();
  const heroSub = document.getElementById('edit-hero-subtext')?.value.trim();
  const pushTitle = document.getElementById('edit-push-title')?.value.trim();
  const pushDesc = document.getElementById('edit-push-desc')?.value.trim();

  if (brandName) localStorage.setItem('arij_brand_name', brandName);
  if (brandSub) localStorage.setItem('arij_brand_sub', brandSub);
  if (heroTitle) localStorage.setItem('arij_hero_title', heroTitle);
  if (heroSub) localStorage.setItem('arij_hero_subtext', heroSub);
  if (pushTitle) localStorage.setItem('arij_push_title', pushTitle);
  if (pushDesc) localStorage.setItem('arij_push_desc', pushDesc);

  alert('✅ Contenu général et en-tête enregistrés avec succès !');
}

function saveFeaturesAndReviews() {
  // Features
  for (let i = 1; i <= 4; i++) {
    const tEl = document.getElementById(`edit-feat${i}-title`);
    const dEl = document.getElementById(`edit-feat${i}-desc`);
    if (tEl) localStorage.setItem(`arij_feat${i}_title`, tEl.value.trim());
    if (dEl) localStorage.setItem(`arij_feat${i}_desc`, dEl.value.trim());
  }

  // Gallery
  for (let i = 1; i <= 4; i++) {
    const iEl = document.getElementById(`edit-gal${i}-img`);
    const tEl = document.getElementById(`edit-gal${i}-title`);
    if (iEl) localStorage.setItem(`arij_gal${i}_img`, iEl.value.trim());
    if (tEl) localStorage.setItem(`arij_gal${i}_title`, tEl.value.trim());
  }

  // Reviews
  for (let i = 1; i <= 3; i++) {
    const aEl = document.getElementById(`edit-rev${i}-author`);
    const rEl = document.getElementById(`edit-rev${i}-role`);
    const tEl = document.getElementById(`edit-rev${i}-text`);
    if (aEl) localStorage.setItem(`arij_rev${i}_author`, aEl.value.trim());
    if (rEl) localStorage.setItem(`arij_rev${i}_role`, rEl.value.trim());
    if (tEl) localStorage.setItem(`arij_rev${i}_text`, tEl.value.trim());
  }

  // Loyalty
  const loyEl = document.getElementById('edit-loyalty-reward');
  if (loyEl) localStorage.setItem('arij_loyalty_reward', loyEl.value.trim());

  alert('✅ Avantages, Galerie (4 photos), Avis et Fidélité enregistrés avec succès !');
}

// 1-Click WhatsApp Order Status Notifications
function sendWhatsAppStatusNotification(phone, orderId, statusType) {
  if (!phone) return;
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  let message = '';
  
  if (statusType === 'confirm') {
    message = `👨‍🍳 *SUSHI ARIJ - COMMANDE CONFIRMÉE*\n\nBonjour ! Votre commande *#${orderId}* a été acceptée par nos chefs et est en cours de préparation.\n⏱️ Délai estimé : ~20-25 minutes.\n\nMerci de votre confiance !`;
  } else if (statusType === 'delivery') {
    message = `🛵 *SUSHI ARIJ - LIVREUR EN ROUTE*\n\nVotre commande *#${orderId}* vient de quitter le restaurant. Notre livreur arrive chez vous sous peu !\n\nBon appétit !`;
  } else if (statusType === 'ready') {
    message = `🛍️ *SUSHI ARIJ - COMMANDE PRÊTE*\n\nVotre commande *#${orderId}* est prête et emballée avec soin au comptoir du restaurant (Avenue Hssaine, Sala Al Jadida).\n\nÀ très bientôt !`;
  }

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${cleanPhone}?text=${encoded}`, '_blank');
}


// 100% Comprehensive Full Site Backup & Restore
function exportFullBackupJSON() {
  const fullBackup = {
    version: 'v7.1',
    exportDate: new Date().toISOString(),
    menu: getStoredMenu(),
    siteContent: {
      brandName: localStorage.getItem('arij_brand_name'),
      brandSub: localStorage.getItem('arij_brand_sub'),
      heroTitle: localStorage.getItem('arij_hero_title'),
      heroSub: localStorage.getItem('arij_hero_subtext'),
      pushTitle: localStorage.getItem('arij_push_title'),
      pushDesc: localStorage.getItem('arij_push_desc'),
      p1Title: localStorage.getItem('arij_p1_title'),
      p1Desc: localStorage.getItem('arij_p1_desc'),
      p1Price: localStorage.getItem('arij_p1_price'),
      p2Title: localStorage.getItem('arij_p2_title'),
      p2Desc: localStorage.getItem('arij_p2_desc'),
      p2Price: localStorage.getItem('arij_p2_price'),
      phone: localStorage.getItem('arij_whatsapp_phone'),
      storeStatus: localStorage.getItem('arij_store_status_override'),
      loyaltyReward: localStorage.getItem('arij_loyalty_reward'),
      feat1Title: localStorage.getItem('arij_feat1_title'),
      feat1Desc: localStorage.getItem('arij_feat1_desc'),
      feat2Title: localStorage.getItem('arij_feat2_title'),
      feat2Desc: localStorage.getItem('arij_feat2_desc'),
      feat3Title: localStorage.getItem('arij_feat3_title'),
      feat3Desc: localStorage.getItem('arij_feat3_desc'),
      feat4Title: localStorage.getItem('arij_feat4_title'),
      feat4Desc: localStorage.getItem('arij_feat4_desc'),
      gal1Img: localStorage.getItem('arij_gal1_img'),
      gal1Title: localStorage.getItem('arij_gal1_title'),
      gal2Img: localStorage.getItem('arij_gal2_img'),
      gal2Title: localStorage.getItem('arij_gal2_title'),
      gal3Img: localStorage.getItem('arij_gal3_img'),
      gal3Title: localStorage.getItem('arij_gal3_title'),
      gal4Img: localStorage.getItem('arij_gal4_img'),
      gal4Title: localStorage.getItem('arij_gal4_title'),
      rev1Author: localStorage.getItem('arij_rev1_author'),
      rev1Role: localStorage.getItem('arij_rev1_role'),
      rev1Text: localStorage.getItem('arij_rev1_text'),
      rev2Author: localStorage.getItem('arij_rev2_author'),
      rev2Role: localStorage.getItem('arij_rev2_role'),
      rev2Text: localStorage.getItem('arij_rev2_text'),
      rev3Author: localStorage.getItem('arij_rev3_author'),
      rev3Role: localStorage.getItem('arij_rev3_role'),
      rev3Text: localStorage.getItem('arij_rev3_text')
    },
    coupons: JSON.parse(localStorage.getItem('arij_coupons') || '[]')
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullBackup, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `sushi_arij_FULL_BACKUP_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importFullBackupJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.menu && Array.isArray(data.menu)) {
        localStorage.setItem('arij_custom_menu', JSON.stringify(data.menu));
      } else if (Array.isArray(data)) {
        localStorage.setItem('arij_custom_menu', JSON.stringify(data));
      }

      if (data.siteContent) {
        const sc = data.siteContent;
        if (sc.brandName) localStorage.setItem('arij_brand_name', sc.brandName);
        if (sc.brandSub) localStorage.setItem('arij_brand_sub', sc.brandSub);
        if (sc.heroTitle) localStorage.setItem('arij_hero_title', sc.heroTitle);
        if (sc.heroSub) localStorage.setItem('arij_hero_subtext', sc.heroSub);
        if (sc.pushTitle) localStorage.setItem('arij_push_title', sc.pushTitle);
        if (sc.pushDesc) localStorage.setItem('arij_push_desc', sc.pushDesc);
        if (sc.phone) localStorage.setItem('arij_whatsapp_phone', sc.phone);
        if (sc.p1Title) localStorage.setItem('arij_p1_title', sc.p1Title);
        if (sc.p1Desc) localStorage.setItem('arij_p1_desc', sc.p1Desc);
        if (sc.p1Price) localStorage.setItem('arij_p1_price', sc.p1Price);
        if (sc.p2Title) localStorage.setItem('arij_p2_title', sc.p2Title);
        if (sc.p2Desc) localStorage.setItem('arij_p2_desc', sc.p2Desc);
        if (sc.p2Price) localStorage.setItem('arij_p2_price', sc.p2Price);
        if (sc.loyaltyReward) localStorage.setItem('arij_loyalty_reward', sc.loyaltyReward);
        for (let i = 1; i <= 4; i++) {
          if (sc[`feat${i}Title`]) localStorage.setItem(`arij_feat${i}_title`, sc[`feat${i}Title`]);
          if (sc[`feat${i}Desc`]) localStorage.setItem(`arij_feat${i}_desc`, sc[`feat${i}Desc`]);
          if (sc[`gal${i}Img`]) localStorage.setItem(`arij_gal${i}_img`, sc[`gal${i}Img`]);
          if (sc[`gal${i}Title`]) localStorage.setItem(`arij_gal${i}_title`, sc[`gal${i}Title`]);
        }
        for (let i = 1; i <= 3; i++) {
          if (sc[`rev${i}Author`]) localStorage.setItem(`arij_rev${i}_author`, sc[`rev${i}Author`]);
          if (sc[`rev${i}Role`]) localStorage.setItem(`arij_rev${i}_role`, sc[`rev${i}Role`]);
          if (sc[`rev${i}Text`]) localStorage.setItem(`arij_rev${i}_text`, sc[`rev${i}Text`]);
        }
      }

      if (data.coupons && Array.isArray(data.coupons)) {
        localStorage.setItem('arij_coupons', JSON.stringify(data.coupons));
      }

      renderAdminMenu();
      loadAllSiteContent();
      loadPromosAndSettings();
      alert('✅ Sauvegarde complète de tout le site restaurée avec succès !');
    } catch (err) {
      alert("Erreur lors de l'importation de la sauvegarde : " + err.message);
    }
  };
  reader.readAsText(file);
}

function exportMenuJSON() { exportFullBackupJSON(); }
function importMenuJSON(e) { importFullBackupJSON(e); }
