# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deployment (Vercel)

This project is pre-configured for deployment to Vercel.

### 1. Prerequisites
- Node.js 18+ (Vercel build uses Node 18/20; `vercel.json` pins 20)
- A Vercel account (`https://vercel.com`)
- Vercel CLI (optional for local deploy)

### 2. Production Build
```bash
npm install
npm run build
```
The production assets are output to `dist/`.

### 3. Deploy via Vercel CLI (optional)
```bash
npm install -g vercel
vercel login
vercel        # first (preview) deployment
vercel --prod # production deployment
```

### 4. Automatic Git Deploys
1. Push your changes to GitHub.
2. Import the repository in Vercel dashboard.
3. Build command: `npm run build` (auto-detected)
4. Output directory: `dist` (auto-detected)

### 5. Static Assets / Data
- The `public/results.json` file is copied to the root of `dist` by Vite and fetched with `fetch('/results.json')`.
- Keep JSON numbers in English for valid parsing; convert to Bengali only in UI.

### 6. Environment Variables (None Yet)
If you add API keys later, define them in Vercel dashboard and access via `import.meta.env.VITE_*` variables.

### 7. SPA Routing
Currently navigation is state-based (no React Router). No rewrites needed. If you add client routes later, create a `vercel.json` with a SPA fallback excluding `results.json`.

### 8. Performance Tips
- Use compressed images (WebP/AVIF) for banners.
- Avoid large inline SVG sets; consider icon libs if needed.
- Run `npm run build` locally and check bundle size.

### 9. Preview Locally
```bash
npm run preview
```
Serves the built `dist` folder for a production-like test.

