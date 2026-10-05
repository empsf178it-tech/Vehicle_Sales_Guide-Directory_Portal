/* ==========================================================================
   MOTORVAULT — VEHICLE SALES GUIDE & DIRECTORY PORTAL
   Master Vanilla JavaScript ES6+ Architecture
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Systems
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initHeroAnimations();
  initStudioCustomizer();
  initEMICalculator();
  initBackToTop();
  initFAQAccordion();
  initChecklist();
  initFavorites();
  initComparison();
  initModals();
  initForms();

  // Page Specific Inits
  if (document.getElementById('featuredVehiclesContainer')) renderFeaturedVehicles();
  if (document.getElementById('vehiclesGridContainer')) renderVehiclesPage();
  if (document.getElementById('dealershipsGridContainer')) renderDealershipsPage();
  if (document.getElementById('guidesGridContainer')) renderGuidesPage();
  if (document.getElementById('locationSearchBtn')) initLocationSearch();
});

/* ==========================================
   1. SAMPLE DATASTORE (Local JavaScript Data)
   ========================================== */
const SAMPLE_VEHICLES = [
  {
    id: 'v1',
    make: 'BMW',
    model: '3 Series 330i M Sport',
    year: 2024,
    price: '$45,900',
    priceVal: 45900,
    category: 'Cars',
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: '12,500 km',
    location: 'Bengaluru',
    image: 'assets/images/1.jpg',
    badge: 'Featured',
    seller: 'Apex Motors Bengaluru',
    sellerType: 'Verified Dealer',
    rating: 4.9,
    description: 'Immaculate 2024 BMW 3 Series M Sport. Full service record, panoramic sunroof, digital cockpit, and Harman Kardon audio system.'
  },
  {
    id: 'v2',
    make: 'Mercedes-Benz',
    model: 'C-Class C200 AMG Line',
    year: 2023,
    price: '$48,200',
    priceVal: 48200,
    category: 'Cars',
    fuel: 'Hybrid',
    transmission: 'Automatic',
    mileage: '18,200 km',
    location: 'Chennai',
    image: 'assets/images/2.jpg',
    badge: 'Popular',
    seller: 'Star Automotive Chennai',
    sellerType: 'Premier Dealer',
    rating: 4.8,
    description: 'Sleek Obsidian Black C-Class with beige leather interior, ambient lighting, head-up display, and driver assistance package.'
  },
  {
    id: 'v3',
    make: 'Hyundai',
    model: 'Creta SX (O) Turbo DCT',
    year: 2024,
    price: '$21,500',
    priceVal: 21500,
    category: 'SUVs',
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: '5,100 km',
    location: 'Coimbatore',
    image: 'assets/images/3.jpg',
    badge: 'Trending',
    seller: 'Kongu Motors Coimbatore',
    sellerType: 'Verified Dealer',
    rating: 4.7,
    description: 'Top-spec Hyundai Creta with ventilated seats, ADAS Level 2 safety features, 360-degree camera, and Bose 8-speaker audio.'
  },
  {
    id: 'v4',
    make: 'Toyota',
    model: 'Fortuner Legender 4x4',
    year: 2023,
    price: '$52,000',
    priceVal: 52000,
    category: 'SUVs',
    fuel: 'Diesel',
    transmission: 'Automatic',
    mileage: '24,000 km',
    location: 'Hyderabad',
    image: 'assets/images/4.jpg',
    badge: 'Top Rated',
    seller: 'Deccan Luxury Auto',
    sellerType: 'Premium Seller',
    rating: 4.9,
    description: 'Rugged yet ultra-refined Fortuner Legender. Dual-tone roof, sequential turn indicators, JBL speakers, and 4WD terrain response.'
  },
  {
    id: 'v5',
    make: 'Tata',
    model: 'Nexon EV Max Empowered+',
    year: 2024,
    price: '$24,800',
    priceVal: 24800,
    category: 'Electric Vehicles',
    fuel: 'Electric',
    transmission: 'Automatic',
    mileage: '8,400 km',
    location: 'Kochi',
    image: 'assets/images/5.jpg',
    badge: 'EV Green',
    seller: 'Kerala EV Hub',
    sellerType: 'Certified EV Dealer',
    rating: 4.8,
    description: 'Long-range Electric SUV offering 453 km claimed range, wireless charger, electronic parking brake, and fast-charging support.'
  },
  {
    id: 'v6',
    make: 'Honda',
    model: 'City e:HEV ZX Hybrid',
    year: 2023,
    price: '$22,900',
    priceVal: 22900,
    category: 'Cars',
    fuel: 'Hybrid',
    transmission: 'e-CVT',
    mileage: '15,000 km',
    location: 'Bengaluru',
    image: 'assets/images/6.jpg',
    badge: 'Best Value',
    seller: 'Silicon Auto Bengaluru',
    sellerType: 'Verified Dealer',
    rating: 4.6,
    description: 'Self-charging hybrid sedan with outstanding fuel efficiency, Honda Sensing ADAS, lane watch camera, and sunroof.'
  },
  {
    id: 'v7',
    make: 'Ducati',
    model: 'Panigale V4 S',
    year: 2023,
    price: '$29,500',
    priceVal: 29500,
    category: 'Motorcycles',
    fuel: 'Petrol',
    transmission: 'Manual 6-Speed',
    mileage: '3,800 km',
    location: 'Chennai',
    image: 'assets/images/7.jpg',
    badge: 'Superbike',
    seller: 'Superbike Garage Chennai',
    sellerType: 'Specialist Seller',
    rating: 4.9,
    description: 'Pure Italian racing pedigree. Öhlins electronic suspension, Marchesini forged wheels, titanium Akrapovič exhaust system.'
  },
  {
    id: 'v8',
    make: 'Volvo',
    model: 'FH16 Commercial Truck 600HP',
    year: 2022,
    price: '$89,000',
    priceVal: 89000,
    category: 'Commercial Vehicles',
    fuel: 'Diesel',
    transmission: 'I-Shift Automatic',
    mileage: '65,000 km',
    location: 'Hyderabad',
    image: 'assets/images/8.jpg',
    badge: 'Heavy Commercial',
    seller: 'Deccan Commercial Fleets',
    sellerType: 'Fleet Supplier',
    rating: 4.7,
    description: 'Heavy duty commercial hauler built for extreme durability, globetrotter sleeper cabin, adaptive cruise control, and air suspension.'
  },
  {
    id: 'v9',
    make: 'Porsche',
    model: 'Taycan Turbo S Electric',
    year: 2024,
    price: '$185,000',
    priceVal: 185000,
    category: 'Electric Vehicles',
    fuel: 'Electric',
    transmission: '2-Speed Automatic',
    mileage: '4,200 km',
    location: 'Bengaluru',
    image: 'assets/images/9.jpg',
    badge: 'Hyper EV',
    seller: 'Apex Motors Bengaluru',
    sellerType: 'Premier Dealer',
    rating: 5.0,
    description: 'Blistering 750 HP electric performance sedan with launch control, 800V architecture, carbon ceramic brakes, and Porsche Active Ride suspension.'
  }
];

