export function mostrarValores(cantidad) {
    let texto = "";

    for (let i = 0; i < cantidad; i++) {
        const filas = parseInt(document.getElementById(`filas_${i}`).value);
        const columnas = parseInt(document.getElementById(`columnas_${i}`).value);

        texto += `Tabla ${i + 1}:\n`;

        for (let f = 0; f < filas; f++) {
            let filaValores = [];
            for (let c = 0; c < columnas; c++) {
                const valor = parseFloat(document.getElementById(`t${i}_${f}_${c}`).value) || 0;
                filaValores.push(valor);
            }
            texto += `[${filaValores.join(", ")}]\n`;
        }

        texto += "\n";
    }

    alert(texto);
}
