# Portfolio · Daniel García

Landing page de mi perfil profesional como Software Architect. Es un sitio estático hecho con [Astro](https://astro.build) y desplegado en Cloudflare Workers (static assets).

## Stack y por qué

- **Astro 6 + TypeScript**: genera HTML estático sin JavaScript por default. Para un one-pager, Next.js con static export implicaría mandar el runtime de React sin necesidad.
- **CSS plano con design tokens** (`src/styles/global.css`): una sola página no justifica meter Tailwind. Los tokens cubren el spacing de 8px, la tipografía y el único color de acento. Cada color se declara una sola vez con `light-dark()`.
- **Tema light/dark**: por default sigue al sistema. El botón del header fija `data-theme` en `<html>` y lo guarda en `localStorage`. Un script inline en el `<head>` lo aplica antes del primer paint para que no haya flash. Sin JS el botón se oculta y la página sigue al sistema.
- **Fuentes self-hosted** (`@fontsource-variable`): no hay requests a Google Fonts, así que carga más rápido y no hay tracking de terceros.
- **JS mínimo**: solo el botón de "Copiar correo", con estados `idle → loading → success | error`.
- **Logos con [simple-icons](https://simpleicons.org)** (CC0): se insertan como SVG inline en build time, sin requests ni JS. Van en monocromo (`currentColor`) para respetar el único color de acento y verse bien en light y dark. Si una tecnología no tiene logo (DDD, WebSockets), se muestra un monograma.

Para agregar una tecnología al cronograma: escríbela en `evolution[].stack` en `profile.ts`. Si quieres su logo, mapea el mismo nombre en `techIcons.ts`.

## Estructura

```
src/
├─ data/profile.ts        ← TODO el contenido del sitio (single source of truth)
├─ data/techIcons.ts      ← nombre de tecnología → logo de simple-icons
├─ pages/index.astro      ← compone las secciones y oculta las que estén vacías
├─ layouts/BaseLayout.astro  ← <head>, SEO/OG, fuentes, skip link
├─ components/            ← una sección = un componente
│  ├─ Header, Hero, Section (wrapper numerado), Footer
│  ├─ Principles, Experience, Projects, Contact
│  └─ Evolution (cronograma del stack) + TechIcon, Stack (stack actual)
└─ styles/global.css      ← tokens + primitives (.btn, .tag-list, .container)
```

Para actualizar el contenido solo se edita `src/data/profile.ts`. Si un array (`projects`, `experience`, etc.) queda vacío, su sección y su link del nav desaparecen y la numeración se recalcula.

## Desarrollo local

Requiere Node `>=22.12`.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ para revisarlo
```

## Deploy a Cloudflare

El sitio corre en **Cloudflare Workers con static assets**: Cloudflare sirve `dist/` desde su CDN y no hay código de Worker. La config vive en `wrangler.jsonc`.

**Automático (Workers Builds)**: el proyecto de Cloudflare está conectado a este repo de GitHub. Cada push a `main` corre `npm run build` y después `npx wrangler deploy`. La versión de Node sale de `.nvmrc`.

**Manual**, por si hace falta desplegar desde local:

```bash
npx wrangler login   # una sola vez, abre el navegador
npm run deploy       # build + wrangler deploy
```

La URL de producción está en `site` dentro de `astro.config.mjs`, y Astro la usa para el canonical y `og:url`. Si se agrega un dominio propio, hay que actualizarla ahí.
