export function generarTablas(cantidad) {
    let html = "";

    for (let i = 0; i < cantidad; i++) {
        const tam = parseInt(document.getElementById(`tam_${i}`).value);

        if (isNaN(tam) || tam <= 0) {
            alert(`El tamaño de la Tabla ${i + 1} no es válido.`);
            return;
        }

        html += `<h3>Tabla ${i + 1}</h3>`;
        html += `<table border="1"><tr>`;

        for (let j = 0; j < tam; j++) {
            html += `
                <td>
                    <label>T${i + 1}[${j}]</label><br>
                    <input type="number" id="t${i}_${j}">
                </td>
            `;
        }

        html += `</tr></table><br>`;
    }

    html += `<button id="btnMostrarTodas">Mostrar Valores</button>`;

    document.getElementById("zonaTablas").innerHTML = html;
}
