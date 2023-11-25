/* 1) Escribir un programa que muestre en pantalla los números del 1 al 100,
sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
“buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
por la palabra “fizzbuzz”. */

for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log("fizzbuzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

/* 2) Escriban una función que reciba dos parámetros: un array y un índice. La
función deberá de mostrar por consola el valor del elemento según el
índice dado. Por ejemplo, dada la siguiente array e índice, la función
imprimirá '6'. */

let array = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];
var index = 6;

const mostrar = (array, index) => {
  console.log(array[index]);
};

mostrar(array, index);

/* 3) Escribir una función que, dado un número de mes, devuelva la cantidad
de días de ese mes —suponiendo que no es un año bisiesto—. */

const diasMes = (mes) => {
  switch (mes) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
      console.log("Tiene 31 días");
      break;

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
      console.log("Tiene 30 días");
      break;

    case "Febrero":
      console.log("Tiene 28 días");
      break;

    default:
      console.log("Ingresa bien el nombre del mes");
      break;
  }
};

diasMes("Mayo");

/* 4) Escribir una función de JavaScript que invierta un número. Por ejemplo,
si x = 32443, la salida debería ser 34423. */

const reversa = (numero) => {
  const nString = numero.toString();
  let resultado = "";
  for (let i = nString.length - 1; i > 0; i--) {
    resultado += nString[i];
  }
  console.log(parseInt(resultado));
};
reversa(432423432);

/* 5) Escribir una función que reciba una array y solo imprima los valores que
se repiten. Por ejemplo, dada la siguiente array e índice, la función
imprimirá '6,23,33,100'.  */

let array1 = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];

const repetir = (array) => {
  let valoresRepetidos = [];

  for (let i = 0; i < array.length; i++) {
    let valor = array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (valor === array[j] && valoresRepetidos.indexOf(valor) === -1) {
        valoresRepetidos.push(valor);
        break;
      }
    }
  }

  console.log(valoresRepetidos.join(", "));
};
repetir(array1);
