# Resume source notes

Reviewed on September 21, 2026. The supplied LaTeX is the format source. Its preamble, header, and layout commands are unchanged. The text was shortened to give UpDrafted more detail and include Infernal on one page.

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

## Validation

The resume build checks the page count, US Letter size, text extraction, and LaTeX overflow. The final page was rendered with Poppler at 160 DPI and inspected. The contact header and layout were compared with a render of the supplied LaTeX. The project applications were read as evidence; their full test suites were not run for this document task.
