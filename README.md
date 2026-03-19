# Portfolio (React + Vite + TypeScript)

This project is configured to deploy to **GitHub Pages** using a dedicated publishing branch named **`gh-page`**.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages (`gh-page` branch)

```bash
npm run deploy
```

What the deploy command does:

1. Runs `npm run build` to generate the production bundle in `dist/`.
2. Publishes the `dist/` output to the `gh-page` branch.

> If your repository name is not `Portfolio`, update `base` in `vite.config.ts` to match `/<your-repo-name>/`.
