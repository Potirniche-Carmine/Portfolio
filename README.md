# Carmine Potirniche

A single-page portfolio in HTML, CSS, and vanilla JavaScript. Geist typography is self-hosted. There are no third-party requests, analytics, or model calls at runtime.

## Run and deploy

Run `npm run dev` to preview on localhost:4173. Verify with `npm run check`, `npm test`, and browser checks at desktop and phone widths. `npm run build` stages only public files into `dist/`.

The production target is Cloudflare Pages project `carmine-portfolio`, with `carminepotirniche.com` and `www.carminepotirniche.com` as custom domains. Cloudflare builds and deploys `main` through the connected GitHub installation. Deploy `dist/` with Wrangler for a manual release. The www address redirects to the apex through a Cloudflare Single Redirect rule that preserves paths and query strings. `_redirects` handles the legacy page URLs. The site needs no Node server or VPS in production. The local Node server remains for preview and verification.

## Content and design

Two substantial personal projects lead the portfolio, Umbratic and GamePack, followed by Crytica Security experience and a concise UpDrafted entry. Each project has visible imagery, a concise architecture explanation, optional engineering details, and links to source or the project website. The full résumé remains available separately.

The design uses self-hosted Geist, more openly spaced personal typography, a neutral silver navigation surface, a continuous translucent canvas, and real product captures. The introduction emphasizes secure systems and architecture; decorative eyebrow labels are omitted. Native scrolling, focus states, reduced motion, reduced transparency, and increased contrast are supported. No runtime third-party requests, analytics, or animation dependencies are required.

Screenshots open in a keyboard-accessible viewer with arrow navigation, Escape, and focus return. Without JavaScript they open as ordinary image links. Umbratic captures were refreshed from the actual development renderer on November 8, 2026 with clearly identified sample content. GamePack retains its authentic native app capture.

## Resume

`resume/content.json` holds the text; `resume/template.tex` holds the layout and contacts. `resume/Carmine-Potirniche-Resume.tex` is the complete generated LaTeX document. The final November 10, 2026 revision keeps the original single-column structure, margins, list spacing, and section order, with Helvetica-style typography, 10.5-point body text, bold headings, and a two-line contact header including the portfolio URL. Crytica remains the sole Experience entry, with its supplied wording unchanged. Umbratic leads Projects with four bullets, followed by GamePack with three and UpDrafted with two. The homepage refines the existing silver design, emphasizes systems architecture, and presents the supplied Crytica security and delivery results.

`python tools/render-resume.py --engine PATH` rebuilds the source, verifies one US Letter page, extractable text, and no LaTeX overflow, and refreshes the portfolio PDF download. It needs `pypdf` and Tectonic or pdfLaTeX. Render the build PDF with Poppler for visual inspection. The current source, content data, and download are synchronized.

Project descriptions were checked against implementation files and release workflows. GamePack's October 2026 start is supported by its first repository commits; Umbratic and UpDrafted dates and degree details remain supplied information. Historical Umbratic benchmark claims were replaced with current implementation evidence. See `resume/sources.md` for reviewed files, research, and validation scope.

## Assets

- The active Umbratic screenshots are current November 8, 2026 renderer captures with sample content. Earlier captures remain unreferenced historical assets.
- GamePack's screenshot is the unaltered native macOS capture from its public README (`docs/assets/review.png`, added October 12, 2026). It shows sample Earth footage, frame drawings, demo comments and replies, and the review timeline. The capture is labeled with its October 2026 date. Current copy is grounded in native hosts, Rust storage, the updater, and CI/release workflows; it does not imply the screenshot depicts every current feature.
- UpDrafted screenshots show real components and styles in an isolated harness with fictional recruiting accounts. API, authentication, and subscription responses are fixtures; no live messages or database writes were used.
- Infernal screenshots are native captures from `Infernal-Windows-v0.1.0-2026-09-21`, showing Maelstrom in the shooting range.
- `hero-metal.jpg` and its mobile variant were generated for the earlier hero revision. They are no longer referenced by the page; the current hero shows the authentic product capture directly.
- `social-card.png` is generated from text and shapes by `tools/create-social.py`.
- The favicon is an abstract split square, with black/white contrast adapted to the browser theme. `tools/create-favicon.py` generates the SVG and a 32-pixel PNG fallback from the same geometry. Both the portfolio and error page use it.

Original screenshot bytes are preserved. CSS crops and frames images for layout. Geist 1.7.2 and its license are in `assets/fonts/`. GSAP 3.15.0 and ScrollTrigger are in `assets/vendor/` with their license headers. To refresh vendor files, run `npm ci --legacy-peer-deps --ignore-scripts` and copy the corresponding package files; Next.js peer dependencies are unnecessary for this vanilla site.

## Checks

`npm run check` verifies page structure, references, accessibility IDs, and resume files. `npm test` verifies production proxy reachability, public downloads, and source-file exclusion. Browser review covers desktop and phone layouts, project controls, image navigation, focus return, and horizontal overflow. Local review captures can be stored in ignored `.local/review/`.

The November 10 resume compiles to one Letter page with no overflow. PDF text extraction and a rendered page were reviewed. Earlier measurements and revisions remain dated in `resume/sources.md`; they are historical evidence rather than results for the current site. Publication uses the existing GitHub-to-Cloudflare Pages deployment workflow.
