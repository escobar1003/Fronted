export function generarPreguntas() {
    const cantidad = parseInt(document.getElementById("cantidadTablas").value);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Ingresa un número válido de tablas.");
        return;
    }

    let html = "<h3>Tamaños de cada tabla</h3>";

    for (let i = 0; i < cantidad; i++) {
        html += `
            <label>Tamaño de la Tabla ${i + 1}:</label>
            <input type="number" id="tam_${i}" min="1" placeholder="Ej: 4"><br><br>
        `;
    }

    html += `<button id="btnGenerarTablas">Generar Tablas</button>`;

    document.getElementById("zonaPreguntas").innerHTML = html;
}