const SAMPLE_DEALERSHIPS = [
  {
    id: 'd1',
    name: 'Apex Luxury Motors',
    city: 'Bengaluru',
    address: '100 Feet Road, Indiranagar, Bengaluru',
    rating: 4.9,
    reviews: 142,
    categories: ['New Vehicles', 'Luxury Vehicles', 'Cars'],
    image: 'assets/images/10.jpg',
    phone: '+91 80 4920 1100',
    email: 'contact@apexmotors.demo',
    listings: 28,
    description: 'Premier destination for luxury performance sedans and SUVs in South India. Certified pre-owned and multi-point vehicle checks.'
  },
  {
    id: 'd2',
    name: 'Star Automotive Showroom',
    city: 'Chennai',
    address: 'Mount Road, Anna Salai, Chennai',
    rating: 4.8,
    reviews: 98,
    categories: ['New Vehicles', 'Used Vehicles', 'EVs'],
    image: 'assets/images/11.jpg',
    phone: '+91 44 2855 0011',
    email: 'sales@starauto.demo',
    listings: 34,
    description: 'Trusted automotive dealership with over 15 years of experience in multi-brand retail, trade-ins, and financing assistance.'
  },
  {
    id: 'd3',
    name: 'Kerala EV & Green Drive Hub',
    city: 'Kochi',
    address: 'MG Road, Ernakulam, Kochi',
    rating: 4.9,
    reviews: 76,
    categories: ['Electric Vehicles', 'New Vehicles'],
    image: 'assets/images/12.jpg',
    phone: '+91 484 2380 990',
    email: 'info@keralaev.demo',
    listings: 19,
    description: 'Exclusive electric mobility experience center providing high-voltage EV sales, wallbox charger installs, and battery diagnostics.'
  }
];

