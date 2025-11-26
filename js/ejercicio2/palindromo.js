export function esPalindromo(texto) {

    const limpio = texto.toLowerCase().replace(/\s/g, "");
    const reverso = limpio.split("").reverse().join("");

    return limpio === reverso;
}
