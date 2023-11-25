// 1) Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
function diezPrimeros(num) {
  for (let i = num + 1; i <= num + 10; i++) {
    console.log(i);
  }
}

diezPrimeros(0);

// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.

function saltoTres() {
  for (let i = 5; i <= 20; i += 3) {
    console.log(i);
  }
}

saltoTres();

// 3) Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100 = 5050

function sumarPrimerosCien() {
  let total = 0;
  for (let i = 0; i <= 100; i++) {
    total += i;
  }
  console.log(total);
}

// sumarPrimerosCien();

// 4) Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.

function factorial(num) {
  let total = 1;
  for (let i = num; i >= 1; i--) {
    total *= i ;
  }
  console.log(total);
}

factorial(8);

// 5) Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor ingresado por parámetro.