const SAMPLE_GUIDES = [
  {
    id: 'g1',
    title: 'Your First Car: What to Consider Before Buying',
    category: 'First-Time Buyers',
    readTime: '6 min read',
    summary: 'A comprehensive guide detailing budget allocation, fuel choices, safety features, and insurance costs for first-time car buyers.',
    image: 'assets/images/13.jpg',
    content: `
      <h3>1. Setting a Realistic Total Budget</h3>
      <p>When purchasing your first vehicle, remember that the sticker price is only part of the investment. Allocate 15-20% of your total budget to insurance, initial registration fees, and routine maintenance reserves.</p>
      <h3>2. Choosing the Right Powertrain</h3>
      <p>If your daily commute is under 30 km, a petrol or hybrid vehicle is usually ideal. For long-distance highway travel exceeding 1,000 km per month, diesel or electric options present superior long-term economics.</p>
      <h3>3. Prioritizing Safety Specifications</h3>
      <p>Ensure your chosen vehicle includes standard safety features: minimum 6 airbags, ABS with EBD, electronic stability control (ESC), and ISOFIX child seat anchors.</p>
    `
  },
  {
    id: 'g2',
    title: 'The Essential Used Vehicle Inspection Checklist',
    category: 'Used Vehicle Checks',
    readTime: '8 min read',
    summary: 'Learn how to inspect paint alignment, engine oil clarity, tire wear patterns, and mechanical service logs like a professional evaluator.',
    image: 'assets/images/14.jpg',
    content: `
      <h3>1. Exterior Panel and Frame Alignment</h3>
      <p>Inspect panel gaps around doors, hood, and trunk. Inconsistent gaps often indicate prior collision repairs. Look for paint overspray on rubber seals.</p>
      <h3>2. Under-the-Hood Diagnostic Checks</h3>
      <p>Check the oil dipstick for dark, sludge-like buildup or milky residue (which suggests coolant contamination and head gasket issues).</p>
      <h3>3. Test Drive Dynamics</h3>
      <p>Drive over moderate bumps to test damper bounce. Accelerate hard to verify smooth transmission gear shifts without slippage or hesitation.</p>
    `
  },
  {
    id: 'g3',
    title: 'Electric vs. Petrol: Understanding Total Cost of Ownership',
    category: 'Electric Vehicles',
    readTime: '7 min read',
    summary: 'Compare upfront price premiums against long-term fuel savings, battery degradation curves, and state EV subsidies.',
    image: 'assets/images/15.jpg',
    content: `
      <h3>1. Energy Cost Comparison per 100 km</h3>
      <p>At current energy tariffs, driving an EV costs approximately \$1.50 - \$2.00 per 100 km compared to \$8.00 - \$12.00 for an equivalent petrol sedan.</p>
      <h3>2. Battery Life & Maintenance Overhead</h3>
      <p>EVs eliminate oil changes, spark plugs, and complex transmission flushes. Modern liquid-cooled battery packs retain 80%+ capacity beyond 200,000 km.</p>
    `
  }
];

/* ==========================================
   2. NAVBAR & MOBILE OVERLAY MENU
   ========================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar-mv');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.remove('navbar-transparent');
      navbar.classList.add('navbar-solid');
    } else {
      if (document.body.classList.contains('is-homepage')) {
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('navbar-solid');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenuOverlay');
  if (!hamburgerBtn || !mobileMenu) return;

  // 1. Inject drawer header (brand logo + X close button)
  if (!mobileMenu.querySelector('.mobile-menu-header')) {
    const header = document.createElement('div');
    header.className = 'mobile-menu-header';
    const siteLogo = document.querySelector('.navbar-mv .brand-logo') || document.querySelector('.brand-logo');
    if (siteLogo) {
      const logoClone = siteLogo.cloneNode(true);
      logoClone.removeAttribute('id');
      header.appendChild(logoClone);
    }
    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'mobile-menu-close';
    closeBtn.id = 'mobileMenuClose';
    closeBtn.setAttribute('aria-label', 'Close navigation menu');
    closeBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>';
    header.appendChild(closeBtn);
    mobileMenu.insertBefore(header, mobileMenu.firstChild);
  }

  // 2. Inject dimmed backdrop (click outside to close)
  let backdrop = document.getElementById('mobileMenuBackdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'mobile-menu-backdrop';
    backdrop.id = 'mobileMenuBackdrop';
    mobileMenu.parentNode.insertBefore(backdrop, mobileMenu);
  }

  // 3. Style "List Your Vehicle" as a CTA button
  mobileMenu.querySelectorAll('.open-list-vehicle-modal').forEach(cta => {
    cta.classList.add('mobile-cta-btn');
    cta.removeAttribute('style');
  });

  const setMenu = (open) => {
    hamburgerBtn.classList.toggle('active', open);
    mobileMenu.classList.toggle('active', open);
    backdrop.classList.toggle('active', open);
    document.body.classList.toggle('menu-open', open);
    hamburgerBtn.setAttribute('aria-expanded', open);
  };
  const toggleMenu = () => setMenu(!mobileMenu.classList.contains('active'));

  hamburgerBtn.addEventListener('click', toggleMenu);
  mobileMenu.querySelector('.mobile-menu-close').addEventListener('click', () => setMenu(false));
  backdrop.addEventListener('click', () => setMenu(false));

  // Close menu when clicking navigation links inside drawer
  mobileMenu.querySelectorAll('.mobile-menu-nav a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
  });

  // ESC key handler
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      setMenu(false);
    }
  });

  // Auto-close if resized to desktop (> 1024px)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && mobileMenu.classList.contains('active')) setMenu(false);
  });
}

/* ==========================================
   3. ANIMATIONS & SCROLL OBSERVER
   ========================================== */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.05,
    rootMargin: '50px 0px 0px 0px'
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('reveal-visible');
    } else {
      observer.observe(el);
    }
  });

  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    setTimeout(() => heroSection.classList.add('loaded'), 100);
  }
}

