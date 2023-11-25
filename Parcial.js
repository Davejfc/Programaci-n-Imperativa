//Ejercicio 1

const restarPares = (num1, num2) => {
  if (num1 % 2 == 0 && num2 % 2 == 0) {
    return num1 - num2;
  } else {
    return "Lo siento, uno o mas parámetros no son pares";
  }
};

let resta = restarPares(10, 6);
console.log(resta);

//Ejercicio 2

const acceso = (edad, ticket) => {
  if (ticket === true && edad >= 18) {
    return true;
  } else if (ticket === true && edad < 18) {
    return "Sólo puedes acceder con un adulto acompañante";
  } else {
    return false;
  }
};

let estado = acceso(17, true);
console.log(estado);

//Ejercicio 3

let productos = [
  {
    producto: "remera",
    tipo: "indumentaria",
    precio: 2100,
  },
  {
    producto: "notebook",
    tipo: "tecnologia",
    precio: 200000,
  },
  {
    producto: "celular",
    tipo: "tecnologia",
    precio: 27000,
  },
  {
    producto: "protector solar",
    tipo: "cosmetica",
    precio: 2500,
  },
  {
    producto: "pantalon",
    tipo: "indumentaria",
    precio: 7500,
  },
  {
    producto: "tablet",
    tipo: "tecnologia",
    precio: 60000,
  },
];

const arregloTecnologia = (array) => {
  let nuevoArreglo = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].tipo === "tecnologia" && array[i].precio >= 50000) {
      nuevoArreglo.push(array[i]);
    }
  }
  return nuevoArreglo;
};

let arreglo = arregloTecnologia(productos);
console.log(arreglo);