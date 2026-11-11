# Resume source notes

Revised through October 5, 2026. The latest pasted LaTeX is the format source. Software Engineer remains the professional identity, with systems design and end-to-end engineering ownership leading the copy. Agent engineering is demonstrated through implementation, development workflows, and technical skills. Earlier dates and measured outcomes are retained with the limits recorded below.

## Agent engineering evidence reviewed in this revision

- `../Umbratic/packages/runner/src/loop_runtime.rs`: repeated model/tool execution, failure and repeated-call limits, cancellation, mid-run steering, and saved conversation state after settled steps. This is a bounded tool loop, not a claim of unattended perpetual execution.
- `../Umbratic/packages/runner/src/tool_scheduling.rs`: concurrent independent tool operations, with barriers around commands, patches, and conflicting file access.
- `../Umbratic/packages/runner/src/compaction.rs`, `context.rs`, and `conversation_state.rs`: context compaction, bounded retained tool output, and durable summary/conversation restoration.
- `../Umbratic/packages/runner/src/skill_preflight.rs` and `apps/desktop/src/main/skills.ts`: skill discovery, explicit skill loading before model requests, cached skill contents, and lifecycle events.
- `../Umbratic/apps/desktop/src/main/system-skills/`: reusable product skills. The skill-creator, Git worktree, and spreadsheet skills were read for triggering, progressive references, isolation, deterministic tooling, and output checks.
- `../Umbratic/apps/desktop/src/main/telemetry.ts` and `telemetrySync.ts`: operational event summaries and redacted telemetry delivery.
- `../Infernal/.agents/skills/agent-orchestration/SKILL.md`, `building-and-verifying/SKILL.md`, and the skill-writing README: bounded specialists, owned files, shared-editor coordination, patch integration, real gameplay inspection, and test-and-fix workflows.
- `../RobloxGames/.agents/skills/roblox-studio-workflow/SKILL.md`, `roblox-prediction-replay/SKILL.md`, and `roblox-live-services/SKILL.md`: reusable workflows for source identity, fresh native sessions, prediction/replay boundaries, receipts, persistence, and meaningful validation.

The user identifies these projects and authored skills as agent-assisted work. Installed third-party reference skills are not claimed as original authored work. The portfolio describes multi-agent development as the user's engineering workflow, not as an unverified built-in Umbratic feature. Automation refers to repeatable build/release/check pipelines and feedback loops; no scheduler, continuous unattended service, or new performance gain is implied.

## Umbratic

Local repository: `../Umbratic`, commit `c12f5d1`.

