// js/combine.js
export const aliascalc = {
  sum(a, b) { return a + b; },
  res(a, b) { return a - b; }
};

export function esPrimo(num) {
  console.log("combine.esPrimo called with:", num);
  if (typeof num !== "number" || !Number.isInteger(num)) return false;
  if (num <= 1) return false;
  const limite = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= limite; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

export function parImpar(num) {
  if (typeof num !== "number" || !Number.isFinite(num)) return "No es un número válido";
  return (num % 2 === 0) ? "Es PAR" : "Es IMPAR";
}

export function esPalindromo(texto) {
  if (texto === null || texto === undefined) return false;
  const s = String(texto).toLowerCase().replace(/\s+/g, "");
  const rev = s.split("").reverse().join("");
  return s === rev;
}

export const aliasname = "CoderRider 😎";



console.log("combine.js cargado correctamente");
