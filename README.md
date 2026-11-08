# Carmine Potirniche

A single-page portfolio in HTML, CSS, and vanilla JavaScript. Geist typography is self-hosted. There are no third-party requests, analytics, or model calls at runtime.

## Run and deploy

Run `npm run dev` to preview on localhost:4173. Verify with `npm run check`, `npm test`, and browser checks at desktop and phone widths. `npm run build` stages only public files into `dist/`.

The production target is Cloudflare Pages project `carmine-portfolio`, with `carminepotirniche.com` and `www.carminepotirniche.com` as custom domains. Cloudflare builds and deploys `main` through the connected GitHub installation. Deploy `dist/` with Wrangler for a manual release. The www address redirects to the apex through a Cloudflare Single Redirect rule that preserves paths and query strings. `_redirects` handles the legacy page URLs. The site needs no Node server or VPS in production. The local Node server remains for preview and verification.

## Content and design

Two substantial personal projects lead the portfolio, Umbratic and GamePack, followed by Crytica Security experience. Each project has visible imagery, a concise architecture explanation, optional engineering details, and links to source or the project website. The full résumé remains available separately.

The design uses self-hosted Geist, large personal typography, a muted green glass navigation surface, soft refracted edges, and real product captures. Native scrolling, focus states, reduced motion, reduced transparency, and increased contrast are supported. No runtime third-party requests, analytics, or animation dependencies are required.

Screenshots open in a keyboard-accessible viewer with arrow navigation, Escape, and focus return. Without JavaScript they open as ordinary image links. Umbratic captures were refreshed from the actual development renderer on November 8, 2026 with clearly identified sample content. GamePack retains its authentic native app capture.

## Resume

`resume/content.json` holds the text; `resume/template.tex` holds the layout and contacts. `resume/Carmine-Potirniche-Resume.tex` is the existing document edited in Codex's native LaTeX editor. The user-supplied layout retains its fonts, margins, spacing, contact header, and section order. Crytica is the sole Experience entry; Umbratic, UpDrafted, and GamePack are Projects. The homepage curates Umbratic and GamePack. The October 12 revision adds confirmed RHEL 9 deployment, testing, leadership coordination, and AI-agent orchestration experience. The public resume download has been refreshed from the current source for resumed applications.

Validate source edits with the built-in compiler. When a PDF export is authorized, `python tools/render-resume.py --engine PATH` rebuilds the source, verifies one Letter page, extractable text, and no overflow, and updates the portfolio download plus `output/pdf/`. It needs `pypdf` and Tectonic or pdfLaTeX. Render the preview with:

```sh
pdftoppm -r 160 -singlefile -png output/pdf/Carmine-Potirniche-Resume.pdf output/pdf/Carmine-Potirniche-Resume-page-1
```

Dates, degree details, and historical performance figures came from the supplied resume. Repository code and authored skills support the project descriptions. Crytica agent use reflects the user's confirmed coding work on the console and installer. See `resume/sources.md` for evidence and scope.

## Assets

- The active Umbratic screenshots are current November 8, 2026 renderer captures with sample content. Earlier captures remain unreferenced historical assets.
- GamePack's screenshot is the unaltered native macOS capture from its public README (`docs/assets/review.png`, added October 12, 2026). It shows sample Earth footage, frame drawings, demo comments and replies, and the review timeline. The project is in active development. Its portfolio description is grounded in the current review guide, development guide, native hosts, and Rust storage implementation.
- UpDrafted screenshots show real components and styles in an isolated harness with fictional recruiting accounts. API, authentication, and subscription responses are fixtures; no live messages or database writes were used.
- Infernal screenshots are native captures from `Infernal-Windows-v0.1.0-2026-09-21`, showing Maelstrom in the shooting range.
- `hero-metal.jpg` and its mobile variant were generated for the earlier hero revision. They are no longer referenced by the page; the current hero shows the authentic product capture directly.
- `social-card.png` is generated from text and shapes by `tools/create-social.py`.
- The favicon is an abstract split square, with black/white contrast adapted to the browser theme. `tools/create-favicon.py` generates the SVG and a 32-pixel PNG fallback from the same geometry. Both the portfolio and error page use it.

Original screenshot bytes are preserved. CSS crops and frames images for layout. Geist 1.7.2 and its license are in `assets/fonts/`. GSAP 3.15.0 and ScrollTrigger are in `assets/vendor/` with their license headers. To refresh vendor files, run `npm ci --legacy-peer-deps --ignore-scripts` and copy the corresponding package files; Next.js peer dependencies are unnecessary for this vanilla site.

## Checks

`npm run check` verifies page structure, references, accessibility IDs, and resume files. `npm test` verifies production proxy reachability, public downloads, and source-file exclusion. Browser review covers desktop and phone layouts, project controls, image navigation, focus return, and horizontal overflow. Local review captures can be stored in ignored `.local/review/`.

The revised source passes the native compiler and a temporary non-layout page-count assertion; the delivered source contains no added assertion. Build and server checks pass. Earlier PDF export and Lighthouse measurements are recorded with their dates in `resume/sources.md`; they precede the latest wording changes. Reports are in `.local/review/`.
