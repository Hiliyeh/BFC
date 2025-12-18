/**
 * BFC Belgium - Main JavaScript
 * Bold. Crispy. Unforgettable.
 *
 * © 2025 BFC Belgium - Tous droits réservés
 * Développé par Hiliyeh Bashir
 * linkedin.com/in/hiliyeh-bashir
 */

/* ============================================
   CONFIGURATION & CONSTANTS
   ============================================ */
const CONFIG = {
    MOBILE_BREAKPOINT: 768,
    LOADER: {
        ANIMATION_DURATION: 2000,
        MAX_TIMEOUT: 4000
    },
    NAV: {
        SCROLL_THRESHOLD: 100
    },
    ANIMATION: {
        STAGGER_DELAY: 0.08,
        FADE_DURATION: 0.4
    },
    LIVE_SALES: {
        MAX_ITEMS: 4,
        MIN_INTERVAL: 4000,
        MAX_INTERVAL: 8000
    },
    // Mapping ingrédients → icônes (Iconify emoji style)
    INGREDIENT_ICONS: {
        // Protéines
        'poulet': { lib: 'iconify', icon: 'twemoji:poultry-leg' },
        'chicken': { lib: 'iconify', icon: 'twemoji:poultry-leg' },
        'boeuf': { lib: 'iconify', icon: 'twemoji:cut-of-meat' },
        'beef': { lib: 'iconify', icon: 'twemoji:cut-of-meat' },
        'poisson': { lib: 'iconify', icon: 'twemoji:fish' },
        'fish': { lib: 'iconify', icon: 'twemoji:fish' },
        'bacon': { lib: 'iconify', icon: 'twemoji:bacon' },
        'tenders': { lib: 'iconify', icon: 'twemoji:poultry-leg' },
        'wings': { lib: 'iconify', icon: 'twemoji:poultry-leg' },
        'pieces': { lib: 'iconify', icon: 'twemoji:poultry-leg' },
        'drumsticks': { lib: 'iconify', icon: 'twemoji:poultry-leg' },
        // Légumes
        'salade': { lib: 'iconify', icon: 'twemoji:green-salad' },
        'laitue': { lib: 'iconify', icon: 'twemoji:leafy-green' },
        'tomate': { lib: 'iconify', icon: 'twemoji:tomato' },
        'oignons': { lib: 'iconify', icon: 'twemoji:onion' },
        'crudites': { lib: 'iconify', icon: 'twemoji:green-salad' },
        // Pains & Base
        'pain': { lib: 'iconify', icon: 'twemoji:bread' },
        'tortilla': { lib: 'iconify', icon: 'noto:burrito' },
        'wrap': { lib: 'iconify', icon: 'noto:burrito' },
        'crispy': { lib: 'iconify', icon: 'twemoji:fire' },
        'burger': { lib: 'iconify', icon: 'twemoji:hamburger' },
        // Fromages & Sauces
        'fromage': { lib: 'iconify', icon: 'twemoji:cheese-wedge' },
        'cheese': { lib: 'iconify', icon: 'twemoji:cheese-wedge' },
        'sauce': { lib: 'iconify', icon: 'game-icons:ketchup' },
        'mayo': { lib: 'iconify', icon: 'game-icons:ketchup' },
        'tartare': { lib: 'iconify', icon: 'game-icons:ketchup' },
        'bbq': { lib: 'iconify', icon: 'twemoji:fire' },
        'epice': { lib: 'iconify', icon: 'twemoji:hot-pepper' },
        // Accompagnements
        'frites': { lib: 'iconify', icon: 'twemoji:french-fries' },
        'coleslaw': { lib: 'iconify', icon: 'twemoji:green-salad' },
        'sauces': { lib: 'iconify', icon: 'game-icons:ketchup' },
        // Desserts
        'glace': { lib: 'iconify', icon: 'twemoji:ice-cream' },
        'brownie': { lib: 'iconify', icon: 'twemoji:chocolate-bar' },
        'chocolat': { lib: 'iconify', icon: 'twemoji:chocolate-bar' },
        'cookie': { lib: 'iconify', icon: 'twemoji:cookie' },
        'pepites': { lib: 'iconify', icon: 'twemoji:cookie' },
        'cheesecake': { lib: 'iconify', icon: 'twemoji:shortcake' },
        'fraises': { lib: 'iconify', icon: 'twemoji:strawberry' },
        'coulis': { lib: 'iconify', icon: 'twemoji:strawberry' },
        // Boissons
        '33cl': { lib: 'iconify', icon: 'twemoji:cup-with-straw' },
        '50cl': { lib: 'iconify', icon: 'twemoji:cup-with-straw' },
        'boisson': { lib: 'iconify', icon: 'twemoji:cup-with-straw' },
        'zero': { lib: 'iconify', icon: 'twemoji:cup-with-straw' },
        'sucre': { lib: 'iconify', icon: 'twemoji:cup-with-straw' },
        'citron': { lib: 'iconify', icon: 'twemoji:lemon' },
        'lime': { lib: 'iconify', icon: 'twemoji:lemon' },
        'orange': { lib: 'iconify', icon: 'twemoji:tangerine' },
        'eau': { lib: 'iconify', icon: 'twemoji:droplet' },
        'plate': { lib: 'iconify', icon: 'twemoji:droplet' },
        'petillante': { lib: 'iconify', icon: 'twemoji:bubbles' },
        // Quantités
        'double': { lib: 'iconify', icon: 'twemoji:keycap-2' },
        'large': { lib: 'iconify', icon: 'twemoji:french-fries' },
        'maxi': { lib: 'iconify', icon: 'twemoji:hamburger' },
        // Default
        '_default': { lib: 'iconify', icon: 'twemoji:check-mark-button' }
    }
};

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */
const Utils = {
    /**
     * Debounce function
     */
    debounce(func, wait = 100) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Throttle function
     */
    throttle(func, limit = 100) {
        let inThrottle;
        return function executedFunction(...args) {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Reset and trigger animation on element
     */
    resetAnimation(element, animation) {
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        element.style.animation = animation;
    },

    /**
     * Apply staggered fade-in animation to elements
     */
    applyStaggeredAnimation(elements, filterFn) {
        let visibleIndex = 0;
        elements.forEach(el => {
            if (filterFn(el)) {
                el.classList.remove('hidden');
                Utils.resetAnimation(el, `fadeInUp ${CONFIG.ANIMATION.FADE_DURATION}s ease ${visibleIndex * CONFIG.ANIMATION.STAGGER_DELAY}s backwards`);
                visibleIndex++;
            } else {
                el.classList.add('hidden');
            }
        });
    },

    /**
     * Set active element in a collection
     */
    setActiveElement(collection, activeElement) {
        collection.forEach(el => el.classList.remove('active'));
        activeElement.classList.add('active');
    },

    /**
     * Initialize Lucide icons safely
     */
    initLucideIcons() {
        try {
            if (typeof lucide !== 'undefined' && lucide.createIcons) {
                lucide.createIcons();
            }
        } catch (error) {
            console.warn('Lucide icons initialization failed:', error);
        }
    },

    /**
     * Get icon config for an ingredient (supports FA + Lucide)
     */
    getIngredientIcon(ingredientText) {
        const text = ingredientText.toLowerCase().trim();
        const icons = CONFIG.INGREDIENT_ICONS;

        // Check each keyword in the mapping
        for (const [keyword, config] of Object.entries(icons)) {
            if (keyword !== '_default' && text.includes(keyword)) {
                return config;
            }
        }
        return icons._default;
    },

    /**
     * Generate icon HTML (FA, Lucide, or Iconify)
     */
    getIconHTML(iconConfig) {
        if (iconConfig.lib === 'fa') {
            return `<i class="fa-solid ${iconConfig.icon}"></i>`;
        } else if (iconConfig.lib === 'iconify') {
            return `<iconify-icon icon="${iconConfig.icon}"></iconify-icon>`;
        } else {
            return `<i data-lucide="${iconConfig.icon}"></i>`;
        }
    }
};

/* ============================================
   EVENT MANAGER - Centralized Event Handling
   ============================================ */
const EventManager = {
    listeners: [],
    escapeHandlers: [],

    /**
     * Add event listener with cleanup tracking
     */
    add(element, event, handler, options = {}) {
        element.addEventListener(event, handler, options);
        this.listeners.push({ element, event, handler, options });
    },

    /**
     * Register escape key handler
     */
    onEscape(handler) {
        this.escapeHandlers.push(handler);
    },

    /**
     * Remove escape key handler
     */
    offEscape(handler) {
        this.escapeHandlers = this.escapeHandlers.filter(h => h !== handler);
    },

    /**
     * Initialize centralized escape key listener
     */
    init() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Execute handlers in reverse order (last registered first)
                for (let i = this.escapeHandlers.length - 1; i >= 0; i--) {
                    const result = this.escapeHandlers[i]();
                    if (result === true) break; // Stop propagation if handler returns true
                }
            }
        });
    },

    /**
     * Cleanup all registered listeners
     */
    destroy() {
        this.listeners.forEach(({ element, event, handler, options }) => {
            element.removeEventListener(event, handler, options);
        });
        this.listeners = [];
        this.escapeHandlers = [];
    }
};

