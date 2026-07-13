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

Configured via `netlify.toml` with `@netlify/plugin-nextjs`.

- Build command: `npm run build`
- Node: 20
- Plugin: Essential Next.js

In the Netlify UI, clear any old **Publish directory** set to `dist` (Vite leftover). The Next.js plugin manages output automatically.
