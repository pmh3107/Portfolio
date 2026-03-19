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

## Static export

One command:

```bash
npm run export
```
