# Inventaire des Assets BFC Belgium

Tous les assets téléchargés depuis https://www.bfcbelgium.com/

**Date**: 17 Décembre 2024
**Total fichiers**: 39

---

## Structure des Dossiers

```
assets/
├── logo/
│   └── logoNew.png (28 KB)
├── images/
│   ├── burgers/ (7 fichiers)
│   ├── buckets/ (6 fichiers)
│   ├── desserts/ (3 fichiers)
│   ├── drinks/ (6 fichiers)
│   ├── meals/ (4 fichiers)
│   ├── photos/ (3 fichiers)
│   └── promo/ (3 fichiers) ← NOUVEAU
├── icons/
│   ├── delivery/ (3 fichiers)
│   └── social/ (2 fichiers)
└── videos/
    └── videoHero.mp4 (20 MB)
```

---

## 1. LOGO

| Fichier | Taille | Format |
|---------|--------|--------|
| `logo/logoNew.png` | 28 KB | PNG |

---

## 2. IMAGES PRODUITS

### Burgers (7 fichiers - ~4 MB total)

| Fichier | Taille | Produit |
|---------|--------|---------|
| `chickenBurger.png` | 565 KB | Chicken Burger |
| `maxiChicken.png` | 652 KB | Maxi Chicken Burger |
| `meatBurger.png` | 623 KB | Meat Burger |
| `maxiMeat.png` | 593 KB | Maxi Meat Burger |
| `crunchy.png` | 560 KB | Crunchy Burger |
| `wrap.png` | 542 KB | Wrap |
| `fishBurger.png` | 602 KB | Fish Burger |

### Buckets (6 fichiers - ~3.3 MB total)

| Fichier | Taille | Produit |
|---------|--------|---------|
| `10tenders.png` | 512 KB | 10 Tenders |
| `26hotwings.png` | 702 KB | 26 Hot Wings |
| `bucketMix.png` | 524 KB | Bucket Mix |
| `duoBucket.png` | 538 KB | Duo Bucket |
| `familyBucket.png` | 548 KB | Family Bucket |
| `maxi.png` | 512 KB | Maxi Bucket |

### Desserts (3 fichiers - ~1.2 MB total)

| Fichier | Taille | Produit |
|---------|--------|---------|
| `chocolateFudgeBrownie.png` | 399 KB | Chocolate Fudge Brownie |
| `cookieDough.png` | 379 KB | Cookie Dough |
| `strawberryCheesecake.png` | 384 KB | Strawberry Cheesecake |

### Drinks (6 fichiers - ~1.8 MB total)

| Fichier | Taille | Produit |
|---------|--------|---------|
| `pepsi.png` | 250 KB | Pepsi |
| `7up.png` | 270 KB | 7UP |
| `pepsiMax.png` | 338 KB | Pepsi Max |
| `mirinda.png` | 351 KB | Mirinda Orange |
| `spaRiene.png` | 300 KB | Spa Riene (Plate) |
| `spaIntense.png` | 263 KB | Spa Intense (Pétillante) |

### Meals (4 fichiers - ~2.6 MB total)

| Fichier | Taille | Produit |
|---------|--------|---------|
| `chickenBurgerMeal.png` | 645 KB | Meal Chicken |
| `maxiChickenMeal.png` | 662 KB | Meal Maxi Chicken |
| `meatBurgerMeal.png` | 660 KB | Meal Meat |
| `mealMaxiMeat.png` | 630 KB | Meal Maxi Meat |

---

## 3. PHOTOS D'AMBIANCE (3 fichiers - ~3.8 MB total)

| Fichier | Taille | Dimensions | Description |
|---------|--------|------------|-------------|
| `soHot.png` | 1.3 MB | 1080x1080 | Hot Wings épicées |
| `crunchy.png` | 1.7 MB | 1080x1080 | Poulet croustillant |
| `menu.png` | 817 KB | 1080x1080 | Menu/formule |

---

## 4. IMAGES PROMO "WHAT'S NEW" (3 fichiers - ~1.1 MB total)

| Fichier | Taille | Dimensions | Description |
|---------|--------|------------|-------------|
| `black.png` | 379 KB | 1080x1080 | Promo fond noir |
| `yellow.png` | 328 KB | 1080x1080 | Promo fond jaune |
| `red.png` | 374 KB | 1080x1080 | Promo fond rouge |

---

## 5. VIDÉOS (1 fichier - 20 MB)

| Fichier | Taille | Format | Description |
|---------|--------|--------|-------------|
| `videoHero.mp4` | 20 MB | MP4 (H.264) | Vidéo hero page d'accueil |

**Source**: `https://www.bfcbelgium.com/images/videoHero.mp4`

**Usage**: Vidéo en autoplay, loop, sur la page d'accueil (hero section)

---

## 6. ICÔNES

### Livraison (3 fichiers SVG)

| Fichier | Taille | Plateforme |
|---------|--------|------------|
| `deliveroo.svg` | 1.9 KB | Deliveroo |
| `uberEats.svg` | 1.6 KB | Uber Eats |
| `takeaway.svg` | 6.6 KB | Takeaway.com |

### Réseaux Sociaux (2 fichiers SVG)

| Fichier | Taille | Réseau |
|---------|--------|--------|
| `instagram.svg` | 2.6 KB | Instagram |
| `tiktok.svg` | 764 B | TikTok |

---

## Résumé

| Catégorie | Fichiers | Taille Totale |
|-----------|----------|---------------|
| Logo | 1 | 28 KB |
| Burgers | 7 | ~4 MB |
| Buckets | 6 | ~3.3 MB |
| Desserts | 3 | ~1.2 MB |
| Drinks | 6 | ~1.8 MB |
| Meals | 4 | ~2.6 MB |
| Photos | 3 | ~3.8 MB |
| Promo | 3 | ~1.1 MB |
| Icônes | 5 | ~13 KB |
| Vidéos | 1 | 20 MB |
| **TOTAL** | **39** | **~37.8 MB** |

---

## Utilisation

### Import dans un projet

```javascript
// Logo
import logo from './assets/logo/logoNew.png';

// Produit
import chickenBurger from './assets/images/burgers/chickenBurger.png';

// Icône
import deliverooIcon from './assets/icons/delivery/deliveroo.svg';
```

### CSS

```css
.logo {
  background-image: url('./assets/logo/logoNew.png');
}
```

---

## Sources Originales

Tous ces fichiers proviennent de:
- **Site**: https://www.bfcbelgium.com/
- **Images produits**: `/images/products/singleItems/[category]/`
- **Meals**: `/images/products/menus/meals/`
- **Photos**: `/images/photos/`
- **Icônes**: `/icons/`
- **Logo**: `/_next/static/media/logoNew.bed2a49f.png`
