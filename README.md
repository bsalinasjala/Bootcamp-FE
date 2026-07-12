# Duelist Codex

Challenge 1 de Fundamentos de Angular: explorador simple de cartas de Yu-Gi-Oh!.

## Ejecutar el proyecto

```bash
npm install
npm start
```

Abrir la app en:

```text
http://localhost:4200/
```

En PowerShell tambien puedes usar:

```bash
npm.cmd install
npm.cmd start
```

## Build

```bash
npm run build
```

## API usada

La app consume la API publica de YGOPRODeck:

```text
https://db.ygoprodeck.com/api/v7/cardinfo.php
```

Busqueda por nombre parcial:

```text
https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=Dragon
```

## Estructura principal

```text
src/app/models
src/app/services
src/app/components/search-bar
src/app/components/card-grid
src/app/components/card-item
src/app/components/card-detail
src/app/components/section-tabs
```

## Estado

El estado de busqueda, carga, error, catalogo y carta seleccionada se maneja con Angular Signals.
