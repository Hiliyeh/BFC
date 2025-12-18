# Assets BFC Belgium

Documentation de tous les éléments visuels du site.

---

## 1. LOGO

### Logo Principal
```
Chemin: /_next/static/media/logoNew.bed2a49f.png
Format: PNG
Usage: Header, Footer, Favicon
```

| Variante | Fichier | Usage |
|----------|---------|-------|
| Logo principal | `logoNew.bed2a49f.png` | Navigation |
| Favicon | (dérivé du logo) | Onglet navigateur |

---

## 2. ICÔNES

### Icônes de Navigation

| Icône | Chemin | Usage |
|-------|--------|-------|
| Menu hamburger | Composant React | Navigation mobile |
| Flèche dropdown | Composant React | Sous-menus |
| Globe/Langue | Composant React | Sélecteur langue |

### Icônes Réseaux Sociaux

| Réseau | Chemin | Format |
|--------|--------|--------|
| Instagram | `/icons/instagram.svg` | SVG |
| TikTok | `/icons/tiktok.svg` | SVG |

### Icônes Livraison

| Plateforme | Chemin | Format |
|------------|--------|--------|
| Deliveroo | `/icons/delivery/deliveroo.svg` | SVG |
| Uber Eats | `/icons/delivery/uber.png` | PNG |
| Takeaway | `/icons/delivery/takeaway.svg` | SVG |

---

## 3. IMAGES PRODUITS

### Structure des Dossiers
```
/images/products/
├── singleItems/
│   ├── burgers/
│   │   ├── chickenBurger.png
│   │   ├── maxiChicken.png
│   │   ├── meatBurger.png
│   │   ├── maxiMeat.png
│   │   ├── crunchy.png
│   │   ├── wrap.png
│   │   └── fishBurger.png
│   ├── buckets/
│   │   ├── 10tenders.png
│   │   ├── 26hotwings.png
│   │   ├── bucketMix.png
│   │   ├── duoBucket.png
│   │   ├── familyBucket.png
│   │   └── maxi.png
│   ├── desserts/
│   │   ├── 37.png (Chocolate Fudge Brownie)
│   │   ├── 38.png (Cookie Dough)
│   │   └── 39.png (Strawberry Cheesecake)
│   └── drinks/
│       ├── 31.png (Pepsi)
│       ├── 32.png (7UP)
│       ├── 33.png (Pepsi Max)
│       ├── 34.png (Mirinda)
│       ├── 35.png (Spa Riene)
│       └── 36.png (Spa Intense)
└── meals/
    ├── chickenBurgerMeal.png
    ├── maxiChickenMeal.png
    ├── meatBurgerMeal.png
    └── mealMaxiMeat.png
```

### Inventaire Complet des Images Produits

| Catégorie | Nombre | Format |
|-----------|--------|--------|
| Burgers | 7 | PNG |
| Buckets | 6 | PNG |
| Desserts | 3 | PNG |
| Drinks | 6 | PNG |
| Meals | 4 | PNG |
| **Total** | **26** | |

---

## 4. IMAGES PHOTOS (Ambiance)

### Photos Page d'Accueil
```
/images/photos/
├── soHot.png (ou .jpg)
├── crunchy.png
└── menu.png
```

### Caractéristiques
- Style: Photographie food professionnelle
- Éclairage: Chaud, appétissant
- Arrière-plan: Généralement foncé pour contraste

---

## 5. URLs D'IMAGES NEXT.JS

### Format d'URL Optimisé
```
/_next/image?url={encodedPath}&w={width}&q={quality}

Paramètres:
- url: Chemin encodé (ex: %2Fimages%2F...)
- w: Largeur (ex: 640, 750, 828, 1080, 1200)
- q: Qualité (ex: 75, 85, 100)
```

### Exemple
```
Original: /images/products/singleItems/burgers/chickenBurger.png

Optimisé:
/_next/image?url=%2Fimages%2Fproducts%2FsingleItems%2Fburgers%2FchickenBurger.png&w=640&q=75
```

---

## 6. SPÉCIFICATIONS TECHNIQUES

### Formats Utilisés

| Type | Format | Raison |
|------|--------|--------|
| Logo | PNG | Transparence |
| Icônes | SVG | Scalabilité |
| Produits | PNG | Qualité + Transparence |
| Photos | JPG/PNG | Compression |

### Tailles Recommandées

| Usage | Dimensions | Notes |
|-------|------------|-------|
| Logo header | ~150px largeur | Auto-responsive |
| Produits grid | 300-400px | Carré ou ratio 4:3 |
| Hero images | 1200px+ | Full-width |
| Icônes | 24-48px | SVG préféré |

---

## 7. RÉCUPÉRATION DES ASSETS

### Méthode de Téléchargement

Pour télécharger les images:

```bash
# Exemple pour un produit
curl -O "https://www.bfcbelgium.com/images/products/singleItems/burgers/chickenBurger.png"

# Avec l'optimisation Next.js (qualité originale)
curl -O "https://www.bfcbelgium.com/_next/image?url=%2Fimages%2Fproducts%2FsingleItems%2Fburgers%2FchickenBurger.png&w=1200&q=100"
```

### Note Légale
Ces assets sont la propriété de BFC Belgium. Utilisation soumise aux conditions de la marque.
