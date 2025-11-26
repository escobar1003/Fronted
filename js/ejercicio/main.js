// js/main.js
import * as aliascombine from "./combine.js"; // <<<<<<<<<< ruta correcta si ambos archivos están en js/

console.log("main.js importó combine:", aliascombine);

const num1txt = document.getElementById("txtnum1");
const num2txt = document.getElementById("txtnum2");
const opcionsel = document.getElementById("selopcion");
const ejecutarbtn = document.getElementById("btnejecutar");
const resultadodiv = document.getElementById("dividresultados");

function mostrarResultado(msg, tipo = "success") {
  resultadodiv.textContent = msg;
  resultadodiv.className = tipo === "error" ? "resultcls error" : "resultcls";
}

function calcular() {
  try {
    const opcion = opcionsel.value;
    const val1 = num1txt.value.trim();
    const val2 = num2txt.value.trim();

    switch (opcion) {
      case "sumar": {
        const n1 = parseFloat(val1);
        const n2 = parseFloat(val2);
        if (isNaN(n1) || isNaN(n2)) throw new Error("Para sumar ingrese NÚMEROS válidos en ambos campos.");
        mostrarResultado(`La suma es: ${aliascombine.aliascalc.sum(n1, n2)}`);
        break;
      }
      case "restar": {
        const n1 = parseFloat(val1);
        const n2 = parseFloat(val2);
        if (isNaN(n1) || isNaN(n2)) throw new Error("Para restar ingrese NÚMEROS válidos en ambos campos.");
        mostrarResultado(`La resta es: ${aliascombine.aliascalc.res(n1, n2)}`);
        break;
      }
      case "primo": {
        const n = Number(val1);
        if (!Number.isInteger(n)) throw new Error("Ingrese un ENTERO válido en Número 1 para verificar primo.");
        // aquí usamos la función importada
        const es = aliascombine.esPrimo(n);
        mostrarResultado(es ? "Es número PRIMO ✅" : "No es primo ❌");
        break;
      }
      case "parimpar": {
        const n = Number(val1);
        if (!Number.isInteger(n)) throw new Error("Ingrese un ENTERO válido en Número 1 para par/impar.");
        mostrarResultado(aliascombine.parImpar(n));
        break;
      }
      case "palindromo": {
        if (val1 === "") throw new Error("Escriba una palabra o número en Número 1 para comprobar palíndromo.");
        mostrarResultado(aliascombine.esPalindromo(val1) ? "Es PALÍNDROMO ✅" : "No es palíndromo ❌");
        break;
      }
      case "nombre": {
        mostrarResultado(`Nombre: ${aliascombine.aliasname}`);
        break;
      }
      case "calculadora":
        window.location.href = "./ejercicio/calc4.html";
        break;

      default:
        throw new Error("Operación no válida");
    }
  } catch (err) {
    mostrarResultado(`Error: ${err.message}`, "error");
  }
}

ejecutarbtn.addEventListener("click", calcular);
