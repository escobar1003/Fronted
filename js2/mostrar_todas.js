export function mostrarTodas(cantidad) {
    let texto = "";

    for (let i = 0; i < cantidad; i++) {
        let tam = parseInt(document.getElementById(`tam_${i}`).value);
        let vector = [];

        for (let j = 0; j < tam; j++) {
            vector.push(parseFloat(document.getElementById(`t${i}_${j}`).value) || 0);
        }

        texto += `Tabla ${i + 1}: [${vector}]\n`;
    }

    alert(texto);
}
