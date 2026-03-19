# Portfolio (Next.js + TypeScript)

Modern portfolio app built with Next.js App Router, Tailwind CSS, i18n (`vi` + `en`), SEO metadata, and admin editing.

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm start
```

## Required environment variables

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
ADMIN_USERNAME=your-admin-user
ADMIN_PASSWORD=your-admin-password
GEMINI_API_KEY=your-gemini-key
```

## Optional (only when deploying under a subpath)

If your app is deployed under a repository path such as `https://domain.com/my-portfolio`, set:

```bash
NEXT_PUBLIC_BASE_PATH=/my-portfolio
```

If your app is deployed at the domain root (`https://domain.com`), **leave `NEXT_PUBLIC_BASE_PATH` empty**.

## Why 404 can happen after deploy

A common reason is incorrect `basePath`/`assetPrefix` configuration. If the app thinks it is under `/repo-name` but the host serves it from `/`, static files under `/_next/...` are requested from the wrong URL and return `404`.

This project now uses explicit `NEXT_PUBLIC_BASE_PATH` so deployment behavior is deterministic across Vercel, VPS, and GitHub Pages.
