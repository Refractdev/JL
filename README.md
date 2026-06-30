# JL e Extensões — Site Oficial

Site estático profissional do estúdio de beleza **JL e Extensões** em Vila Real. Construído com [Astro](https://astro.build) (SSG), React islands para interatividade e SEO estático por página.

## Stack

- **Astro 5** — HTML estático, meta tags e JSON-LD no build
- **React** — Galeria, slider antes/depois, menu mobile, formulário
- **Tailwind CSS** — design system dourado champagne
- **Sharp** — otimização de imagens (WebP + srcset)

## Comandos

```bash
npm install
npm run optimize-assets   # comprime imagens → public/images/
npm run dev               # http://localhost:4321
npm run build             # gera dist/ (otimiza assets se necessário)
npm run preview           # pré-visualiza o build
```

## Deploy

O output é estático em `dist/`. Compatível com **Vercel**, **Netlify** e **Cloudflare Pages**.

```bash
npm run build
# Publicar a pasta dist/
```

Domínio de produção: `https://xn--jlextenses-9bb.com`

## Estrutura

```
src/
├── layouts/BaseLayout.astro   # SEO, header, footer
├── pages/                     # Rotas estáticas
├── components/site/           # Secções .astro (zero JS)
├── components/islands/        # React hidratado sob demanda
├── lib/seo.ts                 # Meta + structured data
└── styles/global.css          # Tokens de marca
public/
├── images/                    # Imagens otimizadas (geradas)
└── videos/                    # Vídeos do hero/galeria
```

## Performance

- Hero: imagem estática em mobile, vídeo só em desktop (`client:media`)
- Galeria e slider: `client:visible` (JS só ao scroll)
- Imagens: JPEG responsivo + WebP, lazy loading
- Sem SPA — cada página é HTML completo para SEO

## Contacto do negócio

- WhatsApp: +351 935 449 306
- Morada: Av. Gen. Alves Roçadas 15, 5000-687 Vila Real
