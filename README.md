# Carmine Potirniche

A single-page portfolio in HTML, CSS, and vanilla JavaScript. Geist typography and GSAP motion are self-hosted. There are no third-party requests, analytics, or model calls at runtime.

## Run and deploy

```sh
npm run dev
npm run check
npm test
```

Open http://127.0.0.1:4173. Node 20 or later is sufficient; the browser assets are committed, so package installation is not needed to preview or build.

`npm run build` copies the public site to `dist/`. For the existing Coolify Nixpacks application, use `npm run build`, `npm start`, and internal port `3000`. Keep **Is it a static site?** disabled. Production serves only `dist/` and listens on `0.0.0.0:3000`. `PORT` and `HOST` can override these values. Development defaults to `127.0.0.1:4173`.

## Content and design

The first screen uses Carmine's name, current roles, an unaltered Umbratic workspace capture, and three historical measured outcomes. It avoids positioning slogans and decorative image framing. Architecture, implementation, integration, and runtime validation lead the project copy. Agent engineering appears as a concrete development practice: specialized tasks, custom skills, patch review, and automated feedback loops. A compact project explorer covers Umbratic, UpDrafted, and Infernal. Crytica's console and installer work, the engineering workflow, education, and contact follow. There are no eyebrow labels above headings or project names.

The personal typographic hero, Geist type, restrained controls, and project accordion draw on the requested apple-design, gpt-taste, and design-taste-frontend skills. The initial design seed was 126. Short image entry, scroll-linked text emphasis, and a brief desktop heading pin use GSAP and ScrollTrigger. No long pinned scene or marquee delays the recruiter scan. Light/dark system preferences, reduced motion, reduced transparency, increased contrast, keyboard focus, and mobile layouts are supported.

Project buttons support arrow keys, Home, and End. Engineering details expand on demand. Screenshots open in a viewer with Previous/Next, Left/Right keys, Escape, a Close button, an original-image link, and return of focus. Without JavaScript, all project text remains visible and image links open the original files. Screenshots depict sample content, identified in the viewer captions.

## Resume

`resume/content.json` holds the text; `resume/template.tex` holds the layout and contacts. `resume/Carmine-Potirniche-Resume.tex` is the existing document edited in Codex's native LaTeX editor. The latest user-supplied template is preserved exactly: preamble, fonts, macros, margins, spacing, contact links, section order, and bullet count. Only the wording has changed. Its header contains only the name and contact details. The new source is for the user to compile; the public PDF still contains the prior approved export and has not been replaced in this wording revision.

Validate source edits with the built-in compiler. When a PDF export is authorized, `python tools/render-resume.py --engine PATH` rebuilds the source, verifies one Letter page, extractable text, and no overflow, and updates the portfolio download plus `output/pdf/`. It needs `pypdf` and Tectonic or pdfLaTeX. Render the preview with:

```sh
pdftoppm -r 160 -singlefile -png output/pdf/Carmine-Potirniche-Resume.pdf output/pdf/Carmine-Potirniche-Resume-page-1
```

Dates, degree details, and historical performance figures came from the supplied resume. Repository code and authored skills support the project descriptions. Crytica agent use reflects the user's confirmed coding work on the console and installer. See `resume/sources.md` for evidence and scope.

## Assets

- Umbratic screenshots show the real desktop renderer in dark mode, captured September 21, 2026, with local sample content. Sample conversation test results are demonstration content.
- UpDrafted screenshots show real components and styles in an isolated harness with fictional recruiting accounts. API, authentication, and subscription responses are fixtures; no live messages or database writes were used.
- Infernal screenshots are native captures from `Infernal-Windows-v0.1.0-2026-09-21`, showing Maelstrom in the shooting range.
- `hero-metal.jpg` and its mobile variant were generated for the earlier hero revision. They are no longer referenced by the page; the current hero shows the authentic product capture directly.
- `social-card.png` is generated from text and shapes by `tools/create-social.py`.
- The favicon is an abstract split square, with black/white contrast adapted to the browser theme. `tools/create-favicon.py` generates the SVG and a 32-pixel PNG fallback from the same geometry. Both the portfolio and error page use it.

Original screenshot bytes are preserved. CSS crops and frames images for layout. Geist 1.7.2 and its license are in `assets/fonts/`. GSAP 3.15.0 and ScrollTrigger are in `assets/vendor/` with their license headers. To refresh vendor files, run `npm ci --legacy-peer-deps --ignore-scripts` and copy the corresponding package files; Next.js peer dependencies are unnecessary for this vanilla site.

## Checks

`npm run check` verifies page structure, references, accessibility IDs, and resume files. `npm test` verifies production proxy reachability, public downloads, and source-file exclusion. Browser review covers desktop, tablet, and phone widths, project controls, image navigation, focus return, and horizontal overflow. Local review captures can be stored in ignored `.local/review/`; the final desktop and mobile first-screen captures are in `output/portfolio-preview.jpg` and `output/portfolio-preview-mobile.jpg`.

The revised source passes the native compiler and a temporary non-layout page-count assertion; the delivered source contains no added assertion. Build and server checks pass. Earlier PDF export and Lighthouse measurements are recorded with their dates in `resume/sources.md`; they precede the latest wording changes. Reports are in `.local/review/`.
