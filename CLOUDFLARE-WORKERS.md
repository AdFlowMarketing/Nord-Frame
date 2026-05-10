# Cloudflare Workers

Projekt jest przygotowany do wdrożenia przez OpenNext na Cloudflare Workers.

## Wymagania

- Node.js `22+`
- konto Cloudflare
- zalogowany `wrangler`

## Pierwsze uruchomienie

```bash
nvm use
npm install
```

## Build lokalny pod Workers

```bash
npm run cf:build
```

## Preview lokalny

```bash
npm run cf:preview
```

## Deploy

```bash
npx wrangler login
npm run cf:deploy
```

## GitHub Actions

Workflow jest gotowy w:

- `.github/workflows/deploy-cloudflare-workers.yml`

Dodaj w ustawieniach repozytorium GitHub sekrety:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Po pushu na `main` workflow:

1. instaluje zależności,
2. uruchamia `lint`,
3. uruchamia `next build`,
4. uruchamia `cf:build`,
5. deployuje aplikację na Cloudflare Workers.

## Ważne pliki

- `wrangler.jsonc` - konfiguracja Workera
- `open-next.config.ts` - konfiguracja OpenNext
- `next.config.ts` - inicjalizacja środowiska Cloudflare dla `next dev`

## Uwagi

- Nazwa Workera jest ustawiona na `nord-frame` w `wrangler.jsonc`
- Jeśli chcesz zmienić nazwę usługi, zmień pole `name` w `wrangler.jsonc`
- `next/image` jest przygotowane pod Cloudflare przez binding `IMAGES`