function initHeroAnimations() {
  const wheelSvg = document.querySelector('.steering-wheel-svg');
  const heroBg = document.getElementById('heroBgImg');
  const scrollIndicator = document.getElementById('heroScrollIndicator');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight * 1.5) {
      if (wheelSvg) {
        wheelSvg.style.transform = `rotate(${scrollY * 0.45}deg)`;
      }
      if (heroBg) {
        heroBg.style.transform = `translateY(${scrollY * 0.25}px) scale(${1.02 + scrollY * 0.0003})`;
      }
    }
  }, { passive: true });

  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const heroSection = document.getElementById('heroSection');
      if (heroSection) {
        const targetY = heroSection.offsetTop + heroSection.offsetHeight - 40;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    });
  }

  // Web Audio API V8 Engine Sound FX Synth
  const soundBtn = document.getElementById('engineSoundToggle');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      soundBtn.classList.add('playing');
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(70, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(380, ctx.currentTime + 0.4);
          osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 1.2);

          gain.gain.setValueAtTime(0.15, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 0.4);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start();
          osc.stop(ctx.currentTime + 1.25);
        }
      } catch (e) {}

      setTimeout(() => soundBtn.classList.remove('playing'), 1250);
    });
  }

  // Speedometer Needle HUD Oscillation
  const needle = document.getElementById('hudNeedle');
  const speedVal = document.getElementById('hudSpeedVal');
  if (needle && speedVal) {
    let speed = 280;
    setInterval(() => {
      const delta = Math.floor(Math.random() * 9) - 4;
      speed = Math.min(320, Math.max(260, speed + delta));
      const rot = ((speed - 200) / 120) * 120 - 40;
      needle.style.transform = `rotate(${rot}deg)`;
      speedVal.innerHTML = `${speed} <small style="font-size:0.65rem; color:var(--racing-orange);">KM/H</small>`;
    }, 1800);
  }
}

function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================
   4. FAVORITES SYSTEM (localStorage)
   ========================================== */
function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem('motorvault_favs') || '[]');
  } catch (e) {
    return [];
  }
}

function initFavorites() {
  document.addEventListener('click', (e) => {
    const favBtn = e.target.closest('.favorite-btn');
    if (!favBtn) return;

    const id = favBtn.dataset.id;
    let favs = getFavorites();

    if (favs.includes(id)) {
      favs = favs.filter(item => item !== id);
      favBtn.classList.remove('active');
    } else {
      favs.push(id);
      favBtn.classList.add('active');
    }

    localStorage.setItem('motorvault_favs', JSON.stringify(favs));
  });
}

/* ==========================================
   5. COMPARISON SYSTEM (up to 3 vehicles)
   ========================================== */
let selectedComparison = [];

function initComparison() {
  const drawer = document.getElementById('comparisonDrawer');
  if (!drawer) return;

  document.addEventListener('click', (e) => {
    const compBtn = e.target.closest('.compare-btn-toggle');
    if (!compBtn) return;

    const id = compBtn.dataset.id;
    if (selectedComparison.includes(id)) {
      selectedComparison = selectedComparison.filter(item => item !== id);
      compBtn.classList.remove('active');
      compBtn.innerText = 'Compare';
    } else {
      if (selectedComparison.length >= 3) {
        alert('You can compare up to 3 vehicles at a time.');
        return;
      }
      selectedComparison.push(id);
      compBtn.classList.add('active');
      compBtn.innerText = 'Added';
    }

    renderComparisonTable();
  });

  const clearBtn = document.getElementById('clearComparisonBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      selectedComparison = [];
      renderComparisonTable();
      document.querySelectorAll('.compare-btn-toggle').forEach(btn => {
        btn.classList.remove('active');
        btn.innerText = 'Compare';
      });
    });
  }
}

