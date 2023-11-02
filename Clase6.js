let edad = 3;

let impar = edad % 2 != 0 ? "¿Sabías que tu edad es impar?" : "";

if (edad < 0) {
  console.log("Error, edad inválida. Por favor ingrese un número válido.");
  console.log(impar);
} else if (edad < 18) {
  console.log("No puede pasar al bar.");
  console.log(impar);
} else if (edad > 21) {
  console.log("Puede pasar al bar, pero no puede toamr alcohol");
  console.log(impar);
} else if (edad == 21) {
  console.log("Felicidades por haber llegado a mayoría de edad");
  console.log(impar);
} else {
  console.log("Puede pasar al bar y tomar alcohol");
  console.log(impar);
}
