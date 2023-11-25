/*
https://drive.google.com/file/d/1R5zMorgYFgxxY6v3jhkoQc9tIMrRAgQ9/view
*/
/*
1) Seguir las instrucciones en este sandbox, para escribir y sumar los valores dentro
de una matriz.
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

let matriz5 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];

const sumarArray = (matriz) => {
  let acc = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      acc += matriz[i][j];
    }
  }
  return acc;
};

let resultadomatriz = sumarArray(matriz5);
console.log(resultadomatriz);

/*
2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
números. La matriz debe verse así:
Matriz de 10x10 y cuente del 1 al 100
*/

const generarArray = () => {
  let matriz100 = [];
  for (let i = 0; i < 10; i++) {
    matriz100[i] = [];
    for (let j = 0; j < 10; j++) {
      matriz100[i][j] = i * 10 + j + 1;
    }
  }
  return matriz100;
};

console.table(generarArray());

/*
3) Por último, vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo. (1-100)
b) La otra va a marcar los valores de la diagonal marcada en verde. (10-91)
Ambas funciones deben devolver un resultado único.

Rojo: 505
Verde 505
Trabajar en el mismo sandbox del ejercicio 2.

*/

const sumaRojo = (matriz) => {
  let acc = 0;
  for (let i = 0; i < matriz.length; i++) {
    acc += matriz[i][i];
  }
  console.log(acc);
};

sumaRojo(generarArray());

const sumaVerde = (matriz) => {
  let acc = 0;
  for (let i = 0; i < matriz.length; i++) {
    acc += matriz[i][matriz.length - 1 - i];
  }
  console.log(acc);
};
sumaVerde(generarArray());
