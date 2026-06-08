# Leniah Energy Website

React + Vite + TypeScript + Tailwind CSS

## Setup in Termux

```bash
cp /storage/emulated/0/DCIM/leniah-energy.zip ~/
cd ~/
unzip leniah-energy.zip
cd leniah

npm install
npm run dev
```

Visit http://localhost:5173

## Build & Deploy

```bash
npm run build   # builds to /dist
npm run preview # preview production build
```

## Structure

```
leniah/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── assets/          ← project images
│   ├── lib/brand.ts     ← company config & image imports
│   ├── components/
│   │   ├── EnergyOrb.tsx
│   │   ├── Reveal.tsx
│   │   └── layout/
│   │       ├── Nav.tsx
│   │       ├── Footer.tsx
│   │       └── WhatsAppFloat.tsx
│   └── pages/
│       ├── Home.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
```

## Pages
- `/` Home — hero orb, services, stats, why us, projects, testimonials
- `/about` — story, values, leadership, timeline, safety
- `/services` — 4 full service sections with process steps
- `/projects` — portfolio grid, case study, ESG, impact stats
- `/contact` — form (opens WhatsApp), map, FAQ
