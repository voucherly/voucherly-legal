# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Cos'è questo repo

Sito Docusaurus 3 che pubblica i documenti legali di Voucherly su https://legal.voucherly.it. Il contenuto è in italiano (unico locale: `it`) e ha valore legale: i testi in `docs/` sono contratti e informative, non documentazione tecnica.

## Comandi

- `yarn start` — dev server
- `yarn build` — build statica in `build/` (è anche il comando usato da Netlify)
- `yarn typecheck` — `tsc` sui file TS/TSX
- `yarn lint` / `yarn lint:fix` — ESLint su TS/TSX e config JS
- `yarn format` / `yarn format:check` — Prettier

Non ci sono test. Package manager: **yarn**; `yarn.lock` è in `.gitignore`.

**Prettier ignora `docs/`** (vedi `.prettierignore`): riformattare i testi legali produrrebbe diff enormi su file con valore contrattuale. Non forzare Prettier su quella cartella.

## Documenti legali: regole di scrittura

- Ogni documento inizia con `# Titolo` seguito da una riga `Versione X.Y del GG/MM/AAAA`. **A ogni modifica del testo, chiedi all'utente numero di versione e data prima di scrivere** — non aggiornarla né lasciarla invariata di iniziativa.
- I file `_*.mdx` (es. `docs/privacy/_owner.mdx`, `_rights.mdx`) sono partial: non generano pagine e vengono importati come componenti in più documenti. Per cambiare dati societari o l'elenco dei diritti GDPR modifica il partial, non le pagine che lo importano.
- Non riscrivere o "migliorare" il linguaggio giuridico di iniziativa: limita gli interventi a quanto richiesto.

## Docusaurus: vincoli non ovvi

- `routeBasePath: '/'` — i doc sono serviti dalla root. I link interni sono percorsi assoluti senza estensione: `/terms/aup`, `/privacy/privacy-policy`.
- `onBrokenLinks: 'throw'` e `onBrokenMarkdownLinks: 'throw'`: un link rotto fa **fallire la build**. Verifica con `yarn build` dopo aver toccato link o rinominato file.
- `trailingSlash: true`.
- La sidebar è autogenerata dal filesystem: l'ordine si controlla con `sidebar_position` nel frontmatter e con i file `_category_.json` (che definiscono anche `label` e lo `slug` dell'indice di categoria).
- Rinominare o spostare un file cambia un URL pubblico già in circolazione: aggiungi il redirect corrispondente in `netlify.toml` (`[[redirects]]` from → to).

## Git e deploy

- **`main` è protetto: nessun push diretto.** Ogni modifica, per quanto minima, entra via branch dedicato + PR su `github.com/voucherly/voucherly-legal`.
- Ogni PR verso `main` fa girare la GitHub Action `build` (`yarn build`): è un required status check, quindi un link rotto blocca il merge. In parallelo Netlify pubblica un deploy preview della PR. Versione di Node pinnata in `.nvmrc` (22), letta sia dalla CI sia da Netlify.
- **È il merge su `main` a pubblicare su `legal.voucherly.it`**, non il push: da lì il contenuto è immediatamente pubblico. Le istruzioni di deploy GitHub Pages nel README sono il template Docusaurus di default e non si applicano.
