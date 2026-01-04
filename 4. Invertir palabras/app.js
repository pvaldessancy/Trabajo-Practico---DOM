// 1. Traemos los elementos del HTML
const inputTexto = document.getElementById('inputTexto');
const btnInvertir = document.getElementById('btnInvertir');
const displayResultado = document.getElementById('resultado');

// 2. Función para invertir la palabra
function invertirTexto() {
    // Tomamos el texto que escribió el usuario
    let texto = inputTexto.value;

    // Preparar una variable vacía para guardar el texto al revés
    let textoInvertido = "";

    // Usamos un bucle (ciclo) para recorrer el texto desde el FINAL hasta el INICIO
    // i empieza en la última posición (largo del texto - 1)
    // El ciclo sigue mientras i sea mayor o igual a 0
    // En cada vuelta, restamos 1 a i
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido = textoInvertido + texto[i];
    }

    // 3. Mostramos el resultado
    displayResultado.textContent = textoInvertido;
}

// 4. Cuando hacen click en el botón, llamamos a la función
btnInvertir.addEventListener('click', invertirTexto);
