var contenedor = document.getElementById('contenedor_logo')
var imagen = document.getElementById('img_logo')

var bgColor = window.getComputedStyle(contenedor).getPropertyValue('background-color');

// Convierte el color a un formato RGBA
var rgbaColor = bgColor.match(/\d+/g);
var r = rgbaColor[0];
var g = rgbaColor[1];
var b = rgbaColor[2];
var a = rgbaColor[3] || 255;
var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

// Si el fondo es claro, invierte los colores de la imagen
if (luminance > 0.5) {
imagen.style.filter = 'invert(100%)';
}
  