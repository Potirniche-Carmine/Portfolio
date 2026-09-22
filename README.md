# Carmine Potirniche

A single-page portfolio in HTML, CSS, and a small amount of vanilla JavaScript. There are no production dependencies, external fonts, analytics, or model calls.

## Run

```sh
npm run dev
```

Open http://127.0.0.1:4173. Node 20 or later is sufficient. Package installation is not required.

```sh
npm run check
npm run build
```

The build copies the site to `dist/`. Use that folder as the output directory on a static host. `index.html` contains the full portfolio; `404.html` is the error page. The sitemap has one portfolio URL. The build also removes the four separate HTML pages from earlier builds.

## Coolify deployment

For the existing Nixpacks server application, use `npm run build` as the build command, `npm start` as the start command, and `3000` as the exposed internal port. Keep **Is it a static site?** disabled for this setup. Production serves only `dist/` and listens on `0.0.0.0:3000`, so the container proxy can reach it. If `PORT` is set, the exposed port must match it. `HOST` can override the bind address. Local development still defaults to `127.0.0.1:4173`.

Run `npm test` to check production access through another loopback address, public downloads, and exclusion of source files. Redeploy after pulling a server change; restarting the old image does not include new code.

## Content and controls

The page contains an introduction, Umbratic, UpDrafted, Infernal, Crytica, education, and contact details. There is no repeated name header or project index heading. Both Umbratic text links open umbratic.ai. The résumé links download only the PDF. The build excludes the LaTeX source and internal résumé files.

All seven project images are visible on the page. Each opens in an image viewer, with Previous and Next controls and Left/Right arrow keys. Escape, Close, or a click outside the dialog closes it and returns focus. The viewer also links to the complete original screenshot. CSS frames the review panels and connections detail without changing the source image. All images and text remain visible without JavaScript.

The design uses dark surfaces, system type, large screenshots, and simple rules between projects. It uses no animated marketing demo. The project apps show sample workspace content and fictional recruiting accounts, identified in captions. Reduced motion, reduced transparency, and increased contrast settings are supported.

## Resume

`resume/content.json` contains the resume text. `resume/template.tex` preserves the supplied LaTeX format: 11-point article, original margins, centered contact header, section rules, and list spacing. The template also contains the contact details.

Run `python tools/render-resume.py` with `pypdf` and Tectonic or pdfLaTeX installed. Use `--engine PATH` if the compiler is not on PATH. The command rebuilds the LaTeX source and compiles it to PDF. It requires one US Letter page, extractable text, and no LaTeX overflow before it updates the download and the delivery copy in `output/pdf/`. A local Tectonic compiler can also be stored at `.local/resume-tools/tectonic/tectonic.exe`.

The September 21, 2026 revision was compiled with Tectonic. Its rendered page image was checked against a render of the supplied LaTeX. The page image is `output/pdf/Carmine-Potirniche-Resume-page-1.png`. Rebuild it with `pdftoppm -r 160 -singlefile -png output/pdf/Carmine-Potirniche-Resume.pdf output/pdf/Carmine-Potirniche-Resume-page-1` after changing the resume.

Role dates, degree details, and historical performance figures came from the supplied resume. Project descriptions were checked against the local code and website. Crytica remains current, and Infernal is in development. See `resume/sources.md` for the evidence and limits of this review.

## Images

- `umbratic-workspace-dark.jpg`, `umbratic-code-dark.jpg`, `umbratic-document-dark.jpg`: the current desktop renderer, captured in dark mode on September 21, 2026. These use its existing preview environment with local sample content. The app components are unchanged. The sample test result shown in the conversation is demonstration content, not a result measured during this portfolio task. The desktop workspace build passed and the Electron app was launched with an isolated capture profile.
- `updrafted-messages.jpg`, `updrafted-connections.jpg`: the real recruiting app components and styles, run in an isolated local harness with fictional athletes, coaches, schools, and conversations. Auth, subscription, and API responses are local fixtures. No live accounts, database writes, or messages were used. The harness uses a fallback system font.
- `infernal-maelstrom.jpg`, `infernal-range.jpg`: native Computer captures from `Infernal-Windows-v0.1.0-2026-09-21`, at 2560 × 1440. Both show Maelstrom in the shooting range. No menu or older character renders are used.
- `social-card.png`: type and shapes rendered by `tools/create-social.py` with Pillow.

The screenshot files preserve the image bytes supplied by the Computer tools. They are not enlarged or generated. Browser captures are approximately 1920 × 1080. Local capture harnesses and older unused images are stored under the ignored `.local/` folder. The capture processes are stopped after the work.

## Checks

`npm run check` validates the single-page structure, local links, images, anchors, accessible references, and résumé files. Browser checks cover phone, tablet, and desktop widths, image viewer controls, keyboard and focus behavior, and horizontal overflow. Review captures are in the ignored `.local/review/` folder.
