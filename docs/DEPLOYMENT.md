# Deployment & branching

This repo practices a real dev → staging → prod promotion flow (a stated
learning goal in CLAUDE.md), kept entirely inside GitHub.

## Environments

| Branch | Deploys to | URL |
|---|---|---|
| `main` | gh-pages root (production) | `https://jonathanmuir-flc.github.io/` |
| `develop` | gh-pages `/staging` (preview) | `https://jonathanmuir-flc.github.io/staging/` |

Both environments live on one Pages site served from the `gh-pages` branch.
The production deploy uses `clean-exclude: staging` so it never wipes the
preview; the staging build gets `BASE_PATH=/staging` (so links
resolve) and `PUBLIC_DEPLOY_ENV=staging` (so pages render `noindex` and
search engines never index the preview).

## One-time repo setup (manual, in GitHub UI)

1. Push `develop` and `main`; let the workflow run once so `gh-pages` exists.
2. **Settings → Pages → Build and deployment → Source**: choose
   **Deploy from a branch**, branch `gh-pages`, folder `/ (root)`.

## Promotion flow

1. Branch off `develop`: `git switch -c feature/<name> develop`
2. Small commits → push → open a PR into `develop`.
3. Merge → review the result on the staging URL.
4. When staging looks right, open a PR `develop` → `main`; merging deploys
   production.

## Local development

```sh
npm install
npm run dev      # serves at localhost:4321/
npm run build    # production build into dist/
npm run preview  # serve the built site locally
```

The repo is a GitHub Pages user site (`jonathanmuir-flc.github.io`), so
production and dev serve from the domain root (`/`), while staging serves
under `/staging`. Always build links with the `withBase()` helper in
`src/lib/paths.ts` so pages work under either base.