/* ============================================
   LOADER MODULE
   ============================================ */
const Loader = {
    loader: null,
    timeoutId: null,

    init() {
        this.loader = document.getElementById('loader');
        if (!this.loader) return;

        document.body.classList.add('loading');

        window.addEventListener('load', () => {
            this.timeoutId = setTimeout(() => this.hide(), CONFIG.LOADER.ANIMATION_DURATION);
        });

        // Fallback timeout
        setTimeout(() => this.hide(), CONFIG.LOADER.MAX_TIMEOUT);
    },

    hide() {
        if (this.timeoutId) clearTimeout(this.timeoutId);
        if (this.loader) {
            this.loader.classList.add('hidden');
            document.body.classList.remove('loading');
        }
    },

    destroy() {
        if (this.timeoutId) clearTimeout(this.timeoutId);
        this.loader = null;
    }
};

/* ============================================
   NAVIGATION MODULE
   ============================================ */
const Navigation = {
    nav: null,
    toggle: null,
    mobileMenu: null,
    overlay: null,
    boundCheckScroll: null,

    init() {
        this.nav = document.getElementById('nav');
        this.toggle = document.getElementById('navToggle');
        this.mobileMenu = document.getElementById('navMobile');
        this.overlay = document.getElementById('navOverlay');
        this.closeBtn = document.getElementById('navMobileClose');

        if (!this.nav) return;

        this.boundCheckScroll = Utils.throttle(() => this.checkScroll(), 16);
        this.bindEvents();
        this.checkScroll();
    },

    bindEvents() {
        // Scroll event for sticky nav
        EventManager.add(window, 'scroll', this.boundCheckScroll, { passive: true });

        // Mobile menu toggle
        if (this.toggle && this.mobileMenu) {
            EventManager.add(this.toggle, 'click', () => this.toggleMenu());

            // Close button inside menu
            if (this.closeBtn) {
                EventManager.add(this.closeBtn, 'click', () => this.closeMenu());
            }

            // Close menu when clicking a link
            this.mobileMenu.querySelectorAll('.nav-mobile-link').forEach(link => {
                EventManager.add(link, 'click', () => this.closeMenu());
            });

            // Close menu when clicking overlay
            if (this.overlay) {
                EventManager.add(this.overlay, 'click', () => this.closeMenu());
            }

            // Register escape handler
            EventManager.onEscape(() => {
                if (this.mobileMenu.classList.contains('active')) {
                    this.closeMenu();
                    return true;
                }
                return false;
            });
        }
    },

    checkScroll() {
        if (window.scrollY > CONFIG.NAV.SCROLL_THRESHOLD) {
            this.nav.classList.add('scrolled');
        } else {
            this.nav.classList.remove('scrolled');
        }
    },

    toggleMenu() {
        const isActive = !this.mobileMenu.classList.contains('active');

        this.mobileMenu.classList.toggle('active');
        this.toggle.classList.toggle('active');
        if (this.overlay) this.overlay.classList.toggle('active');

        this.toggle.setAttribute('aria-expanded', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';

        // Re-init Lucide icons for mobile menu
        if (isActive) {
            Utils.initLucideIcons();
        }
    },

    closeMenu() {
        this.toggle.classList.remove('active');
        this.mobileMenu.classList.remove('active');
        if (this.overlay) this.overlay.classList.remove('active');
        this.toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    },

    destroy() {
        this.nav = null;
        this.toggle = null;
        this.mobileMenu = null;
        this.overlay = null;
        this.closeBtn = null;
    }
};

/* ============================================
   MENU TABS MODULE
   ============================================ */
const MenuTabs = {
    tabs: null,
    products: null,
    currentCategory: 'burgers',

    init() {
        this.tabs = document.querySelectorAll('.menu-tab');
        this.products = document.querySelectorAll('.product-card');

        if (!this.tabs.length || !this.products.length) return;

        this.bindEvents();
    },

    bindEvents() {
        this.tabs.forEach(tab => {
            EventManager.add(tab, 'click', () => this.handleTabClick(tab));
        });
    },

    handleTabClick(clickedTab) {
        const category = clickedTab.dataset.category;
        this.currentCategory = category;

        Utils.setActiveElement(this.tabs, clickedTab);
        this.filterProducts(category);
    },

    filterProducts(category) {
        Utils.applyStaggeredAnimation(
            this.products,
            (product) => product.dataset.category === category
        );
    },

    destroy() {
        this.tabs = null;
        this.products = null;
    }
};

/* ============================================
   MEAL FILTERS MODULE
   ============================================ */
const MealFilters = {
    sizeButtons: null,
    typeButtons: null,
    meals: null,
    currentSize: 'all',
    currentType: 'all',

    init() {
        this.sizeButtons = document.querySelectorAll('.filter-btn[data-meal-size]');
        this.typeButtons = document.querySelectorAll('.filter-btn[data-meal-type]');
        this.meals = document.querySelectorAll('.meal-card');

        if (!this.sizeButtons.length || !this.typeButtons.length || !this.meals.length) return;

        this.bindEvents();
    },

    bindEvents() {
        this.sizeButtons.forEach(btn => {
            EventManager.add(btn, 'click', () => this.handleSizeClick(btn));
        });

        this.typeButtons.forEach(btn => {
            EventManager.add(btn, 'click', () => this.handleTypeClick(btn));
        });
    },

    handleSizeClick(clickedBtn) {
        this.currentSize = clickedBtn.dataset.mealSize;
        Utils.setActiveElement(this.sizeButtons, clickedBtn);
        this.applyFilters();
    },

    handleTypeClick(clickedBtn) {
        this.currentType = clickedBtn.dataset.mealType;
        Utils.setActiveElement(this.typeButtons, clickedBtn);
        this.applyFilters();
    },

    applyFilters() {
        Utils.applyStaggeredAnimation(this.meals, (meal) => {
            const matchesSize = this.currentSize === 'all' || meal.dataset.mealSize === this.currentSize;
            const matchesType = this.currentType === 'all' || meal.dataset.mealType === this.currentType;
            return matchesSize && matchesType;
        });
    },

    destroy() {
        this.sizeButtons = null;
        this.typeButtons = null;
        this.meals = null;
    }
};

/* ============================================
   MEAL WELCOME SELECTOR (Mobile UX)
   ============================================ */
const MealWelcome = {
    welcome: null,
    steps: null,
    currentStep: 1,
    selectedSize: null,
    selectedType: null,
    hasShown: false,

    init() {
        this.welcome = document.getElementById('mealWelcome');
        if (!this.welcome) return;

        // Only show on mobile
        if (window.innerWidth > CONFIG.MOBILE_BREAKPOINT) return;

        // Check if already shown this session
        if (sessionStorage.getItem('mealWelcomeShown')) return;

        this.steps = this.welcome.querySelectorAll('.welcome-step');
        this.bindEvents();
        this.showOnScroll();
    },

    bindEvents() {
        // Option buttons
        this.welcome.querySelectorAll('.welcome-option').forEach(btn => {
            EventManager.add(btn, 'click', () => this.handleOptionClick(btn));
        });

        // Skip button
        const skipBtn = document.getElementById('mealWelcomeSkip');
        if (skipBtn) {
            EventManager.add(skipBtn, 'click', () => this.close());
        }

        // Escape to close
        EventManager.onEscape(() => {
            if (this.welcome.classList.contains('active')) {
                this.close();
                return true;
            }
            return false;
        });
    },

    showOnScroll() {
        const mealsSection = document.getElementById('meals');
        if (!mealsSection) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasShown) {
                    this.show();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });

        observer.observe(mealsSection);
    },

    show() {
        if (this.hasShown) return;
        this.hasShown = true;
        this.welcome.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    close() {
        this.welcome.classList.add('closing');
        document.body.style.overflow = '';
        sessionStorage.setItem('mealWelcomeShown', 'true');

        setTimeout(() => {
            this.welcome.classList.remove('active', 'closing');
        }, 400);
    },

    handleOptionClick(btn) {
        // Mark as selected
        const options = btn.parentElement.querySelectorAll('.welcome-option');
        options.forEach(opt => opt.classList.remove('selected'));
        btn.classList.add('selected');

        if (this.currentStep === 1) {
            // Step 1: Size selection
            this.selectedSize = btn.dataset.size;

            // Animate to step 2
            setTimeout(() => {
                this.goToStep(2);
            }, 300);
        } else if (this.currentStep === 2) {
            // Step 2: Type selection
            this.selectedType = btn.dataset.type;

            // Apply filters and close
            setTimeout(() => {
                this.applyFilters();
                this.close();
            }, 300);
        }
    },

    goToStep(step) {
        this.currentStep = step;
        this.steps.forEach(s => {
            s.classList.remove('active');
            if (parseInt(s.dataset.step) === step) {
                s.classList.add('active');
            }
        });
    },

    applyFilters() {
        // Click the corresponding filter buttons
        if (this.selectedSize) {
            const sizeBtn = document.querySelector(`.filter-btn[data-meal-size="${this.selectedSize}"]`);
            if (sizeBtn) sizeBtn.click();
        }
        if (this.selectedType) {
            const typeBtn = document.querySelector(`.filter-btn[data-meal-type="${this.selectedType}"]`);
            if (typeBtn) typeBtn.click();
        }
    },

    destroy() {
        this.welcome = null;
        this.steps = null;
    }
};

