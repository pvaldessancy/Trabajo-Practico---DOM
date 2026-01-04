// 1. Seleccionamos los elementos del HTML que vamos a usar
// Usamos "const" porque la referencia a los elementos no va a cambiar
const inputPalabra = document.getElementById('inputPalabra');
const inputCantidad = document.getElementById('inputCantidad');
const btnRepetir = document.getElementById('btnRepetir');
const resultado = document.getElementById('resultado');

// 2. Indicamos qué acción se ejecuta al presionar el botón.
btnRepetir.addEventListener('click', function() {
    
    // 3. Capturamos los valores que el usuario escribió en los inputs
    const palabra = inputPalabra.value;
    // Convertimos el valor de cantidad a número, ya que viene como texto
    const cantidad = parseInt(inputCantidad.value);

    // 4. Validamos que los datos sean correctos
    if (palabra === "") {
        alert("Por favor, ingresa una palabra.");
        return; // Salimos de la función si no hay palabra
    }

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa un número válido mayor a 0.");
        return; // Salimos si la cantidad no es correcta
    }

    // 5. Creamos una variable para guardar el texto final
    // Usamos "let" porque esta variable va a cambiar en el ciclo
    let textoResultado = "";

    // 6. Usamos una estructura repetitiva "for"
    // Empezamos en i = 0
    // Repetimos mientras i sea menor que la cantidad
    // Aumentamos i en 1 en cada vuelta (i++)
    for (let i = 0; i < cantidad; i++) {
        // Concatenamos la palabra y un espacio
        textoResultado = textoResultado + palabra + " ";
    }

    // 7. Mostramos el resultado en la pantalla modificando el DOM
    resultado.textContent = textoResultado;
});
