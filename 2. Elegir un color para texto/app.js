// 1. Traigo los elementos del HTML
const input = document.getElementById('textoInput');
const selector = document.getElementById('colorSelect');
const boton = document.getElementById('botonAplicar');
const resultado = document.getElementById('textoResultado');

// 2. Agrego la función al hacer click en el botón
boton.addEventListener('click', function () {

    // Guardo los valores en variables
    const texto = input.value;
    const color = selector.value;

    // Cambio el texto del resultado
    resultado.textContent = texto;

    // Cambio el color de fondo del resultado
    resultado.style.backgroundColor = color;

});
