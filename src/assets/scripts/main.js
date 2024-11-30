/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const closeModal = document.getElementById("closeModal");

  // Selecciona todas las imágenes de la galería
  const galleryImages = document.querySelectorAll(".gallery-img");

  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      modal.classList.add("show"); // Agrega la clase show
      modalImage.src = img.src;
      modalCaption.textContent = img.alt;
    });
  });

  // Cerrar el modal
  closeModal.addEventListener("click", () => {
    modal.classList.remove("show"); // Quita la clase show
  });

  // Cerrar el modal al hacer clic fuera de la imagen
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
});
