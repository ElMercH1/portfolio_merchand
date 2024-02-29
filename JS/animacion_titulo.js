document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector('.contenedor_logo img');
    const video = document.querySelector('.video_intro')
    const scrollThreshold = 50; // Cambia este valor según la cantidad de scroll deseada
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > scrollThreshold) {
        video.style.transform = "rotate(-15deg)";
        logo.style.filter = "invert(100%)";
      } else {
        logo.style.filter = "invert(0%)";
        video.style.transform = "rotate(0deg)";

      }
    });
  });