/*
A partir de el siguiente array de edades nos solicitan realizar lo siguiente:

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

Obtener en un nuevo array las edades menores a 18.
Obtener en un nuevo array las edades mayor o igual a 18.
Obtener en un nuevo array las edades igual a 18.
Obtener el menor.
Obtener el mayor. 
Obtener el promedio de edades.
Incrementar en 1 todas las edades.

*/

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

const menores = (array) => {
  let arrayMenores = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 18) {
      arrayMenores.push(array[i]);
    }
  }
  return arrayMenores;
};
let listaMenores = menores(edades);
console.log(listaMenores);

const mayores = (array) => {
  let arrayMayores = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 18) {
      arrayMayores.push(array[i]);
    }
  }
  return arrayMayores;
};
let listaMayores = mayores(edades);
console.log(listaMayores);

const iguales = (array) => {
  let arrayIguales = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 18) {
      arrayIguales.push(array[i]);
    }
  }
  return arrayIguales;
};
let listaIguales = iguales(edades);
console.log(listaIguales);

const elMenor = (array) => {
  let menor = array[0];
  for (let i = 0; i < array.length; i++) {
    if (menor > array[i]) {
      menor = array[i];
    }
  }
  return menor;
};
let numeroMenor = elMenor(edades);
console.log(numeroMenor);

const elMayor = (array) => {
  let mayor = array[0];
  for (let i = 0; i < array.length; i++) {
    if (mayor < array[i]) {
      mayor = array[i];
    }
  }
  return mayor;
};
let numeroMayor = elMayor(edades);
console.log(numeroMayor);

const promedio = (array) => {
  let cont = 0;
  let prom = 0;
  for (let i = 0; i < array.length; i++) {
    cont += array[i];
  }
  prom = cont / array.length;
  return prom;
};

let arrayPromedio = promedio(edades);
console.log(arrayPromedio);

const sumar = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] += 1;
  }
};

sumar(edades);
console.log(edades);

/*
Tenemos como base un array de cuentas bancarias, donde a cada una la representamos con un objeto literal. A partir de este array trabajaremos sobre los siguientes enunciados, resolviendo de la forma que nos parezca más adecuada

Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
Obtener la cuenta con el titular de la misma más joven.
Obtener un array con las cuentas habilitadas.
Obtener un array con las cuentas deshabilitadas.
Obtener la cuenta con el menor saldo.
Obtener la cuenta con el mayor saldo.

*/

const arrayCuentas = [
  {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: 3253.4,
    edadTitular: 33,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: "corriente",
  },
  {
    titular: "Daniel Malone",
    estaHabilitada: true,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: 1408.68,
    edadTitular: 25,
    tipoCuenta: "corriente",
  },
];

const edadMenores = (array) => {
  let arrayMenores = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].edadTitular < 30) {
      arrayMenores.push(array[i]);
    }
  }
  return arrayMenores;
};
let listaEdadMenores = edadMenores(arrayCuentas);
console.log(listaEdadMenores);

const edadMayores = (array) => {
  let arrayMayores = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].edadTitular >= 30) {
      arrayMayores.push(array[i]);
    }
  }
  return arrayMayores;
};
let listaEdadMayores = edadMayores(arrayCuentas);
console.log(listaEdadMayores);

const edadMenoresIgual = (array) => {
  let arrayMenoresIgual = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].edadTitular <= 30) {
      arrayMenoresIgual.push(array[i]);
    }
  }
  return arrayMenoresIgual;
};
let listaEdadMenoresIgual = edadMenoresIgual(arrayCuentas);
console.log(listaEdadMenoresIgual);

const masJoven = (array) => {
  let cuentaMasJoven;
  let menor = array[0].edadTitular;
  for (let i = 1; i < array.length; i++) {
    // const cuentaActual = array[i];
    if (array[i].edadTitular < menor) {
      menor = array[i].edadTitular;
      cuentaMasJoven = array[i];
    }
  }
  return cuentaMasJoven;
};
let cuentaJoven = masJoven(arrayCuentas);
console.log(cuentaJoven);

const validarHabilitadas = (array) => {
  let habilitadas = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].estaHabilitada === true) {
      habilitadas.push(array[i]);
    }
  }
  return habilitadas;
};

let cuentasHabilitadas = validarHabilitadas(arrayCuentas);
console.log(cuentasHabilitadas);

const validarDeshabilitadas = (array) => {
  let deshabilitadas = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].estaHabilitada === false) {
      deshabilitadas.push(array[i]);
    }
  }
  return deshabilitadas;
};

let cuentasDeshabilitadas = validarDeshabilitadas(arrayCuentas);
console.log(cuentasDeshabilitadas);

const menorSaldo = (array) => {
  let menor = array[0].saldo;
  for (let i = 1; i < array.length; i++) {
    if (menor > array[i].saldo) {
      menor = array[i].saldo;
    }
  }
  return menor;
};
let elMenorSaldo = menorSaldo(arrayCuentas);
console.log(elMenorSaldo);

const mayorSaldo = (array) => {
  let mayor = array[0].saldo;
  for (let i = 1; i < array.length; i++) {
    if (mayor < array[i].saldo) {
      mayor = array[i].saldo;
    }
  }
  return mayor;
};
let elMayorrSaldo = mayorSaldo(arrayCuentas);
console.log(elMayorrSaldo);

/* 
 Extras:
Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento (objeto literal) 
una propiedad llamada id con un valor Numérico

Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, en caso de encontrar retornar la 
cuenta (él objeto literal completo), caso contrario retornar null

Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), deberá retornar 
un array que se cuyas cuentas se encuentren por debajo del saldo enviado por parámetro

Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo, deberá incrementar 
él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined 
Reutilizando la función  buscarPorId 

*/

const generarID = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i].id = i + 1;
  }
};

generarID(arrayCuentas);
console.log(arrayCuentas);

const buscarPorId = (array, id) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return array[i];
    } else {
      return null;
    }
  }
};

let encontrar = buscarPorId(arrayCuentas, 3);
console.log(encontrar);
