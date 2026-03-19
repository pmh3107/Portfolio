# Smart AI Portfolio - Phan Minh Hiển

Next.js App Router + TypeScript + TailwindCSS + Framer Motion + Gemini API.

## Clean Architecture (src/)

- `src/app`: routes, layout, API route
- `src/components`: UI & sections & AI widgets
- `src/core`: domain types + constants
- `src/data`: typed CV data source
- `src/services`: client services (call internal API)

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment

```bash
GEMINI_API_KEY=your_key_here
```

## Scripts

```bash
npm run dev
npm run lint
npm run type-check
npm run build
npm run export
```

## Build + Deploy (main -> gh-pages)

Workflow đã được thêm tại:

- `.github/workflows/deploy-gh-pages.yml`

Khi push vào `main`, GitHub Actions sẽ:

1. Build static output (`out/`)
2. Push nội dung `out/` vào branch `gh-pages`

### GitHub Pages URL

Sau khi bật Pages (Source = `Deploy from a branch`, branch = `gh-pages`):

```text
https://<github-username>.github.io/<repo-name>/
```

Ví dụ repo `Portfolio`:

```text
https://<github-username>.github.io/Portfolio/
```

`next.config.ts` đã tự động set `basePath`/`assetPrefix` theo tên repo khi chạy trong GitHub Actions, nên dùng chung code cho local + gh-pages.
