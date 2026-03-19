# Portfolio (React + Vite + TypeScript)

This project deploys to **GitHub Pages** using a dedicated publishing branch named **`gh-page`**.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages deployment from `main`

A GitHub Actions workflow is included at `.github/workflows/deploy-gh-page.yml`.

- Trigger: push to `main` (or manual run via **workflow_dispatch**)
- Build: `npm ci` + `npm run build`
- Publish target branch: `gh-page`

The workflow sets:

- `VITE_BASE_PATH=/<repository-name>/`

So the app is built with the correct asset base path for project pages.

## First-time GitHub setup checklist

1. Push this repo to GitHub.
2. Ensure your default branch is `main`.
3. In **Settings → Pages**, choose **Deploy from a branch** and select `gh-page` + `/ (root)`.
4. Push to `main` (or run the workflow manually).
