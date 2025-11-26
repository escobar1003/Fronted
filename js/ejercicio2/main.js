console.log("MAIN CARGADO");


import { sumar } from "./sumar.js";
import { restar } from "./restar.js";
import { esPrimo } from "./primo.js";
import { parImpar } from "./parimpar.js";
import { esPalindromo } from "./palindromo.js";
import { abrirCalculadora } from "./abrirCalculadora.js";







const num1 = document.getElementById("txtnum1");
const num2 = document.getElementById("txtnum2");
const opcion = document.getElementById("selopcion");
const boton = document.getElementById("btnejecutar");
const resultado = document.getElementById("dividresultados");

boton.addEventListener("click", () => {

    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let op = opcion.value;
    let mensaje = "";

    switch(op){

        case "sumar":
            mensaje = "La suma es: " + sumar(n1, n2);
            break;

        case "restar":
            mensaje = "La resta es: " + restar(n1, n2);
            break;

        case "primo":
            mensaje = esPrimo(n1)
              mensaje = esPrimo(n1)
                ? "El número " + n1 + " ES primo"
                : "El número " + n1 + " NO es primo";

            break;

        case "parimpar":
            mensaje = "El número es: " + parImpar(n1);
            break;

        case "palindromo":
            mensaje = esPalindromo(num1.value)
                ? "La palabra ES un palíndromo"
                : "La palabra NO es palíndromo";
            break;

        case "calculadora":
            abrirCalculadora();
            return;  // salimos para que no intente seguir
    
    }

    resultado.textContent = mensaje;
});

boton.addEventListener("click", () => {
    console.log("BOTÓN PRESIONADO");
});
