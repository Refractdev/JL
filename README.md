# Welcome to JL e Extensões

Next.js site for JL e Extensões (Vila Real).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Deploy (Netlify)

Static export to `/out` (configured in `netlify.toml`).

**In Netlify UI → Site settings → Build & deploy:**
1. Clear Publish directory if it still says `dist` (Vite leftover) — `netlify.toml` forces `out`
2. Trigger **Clear cache and deploy site**

Do not use the old `dist` folder.