function renderComparisonTable() {
  const drawer = document.getElementById('comparisonDrawer');
  const tableBody = document.getElementById('comparisonTableBody');
  if (!drawer || !tableBody) return;

  if (selectedComparison.length === 0) {
    drawer.classList.remove('active');
    return;
  }

  drawer.classList.add('active');
  const vehicles = SAMPLE_VEHICLES.filter(v => selectedComparison.includes(v.id));

  let html = `
    <tr>
      <th>Feature</th>
      ${vehicles.map(v => `<th><strong>${v.make} ${v.model}</strong></th>`).join('')}
    </tr>
    <tr>
      <td>Price</td>
      ${vehicles.map(v => `<td><strong style="color:var(--racing-orange);">${v.price}</strong></td>`).join('')}
    </tr>
    <tr>
      <td>Year</td>
      ${vehicles.map(v => `<td>${v.year}</td>`).join('')}
    </tr>
    <tr>
      <td>Category</td>
      ${vehicles.map(v => `<td>${v.category}</td>`).join('')}
    </tr>
    <tr>
      <td>Fuel Type</td>
      ${vehicles.map(v => `<td>${v.fuel}</td>`).join('')}
    </tr>
    <tr>
      <td>Transmission</td>
      ${vehicles.map(v => `<td>${v.transmission}</td>`).join('')}
    </tr>
    <tr>
      <td>Mileage</td>
      ${vehicles.map(v => `<td>${v.mileage}</td>`).join('')}
    </tr>
  `;

  tableBody.innerHTML = html;
}

/* ==========================================
   6. RENDERERS & RENDERING ENGINE
   ========================================== */
