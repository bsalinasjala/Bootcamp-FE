# Duelist Codex

Challenge 1 de Fundamentos de Angular: explorador de cartas de Yu-Gi-Oh! con catalogo, busqueda y detalle en modal.

## Ejecutar

Instalar dependencias:

```bash
npm install
```

Levantar el servidor de desarrollo:

```bash
npm start
```

Abrir la app en:

```text
http://localhost:4200/
```

Generar build:

```bash
npm run build
```

## API usada

La app consume la API publica de YGOPRODeck:

```text
https://db.ygoprodeck.com/api/v7/cardinfo.php
```

Catalogo inicial paginado de 500 en 500:

```text
https://db.ygoprodeck.com/api/v7/cardinfo.php?num=500&offset=0
```

Busqueda por nombre parcial:

```text
https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=Dark%20Magician&num=500&offset=0
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

El estado de busqueda, resultados, carga, error, pagina actual y carta seleccionada se maneja con Angular Signals.

No se usa BehaviorSubject para el estado principal porque esta pantalla maneja estado local y visual. Signals permite actualizar el template de forma directa y con menos codigo.
