# Sai Karthik Manam — Portfolio (React)

A clean, production-grade React portfolio converted from the original HTML/CSS/JS project.

## Tech Stack
- **React 18** (functional components + hooks)
- **Vite** (blazing fast dev server & build tool)
- **Pure CSS** (glassmorphism + editorial aesthetic, no extra UI library)
- **EmailJS** (contact form)

## Project Structure

```
portfolio-react/
├── index.html              ← Vite HTML entry (EmailJS loaded here)
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            ← React DOM root
    ├── App.jsx             ← All components & data
    └── App.css             ← All styles
```

> All your original assets (images, certificates, resume PDF) should be placed
> in the **`public/`** folder so Vite serves them as static files.
> Mirror the same folder structure:
>
> ```
> public/
> ├── Personal_Info/
> │   ├── Manam_Sai_Karthik.jpg
> │   └── Manam_Sai_Karthik_Resume.pdf
> ├── Internship_Certificates/
> │   ├── SkillDzire.jpg
> │   ├── HexaInd.jpg
> │   ├── Techsonix.jpg
> │   └── DataValley_Workshop_Certificate.jpg
> └── certifications/
>     ├── Python(Basic)_HackerRank.png
>     ├── Aajhub_python.png
>     ├── Full_Stack_Oneroadmap.png
>     ├── Gen_AI.pdf
>     ├── ByteVerse_7.0_Hackathon.pdf
>     ├── CFB_season2.png
>     ├── Adobe_Hackthon.pdf
>     └── Agentic_AI_Hackthon.png
> ```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

## Deploying

Works out of the box on **Vercel**, **Netlify**, or **GitHub Pages** (with the `vite.config.js` base path set).

### Vercel / Netlify
Just connect your GitHub repo — they auto-detect Vite.

### GitHub Pages
Add `base: '/your-repo-name/'` to `vite.config.js` and run `npm run build`.

## EmailJS Setup
Your EmailJS init key is already included in `index.html`.  
Update `"Karthik's_service_id"` and `"karthik's_template_id"` in `App.jsx` → `Contact` component with your actual EmailJS service & template IDs.

## Enhancements Made
- ✅ Sticky auto-hide header with mobile hamburger menu
- ✅ Active section highlighting in nav (IntersectionObserver)
- ✅ Smooth fade-in animations on scroll for every card/section
- ✅ Glassmorphism card design with hover lift effects
- ✅ Timeline layout for Education section
- ✅ Responsive grid layout for all sections
- ✅ Back-to-top button
- ✅ Contact form with EmailJS + loading/success/error states
- ✅ Playfair Display + DM Sans typography pairing
- ✅ Peach × Lavender × Violet color palette (matches your original)
- ✅ All original data, links & certificates preserved
