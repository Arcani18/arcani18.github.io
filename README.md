# Portfolio · Daniel García

Landing page de mi perfil profesional como Software Architect. Es un sitio estático hecho con [Astro](https://astro.build) y se publica en GitHub Pages con GitHub Actions.

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
└─ styles/global.css      ← tokens + primitives (.btn, .tag, .container)
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

## Deploy a GitHub Pages

1. Crea el repo en GitHub y haz push a `main`.
2. En el repo ve a **Settings → Pages → Build and deployment → Source** y elige **GitHub Actions**.
3. Cada push a `main` corre `.github/workflows/deploy.yml`, que hace el build y lo publica.

El workflow toma `origin` y `base_path` de `actions/configure-pages` y se los pasa a Astro (`SITE` / `BASE_PATH`), así que **no hay que tocar `astro.config.mjs`** sin importar el nombre del repo:

| Nombre del repo         | URL final                              |
| ----------------------- | -------------------------------------- |
| `<usuario>.github.io`   | `https://<usuario>.github.io/`         |
| `portfolio` (o cualquiera) | `https://<usuario>.github.io/portfolio/` |

Para probar localmente el build con base path de project site:

```bash
MSYS_NO_PATHCONV=1 BASE_PATH=/portfolio npm run build && npm run preview
```

> En Windows con Git Bash (o con npm configurado con `script-shell` = bash), MSYS convierte `/portfolio` en `C:/Program Files/Git/portfolio`. `MSYS_NO_PATHCONV=1` lo evita. En GitHub Actions (Ubuntu) no aplica.
