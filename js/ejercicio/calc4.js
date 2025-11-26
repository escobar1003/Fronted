let operador = '';
let valorAnterior = '';

const lenguajes = [
  ""
];

function agregarNumero(valor) {
  const pantalla = document.getElementById('pantalla');
  if (pantalla.dataset.resultado === "true" || pantalla.innerText === '0') {
    pantalla.innerText = valor;
    pantalla.dataset.resultado = "false";
  } else {
    pantalla.innerText += valor;
  }
}

function operar(op) {
  valorAnterior = document.getElementById('pantalla').innerText;
  operador = op;
  document.getElementById('pantalla').innerText = '';
}

function calcular() {
  const pantalla = document.getElementById('pantalla');
  const resultadoDiv = document.getElementById('resultadoBusqueda');
  let entrada = pantalla.innerText.trim().toLowerCase();

  if (lenguajes.includes(entrada)) {
    pantalla.innerText = `Lenguaje encontrado: ${entrada.charAt(0).toUpperCase() + entrada.slice(1)}`;
    pantalla.classList.add("texto");
    pantalla.dataset.resultado = "true";

    var precios = [10, 20, 50, 80, 12];
    var busqueda1 = lenguajes.find(lenguaje => lenguaje === "php");
    var busqueda2 = lenguajes.findIndex(lenguaje => lenguaje === "javascript");
    var busqueda3 = precios.some(precio => precio >= 20);

    resultadoDiv.innerHTML = `
      <h3>Resultados de búsqueda:</h3>
      <p><b>Búsqueda PHP:</b> ${busqueda1}</p>
      <p><b>Índice de JavaScript:</b> ${busqueda2}</p>
      <p><b>¿Hay precios mayores o iguales a 20?</b> ${busqueda3}</p>
    `;
    return;
  }

  const valorActual = entrada;
  let resultado = 0;

  if (!isNaN(parseFloat(valorAnterior)) && !isNaN(parseFloat(valorActual))) {
    switch (operador) {
      case '+': resultado = parseFloat(valorAnterior) + parseFloat(valorActual); break;
      case '-': resultado = parseFloat(valorAnterior) - parseFloat(valorActual); break;
      case '*': resultado = parseFloat(valorAnterior) * parseFloat(valorActual); break;
      case '/': resultado = (parseFloat(valorActual) === 0) ? 'Error' : parseFloat(valorAnterior) / parseFloat(valorActual); break;
    }
    pantalla.innerText = resultado;
    pantalla.classList.remove("texto");
    pantalla.dataset.resultado = "true";
    resultadoDiv.innerHTML = "";
  } else {
    pantalla.innerText = "Entrada no válida";
    pantalla.classList.add("texto");
    pantalla.dataset.resultado = "true";
  }
}

function borrarTodo() {
  const pantalla = document.getElementById('pantalla');
  const resultadoDiv = document.getElementById('resultadoBusqueda');
  pantalla.innerText = '0';
  valorAnterior = '';
  operador = '';
  pantalla.classList.remove("texto");
  pantalla.dataset.resultado = "false";
  resultadoDiv.innerHTML = "";
  document.getElementById('listaLenguajes').innerHTML = "";
}

function borrarUltimo() {
  const pantalla = document.getElementById('pantalla');
  if (pantalla.dataset.resultado === "true") {
    borrarTodo();
    return;
  }
  pantalla.innerText = pantalla.innerText.slice(0, -1) || '0';
}

document.addEventListener('keydown', (e) => {
  const pantalla = document.getElementById('pantalla');
  e.preventDefault();

  if (e.key === 'Enter') calcular();
  else if (e.key === 'Backspace') borrarUltimo();
  else if (e.key.match(/^[a-zA-Z0-9+\-*/.]$/)) {
    if (pantalla.dataset.resultado === "true" || pantalla.innerText === '0') {
      pantalla.innerText = '';
      pantalla.dataset.resultado = "false";
    }
    pantalla.innerText += e.key;
  }
});

/* --- NUEVOS METODOS --- */
function agregarLenguaje() {
  let nuevo = prompt("Ingresa un lenguaje:");
  if (!nuevo) return;
  nuevo = nuevo.trim().toLowerCase();

  if (lenguajes.includes(nuevo)) {
    alert("Ese lenguaje ya existe.");
    return;
  }

  lenguajes.push(nuevo);
  alert("Lenguaje agregado.");
}

function mostrarLenguajes() {
  const div = document.getElementById('listaLenguajes');
  div.innerHTML = `<h3>Lenguajes registrados:</h3><p>${lenguajes.join(', ')}</p>`;
}

// ✅ FUNCIONES EXTRAS (MISMO ARCHIVO, SIN IMPORT)

function esPrimo(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function parImpar(n) {
  return n % 2 === 0 ? "PAR" : "IMPAR";
}

function esPalindromo(texto) {
  const limpio = texto.toLowerCase().replace(/\s/g, "");
  const invertido = limpio.split("").reverse().join("");
  return limpio === invertido;
}

// ✅ BOTÓN EXTRA
function ejecutarExtra() {
  const opcion = document.getElementById("selopcion").value;
  const pantalla = document.getElementById("pantalla");
  const valor = pantalla.innerText.trim();

  let mensaje = "";

  if (opcion === "primo") {
    let n = parseInt(valor);
    mensaje = isNaN(n) ? "Ingresa un número" :
      esPrimo(n) ? "ES primo" : "NO es primo";
  }

  if (opcion === "par") {
    let n = parseInt(valor);
    mensaje = isNaN(n) ? "Número inválido" : "Es " + parImpar(n);
  }

  if (opcion === "palindromo") {
    mensaje = esPalindromo(valor)
      ? "Es palíndromo"
      : "No es palíndromo";
  }

  pantalla.innerText = mensaje;
  pantalla.classList.add("texto");
  pantalla.dataset.resultado = "true";
}