/* ============================================
   MODAL CONTROLLER - Shared Modal Logic
   ============================================ */
const ModalController = {
    activeModal: null,

    open(overlay) {
        this.activeModal = overlay;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    close() {
        if (this.activeModal) {
            this.activeModal.classList.remove('active');
            document.body.style.overflow = '';
            this.activeModal = null;
            return true;
        }
        return false;
    },

    init() {
        // Centralized escape handler for modals
        EventManager.onEscape(() => this.close());
    }
};

/* ============================================
   PRODUCT MODAL MODULE
   ============================================ */
const ProductModal = {
    modalOverlay: null,

    init() {
        this.createModal();
        this.bindEvents();
    },

    createModal() {
        const modalHTML = `
            <div class="product-modal-overlay" id="productModalOverlay">
                <div class="product-modal">
                    <img src="assets/logo/logoNew.png" alt="BFC" class="modal-logo-badge">
                    <button class="product-modal-close" id="productModalClose" aria-label="Fermer">×</button>
                    <div class="product-modal-image">
                        <img src="" alt="" id="productModalImg">
                    </div>
                    <div class="product-modal-content">
                        <span class="product-modal-badge" id="productModalBadge"></span>
                        <h3 class="product-modal-name" id="productModalName"></h3>
                        <div class="product-modal-divider"></div>
                        <p class="product-modal-ingredients-title" id="productModalTitle">Ingrédients</p>
                        <ul class="product-modal-ingredients" id="productModalIngredients"></ul>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modalOverlay = document.getElementById('productModalOverlay');
    },

    bindEvents() {
        // Event delegation for product and meal cards
        EventManager.add(document, 'click', (e) => {
            const productCard = e.target.closest('.product-card');
            const mealCard = e.target.closest('.meal-card');

            if (productCard) {
                e.preventDefault();
                this.openModal(productCard, 'product');
            } else if (mealCard) {
                e.preventDefault();
                this.openModal(mealCard, 'meal');
            }
        });

        // Close button
        EventManager.add(document.getElementById('productModalClose'), 'click', () => {
            ModalController.close();
        });

        // Click outside to close
        EventManager.add(this.modalOverlay, 'click', (e) => {
            if (e.target === this.modalOverlay) {
                ModalController.close();
            }
        });
    },

    openModal(card, type) {
        const isProduct = type === 'product';
        const imgSelector = isProduct ? '.product-image img' : '.meal-image img';
        const nameSelector = isProduct ? '.product-name' : '.meal-name';
        const ingredientsSelector = isProduct ? '.product-ingredients li' : '.meal-includes li';

        const img = card.querySelector(imgSelector);
        const nameEl = card.querySelector(nameSelector);
        const badge = card.querySelector('.product-badge');
        const ingredients = card.querySelectorAll(ingredientsSelector);

        if (!img || !nameEl) return;

        const name = nameEl.textContent;

        // Populate modal
        const modalImg = document.getElementById('productModalImg');
        modalImg.src = img.src;
        modalImg.alt = name;
        modalImg.onerror = () => modalImg.src = 'assets/logo/logoNew.png';

        document.getElementById('productModalName').textContent = name;
        document.getElementById('productModalTitle').textContent = isProduct ? 'Ingrédients' : 'Inclus dans le menu';

        // Badge
        const badgeEl = document.getElementById('productModalBadge');
        if (badge) {
            badgeEl.textContent = badge.textContent;
            badgeEl.style.display = 'inline-block';
        } else if (!isProduct) {
            badgeEl.textContent = 'MENU COMPLET';
            badgeEl.style.display = 'inline-block';
        } else {
            badgeEl.style.display = 'none';
        }

        // Ingredients with smart icons (FA + Lucide mix)
        const ingredientsList = document.getElementById('productModalIngredients');
        ingredientsList.innerHTML = '';
        ingredients.forEach(ing => {
            const li = document.createElement('li');
            const text = ing.textContent.trim();
            const iconConfig = Utils.getIngredientIcon(text);
            const iconHTML = Utils.getIconHTML(iconConfig);
            li.innerHTML = `${iconHTML}<span>${text}</span>`;
            ingredientsList.appendChild(li);
        });

        // Re-initialize Lucide icons for the modal
        Utils.initLucideIcons();

        ModalController.open(this.modalOverlay);
    },

    destroy() {
        if (this.modalOverlay) {
            this.modalOverlay.remove();
            this.modalOverlay = null;
        }
    }
};

/* ============================================
   RESTAURANT MODAL MODULE
   ============================================ */
const RestaurantModal = {
    modalOverlay: null,

    init() {
        this.createModal();
        this.bindEvents();
    },

    createModal() {
        const modalHTML = `
            <div class="restaurant-modal-overlay" id="restaurantModalOverlay">
                <div class="restaurant-modal">
                    <img src="assets/logo/logoNew.png" alt="BFC" class="modal-logo-badge">
                    <button class="restaurant-modal-close" id="restaurantModalClose" aria-label="Fermer">
                        <i data-lucide="x" aria-hidden="true"></i>
                    </button>
                    <div class="restaurant-modal-image" id="restaurantModalImage">
                        <img id="restaurantModalImg" src="" alt="">
                    </div>
                    <div class="restaurant-modal-map" id="restaurantModalMap">
                        <iframe id="restaurantModalIframe" src="" frameborder="0" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Maps"></iframe>
                    </div>
                    <div class="restaurant-modal-content">
                        <h3 class="restaurant-modal-name" id="restaurantModalName"></h3>
                        <p class="restaurant-modal-address">
                            <i data-lucide="map-pin" aria-hidden="true"></i>
                            <span id="restaurantModalAddress"></span>
                        </p>
                        <a href="" target="_blank" rel="noopener noreferrer" class="restaurant-modal-cta" id="restaurantModalCTA">
                            Ouvrir dans Google Maps
                        </a>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modalOverlay = document.getElementById('restaurantModalOverlay');
        Utils.initLucideIcons();
    },

    bindEvents() {
        // Event delegation for restaurant cards
        EventManager.add(document, 'click', (e) => {
            const card = e.target.closest('.restaurant-card:not(.restaurant-card--coming)');
            if (card) {
                e.preventDefault();
                this.openModal(card);
            }
        });

        // Close button
        EventManager.add(document.getElementById('restaurantModalClose'), 'click', () => {
            this.closeModal();
        });

        // Click outside to close
        EventManager.add(this.modalOverlay, 'click', (e) => {
            if (e.target === this.modalOverlay) {
                this.closeModal();
            }
        });
    },

    openModal(card) {
        const { name, address, maps: mapsUrl, img: imgSrc } = card.dataset;

        if (!name || !address) return;

        const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

        const modalImg = document.getElementById('restaurantModalImg');
        modalImg.src = imgSrc || 'assets/logo/logoNew.png';
        modalImg.alt = name;
        modalImg.onerror = () => modalImg.src = 'assets/logo/logoNew.png';

        document.getElementById('restaurantModalIframe').src = embedUrl;
        document.getElementById('restaurantModalName').textContent = name;
        document.getElementById('restaurantModalAddress').textContent = address;
        document.getElementById('restaurantModalCTA').href = mapsUrl || '#';

        ModalController.open(this.modalOverlay);
    },

    closeModal() {
        ModalController.close();
        // Clear iframe to stop loading
        document.getElementById('restaurantModalIframe').src = '';
    },

    destroy() {
        if (this.modalOverlay) {
            this.modalOverlay.remove();
            this.modalOverlay = null;
        }
    }
};

/* ============================================
   LIVE SALES MODULE
   ============================================ */
const LiveSales = {
    feed: null,
    timeoutId: null,

    products: [
        'Chicken Burger', 'Maxi Chicken', 'Crunchy Burger', 'Meat Burger',
        'Maxi Meat', 'Chicken Wrap', 'Fish Burger', '10 Tenders',
        '26 Hot Wings', 'Family Bucket', 'Bucket Mix', 'Duo Bucket',
        'Meal Chicken', 'Meal Maxi Chicken', 'Meal Meat', 'Meal Maxi Meat'
    ],

    restaurants: [
        { name: 'BFC Anspach', location: 'Bruxelles' },
        { name: 'BFC Anderlecht', location: 'Anderlecht' },
        { name: 'BFC Saint-Gilles', location: 'Saint-Gilles' },
        { name: 'BFC Zaventem', location: 'Zaventem' },
        { name: 'BFC La Louvière', location: 'La Louvière' }
    ],

    init() {
        this.feed = document.getElementById('liveSalesFeed');
        if (!this.feed) return;

        // Generate initial sales
        for (let i = 0; i < CONFIG.LIVE_SALES.MAX_ITEMS; i++) {
            setTimeout(() => this.addSale(), i * 300);
        }

        this.startInterval();
        this.bindEvents();
    },

    bindEvents() {
        // Click on sale item opens restaurant modal
        EventManager.add(this.feed, 'click', (e) => {
            const saleItem = e.target.closest('.sale-item');
            if (!saleItem) return;

            const restaurantName = saleItem.dataset.restaurant;
            if (!restaurantName) return;

            // Find the restaurant card with matching name
            const restaurantCard = document.querySelector(`.restaurant-card[data-name="${restaurantName}"]`);
            if (restaurantCard && !restaurantCard.classList.contains('restaurant-card--coming')) {
                RestaurantModal.openModal(restaurantCard);
            }
        });
    },

    getRandomInterval() {
        return Math.random() * (CONFIG.LIVE_SALES.MAX_INTERVAL - CONFIG.LIVE_SALES.MIN_INTERVAL) + CONFIG.LIVE_SALES.MIN_INTERVAL;
    },

    startInterval() {
        const scheduleNext = () => {
            this.timeoutId = setTimeout(() => {
                this.addSale();
                scheduleNext();
            }, this.getRandomInterval());
        };

        scheduleNext();
    },

    addSale() {
        const product = this.products[Math.floor(Math.random() * this.products.length)];
        const restaurant = this.restaurants[Math.floor(Math.random() * this.restaurants.length)];
        const timeAgo = Math.floor(Math.random() * 3) + 1;

        const saleHTML = `
            <div class="sale-item" data-restaurant="${restaurant.name}">
                <div class="sale-item-icon">
                    <i data-lucide="shopping-bag" aria-hidden="true"></i>
                </div>
                <div class="sale-item-content">
                    <p class="sale-item-product">${product}</p>
                    <p class="sale-item-location">Commandé à <span>${restaurant.name}</span></p>
                </div>
                <span class="sale-item-time">il y a ${timeAgo} min</span>
            </div>
        `;

        this.feed.insertAdjacentHTML('afterbegin', saleHTML);
        Utils.initLucideIcons();

        // Remove excess items
        const items = this.feed.querySelectorAll('.sale-item');
        if (items.length > CONFIG.LIVE_SALES.MAX_ITEMS) {
            items[items.length - 1].remove();
        }
    },

    destroy() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
        this.feed = null;
    }
};

