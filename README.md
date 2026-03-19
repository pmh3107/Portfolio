# Portfolio (Next.js + TypeScript)

This project deploys to **GitHub Pages** using the dedicated publishing branch **`gh-page`**.

## Local development

```bash
npm install
npm run dev
```

## Production build (static export)

```bash
npm run build
```

The build uses `next build` with `output: "export"` and generates static files in `out/`.

## GitHub Pages deployment from `main`

A GitHub Actions workflow is included at `.github/workflows/deploy-gh-page.yml`.

- Trigger: push to `main` (or manual run via **workflow_dispatch**)
- Build: `npm ci` + `npm run build`
- Publish target branch: `gh-page`
- Publish directory: `out/`

The workflow sets:

- `GITHUB_ACTIONS=true`
- `GITHUB_REPOSITORY=<owner>/<repo>`

The Next.js config reads this to automatically set the correct `basePath`/`assetPrefix` for GitHub project pages.

## First-time GitHub setup checklist

1. Push this repo to GitHub.
2. Ensure your default branch is `main`.
3. In **Settings → Pages**, choose **Deploy from a branch** and select `gh-page` + `/ (root)`.
4. Push to `main` (or run the workflow manually).
