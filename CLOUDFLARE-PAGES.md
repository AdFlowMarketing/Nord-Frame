# Cloudflare Pages

Projekt jest przygotowany do wdrożenia jako statyczny eksport Next.js na Cloudflare Pages.

## Wymagania

- Node.js `20+`

## Build lokalny

```bash
nvm use
npm install
npm run build
```

Po buildzie gotowe pliki statyczne znajdziesz w katalogu:

```bash
out
```

## Ustawienia w Cloudflare Pages

- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: `20`

## Ważne uwagi

- Aplikacja działa jako `static export`
- `next/image` jest ustawione na `unoptimized`, żeby eksport statyczny działał poprawnie
- Jeśli w przyszłości dodasz SSR, API routes albo server actions, wtedy lepszą drogą będzie powrót do Workers
