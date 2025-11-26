// ---------- funciones ----------

console.log("JS cargado");


export function esPrimo(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

export function primosHasta(limite) {
  const lista = [];
  for (let i = 2; i <= limite; i++) {
    if (esPrimo(i)) lista.push(i);
  }
  return lista;
}

// ---------- lógica UI ----------
document.addEventListener("DOMContentLoaded", () => {
  const mode = document.getElementById("mode");
  const forCheck = document.getElementById("for-check");
  const forList = document.getElementById("for-list");
  const numero = document.getElementById("numero");
  const limite = document.getElementById("limite");
  const run = document.getElementById("run");
  const output = document.getElementById("output");

  mode.addEventListener("change", () => {
    if (mode.value === "check") {
      forCheck.style.display = "";
      forList.style.display = "none";
    } else {
      forCheck.style.display = "none";
      forList.style.display = "";
    }
  });

  run.addEventListener("click", () => {
    if (mode.value === "check") {
      const n = Number(numero.value);
      if (esPrimo(n)) {
        output.textContent = `${n} es primo`;
      } else {
        output.textContent = `${n} NO es primo`;
      }
    } else {
      const lim = Number(limite.value);
      output.textContent = primosHasta(lim).join(", ");
    }
  });
});
