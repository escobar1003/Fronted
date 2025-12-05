function generarInputs() {
    const tam1 = parseInt(document.getElementById("tam1").value);
    const tam2 = parseInt(document.getElementById("tam2").value);

    if (isNaN(tam1) || isNaN(tam2) || tam1 <= 0 || tam2 <= 0) {
        alert("Por favor ingresa tamaños válidos.");
        return;
    }

    let html = "";

    // ------------------------------
    // Tabla del vector 1
    // ------------------------------
    html += `<h3>Vector 1</h3>`;
    html += `<table border="1"><tr>`;

    for (let i = 0; i < tam1; i++) {
        html += `<td>
                    <label>v1[${i}]</label><br>
                    <input type="number" id="v1_${i}">
                 </td>`;
    }

    html += `</tr></table>`;

    // ------------------------------
    // Tabla del vector 2
    // ------------------------------
    html += `<h3>Vector 2</h3>`;
    html += `<table border="1"><tr>`;

    for (let j = 0; j < tam2; j++) {
        html += `<td>
                    <label>v2[${j}]</label><br>
                    <input type="number" id="v2_${j}">
                 </td>`;
    }

    html += `</tr></table>`;

    // Botón final
    html += `<br><br><button onclick="mostrarValores(${tam1}, ${tam2})">Mostrar valores</button>`;

    document.getElementById("inputsvectores").innerHTML = html;
}


function mostrarValores(tam1, tam2) {
    let vector1 = [];
    let vector2 = [];

    for (let i = 0; i < tam1; i++) {
        vector1.push(parseFloat(document.getElementById(`v1_${i}`).value) || 0);
    }

    for (let j = 0; j < tam2; j++) {
        vector2.push(parseFloat(document.getElementById(`v2_${j}`).value) || 0);
    }

    alert(`Vector 1: [${vector1}]\nVector 2: [${vector2}]`);
}