/* ============================================
   SCROLL ANIMATIONS MODULE
   ============================================ */
const ScrollAnimations = {
    observer: null,

    init() {
        this.addAnimatableElements();
        this.createObserver();
    },

    addAnimatableElements() {
        const selectors = '.section-header, .product-card, .meal-card, .deal-card, .restaurant-card, .delivery-card, .gallery-item';
        document.querySelectorAll(selectors).forEach(el => el.classList.add('fade-in'));
    },

    createObserver() {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        this.observer.unobserve(entry.target); // Free resources
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.1
            }
        );

        document.querySelectorAll('.fade-in').forEach(el => this.observer.observe(el));
    },

    destroy() {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
    }
};

/* ============================================
   SMOOTH SCROLL MODULE
   ============================================ */
const SmoothScroll = {
    init() {
        // Event delegation for smooth scroll
        EventManager.add(document, 'click', (e) => {
            const anchor = e.target.closest('a[href^="#"]');
            if (anchor) {
                this.handleClick(e, anchor);
            }
        });
    },

    handleClick(e, anchor) {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navHeight = document.getElementById('nav')?.offsetHeight ?? 80;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
};

/* ============================================
   HERO PARALLAX (Optional)
   ============================================ */
const HeroParallax = {
    video: null,
    boundHandler: null,

    init() {
        this.video = document.querySelector('.hero-video');
        if (!this.video || window.innerWidth <= CONFIG.MOBILE_BREAKPOINT) return;

        this.boundHandler = Utils.throttle(() => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                this.video.style.transform = `scale(${1 + scrolled * 0.0003})`;
            }
        }, 16);

        EventManager.add(window, 'scroll', this.boundHandler, { passive: true });
    },

    destroy() {
        this.video = null;
    }
};

