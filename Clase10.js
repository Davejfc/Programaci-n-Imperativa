// //Ejercicio Loop de pares
// function loopDePares(numero) {
//   for (let i = 0; i <= 100; i++) {
//     console.log(i);

//     if ((i + numero) % 2 == 0) {
//       console.log(`El número ${i + numero} es par`);
//     }
//   }
// }

// // loopDePares(20);

// //Ejercicio Loop de impares con palabra
// function loopDeImpares(numero, palabra) {
//   for (let i = 0; i <= 100; i++) {
//     console.log(i);

//     if ((i + numero) % 2 != 0) {
//       console.log(`El número ${i + numero} es impar y ${palabra}`);
//     }
//   }
// }
// // loopDeImpares(5, "Dave");

// //Ejercicio Sumatoria
// function sumatoria(numero) {
//   let contenedor = 0;
//   for (let i = numero; i > 0; i--) {
//     contenedor += i;
//   }
//   console.log(contenedor);
// }

// // sumatoria(2);

// //Ejercicio Nuevo arreglo
// function nuevoArreglo(numero) {
//   let arreglo = [];
//   for (let i = 1; i <= numero; i++) {
//     arreglo[i - 1] = i;
//   }
//   console.log(arreglo);
// }

// // nuevoArreglo(10);

// //Ejercicio Similar String.split()
// function split(palabra) {
//   arreglo = [];
//   for (let i = 0; i < palabra.length; i++) {
//     arreglo[i] = palabra.slice(i, i + 1);
//   }
//   console.log(arreglo);
// }

// // split("Vanessa");

// //Ejercicio Manejando dos arreglos
// function arrayHandler(arreglo1, arreglo2) {
//   for (let i = 0; i < arreglo1.length; i++) {
//     console.log(`Soy ${arreglo1[i]} y yo soy ${arreglo2[i]}`);
//   }
// }

// // arrayHandler([1, 2, 3, 4], ["h","o","l","a"]);

//Ejercicio Palindromo
function palindromo(palabra) {
  let arreglo = palabra.split("");
  let arregloInvertido = palabra.split("").reverse();
  let pal = true;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] !== arregloInvertido[i]) {
      pal = false;
      break;
    }
  }
  console.log(pal);
}

palindromo("oro");
