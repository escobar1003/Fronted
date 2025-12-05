console.log("MAIN CARGÓ CORRECTAMENTE");



import { generarPreguntas } from "./generarPreguntas.js";
import { generarTablas } from "./generarTablas.js";
import { mostrarTodas } from "./mostrarTodas.js";

document.getElementById("btnContinuar").addEventListener("click", () => {
    generarPreguntas();
});

document.addEventListener("click", (e) => {
    if (e.target.id === "btnGenerarTablas") {
        const cantidad = parseInt(document.getElementById("cantidadTablas").value);
        generarTablas(cantidad);
    }

    if (e.target.id === "btnMostrarTodas") {
        const cantidad = parseInt(document.getElementById("cantidadTablas").value);
        mostrarTodas(cantidad);
    }
});
