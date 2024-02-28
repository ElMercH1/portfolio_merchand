document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector('.contenedor_logo img');
    const scrollThreshold = 200; // Cambia este valor según la cantidad de scroll deseada
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > scrollThreshold) {
        logo.style.filter = "invert(0%)";
      } else {
        logo.style.filter = "invert(100%)";
      }
    });
  });