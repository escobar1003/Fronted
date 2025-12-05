import { generarPreguntas } from "./generarPreguntas.js";
import { generarTablas } from "./generarTablas.js";
import { mostrarValores } from "./mostrarValores.js";

// Listener fijo para el botón Continuar
document.getElementById("btnContinuar").addEventListener("click", () => {
    const cantidad = parseInt(document.getElementById("cantidadTablas").value);
    generarPreguntas(cantidad);

    // Listener para botón Generar Tablas (ya existe después de generar inputs)
    document.getElementById("zonaPreguntas").addEventListener("click", (e) => {
        if (e.target && e.target.id === "btnGenerarTablas") {
            generarTablas(cantidad);
        }
    });

    // Listener para botón Mostrar Valores (ya existe después de generar tablas)
    document.getElementById("zonaTablas").addEventListener("click", (e) => {
        if (e.target && e.target.id === "btnMostrarValores") {
            mostrarValores(cantidad);
        }
    });
});
