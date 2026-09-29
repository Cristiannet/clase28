const prompt = require('prompt-sync')();

let nombre = prompt("cual es tu nombre? ");
console.log("hola, " + nombre + "!");

let numero1 = prompt("cual es el primer numero? ")
let operacion = prompt("cual es la operacion que quiere hacer? (+, -, *, /) ")
let numero2 = prompt("cual es el segundo numero?")

let resultado;

if (operacion === "+") {
    resultado = numero1 + numero2;
  } else if (operacion === "-") {
    resultado = numero1 - numero2;
  } else if (operacion === "*") {
    resultado = numero1 * numero2;
  } else if (operacion === "/") {
    if (numero2 === 0) {
      resultado = "No se puede dividir entre cero";
    } else {
      resultado = numero1 / numero2;
    }
  } else {
    resultado = "Operación no válida";
  }

  console.log("Resultado:", resultado);