/* ============================================
   INTERNATIONALIZATION (i18n)
   ============================================ */
const I18n = {
    currentLang: 'fr',
    supportedLangs: ['fr', 'nl', 'en'],

    init() {
        // Get saved language or detect from browser
        const savedLang = localStorage.getItem('bfc-lang');
        const browserLang = navigator.language.slice(0, 2).toLowerCase();

        if (savedLang && this.supportedLangs.includes(savedLang)) {
            this.currentLang = savedLang;
        } else if (this.supportedLangs.includes(browserLang)) {
            this.currentLang = browserLang;
        }

        this.bindEvents();
        this.updateUI();
        this.applyTranslations();
    },

    bindEvents() {
        // Desktop language switcher
        const langSwitcher = document.getElementById('langSwitcher');
        const langCurrent = document.getElementById('langCurrent');
        const langDropdown = document.getElementById('langDropdown');

        if (langCurrent && langSwitcher) {
            langCurrent.addEventListener('click', (e) => {
                e.stopPropagation();
                langSwitcher.classList.toggle('open');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                langSwitcher.classList.remove('open');
            });

            // Prevent dropdown from closing when clicking inside
            langDropdown?.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        // Desktop language options
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.dataset.lang;
                this.setLanguage(lang);
                langSwitcher?.classList.remove('open');
            });
        });

        // Mobile language buttons
        document.querySelectorAll('.lang-btn-mobile').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.setLanguage(lang);
            });
        });
    },

    setLanguage(lang) {
        if (!this.supportedLangs.includes(lang)) return;

        this.currentLang = lang;
        localStorage.setItem('bfc-lang', lang);

        this.updateUI();
        this.applyTranslations();

        // Update HTML lang attribute
        document.documentElement.lang = lang;
    },

    updateUI() {
        // Update desktop switcher
        const langCode = document.querySelector('.lang-current .lang-code');
        if (langCode) {
            langCode.textContent = this.currentLang.toUpperCase();
        }

        // Update desktop dropdown active state
        document.querySelectorAll('.lang-option').forEach(option => {
            option.classList.toggle('active', option.dataset.lang === this.currentLang);
            option.setAttribute('aria-selected', option.dataset.lang === this.currentLang);
        });

        // Update mobile buttons active state
        document.querySelectorAll('.lang-btn-mobile').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
        });
    },

    applyTranslations() {
        // Translate all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            const translation = this.translate(key);

            if (translation) {
                // Check if the element has HTML (like <br>)
                if (translation.includes('<br>') || translation.includes('<')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.dataset.i18nPlaceholder;
            const translation = this.translate(key);
            if (translation) {
                element.placeholder = translation;
            }
        });

        // Translate aria-labels
        document.querySelectorAll('[data-i18n-aria]').forEach(element => {
            const key = element.dataset.i18nAria;
            const translation = this.translate(key);
            if (translation) {
                element.setAttribute('aria-label', translation);
            }
        });

        // Reinitialize Lucide icons after DOM changes
        Utils.initLucideIcons();
    },

    translate(key) {
        if (typeof TRANSLATIONS === 'undefined') {
            console.warn('Translations not loaded');
            return null;
        }

        const translation = TRANSLATIONS[key];
        if (!translation) {
            console.warn(`Translation not found for key: ${key}`);
            return null;
        }

        return translation[this.currentLang] || translation['fr'] || null;
    },

    // Helper to get current language
    getLang() {
        return this.currentLang;
    },

    destroy() {
        // Cleanup if needed
    }
};

