# MOTORVAULT — Vehicle Sales Guide & Directory Portal

Tagline: **“Find Your Drive.”**

MOTORVAULT is a premium, modern, animation-focused automotive discovery and directory portal. It helps visitors explore vehicle categories, discover local dealerships, compare vehicle specifications side-by-side, read expert buying guides, and submit vehicle listings.

---

## 🛠️ Strict Technology Stack

* **HTML5**: Semantic document structure & accessibility markup.
* **CSS3**: Custom design system, CSS variables, flex/grid layouts, keyframe animations, zero horizontal scroll.
* **Vanilla JavaScript ES6+**: Data rendering, interactive filters, local storage favorites, vehicle comparison drawer, modals engine, checklist calculator, and form validation.
* **Bootstrap 5 (via CDN)**: Grid system & utility classes.
* **Google Fonts (via CDN)**: Space Grotesk (Headings) & Inter (Body & UI text).

*Zero heavy dependencies, no React/Vue/Tailwind/GSAP/jQuery/databases.*

---

## 📁 Project Structure

```text
motorvault/
├── index.html            # Homepage (7 Major Sections & Hero Search)
├── about.html            # About Page (6 Sections: Purpose, Pillars, Directory Specs)
├── vehicles.html         # Vehicles Directory (6 Sections: Search, Filters, Grid, Comparison)
├── dealerships.html      # Dealership Network (6 Sections: Location Search, Directory, Modals)
├── buying-guides.html    # Buying Guides Page (6 Sections: Articles & Interactive Checklist)
├── contact.html          # Contact Page (5 Sections: Form, Support, FAQ Accordion)
├── assets/
│   ├── css/
│   │   └── style.css     # Custom Design System & Responsive Styles
│   ├── js/
│   │   └── main.js       # Master Vanilla JS Application Logic
│   └── images/           # Photorealistic Automotive Photography & Fallbacks
└── README.md
```

---

## 🚀 How to Run Locally

1. Clone or download the project directory.
2. Open `index.html` directly in any standard Web Browser (Chrome, Firefox, Edge, Safari).
3. Alternatively, serve using a lightweight static HTTP server:
   ```bash
   npx serve motorvault
   # or
   python -m http.server 8000 --directory motorvault
   ```
4. Navigate between all 6 fully functional pages.

---

## 🌟 Key Features

* **Cinematic Automotive Hero**: Full-screen scaled vehicle hero with uppercase branding, line animations, and bottom multi-parameter search bar.
* **Strict Mobile Navigation (<992px)**: Clean mobile header displaying ONLY brand title and hamburger toggle button. Opens a full-screen dark overlay menu with numbered links and smooth stagger reveals.
* **Interactive Vehicle Filtering**: Filter sample inventory by category, fuel type, location (Bengaluru, Chennai, Coimbatore, Hyderabad, Kochi), or search terms without page reloads.
* **Side-by-Side Comparison Engine**: Pin up to 3 vehicles to a sticky bottom comparison drawer with a responsive spec comparison matrix.
* **Local Favorites System**: Save favorite vehicles with persistent `localStorage` support.
* **Interactive Inspection Checklist**: Real-time progress bar calculation on `buying-guides.html` for pre-owned car inspections.
* **Accessible Modals Engine**: Keyboard operable (Esc key close, trap scroll, backdrop click) modals for vehicle specs, dealer profiles, articles, and listing submissions.
* **Zero Horizontal Overflow**: Carefully constrained containers with flex & grid max-widths guaranteeing flawless rendering from 320px up to 1920px+.

---

## 📜 Disclaimer
MOTORVAULT is a frontend demonstration portal built using local JavaScript data arrays. It does not connect to live backend databases or external inventory APIs.
