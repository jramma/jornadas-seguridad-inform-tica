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

La estructura del directorio del proyecto es la siguiente:

```
src/
├── estructura.txt          # Descripción de la estructura del proyecto
├── netlify.toml            # Archivo de configuración para el despliegue en Netlify
├── output.txt              # Registros de salida o resultados
├── package.json            # Metadatos y dependencias del proyecto
├── package-lock.json       # Archivo de bloqueo para las dependencias de npm
├── README.md               # Documentación del proyecto
└── src                     # Archivos fuente
  ├── assets                # Recursos estáticos
  │   ├── fonts             # Archivos de fuentes
  │   ├── images            # Archivos de imágenes
  │   ├── scripts           # Archivos JavaScript
  │   └── styles            # Archivos SCSS/CSS
  ├── components            # Componentes HTML reutilizables
  │   ├── button.html       # Componente de botón
  │   ├── card.html         # Componente de tarjeta
  │   ├── grid.html         # Componente de diseño de cuadrícula
  │   ├── list.html         # Componente de lista
  │   ├── made.html         # Componente de hecho
  │   ├── post.html         # Componente de publicación
  │   ├── social.html       # Componente de redes sociales
  │   └── speakers.html     # Componente de ponentes
  ├── four.html             # Página cuatro
  ├── index.html            # Página principal
  ├── scripts               # Archivos JavaScript
  │   └── main.js           # Archivo JavaScript principal
  ├── three.html            # Página tres
  ├── two.html              # Página dos
  └── views                 # Vistas HTML
    ├── footer.html         # Vista del pie de página
    └── header.html         # Vista del encabezado
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