/* ============================================
   MODULE MANAGER
   ============================================ */
const ModuleManager = {
    modules: [
        EventManager,
        ModalController,
        Loader,
        Navigation,
        MenuTabs,
        MealFilters,
        // MealWelcome, // Désactivé - popup mobile supprimé
        ProductModal,
        RestaurantModal,
        LiveSales,
        ScrollAnimations,
        SmoothScroll,
        HeroParallax,
        I18n
    ],

    init() {
        this.modules.forEach(module => {
            try {
                if (module.init) module.init();
            } catch (error) {
                console.error(`Failed to initialize module:`, error);
            }
        });

        // Dynamic footer year
        const footerYear = document.getElementById('footerYear');
        if (footerYear) {
            footerYear.textContent = new Date().getFullYear();
        }

        // Initialize Lucide icons
        Utils.initLucideIcons();

        // Console branding
        this.logBranding();
    },

    destroy() {
        this.modules.forEach(module => {
            try {
                if (module.destroy) module.destroy();
            } catch (error) {
                console.error(`Failed to destroy module:`, error);
            }
        });
    },

    logBranding() {
        console.log('%c BFC Belgium ', 'background: #F26522; color: white; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 4px;');
        console.log('%c Belgium\'s Fried Chicken - Croustillant. Juteux. Inoubliable. ', 'color: #F26522; font-size: 14px;');
        console.log('%c © 2025 Hiliyeh Bashir ', 'color: #666; font-size: 11px;');
        console.log('%c linkedin.com/in/hiliyeh-bashir ', 'color: #0077B5; font-size: 11px;');
    }
};

/* ============================================
   INITIALIZATION
   ============================================ */
document.addEventListener('DOMContentLoaded', () => ModuleManager.init());

// Cleanup on page unload
window.addEventListener('beforeunload', () => ModuleManager.destroy());
