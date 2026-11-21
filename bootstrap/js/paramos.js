// Activa los popovers de Bootstrap (el componente no funciona sin JavaScript).
// Por defecto Bootstrap coloca el popover fuera del elemento, en el lado con más
// espacio; en una foto pegada al borde eso lo hace tapar el texto vecino.
// Aquí se ancla dentro de la propia foto, justo encima del pie de imagen.
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((foto) => {
  new bootstrap.Popover(foto, {
    container: foto,
    placement: 'bottom',
    fallbackPlacements: [],
    customClass: 'popover-dentro',
    // Distancia negativa: el popover sube y queda dentro de la foto.
    offset: ({ popper }) => {
      const pie = foto.querySelector('figcaption');
      const altoPie = pie ? pie.getBoundingClientRect().height : 0;
      return [0, -(popper.height + altoPie + 32)];
    },
  });
});

// Cierra el menú desplegable al elegir un enlace (Bootstrap no lo hace por defecto).
const menu = document.getElementById('menu');
if (menu) {
  menu.querySelectorAll('a').forEach((enlace) => {
    enlace.addEventListener('click', () => {
      if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
    });
  });
}
