// Marcador de especificidad
// Cada fila de la lista guarda su puntaje en atributos data-*:
//   data-selector, data-id, data-clase y data-etiqueta
// Al pasar el mouse, tocar o enfocar una fila, copiamos esos números al tablero.

const filas = document.querySelectorAll('.fila');
const numeroId = document.getElementById('numeroId');
const numeroClase = document.getElementById('numeroClase');
const numeroEtiqueta = document.getElementById('numeroEtiqueta');
const selectorActual = document.getElementById('selectorActual');
const textoActual = document.getElementById('textoActual');

function mostrarEnTablero(fila) {
    // 1. Quitamos la marca de la fila que estaba activa
    filas.forEach(function (otra) {
        otra.classList.remove('activa');
    });
    fila.classList.add('activa');

    // 2. Copiamos los números y los textos al tablero
    numeroId.textContent = fila.dataset.id;
    numeroClase.textContent = fila.dataset.clase;
    numeroEtiqueta.textContent = fila.dataset.etiqueta;
    selectorActual.textContent = fila.dataset.selector;
    textoActual.textContent = fila.querySelector('.fila-texto').textContent;
}

filas.forEach(function (fila) {
    fila.addEventListener('mouseenter', function () { mostrarEnTablero(fila); }); // computador
    fila.addEventListener('focus', function () { mostrarEnTablero(fila); });      // teclado
    fila.addEventListener('click', function () { mostrarEnTablero(fila); });      // celular
});
