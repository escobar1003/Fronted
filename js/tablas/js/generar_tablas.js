export function generarTablas(cantidad) {
    let html = "";

    for (let i = 0; i < cantidad; i++) {
        const filas = parseInt(document.getElementById(`filas_${i}`).value);
        const columnas = parseInt(document.getElementById(`columnas_${i}`).value);

        if (isNaN(filas) || filas <= 0 || isNaN(columnas) || columnas <= 0) {
            alert(`Fila o columna inválida para la Tabla ${i + 1}`);
            return;
        }

        html += `<h3>Tabla ${i + 1}</h3>`;
        html += `<table border="1">`;

        for (let f = 0; f < filas; f++) {
            html += "<tr>";
            for (let c = 0; c < columnas; c++) {
                html += `<td>
                            <input type="number" id="t${i}_${f}_${c}" placeholder="T${i}[${f},${c}]">
                         </td>`;
            }
            html += "</tr>";
        }

        html += "</table><br>";
    }

    html += `<button id="btnMostrarValores">Mostrar Valores</button>`;
    document.getElementById("zonaTablas").innerHTML = html;
}