function createVehicleCard(v) {
  const isFav = getFavorites().includes(v.id);
  const isComp = selectedComparison.includes(v.id);

  return `
    <article class="vehicle-card reveal">
      <div class="vehicle-card-img-wrap">
        <img src="${v.image}" alt="${v.make} ${v.model}" class="vehicle-card-img" loading="lazy">
        <button class="favorite-btn ${isFav ? 'active' : ''}" data-id="${v.id}" aria-label="Save vehicle">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </button>
        <span class="vehicle-badge">${v.badge}</span>
      </div>
      <div class="vehicle-card-body">
        <h3 class="vehicle-title">${v.make} ${v.model}</h3>
        <div class="vehicle-price">${v.price}</div>
        <div class="vehicle-specs">
          <div class="spec-item">
            <span class="spec-label">Year</span>
            <span class="spec-val">${v.year}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Fuel</span>
            <span class="spec-val">${v.fuel}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Transmission</span>
            <span class="spec-val">${v.transmission}</span>
          </div>
        </div>
        <div class="vehicle-card-footer">
          <div class="location-info">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${v.location}
          </div>
          <div style="display:flex; gap:0.5rem;">
            <button class="btn-mv btn-dark-outline btn-sm compare-btn-toggle ${isComp ? 'active' : ''}" data-id="${v.id}">
              ${isComp ? 'Added' : 'Compare'}
            </button>
            <button class="btn-mv btn-primary-mv btn-sm view-details-btn" data-id="${v.id}">
              Details
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderFeaturedVehicles() {
  const container = document.getElementById('featuredVehiclesContainer');
  if (!container) return;
  const list = SAMPLE_VEHICLES.slice(0, 6);
  container.innerHTML = list.map(v => createVehicleCard(v)).join('');
  initScrollAnimations();
}

function renderVehiclesPage() {
  const container = document.getElementById('vehiclesGridContainer');
  const countEl = document.getElementById('resultsCount');
  if (!container) return;

  const categoryFilter = document.getElementById('filterCategory') ? document.getElementById('filterCategory').value : 'All';
  const fuelFilter = document.getElementById('filterFuel') ? document.getElementById('filterFuel').value : 'All';
  const keyword = document.getElementById('filterKeyword') ? document.getElementById('filterKeyword').value.toLowerCase() : '';

  let filtered = SAMPLE_VEHICLES.filter(v => {
    const matchCat = categoryFilter === 'All' || v.category === categoryFilter;
    const matchFuel = fuelFilter === 'All' || v.fuel === fuelFilter;
    const matchKey = !keyword || (v.make + ' ' + v.model + ' ' + v.location).toLowerCase().includes(keyword);
    return matchCat && matchFuel && matchKey;
  });

  if (countEl) countEl.innerText = `${filtered.length} Vehicles Found`;
  container.innerHTML = filtered.length > 0 ? filtered.map(v => createVehicleCard(v)).join('') : '<p style="grid-column:1/-1; padding:3rem; text-align:center; color:var(--steel-gray);">No vehicles match your selected search criteria.</p>';
  initScrollAnimations();
}

function renderDealershipsPage() {
  const container = document.getElementById('dealershipsGridContainer');
  if (!container) return;

  container.innerHTML = SAMPLE_DEALERSHIPS.map(d => `
    <article class="dealer-card reveal">
      <div class="dealer-header">
        <img src="${d.image}" alt="${d.name}" class="dealer-avatar" loading="lazy">
        <div class="dealer-info">
          <h3>${d.name}</h3>
          <p style="font-size:0.8125rem; color:var(--steel-gray);">${d.city}</p>
        </div>
      </div>
      <div style="margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem;">
        <span class="rating-badge">★ ${d.rating}</span>
        <span style="font-size:0.8125rem; color:var(--steel-gray);">(${d.reviews} reviews)</span>
        <span style="font-size:0.8125rem; color:var(--racing-orange); margin-left:auto;">${d.listings} Listings</span>
      </div>
      <p style="font-size:0.875rem; color:var(--steel-gray); margin-bottom:1.5rem; flex-grow:1;">${d.description}</p>
      <button class="btn-mv btn-secondary-mv btn-sm view-dealer-modal-btn" data-id="${d.id}">
        View Dealership Profile
      </button>
    </article>
  `).join('');
  initScrollAnimations();
}

function renderGuidesPage() {
  const container = document.getElementById('guidesGridContainer');
  if (!container) return;

  container.innerHTML = SAMPLE_GUIDES.map(g => `
    <article class="guide-card reveal">
      <img src="${g.image}" alt="${g.title}" class="guide-card-img" loading="lazy">
      <div class="guide-card-body">
        <div class="guide-meta">
          <span class="text-technical">${g.category}</span>
          <span style="color:var(--steel-gray);">${g.readTime}</span>
        </div>
        <h3 class="heading-sm" style="margin-bottom:0.75rem;">${g.title}</h3>
        <p style="font-size:0.875rem; color:var(--steel-gray); margin-bottom:1.5rem; flex-grow:1;">${g.summary}</p>
        <button class="btn-mv btn-dark-outline btn-sm view-guide-btn" data-id="${g.id}">
          Read Full Guide
        </button>
      </div>
    </article>
  `).join('');
  initScrollAnimations();
}

function initLocationSearch() {
  const btn = document.getElementById('locationSearchBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const citySelect = document.getElementById('locationCitySelect');
    const selectedCity = citySelect ? citySelect.value : 'Bengaluru';
    const resultsContainer = document.getElementById('locationResultsContainer');
    
    if (resultsContainer) {
      const filtered = SAMPLE_VEHICLES.filter(v => v.location === selectedCity);
      resultsContainer.innerHTML = filtered.length > 0 ? filtered.map(v => createVehicleCard(v)).join('') : `<p style="padding:2rem; text-align:center; color:var(--steel-gray);">No listings found in ${selectedCity} at this moment.</p>`;
      initScrollAnimations();
    }
  });
}

/* ==========================================
   7. MODAL CONTROL ENGINE
   ========================================== */
function initModals() {
  document.addEventListener('click', (e) => {
    // Open Vehicle Modal
    const viewVehicleBtn = e.target.closest('.view-details-btn');
    if (viewVehicleBtn) {
      const id = viewVehicleBtn.dataset.id;
      const vehicle = SAMPLE_VEHICLES.find(v => v.id === id);
      if (vehicle) openVehicleModal(vehicle);
    }

    // Open Dealer Modal
    const viewDealerBtn = e.target.closest('.view-dealer-modal-btn');
    if (viewDealerBtn) {
      const id = viewDealerBtn.dataset.id;
      const dealer = SAMPLE_DEALERSHIPS.find(d => d.id === id);
      if (dealer) openDealerModal(dealer);
    }

    // Open Guide Modal
    const viewGuideBtn = e.target.closest('.view-guide-btn');
    if (viewGuideBtn) {
      const id = viewGuideBtn.dataset.id;
      const guide = SAMPLE_GUIDES.find(g => g.id === id);
      if (guide) openGuideModal(guide);
    }

    // Open Listing Submission Modal
    const listVehicleBtn = e.target.closest('.open-list-vehicle-modal');
    if (listVehicleBtn) {
      openModalById('submitListingModal');
    }

    // Close buttons or backdrops
    if (e.target.closest('.modal-close-btn') || e.target.classList.contains('modal-backdrop-mv')) {
      closeAllModals();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });
}

function openModalById(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('active');
  document.body.classList.add('modal-open');
}

function closeAllModals() {
  document.querySelectorAll('.modal-mv').forEach(m => m.classList.remove('active'));
  document.body.classList.remove('modal-open');
}

function openVehicleModal(v) {
  const body = document.getElementById('vehicleModalBody');
  if (!body) return;

  body.innerHTML = `
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:2rem;">
      <div>
        <img src="${v.image}" alt="${v.make} ${v.model}" style="width:100%; border-radius:4px; margin-bottom:1rem;" loading="lazy">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="text-technical">${v.category}</span>
          <span style="font-family:var(--font-heading); font-size:1.5rem; font-weight:800; color:var(--racing-orange);">${v.price}</span>
        </div>
      </div>
      <div>
        <h2 class="heading-sm" style="margin-bottom:0.5rem;">${v.make} ${v.model}</h2>
        <p style="font-size:0.875rem; color:var(--steel-gray); margin-bottom:1.5rem;">Seller: <strong>${v.seller}</strong> (${v.sellerType})</p>
        
        <div class="vehicle-specs" style="margin-bottom:1.5rem;">
          <div class="spec-item"><span class="spec-label">Year</span><span class="spec-val">${v.year}</span></div>
          <div class="spec-item"><span class="spec-label">Fuel</span><span class="spec-val">${v.fuel}</span></div>
          <div class="spec-item"><span class="spec-label">Trans.</span><span class="spec-val">${v.transmission}</span></div>
          <div class="spec-item"><span class="spec-label">Mileage</span><span class="spec-val">${v.mileage}</span></div>
          <div class="spec-item"><span class="spec-label">Location</span><span class="spec-val">${v.location}</span></div>
          <div class="spec-item"><span class="spec-label">Rating</span><span class="spec-val">★ ${v.rating}</span></div>
        </div>

        <p style="font-size:0.9375rem; color:var(--text-dark); margin-bottom:1.5rem; line-height:1.6;">${v.description}</p>
        
        <form class="demo-form" onsubmit="handleInquirySubmit(event)">
          <h4 style="font-size:0.9375rem; margin-bottom:0.75rem;">Inquire About This Vehicle</h4>
          <input type="text" class="form-control-mv" placeholder="Your Name" required style="margin-bottom:0.5rem;">
          <input type="email" class="form-control-mv" placeholder="Your Email" required style="margin-bottom:0.75rem;">
          <button type="submit" class="btn-mv btn-primary-mv" style="width:100%;">Send Seller Inquiry</button>
        </form>
      </div>
    </div>
  `;

  openModalById('vehicleModal');
}

function openDealerModal(d) {
  const body = document.getElementById('dealerModalBody');
  if (!body) return;

  body.innerHTML = `
    <div style="display:flex; align-items:center; gap:1.5rem; margin-bottom:1.5rem;">
      <img src="${d.image}" alt="${d.name}" style="width:80px; height:80px; border-radius:4px; object-fit:cover;">
      <div>
        <h2 class="heading-sm">${d.name}</h2>
        <p style="color:var(--steel-gray); font-size:0.875rem;">${d.address}</p>
        <span class="rating-badge" style="margin-top:0.35rem;">★ ${d.rating} (${d.reviews} Customer Reviews)</span>
      </div>
    </div>
    <p style="margin-bottom:1.5rem; font-size:0.9375rem; line-height:1.6; color:var(--text-dark);">${d.description}</p>
    <div style="padding:1rem; background:var(--warm-white); border-radius:4px; margin-bottom:1.5rem;">
      <h4 style="font-size:0.875rem; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:0.5rem; color:var(--steel-gray);">Dealer Contact Details</h4>
      <p style="font-size:0.875rem;">Phone: <strong>${d.phone}</strong> | Email: <strong>${d.email}</strong></p>
    </div>
    <button onclick="closeAllModals()" class="btn-mv btn-dark-outline" style="width:100%;">Close Profile</button>
  `;

  openModalById('dealerModal');
}

function openGuideModal(g) {
  const body = document.getElementById('guideModalBody');
  if (!body) return;

  body.innerHTML = `
    <img src="${g.image}" alt="${g.title}" style="width:100%; height:260px; object-fit:cover; border-radius:4px; margin-bottom:1.5rem;">
    <div style="display:flex; gap:1rem; align-items:center; margin-bottom:0.75rem;">
      <span class="text-technical">${g.category}</span>
      <span style="font-size:0.8125rem; color:var(--steel-gray);">${g.readTime}</span>
    </div>
    <h2 class="heading-md" style="margin-bottom:1rem;">${g.title}</h2>
    <div style="font-size:0.9375rem; line-height:1.8; color:var(--text-dark);">${g.content}</div>
  `;

  openModalById('guideModal');
}

/* ==========================================
   8. CHECKLIST & FAQ ACCORDION
   ========================================== */
function initChecklist() {
  const checkboxes = document.querySelectorAll('.custom-checkbox');
  const fill = document.getElementById('checklistProgressFill');
  const countText = document.getElementById('checklistProgressText');

  if (checkboxes.length === 0 || !fill) return;

  const updateProgress = () => {
    const total = checkboxes.length;
    let checkedCount = 0;

    checkboxes.forEach(cb => {
      const item = cb.closest('.checklist-item');
      if (cb.checked) {
        checkedCount++;
        if (item) item.classList.add('checked');
      } else {
        if (item) item.classList.remove('checked');
      }
    });

    const pct = Math.round((checkedCount / total) * 100);
    fill.style.width = `${pct}%`;
    if (countText) countText.innerText = `${checkedCount} of ${total} Completed (${pct}%)`;
  };

  checkboxes.forEach(cb => cb.addEventListener('change', updateProgress));
  updateProgress();
}

function initFAQAccordion() {
  document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================
   9. FORM VALIDATION & HANDLERS
   ========================================== */
function initForms() {
  const listingForm = document.getElementById('listingSubmissionForm');
  if (listingForm) {
    listingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your vehicle listing has been prepared as a frontend demonstration and will not be published to a live database.');
      listingForm.reset();
      closeAllModals();
    });
  }

  const contactForm = document.getElementById('contactPageForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.getElementById('contactFormFeedback');
      if (feedback) {
        feedback.style.display = 'block';
        feedback.className = 'alert alert-success';
        feedback.innerText = 'Message sent! This is a frontend demonstration; no email was actually transmitted.';
      }
      contactForm.reset();
    });
  }
}

function handleInquirySubmit(e) {
  e.preventDefault();
  alert('Inquiry sent! Thank you for using the MOTORVAULT demonstration portal.');
  closeAllModals();
}

/* ==========================================
   10. INTERACTIVE STUDIO & FINANCING CALCULATOR
   ========================================== */
function initStudioCustomizer() {
  const swatchBtns = document.querySelectorAll('.color-swatch-btn');
  const overlay = document.getElementById('studioOverlay');
  const badge = document.getElementById('studioColorBadge');
  if (!swatchBtns.length || !overlay) return;

  const colorMap = {
    orange: { bg: 'rgba(231, 111, 50, 0.45)', opacity: 0.8 },
    black: { bg: 'rgba(10, 10, 10, 0.65)', opacity: 0.85 },
    white: { bg: 'rgba(255, 255, 255, 0.35)', opacity: 0.6 },
    blue: { bg: 'rgba(30, 80, 162, 0.45)', opacity: 0.8 },
    silver: { bg: 'rgba(160, 165, 170, 0.4)', opacity: 0.7 }
  };

  swatchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      swatchBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const colorKey = btn.dataset.color;
      const colorName = btn.dataset.name;

      if (colorMap[colorKey]) {
        overlay.style.backgroundColor = colorMap[colorKey].bg;
        overlay.style.opacity = colorMap[colorKey].opacity;
      }
      if (badge) badge.innerText = `Paint: ${colorName}`;
    });
  });
}

function initEMICalculator() {
  const inputPrice = document.getElementById('inputPrice');
  const inputDown = document.getElementById('inputDown');
  const inputTerm = document.getElementById('inputTerm');
  const inputInterest = document.getElementById('inputInterest');

  if (!inputPrice || !inputDown || !inputTerm || !inputInterest) return;

  const displayPrice = document.getElementById('displayPrice');
  const displayDown = document.getElementById('displayDown');
  const monthlyResult = document.getElementById('monthlyResult');
  const principalResult = document.getElementById('principalResult');
  const interestResult = document.getElementById('interestResult');

  const calculate = () => {
    const P_total = parseFloat(inputPrice.value) || 45900;
    const D = parseFloat(inputDown.value) || 10000;
    const P = Math.max(0, P_total - D);
    const months = parseInt(inputTerm.value) || 48;
    const annualRate = parseFloat(inputInterest.value) || 6.5;
    const r = (annualRate / 100) / 12;

    if (displayPrice) displayPrice.innerText = `$${P_total.toLocaleString()}`;
    if (displayDown) displayDown.innerText = `$${D.toLocaleString()}`;

    let monthly = 0;
    if (r > 0) {
      monthly = (P * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
    } else {
      monthly = P / months;
    }

    const totalPaid = monthly * months;
    const totalInterest = Math.max(0, totalPaid - P);

    if (monthlyResult) monthlyResult.innerHTML = `$${Math.round(monthly).toLocaleString()} <small style="font-size:1rem; font-weight:500;">/ mo</small>`;
    if (principalResult) principalResult.innerText = `$${Math.round(P).toLocaleString()}`;
    if (interestResult) interestResult.innerText = `$${Math.round(totalInterest).toLocaleString()}`;
  };

  [inputPrice, inputDown, inputTerm, inputInterest].forEach(el => {
    el.addEventListener('input', calculate);
    el.addEventListener('change', calculate);
  });

  calculate();
}
