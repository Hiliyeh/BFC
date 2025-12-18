# Charte Graphique BFC Belgium

Documentation du design system et de l'identité visuelle.

---

## 1. PALETTE DE COULEURS

### Couleurs Principales

| Nom | Hex | RGB | Usage |
|-----|-----|-----|-------|
| Noir | `#000000` | rgb(0, 0, 0) | Texte, fond |
| Blanc | `#FFFFFF` | rgb(255, 255, 255) | Fond, texte sur sombre |
| Rouge BFC | `#E31837` | (estimation) | Accent, logo |
| Or/Jaune | `#FFD700` | (estimation) | Accent secondaire |

### Couleurs avec Opacité

| Usage | RGBA | Opacité |
|-------|------|---------|
| Texte secondaire | `rgba(0, 0, 0, 0.54)` | 54% |
| Hover état | `rgba(0, 0, 0, 0.04)` | 4% |
| Désactivé | `rgba(0, 0, 0, 0.26)` | 26% |
| Overlay | `rgba(0, 0, 0, 0.5)` | 50% |

### Couleurs Sémantiques

| État | Couleur | Usage |
|------|---------|-------|
| Succès | Vert | Confirmations |
| Erreur | Rouge | Messages d'erreur |
| Info | Bleu | Informations |
| Warning | Orange | Avertissements |

---

## 2. TYPOGRAPHIE

### Familles de Polices

```css
/* Police principale (probable) */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Police d'accent (probable pour titres) */
font-family: 'Montserrat', 'Poppins', sans-serif;
```

### Hiérarchie Typographique

| Élément | Taille | Poids | Usage |
|---------|--------|-------|-------|
| H1 | 48-64px | Bold (700) | Titres principaux |
| H2 | 32-40px | Semi-bold (600) | Sections |
| H3 | 24-28px | Semi-bold (600) | Sous-sections |
| Body | 16px | Regular (400) | Texte courant |
| Small | 14px | Regular (400) | Détails |
| Caption | 12px | Regular (400) | Légendes |

### Styles de Texte

```css
/* Titre Hero */
.hero-title {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
}

/* Paragraphe */
.body-text {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
}
```

---

## 3. COMPOSANTS UI

### Boutons

#### Bouton Primaire
```css
.btn-primary {
  background-color: #E31837; /* Rouge BFC */
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-transform: uppercase;
}

.btn-primary:hover {
  background-color: #C41430; /* Rouge plus foncé */
}
```

#### Bouton Secondaire
```css
.btn-secondary {
  background-color: transparent;
  color: #E31837;
  border: 2px solid #E31837;
  padding: 12px 24px;
  border-radius: 8px;
}
```

### Cartes Produits

```css
.product-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-4px);
}
```

### Navigation

```css
.nav-link {
  color: rgba(0, 0, 0, 0.87);
  font-weight: 500;
  padding: 8px 16px;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #E31837;
}
```

---

## 4. ESPACEMENTS

### Système de Spacing

| Token | Valeur | Usage |
|-------|--------|-------|
| xs | 4px | Micro espacements |
| sm | 8px | Éléments proches |
| md | 16px | Standard |
| lg | 24px | Sections |
| xl | 32px | Grandes sections |
| 2xl | 48px | Entre sections |
| 3xl | 64px | Hero, grandes marges |

### Grid System

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.grid-products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
```

---

## 5. EFFETS & ANIMATIONS

### Ombres

```css
/* Carte au repos */
.shadow-sm {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Carte hover */
.shadow-md {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Éléments flottants */
.shadow-lg {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}
```

### Transitions

```css
/* Transition standard */
transition: all 0.3s ease;

/* Transition rapide */
transition: all 0.15s ease;

/* Transition lente */
transition: all 0.5s ease;
```

### Hover States

```css
/* Boutons */
transform: scale(1.02);

/* Cartes */
transform: translateY(-4px);

/* Liens */
color: #E31837;
```

---

## 6. BREAKPOINTS RESPONSIVE

| Nom | Largeur | Devices |
|-----|---------|---------|
| xs | < 576px | Petits mobiles |
| sm | ≥ 576px | Mobiles |
| md | ≥ 768px | Tablettes |
| lg | ≥ 992px | Laptops |
| xl | ≥ 1200px | Desktops |
| 2xl | ≥ 1400px | Grands écrans |

### Exemples Media Queries

```css
/* Mobile first */
.container {
  padding: 16px;
}

@media (min-width: 768px) {
  .container {
    padding: 24px;
  }
}

@media (min-width: 1200px) {
  .container {
    padding: 32px;
    max-width: 1200px;
  }
}
```

---

## 7. ICONOGRAPHIE

### Style d'Icônes
- Type: Outline / Line icons
- Épaisseur: 2px stroke
- Taille: 24px standard
- Coins: Arrondis

### Icônes Système Recommandées
- Bibliothèque: Heroicons, Feather Icons, ou Lucide
- Cohérence: Même famille pour tout le site

---

## 8. IMAGES & PHOTOGRAPHIE

### Style Photographique
- **Éclairage**: Chaud, appétissant
- **Fond**: Sombre ou neutre
- **Focus**: Produit au centre
- **Qualité**: Haute résolution
- **Retouche**: Couleurs saturées, contraste élevé

### Ratio d'Images

| Usage | Ratio | Exemple |
|-------|-------|---------|
| Cartes produits | 1:1 | 400x400px |
| Hero | 16:9 | 1920x1080px |
| Thumbnails | 4:3 | 400x300px |

---

## 9. IDENTITÉ DE MARQUE

### Personnalité
- **Audacieux**: Couleurs vives, typographie bold
- **Accessible**: Interface simple, navigation claire
- **Appétissant**: Photos alléchantes, couleurs chaudes
- **Moderne**: Design épuré, animations subtiles

### Ton de Communication
- Amical et décontracté
- Direct et clair
- Enthousiaste mais pas excessif

### Do's & Don'ts

**À FAIRE:**
- Utiliser les couleurs de la marque
- Maintenir une hiérarchie visuelle claire
- Optimiser pour mobile
- Photos de haute qualité

**À ÉVITER:**
- Trop de couleurs différentes
- Texte sur images sans overlay
- Animations excessives
- Images de basse qualité
