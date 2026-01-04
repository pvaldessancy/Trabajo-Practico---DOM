// Paso 1: Buscamos los elementos en el HTML y los guardamos en variables
// Usamos const porque estas referencias no van a cambiar
const inputNumero1 = document.getElementById('numero1');
const inputNumero2 = document.getElementById('numero2');
const botonCalcular = document.getElementById('btnCalcular');
const divResultados = document.getElementById('resultados');

// Paso 2: Llamamos a la función "click" en el botón
botonCalcular.addEventListener('click', function () {

    // Paso 3: Obtenemos los valores que escribió el usuario
    const texto1 = inputNumero1.value;
    const texto2 = inputNumero2.value;

    // Paso 4: Convertimos esos textos a números reales
    // Number() transforma "5" (texto) en 5 (número)
    const numero1 = Number(texto1);
    const numero2 = Number(texto2);

    // Paso 5: Hacemos las operaciones matemáticas
    const suma = numero1 + numero2;
    const resta = numero1 - numero2;
    const multiplicacion = numero1 * numero2;
    const division = numero1 / numero2;

    // Paso 6: Sumamos todos los resultados anteriores
    const sumaTotal = suma + resta + multiplicacion + division;

    // Paso 7: Mostramos todo en la pantalla modificando el HTML
    // Usamos las comillas invertidas `` para mezclar texto y variables fácilmente.
    // <br> sirve para hacer un salto de línea.
    divResultados.innerHTML = `
        <p>${numero1} + ${numero2} = ${suma}</p>
        <p>${numero1} - ${numero2} = ${resta}</p>
        <p>${numero1} * ${numero2} = ${multiplicacion}</p>
        <p>${numero1} / ${numero2} = ${division}</p>
        <br>
        <p><strong>Suma total de los resultados = ${sumaTotal}</strong></p>
    `;

});
