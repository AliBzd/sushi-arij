# Café & Restaurant Sushi Arij - Complete Documentation

> **Official Live Website**: [https://sushiarij.app/](https://sushiarij.app/)  
> **Super Admin Management Portal**: [https://sushiarij.app/admin.html](https://sushiarij.app/admin.html) *(Default Password: `arij2026`)*  
> **GitHub Repository**: [https://github.com/AliBzd/sushi-arij](https://github.com/AliBzd/sushi-arij)  
> **Location**: Av. Hssaine, Sala Al Jadida, Morocco (Geo: `33.9882027, -6.7385552`)  
> **Direct Contact / WhatsApp**: `+212 6 12 56 08 03`  
> **Opening Hours**: Daily from 06:30 AM to 11:30 PM (06:30 - 23:30)

---

## 📖 Table of Contents

1. [Executive Overview](#-executive-overview)
2. [Architecture & Tech Stack](#-architecture--tech-stack)
3. [Customer Frontend Features](#-customer-frontend-features)
4. [Super Admin Portal Guide (`admin.html`)](#-super-admin-portal-guide-adminhtml)
5. [Data Storage & Persistence Architecture](#-data-storage--persistence-architecture)
6. [SEO, PWA & Google Search Console](#-seo-pwa--google-search-console)
7. [Deployment & CI/CD Workflow](#-deployment--cicd-workflow)
8. [Local Development & Testing](#-local-development--testing)

---

## 🌟 Executive Overview

**Café & Restaurant Sushi Arij** is a high-performance web application designed for a premier dining venue located on Avenue Hssaine in Sala Al Jadida, Morocco. The platform combines an artisanal Japanese sushi bar experience with a contemporary Italian espresso café.

The system features:
- A progressive, mobile-responsive customer web application with zero commission WhatsApp order routing.
- A built-in Super Admin Management Portal providing full control over menu items, prices, drag-and-drop dish photos, order history, thermal kitchen ticket printing, table sticker QR codes, and promo coupons.

---

## 🛠️ Architecture & Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Logic** | Vanilla JavaScript (ES6+) | Lightweight, zero-dependency engine for fast load times (< 0.5s). |
| **Styling & UI** | Vanilla CSS3 | Custom design system featuring HSL color tokens, dark/light themes, glassmorphism, and responsive media queries. |
| **Internationalization** | `js/translations.js` | Full trilingual support (French, English, Arabic RTL). |
| **Admin Portal** | `admin.html` & `js/admin.js` | Single-Page Application (SPA) dashboard for store administration. |
| **Data Storage** | HTML5 `localStorage` | Client-side persistent JSON database with auto-seeding fallbacks. |
| **PWA & Offline** | Web Manifest & Service Worker | Cache-first asset preloader in `sw.js` for offline PWA installation. |
| **SEO & Meta** | Schema.org JSON-LD | Rich snippet metadata, OpenGraph cards, `robots.txt`, and `sitemap.xml`. |

---

## 🍣 Customer Frontend Features

### 1. Zero-Commission WhatsApp Checkout & Reservations
- **WhatsApp Cart Checkout**: Customers select items, pick order mode (*Sur Place*, *À Emporter*, *Livraison*), apply promo codes, and submit formatted orders to `+212 6 12 56 08 03`.
- **Table Reservation Modal**: Interactive booking form allowing guests to reserve tables (Terrace or Indoor) for specific dates and times.

### 2. Interactive Menu Showcase
- **Category Tabs**: Filter by *Sushi & Spécialités*, *Café & Boissons*, *Petit-Déjeuner*, *Plats & Poké Bowls*, and *Desserts*.
- **Search & Badge Filter**: Search by keyword or filter by *Sélection du Chef*, *Populaire*, and *Végétarien*.
- **Nutritional & Allergen Modal**: View estimated calories and detailed allergen warnings per dish.

### 3. Dynamic PDF Menu Downloader
- Clicking **"📥 Menu PDF"** opens a print-ready, 2-page restaurant menu card formatted with categories and prices in MAD for printing or saving as a PDF file.

### 4. Smart Pairing Helper ("Trouver Mon Duo")
- Interactive wizard recommending perfect combinations (e.g., *Dragon Roll + Expresso Italien*) based on customer mood.

### 5. Digital Loyalty Stamp Card
- Track virtual stamps toward earning free rewards (e.g., free Mochi or Cappuccino after 5 orders).

---

## 🔐 Super Admin Portal Guide (`admin.html`)

Access URL: **[https://sushiarij.app/admin.html](https://sushiarij.app/admin.html)**  
Default Password: **`arij2026`**

### Sidebar Navigation & Modules

#### 1. Vue d'ensemble (Financial Dashboard)
- Displays total revenue (MAD), order counts, average order value (AOV), active menu count, weekly sales bar charts, and top-selling dish rankings.

#### 2. Éditeur Contenu & Images du Site
- Live editing of restaurant name, subtitles, H1 hero headlines, hero subtext, and push notification banners.

#### 3. Commandes & Tickets (Searchable Order Log)
- **Filter & Search**: Search orders by customer name, phone number, or dish name; filter by status (*En attente*, *En préparation*, *Livré*, *Annulé*).
- **80mm Thermal Kitchen Ticket Printer**: 1-click browser printing formatted specifically for 80mm thermal receipt printers.
- **1-Click WhatsApp Status Reply**: Automatically open pre-formatted WhatsApp status messages to customer phones (*"Commande confirmée / En préparation"* or *"Commande prête / En livraison"*).
- **CSV Export**: Export order logs to CSV files.

#### 4. Gestion du Menu (CRUD & Drag-and-Drop Uploader)
- Add new dishes, edit price (MAD), edit titles in 3 languages (FR/EN/AR), set badges (*Chef*, *Popular*, *Veg*), update allergen warnings, and delete items.
- **Drag-and-Drop Image Uploader**: Drag image files directly onto the gold dropzone box to automatically convert images into Base64 URLs with live thumbnail previews.

#### 5. Éditeur Avantages & Avis
- Modify the 4 feature cards and Google Maps customer reviews live.

#### 6. Générateur QR Code Tables
- Generate and print custom table sticker QR codes for specific tables (*Table 1..20*, *Terrasse T1..T3*, *VIP Booth*).

#### 7. Codes Promo & Remises
- Create custom discount codes (e.g., `ARIJ10` for 10% off or `WELCOME` for 15 MAD off).

#### 8. Formules & Offres du Jour
- Modify daily combo specials (e.g., *Formule Café Matinal* and *Combo Sushi Duo*).

#### 9. Paramètres Système
- Update WhatsApp receiving phone number, override store status (*Auto*, *Force Open*, *Force Closed*), and change admin portal password.

---

## 💾 Data Storage & Persistence Architecture

The application operates without requiring an external backend database by utilizing a resilient HTML5 `localStorage` data store.

### Storage Keys Schema

| Key | Format | Description |
| :--- | :--- | :--- |
| `arij_custom_menu` | JSON Array | List of all menu item objects. If missing or empty, auto-seeds default 18 items. |
| `arij_orders` | JSON Array | Order history objects logged automatically when orders or reservations are submitted. |
| `arij_coupons` | JSON Array | Active discount codes. |
| `arij_brand_name` | String | Overridden restaurant name. |
| `arij_hero_title` | String | Overridden H1 hero title. |
| `arij_hero_subtext` | String | Overridden hero description. |
| `arij_whatsapp_phone` | String | Receiving WhatsApp phone number. |
| `arij_admin_password` | String | Custom admin password (default `arij2026`). |

---

## 🔍 SEO, PWA & Google Search Console

- **Domain Verification**: Includes `google2621dc2faddf2613.html` for Google Search Console verification.
- **Sitemap**: `sitemap.xml` listing main entry points for Googlebot crawling.
- **Robots Policy**: `robots.txt` allowing full indexing while protecting `admin.html`.
- **Structured Data**: Schema.org `Restaurant` JSON-LD snippet with geo-coordinates, rating, telephone, and opening hours.
- **PWA Service Worker**: `sw.js` pre-caching CSS, JavaScript, HTML, and high-resolution images for offline performance.

---

## 🚀 Deployment & CI/CD Workflow

The repository is linked directly from **GitHub (`AliBzd/sushi-arij`)** to **Netlify**:

```
Developer Workstation --> git push origin main --> GitHub Repo --> Netlify Build Hook --> Live at https://sushiarij.app/
```

### Git Command Workflow

```bash
# Add changes
git add .

# Commit
git commit -m "Describe updates"

# Push to trigger Netlify auto-deployment
git push origin main
```

---

## 🧪 Local Development & Testing

### Running Local HTTP Server

To test locally:

```bash
# Navigate to workspace
cd /home/ali/Bureau/Projects/Arij

# Start Python HTTP Server
python3 -m http.server 8080
```

- Customer Site: `http://localhost:8080`
- Admin Portal: `http://localhost:8080/admin.html`

---

*Documentation maintained for Café & Restaurant Sushi Arij.*
