# PEC 2

Based on: https://github.com/uoc-advanced-html-css/uoc-boilerplate/


La estructura de las páginas en un proyecto que usa `uoc-boilerplate` puede organizarse de manera lógica dentro de la carpeta `src` para mantener un flujo claro entre las páginas principales y los componentes que las construyen. Siguiendo el estándar del archivo `package.json` que compartiste y las prácticas recomendadas, esta sería una sugerencia de organización:

### Organización de carpetas dentro de `src`

1. **`src/`**
   - Aquí estará el archivo principal `index.html`, que servirá como punto de entrada.
   - Las páginas adicionales y los recursos también se organizarán aquí.

2. **Carpetas principales:**
   - **`pages/`**: Para todas las páginas HTML secundarias.
   - **`styles/`**: Para los estilos SCSS o CSS globales y específicos de las páginas.
   - **`assets/`**: Para imágenes, fuentes, videos y otros recursos estáticos.
   - **`components/`**: Para componentes reutilizables como menús, encabezados, botones, etc.
   - **`scripts/`**: Para los archivos JavaScript (si se requiere interactividad).

---

### Estructura de ejemplo

```plaintext
src/
├── index.html             # Página principal
├── pages/                 # Páginas adicionales
│   ├── about.html         # Ejemplo de página "About"
│   ├── contact.html       # Ejemplo de página "Contact"
│   └── projects.html      # Ejemplo de página "Projects"
├── components/            # Componentes reutilizables
│   ├── header.html        # Encabezado
│   ├── footer.html        # Pie de página
│   └── card.html          # Tarjeta reutilizable
├── styles/
│   ├── abstracts/   // Variables, mixins, functions
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _functions.scss
│   ├── base/        // Reset, global styles
│   │   ├── _reset.scss
│   │   ├── _typography.scss
│   ├── components/  // Buttons, cards, forms
│   │   ├── _button.scss
│   │   ├── _card.scss
│   ├── layout/      // Grid, containers, sections
│   │   ├── _grid.scss
│   │   ├── _header.scss
│   ├── main.scss    // Archivo principal
│   └── _variables.scss
├── scripts/               # Scripts de JavaScript
│   ├── main.js            # Archivo principal JS
│   ├── navigation.js      # Script para la navegación
│   └── modal.js           # Script para modales
└── assets/                # Recursos estáticos
    ├── images/            # Imágenes
    │   ├── logo.png
    │   └── banner.jpg
    ├── fonts/             # Fuentes personalizadas
    └── videos/            # Videos utilizados
```

---

### Detalles importantes

1. **Referencias en `index.html`**:
   - Las rutas a otros archivos deben ser relativas, dado que `parcel` usa el `publicUrl` configurado como `./`.

   ```html
   <link rel="stylesheet" href="./styles/main.css">
   <script src="./scripts/main.js" defer></script>
   ```

2. **Inclusión de componentes reutilizables**:
   Usa herramientas como `posthtml-include` (ya incluida en tu proyecto) para incluir componentes comunes como encabezados y pies de página:

   ```html
   <!-- index.html -->
   <body>
     <include src="./components/header.html"></include>
     <main>
       <!-- Contenido principal -->
     </main>
     <include src="./components/footer.html"></include>
   </body>
   ```

3. **Parcel compilará automáticamente**:
   - Al ejecutar `npm run dev`, Parcel generará los archivos en la carpeta `dist`. Puedes mantener las referencias simples dentro de `src`.

4. **Estilos organizados**:
   - Usa `@import` o `@use` en SCSS para importar estilos específicos desde `styles/pages/` o `styles/components/` hacia `main.scss`.

   ```scss
   // main.scss
   @use "styles/pages/about";
   @use "styles/components/header";
   ```

---

Con esta estructura, el proyecto será modular, fácil de mantener y compatible con Parcel.