- `README.md`: Electron/React desktop, Rust runner, Go gateway, local llama.cpp, and company vLLM.
- `packages/runner/src/tools.rs`, `context.rs`, and `permission.rs`: workspace tools, context compression, and permissions.
- `apps/desktop/src/main/sshTransport.ts`, `worktreeOps.ts`, and `reviewFiles.ts`: remote task execution and code review.
- `infrastructure/veil-console/internal/rag/corpus.go` and `infrastructure/veil/internal/rag/rag.go`: document ingestion and retrieval with team filters. `rag_test.go` checks that filters exclude other teams.
- `infrastructure/veil/internal/identity/store.go` and the Console access and model services: enrollment, device revocation, and model management.
- `apps/desktop/src/main/artifacts/worker/engine.ts`: document, presentation, and PDF creation and editing. `xlsx/sidecar.ts` calls the Rust spreadsheet engine.
- `packages/artifacts/tests/dependency_round_trip.rs` and `apps/desktop/tests/artifact-*.test.ts`: file preservation and edit checks.
- Local `../Website` source and the [Umbratic website](https://umbratic.ai/) support the product description. The website examples are scripted; they are not performance evidence.

The search result of 15 seconds to 16 ms, 96% lower cold start time, and 88% lower idle memory came from the supplied resume. The portfolio describes these as results from specific internal workflows. They were retained as historical results of the native rewrite, not measured again. The older 350+ test count was removed because current test totals were not measured in this review.

## Crytica Security

The supplied resume and the local portfolio are the sources. No Crytica code repository was available in the provided workspace. The role, dates, scope, 9+ ledgers, 85% synchronization reduction, deployment time, and 100+ tests were retained from the supplied information. These figures were not measured again.

On October 2, 2026, the user confirmed coding-agent use in general software work, a full administration/configuration console, and an end-to-end installer. The copy reflects that scope. It does not claim Crytica has an agent platform, parallel agent orchestration, or a new measured productivity benefit from agents.

## UpDrafted

Local repository: `../updrafted`, commit `4f03112` dated May 14, 2026. The supplied May 2025 to May 2026 dates were retained.

- `apps/web` and `apps/admin`: separate recruiting and administration apps.
- `apps/web/app/(discover)/api/discover/route.ts`: sport, position, and other profile filters.
- `apps/admin/lib/verifications.ts` and `reports.ts`: verification and moderation workflows, including transfer portal verification.
- `packages/db/src/schema.ts`: 14 declared PostgreSQL row-level security policies. `apps/web/lib/db-access.ts` and `apps/admin/lib/db-access.ts` set user and role context inside transactions.
- `apps/web/utils/encryption.ts`: AES-256-GCM for stored message content. This is server-side encryption, not end-to-end encryption.
- `apps/web/app/api/webhooks/stripe/route.ts`: signature validation and subscription events. `apps/web/lib/subscription.ts` and the usage-limit routes contain plan features and limits.
- `packages/storage/src/config.ts`: Cloudflare R2 storage. `.github/workflows/deploy.yml` builds and deploys Docker images with GitHub Actions.

These statements describe code present in the repository. No live service, customer count, revenue, or production security guarantee is claimed.

## Infernal

Local repository: `../Infernal`, commit `c499a0b`, plus existing local changes. It is described as in development.

- `Assets/_Infernal/Scripts/Runtime/Vision/ServerVisibility.cs` and `TeamVision.cs`: server and team visibility logic.
- `Assets/_Infernal/Scripts/Runtime/Net/PlayFabServer.cs` and `DedicatedServerLifespan.cs`: dedicated server allocation and lifecycle.
- `Assets/_Infernal/Scripts/Runtime/Backend/Backend.cs`: PlayFab matchmaking.
- FishNet networking and Unity/C# are present in the project code and packages.

## Validation from the initial revision

On October 2, 2026, the final source compiled successfully in Codex's built-in LaTeX editor. The downloadable PDF was exported with Tectonic 0.17.0; the build verified one US Letter page, extractable text, and no LaTeX overflow. Poppler rendered the final page at 160 DPI for visual inspection. The last text baseline leaves approximately 40 points (0.55 inch) at the bottom, with the original font sizes preserved. Delivery and portfolio-download PDFs are byte-identical, and the generated LaTeX matches `content.json` and `template.tex`.

Portfolio checks passed for local links, anchors, accessible references, the production server, source-file exclusion, and the PDF download. Browser review covered desktop, 768-pixel tablet, 390-pixel phone, and 320-pixel narrow-phone widths with no horizontal overflow. All seven images loaded; image navigation, Escape dismissal, and return of focus were exercised. No browser console errors or warnings were observed. Project repositories were read as evidence; their full application/game test suites were not run for this portfolio and document task.

## Follow-up design revision

The user requested removal of Rink Rumble, faster portfolio scanning, the three named design skills, and no resume subheader under the name. Rink Rumble was removed from the resume content and portfolio. Agent engineering remains distributed through supported experience and skills.

The open LaTeX source was edited in place and validated with the native compiler, including a one-page shipout guard. The user explicitly authorized refreshing the existing downloadable PDF. T1 encoding was added after visual inspection caught Helvetica falling back to regular Latin Modern under XeTeX. The exported PDF must pass the existing one-page, Letter-size, overflow, and extractable-text checks.

The portfolio now places the professional identity, agent engineering, a real product image, and three historical outcomes in the first desktop viewport. Project details are progressively disclosed in a compact explorer. Authentic screenshot bytes remain unchanged; the generated graphite backdrop is decorative. Motion is brief and responds to reduced-motion settings.

## Verification before the latest wording revision, October 5, 2026

The same open LaTeX source passes the native compiler. Source generation matches `content.json` and `template.tex`. The downloadable, delivery, and built-site PDFs are byte-identical, with one Letter page, no subheader, no Rink Rumble, and 41.8 points below the last text. Visual inspection confirms the intended sans-serif regular, bold, and italic fonts.

The first-screen proof strip ends at 684 pixels in a 1280 by 720 desktop viewport and 808 pixels on a 390 by 844 phone, without horizontal overflow. The prior gallery and keyboard checks covered all six images, project selection/collapse, Escape, and focus return. The final mobile asset selects the 45 KB image. Build, references, production reachability, download, and source-exclusion checks pass.

Lighthouse 13.5.0 local reports: desktop 100 performance, 100 accessibility, 100 best practices, 100 SEO; mobile 91 performance, 100 accessibility, 100 best practices, 100 SEO. LCP is 0.7 seconds desktop and 3.4 seconds simulated mobile, with zero layout shift and total blocking time. The desktop report was run October 5; the mobile report was run October 2, before the final small contrast-preserving project-entry adjustment and font MIME addition. These results describe local lab tests, not deployed-site field performance. Source updates are local; no publication or deployment was performed.


## Latest wording and hero revision, October 5, 2026

The user's new pasted LaTeX template replaces the previous sans-serif layout. Its preamble, font settings, macros, margins, spacing, contact header, section order, and bullet count are preserved exactly. The new content emphasizes architecture, implementation ownership, agent task design, integration, and runtime validation. No human team size or Senior Engineer title is claimed.

The saved source passes the native compiler. A temporary non-layout shipout assertion also passed, confirming that the source stays within one page; the assertion was then removed, and the final original-format source was compiled successfully again. The user requested LaTeX to compile personally, so no separate PDF was exported. The site PDF remains the prior approved version.

All eyebrow labels were removed. The final hero uses the user's name, specific current roles, and the authentic Umbratic interface directly. The generated backdrop, tilted framing, blue slogan, and second pill button were removed. The first-screen results end at 662 pixels on a 1280 by 720 desktop and 823 pixels on a 390 by 844 phone. Browser checks at 320, 390, 768, 1024, and 1280 pixels show no horizontal overflow or clipped name text. The screenshot viewer opens, Escape closes it, and focus returns to the initiating control. No browser warnings or errors were observed during review.

The final build and 35-reference check pass. The existing two server tests passed during this revision. Earlier Lighthouse measurements above precede the final hero change and were not repeated. These changes remain local.


## User correction, October 12, 2026

The user supplied the current LaTeX source and clarified that Umbratic is now a project rather than a separate company, describing their employer as having effectively bought it. The resume now lists Crytica as the sole Experience entry and moves Umbratic into Projects. No formal acquisition, ownership transfer date, legal transaction, or new employer responsibility is asserted. Wording is simplified, GamePack is omitted, and the existing LaTeX layout is retained. Dates and historical metrics are unchanged. This revision updates the LaTeX and content data only; the public PDF has not been regenerated. Earlier tailored application drafts were archived as superseded before any application was submitted.

The user then requested GamePack in place of Infernal on the resume while keeping Infernal on the portfolio, and asked to finish the resume before applications. The open source now contains Crytica under Experience and Umbratic, UpDrafted, and GamePack under Projects. GamePack content comes from the existing portfolio and its documented React Native/TypeScript, native playback, and Rust/SQLite architecture. The native compiler succeeded with a temporary shipout guard rejecting any second page; the guard was removed afterward. No new standalone PDF was exported after this instruction. Application drafts and earlier PDFs are superseded; no applications have been submitted.

## Crytica ownership expansion, October 12, 2026

The user confirmed responsibility for a complete installer with end-to-end testing, the related administration console, engineering and planning, AI-agent coordination, and managing leadership expectations. Crytica now has five bullets separating engineering ownership, console implementation, installer/testing, AI-assisted development, and the retained synchronization result. The user described hundreds of agents; the precise unit (agents, sessions, or runs) remains a clarification question and is not yet quantified in the resume. Operating systems, deployment scale, adoption, and release-test scenarios are also pending clarification. The prior 100+ test count, under-five-minute deployment, and synchronization metrics remain attributed to the earlier supplied resume. The source passed the native compiler with a temporary guard that rejects a second page, then the guard was removed. Fonts, margins, and section formatting remain unchanged. No separate PDF was exported.

The user clarified that the Crytica installer targets RHEL 9 and consists of a bootstrap script and installer wizard deploying the complete product across 3 to 12 servers. End-to-end validation exercises actual user inputs using black-box testing. The user explicitly confirmed orchestrating hundreds of AI agents and subagents, personally reviewing and validating the work, and owning requirements, architecture, milestones, demos, release readiness, and changing priorities with leadership. These statements are now included in five concise Crytica bullets. The agent count refers to work across the project; no simultaneous concurrency level is claimed. Customer use is planned, and no existing customer adoption or customer deployment count is asserted. No further confidential details were requested. The expanded final wording passed the native compiler with the one-page guard; that temporary guard was removed.

At the user's request, the overlapping ownership and console implementation bullets were combined into one accomplishment emphasizing architecture, development, requirements, milestones, and release readiness with leadership. Crytica now has four bullets. This wording introduces no new factual claims and does not describe customer use. Formatting and the remaining resume content are unchanged.

## Portfolio alignment, October 12, 2026

The user requested portfolio updates to match the confirmed AI-assisted engineering work and authorized resuming applications. The hero, metadata, and social preview now describe Umbratic as a project created by Carmine; the Crytica section includes the confirmed RHEL 9 installer, 3–12 server deployment, leadership coordination, hundreds of AI agents across the project, and automated/black-box testing. Infernal remains on the portfolio. No customer use is claimed. The current public-download PDF was regenerated, verified as one Letter page with extractable text and no overflow, and visually inspected. The native LaTeX compiler also succeeded. Site build and the 40-reference checker passed; the updated hero and Crytica sections were visually checked at 1280px without horizontal overflow. These checks were completed before publication.


## Resume and portfolio revision — November 10, 2026

The supplied LaTeX attachment is the authority for personal details, education, dates other than GamePack, and Crytica. Crytica's entire Experience block is preserved verbatim. Umbratic remains a personal project. GamePack leads the projects section and expands from one bullet to three; Umbratic has three bullets and UpDrafted two. Historical Umbratic performance figures were omitted in favor of current architecture, agent execution, and access-control evidence; they were not remeasured or disputed.

### Implementation evidence reviewed

- GamePack: `README.md`, `docs/development.md`, `docs/ci.md`, `CHANGELOG.md`, and `.github/workflows/release.yml` establish the shared React Native/TypeScript UI, native playback, four OS/architecture build targets, signing/notarization, and release validation. The first repository commits are dated October 8, 2026, supporting the October project date.
- GamePack: `crates/gamepack-core/src/store.rs` implements SQLite WAL/full synchronization, atomic posting under a write transaction, stable draft IDs that return an existing comment on retry, incremental BLAKE3 imports, and managed media identity. `native/macos/GPUpdater.mm` and `apps/windows/GamePack/Updater/update-core.psm1` check SHA-256 digests; update helpers and regression fixtures implement installation recovery. These support durability and release-engineering descriptions, not an assertion of audit certification or measured reliability.
- Umbratic: `packages/runner/src/tool_scheduling.rs` separates conflicting filesystem operations and runs independent tools concurrently; `loop_runtime.rs` supports steering and continued tool execution. `permission.rs` handles approval requests and one-use responses. Context and saved-state modules, also documented in prior evidence above, support compaction and restoration.
- Umbratic: `docs/cloud-runtimes.md` distinguishes the local Rust harness from integrations with provider-owned Codex/Claude Code runtimes. Provider runtimes retain their own execution and permission behavior; the portfolio now makes that distinction explicit.
- Umbratic: `infrastructure/veil/internal/rag/rag_test.go` checks retrieval filtering against cross-team access; `infrastructure/veil/internal/identity/store.go` contains enrollment and revocation. Artifact support is documented in the current README and prior implementation evidence above.
- UpDrafted: current local source at `../Updrafted` confirms 14 `pgPolicy` declarations in `packages/db/src/schema.ts`, message AES-256-GCM in `apps/web/utils/encryption.ts`, Stripe webhook handling, and Docker/Cloudflare deployment workflows. These are implementation claims; no customers, revenue, security certification, or end-to-end encryption is asserted.
- Infernal and Rink Rumble were considered from their project documentation. Their gameplay/networking work adds breadth but was not included in the constrained one-page software/security resume. No game or application source was modified, and full project test suites were not run for this document task.

### External research, accessed November 10, 2026

- [Harvard MCS resume guidance](https://careerservices.fas.harvard.edu/resources/create-a-strong-resume/): concise, active, specific, factual language; consistent formatting; prioritize relevant accomplishments and check the exported document.
- [USAJOBS resume guidance](https://help.usajobs.gov/faq/application/documents/resume/what-to-include) and [OPM applicant guidance](https://www.opm.gov/policy-data-oversight/hiring-information/merit-hiring-plan-resources/applicant-guidance-on-the-two-page-resume-limit/): federal resumes must be no longer than two pages. Relevant employment needs title/employer, month/year dates, and hours per week. Education/GPA and other documentation depend on the requirements. This is a one-page general base, not a claim of readiness for every federal announcement; hours/week, GPA, clearance, and certifications were not invented.
- [Leidos Software Engineering — Intelligent Platforms (Mid)](https://careers.leidos.com/jobs/18388180-software-engineering-intelligent-platforms-mid), posted October 22, 2026: backend services, agent orchestration, APIs, version-controlled/testable workflows, CI/CD, and secure deployment. The posting requires professional experience and an existing clearance; it informs capability emphasis rather than an assertion that the applicant meets its eligibility requirements.

The research supports emphasizing implemented engineering and product delivery, not keyword stuffing or unsupported AI/security credentials. No single resume is presented as suitable for every job.

### Verification and publication state

- Tectonic 0.17.0 successfully compiled the final generated LaTeX with no overfull boxes. The PDF has one 612-by-792-point US Letter page, selectable text, and approximately 103 points below the last text. Body text is 10.5-point Helvetica; project/date headers are 10–11 points. Poppler rendered the final page for visual inspection.
- Source generation matches `content.json` and `template.tex`. An exact source comparison confirms the Experience block matches the pasted Crytica content. PDF extraction preserves headings and technology names.
- The local portfolio PDF download was refreshed from that source. Pre-existing deleted preview/output files were left deleted; internal validation files remain under ignored `.local/resume-build/`.
- The existing portfolio design is retained. Hero copy, Umbratic runtime boundaries, and GamePack's annotation/storage/release descriptions were updated. The GamePack screenshot is identified as an October 2026 capture; it is not passed off as a new screenshot.
- `npm run check` and the existing two server tests passed. The static build passed. Browser checks covered the live site's starting content and local desktop/mobile views, disclosure controls, image loading, no horizontal overflow at 390 pixels, and no logged browser warnings/errors.
- Changes are local. No commit, push, production deployment, job application, or external message was sent.


## Formatting and project-priority correction — November 10, 2026

The user requested the original LaTeX formatting and Umbratic as the primary project. The template now matches the supplied preamble, fonts, margins, spacing, macros, and contact header exactly, with the original normal-size skills block restored. Umbratic is first with four bullets; GamePack follows with three, and UpDrafted has two. Crytica remains verbatim. The prior Helvetica layout and GamePack-first ordering above are superseded. The final source compiles to one Letter page without overflow; the rendered page was inspected and the local website download refreshed. No production deployment was performed.


## Approved typography refinement — November 10, 2026

After reviewing the font comparison, the user approved Helvetica-style typography with the original layout and Umbratic-first content. The final template retains the original margins, section order, and list spacing, adds T1-encoded Helvetica-compatible fonts through `helvet`, uses 10.5-point body text and bold section headings, and includes the portfolio URL in a two-line contact header. Umbratic remains first with four bullets; GamePack has three and UpDrafted two. All accomplishment wording, including Crytica, is unchanged from the preceding revision.

Tectonic compiled the final source to one US Letter page without overflow. The final PDF embeds Nimbus Sans regular, bold, and italic; Poppler rendering was visually inspected. Text extraction preserves contacts, headings, and project content, and approximately 63.7 points remain below the last text. The local portfolio download and generated LaTeX are synchronized. No production deployment was performed.


## Supplied resume and portfolio refresh — November 10, 2026

The newly pasted LaTeX supplies the updated Crytica wording: 100+ API operations, tenant-scoped database RBAC, privilege separation and validated binary IPC, 300+ prepared statements, checksum-verified migrations, 2,600+ unit tests under sanitizers, and 85% less synchronization time. These are user-supplied experience claims, not independently audited company metrics. Content data, generated source, the public PDF, and the website now agree. The skills list matches the pasted revision. The one-page PDF was compiled without overflow and visually reviewed.

The user requested a systems/architecture introduction, looser letter spacing in the name, restrained design refinement, and removal of eyebrow headings. The existing stack, native scrolling, screenshots, and accessible image viewer remain. UpDrafted is included as a concise additional project. Browser review covered the layout at the normal desktop width and 390px phone width, loaded project images, no horizontal overflow, image navigation, Escape, and focus restoration. The existing static checks and both server tests pass. Job research and application materials remain under ignored `.local/` and are excluded from the public build.
