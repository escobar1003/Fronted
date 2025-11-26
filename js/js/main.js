import * as aliascombine from "./combine.js";   

const num1txt = document.getElementById("txtnum1");
const num2txt = document.getElementById("txtnum2");
const opcionsel = document.getElementById("selopcion");
const ejecutarbtn = document.getElementById("btnejecutar");
const resultadodiv = document.getElementById("dividresultados"); // corregido

function calcular() {
    try {
        const selopcion = opcionsel.value;
        const num1 = parseFloat(num1txt.value);
        const num2 = parseFloat(num2txt.value);

        if (selopcion !== "nombre" && (isNaN(num1) || isNaN(num2))) {
            throw new Error("Por favor, ingrese números válidos.");
        }

        let resultado;

        switch (selopcion) {
            case "sumar":
                resultado = aliascombine.aliascalc.sum(num1, num2);
                mostrarResultado(`El resultado de la suma es: ${resultado}`);
                break;

            case "restar":
                resultado = aliascombine.aliascalc.res(num1, num2);
                mostrarResultado(`La resta es: ${resultado}`);
                break;

            case "nombre":
                resultado = aliascombine.aliasname;
                mostrarResultado(`El nombre es: ${resultado}`);
                break;

            default:
                throw new Error("Operación no válida");
        }

    } catch (error) {
        mostrarResultado(`Error: ${error.message}`, "error");
    }
}

function mostrarResultado(mensaje, tipo = "success") {
    resultadodiv.textContent = mensaje;
    resultadodiv.className = `resultcls ${tipo}`;
}

// 🔥 Importante: esto va FUERA de la función
ejecutarbtn.addEventListener("click", calcular);

console.log("Operaciones iniciadas - escoge una opción");
