// Mejora progresiva del menú móvil.
// El menú se abre y se cierra solo con CSS (casilla + etiqueta). Pero al elegir
// una sección de la misma página el navegador no recarga, así que la casilla
// sigue marcada y el menú tapa el contenido. Este script solo la desmarca.
document.querySelectorAll('#site-navigation a').forEach((enlace) => {
  enlace.addEventListener('click', () => {
    const casilla = document.getElementById('nav-toggle');
    if (casilla) casilla.checked = false;
  });
});
