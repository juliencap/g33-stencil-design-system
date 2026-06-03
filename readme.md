# G33 Design System

Mini Design System développé avec StencilJS.

## Objectifs

- Découvrir Stencil et les Web Components
- Construire une bibliothèque de composants réutilisables
- Utiliser des Design Tokens CSS
- Intégrer un CMS Headless (Storyblok)
- Prendre en compte les bonnes pratiques d'accessibilité

## Stack technique

- StencilJS
- TypeScript
- Web Components
- Shadow DOM
- Storyblok
- CSS Variables (Design Tokens)

## Composants disponibles

### g33-button

Bouton réutilisable avec variantes :

- Primary
- Secondary
- Ghost

### g33-alert

Alertes contextuelles :

- Success
- Warning
- Error

### g33-article-card

Carte d'article avec :

- image
- catégorie
- auteur
- date
- bouton d'action

### g33-hero-banner

Hero Banner configurable depuis Storyblok :

- titre
- sous-titre
- image
- CTA
- ouverture nouvel onglet

## Design Tokens

Le Design System s'appuie sur des Design Tokens CSS :

- couleurs
- espacements
- typographie
- rayons
- ombres

Exemple :

```css
--g33-color-primary
--g33-spacing-md
--g33-radius-lg
```

## Accessibilité

Mise en place des bonnes pratiques suivantes :

- attributs alt sur les images
- élément `<time datetime>`
- styles `:focus-visible`
- `aria-label` contextuels
- hiérarchie de titres

## Intégration Storyblok

Storyblok est utilisé comme CMS Headless.

Exemple de flux :

Storyblok → API JSON → Stencil → Web Components

Le composant Hero Banner récupère dynamiquement :

- titre
- sous-titre
- image
- texte du CTA
- URL du CTA
- ouverture dans un nouvel onglet
- texte alternatif de l'image

## Installation

```bash
npm install
```

## Lancement

```bash
npm start
```

## Build

```bash
npm run build
```
