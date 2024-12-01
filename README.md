# 💾 Jornadas de Seguridad Informática 🛡️

Un proyecto retro-inspirado diseñado como parte de un ejercicio académico para la Universitat Oberta de Catalunya (UOC).
⚠️ Nota: Este contenido es ficticio y solo se utiliza con fines educativos.

🌐 Demo: https://pec2jrammas.netlify.app/

📂 Basado en: uoc-boilerplate https://github.com/uoc-advanced-html-css/uoc-boilerplate/

## 🖥️ Tecnologías Principales

- 🎨 SCSS: Preprocesador de estilos para un diseño modular y escalable.
- 📏 Stylelint: Para garantizar estándares consistentes en el código CSS.
- 📦 Parcel: Agrupador moderno que optimiza el desarrollo y la producción.
- 🧩 PostHTML: Permite integrar componentes reutilizables y manejar estructuras modulares.

## 📂 Estructura del Proyecto

```
src/
├── index.html             # Página principal
├── pages/                 # Páginas adicionales
│   ├── about.html         # Ejemplo de página "Sobre Nosotros"
│   ├── contact.html       # Página de contacto
├── components/            # Componentes reutilizables
│   ├── header.html        # Encabezado
│   ├── footer.html        # Pie de página
├── styles/
│   ├── abstracts/         # Variables, mixins, funciones
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   ├── base/              # Estilos globales y resets
│   │   ├── _reset.scss
│   ├── components/        # Botones, tarjetas, formularios
│   │   ├── _button.scss
│   │   ├── _card.scss
│   ├── main.scss          # Punto de entrada principal
├── scripts/               # Lógica de interactividad
│   ├── main.js            # Archivo principal
│   ├── modal.js           # Script para modales
└── assets/                # Recursos estáticos
    ├── images/            # Imágenes
    ├── fonts/             # Fuentes personalizadas
```

## 🚀 Cómo Empezar

1. Clona el repositorio

```bash
git clone https://github.com/jramma/jornadas-seguridad-informatica.git
cd jornadas-seguridad-informatica
```

2. Instala las dependencias

```bash
npm install
```

3. Inicia el entorno de desarrollo

```bash
npm run dev
```

4. Compila para producción

```bash
npm run build
```

## 🧩 Uso de Componentes

El proyecto utiliza posthtml-include para integrar componentes como el encabezado y el pie de página. Ejemplo de integración:

```html
<body>
  <include src="./components/header.html"></include>
  <main>
    <!-- Contenido principal -->
  </main>
  <include src="./components/footer.html"></include>
</body>
```

## 🎨 Estilos con SCSS

Los estilos se organizan de forma modular:

- Variables: Definidas en abstracts/\_variables.scss.
- Componentes: Estilos individuales en styles/components/.
- Importaciones: Centralizadas en main.scss.

Ejemplo de uso:

```scss
// main.scss
@use "abstracts/variables";
@use "components/button";
```

## 🕶️ Inspiración Retro

Este proyecto toma inspiración de los diseños de los años 90, incluyendo:

- Fuentes monoespaciadas y elementos con bordes pixelados.
- Paletas de colores llamativas con tonos oscuros.
- Animaciones simples, pero funcionales, que recuerdan la estética de la época.

## 🤝 Contribuciones

Este es un ejercicio académico y no se aceptan contribuciones externas.
Si tienes sugerencias o comentarios, no dudes en compartirlos.

## 🔒 Licencia

⚠️ Este proyecto se realiza únicamente con fines educativos como parte del máster en diseño y programación web de la UOC.
