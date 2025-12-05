export function generarPreguntas(cantidad) {
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Ingresa un número válido de tablas");
        return;
    }

    let html = "<h3>Define filas y columnas de cada tabla</h3>";

    for (let i = 0; i < cantidad; i++) {
        html += `
            <label>Tabla ${i + 1} - Filas:</label>
            <input type="number" id="filas_${i}" min="1" placeholder="Ej: 2">
            <label>Columnas:</label>
            <input type="number" id="columnas_${i}" min="1" placeholder="Ej: 3">
            <br><br>
        `;
    }

    html += `<button id="btnGenerarTablas">Generar Tablas</button>`;
    document.getElementById("zonaPreguntas").innerHTML = html;
}
