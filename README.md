# Abisal: Un paseo por las profundidades del océano

Proyecto 2026 de la materia **Taller de Desarrollo Web**.

## Indice

- [Autores](#autores)
- [Link a Github Pages](#link-a-github-pages)
- [Link al Mockup](#link-al-mockup)
- [Descripción](#descripción)
- [Tecnologías usadas](#tecnologías-usadas)
- [Cómo ejecutar la segunda entrega](#cómo-ejecutar-la-segunda-entrega)
- [Vulnerabilidades](#vulnerabilidades)

## Autores

- Florencia Rotondi Michelfelder

## Link a Github Pages

- [Ver sitio publicado](https://flopirot23.github.io/proyecto2026-Rotondi/primera-entrega/index.html)

## Link al Mockup

- [Ver Mockup en Figma](https://www.figma.com/design/xpfc68Tf6dQHfvlELG9ERk/Abisal---Wireframe?node-id=10-1059&t=9EDQulIaUNfp9Okr-1)

## Descripción

**Abisal** es un sitio web sobre animales marinos donde se puede recorrer las distintas zonas del océano, desde la superficie hasta el fondo.
Incluye fichas de especies, tienda de peluches, club y contacto.

### Páginas

| Página           | Archivo       | Ruta en la segunda entrega |
| ---------------- | ------------- | -------------------------- |
| Inicio           | index.html    | `/`                        |
| Ficha de especie | animal.html   | `/animal/:id`              |
| Tienda           | tienda.html   | `/tienda`                  |
| Club Exclusivo   | club.html     | `/club`                    |
| Contacto         | contacto.html | `/contacto`                |

## Tecnologías usadas

### Primera entrega

- HTML5
- CSS3
- JavaScript
- Google Fonts
- Git y Github Pages

### Segunda entrega

- React
- Vite
- React Router
- Sass
- json-server
- Node.js y npm

## Cómo ejecutar la segunda entrega

Necesitás tener instalado **Node.js 22 o más nuevo** y **npm 10 o más nuevo**.

1. Cloná el repositorio y entrá a la carpeta del proyecto:

   ```bash
   git clone https://github.com/FlopiRot23/proyecto2026-Rotondi.git
   cd proyecto2026-Rotondi/segunda-entrega/abisal
   ```

2. Instalá las dependencias:

   ```bash
   npm install
   ```

3. Levantá el mock de la API. Esta terminal tiene que quedar abierta:

   ```bash
   npm run api
   ```

4. Abrí **otra terminal** en la misma carpeta y levantá el sitio:

   ```bash
   npm run dev
   ```

5. Entrá a `http://localhost:5173` desde el navegador.

> Detalle: los comandos se corren dentro de `segunda-entrega/abisal`, que es donde está el `package.json`.

## Vulnerabilidades

Revisé las dependencias con `npm audit` y no apareció **ninguna vulnerabilidad**: ni críticas, ni altas, ni moderadas, ni bajas.
