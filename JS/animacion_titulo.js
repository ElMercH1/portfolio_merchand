$(document).ready(function() {
    // Escuchar el evento de scroll
    $(window).scroll(function() {
      // Obtener la cantidad de desplazamiento vertical
      var scrollTop = $(this).scrollTop();
      // Si el usuario ha scrollado más de 100 píxeles, agregar la clase 'left', de lo contrario, removerla
      if (scrollTop > 100) {
        $('.contenedor_titulo').addClass('left');
      } else {
        $('.contenedor_titulo').removeClass('left');
      }
    });
  });
  