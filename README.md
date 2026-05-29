# Lisandro Pat — portfolio (HTML/JS + Tailwind CDN)

Migración del sitio original en Gatsby a un proyecto nativo, sin build step.

## Estructura

```
.
├── index.html        # Landing (hero + proyectos + shots)
├── about.html        # Página About
├── 404.html          # Redirige a index.html
├── css/
│   └── styles.css    # Animaciones, cursor, menú, parallax, base (ex anim.css + index.css)
├── js/
│   ├── site-header.js # <site-header> (navbar + menú)
│   ├── site-footer.js # <site-footer> (footer reveal)
│   └── main.js       # Menú drawer, scroll-arrow, anclas suaves y cursor de video (GSAP)
└── assets/           # Imágenes, videos, favicon
    ├── shots/
    └── videos/
```

## Cómo verlo

La forma más simple es abrir `index.html` en el navegador. Para que los videos
y rutas relativas funcionen igual que en producción, conviene servirlo por HTTP:

```bash
# cualquiera de estos, desde esta carpeta
python3 -m http.server 8000
# luego abrir http://localhost:8000
```

Requiere conexión a internet la primera vez para cargar desde CDN: Tailwind,
la fuente DM Sans, los iconos Remixicon y GSAP.

## Qué se migró y cómo

| Original (Gatsby)              | Nativo                                            |
|-------------------------------|---------------------------------------------------|
| Componentes React + Chakra UI | HTML + clases Tailwind (CDN)                       |
| `react-plx` (parallax imgs)   | CSS nativo `animation-timeline: view()` (sin JS)  |
| Footer                        | Fijo detrás del contenido (efecto "reveal")       |
| Cursor de video (GSAP)        | Misma lógica GSAP portada a `js/main.js`          |
| `useDisclosure` + Drawer      | Drawer con CSS + toggle de clases en JS           |
| `gatsby-plugin-image`         | `<img>` normales                                  |
| Rutas por archivos            | `index.html` / `about.html` enlazadas directamente|
| `react-helmet` (SEO)          | `<meta>` en cada `<head>`                          |
| `SiteConfig.js`               | Valores escritos directo en el HTML               |

Los breakpoints de Tailwind se redefinieron para coincidir con los de Chakra
(sm 480 / md 768 / **lg 992** / xl 1280), así el responsive queda idéntico.

## Componentes (header y footer)

El navbar/menú y el footer están definidos una sola vez como Web Components
nativos (uno por archivo: `js/site-header.js` y `js/site-footer.js`), y se usan como etiquetas:

```html
<site-header></site-header>              <!-- páginas normales -->
<site-header active="about"></site-header>  <!-- marca "About" como activo -->
<site-footer></site-footer>
```

Usan light DOM (sin shadow), así que Tailwind y `styles.css` les aplican igual.
Para editar el menú tocás `js/site-header.js`; para el footer, `js/site-footer.js`.

> Importante: si en algún momento generás Tailwind localmente (ver abajo),
> incluí esos dos JS en el `content` del config, porque las clases del
> header/footer ahora viven ahí. Si no, Tailwind las purga y se ven sin estilo:
> `content: ["./index.html","./about.html","./js/site-header.js","./js/site-footer.js"]`

## Nota sobre el CDN de Tailwind

El CDN (`cdn.tailwindcss.com`) compila las clases en el navegador en cada carga.
Va perfecto para este sitio, pero no es lo ideal para producción (sin minificar
ni purgar). Si en algún momento querés optimizar sin montar un bundler:

```bash
npm i -D tailwindcss@3
npx tailwindcss -i input.css -o css/tailwind.css --minify
```

y reemplazás el `<script src="https://cdn.tailwindcss.com">` + el bloque
`tailwind.config` por `<link rel="stylesheet" href="css/tailwind.css">`.
Es un solo comando, sin Vite ni webpack.
