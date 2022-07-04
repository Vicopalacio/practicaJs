/* ESTRUCTURA IF

if (condicion logica){
    todo el codigo a ejecutar si se cumple la condicion, o si la condicion e verdadera true
}else{

}
si la rama no se desarrolla podemos usar el ELSE
*/

let numero1 = parseInt(prompt("ingrese un primer numero"));
let numero2 = parseInt(prompt("ingrese un segundo numero"));

console.log(numero1);
console.log(numero2);

// if (numero1 > numero2) {
//   document.write(
//     "El primer numero es el mayor, el numero ingresado: " + numero1
//   );
// } else if (numero2 > numero1) {
//   document.write(
//     "El segundo numero es el mayor, el numero ingresado: " + numero2
//   );
// } else {
//   document.write("Los numeros son iguales, el numero ingresado: " + numero2);
// }
if (numero1 > numero2) {
    document.write(
      "El primer numero es el mayor, el numero ingresado: " + numero1
    );
  } else if (numero2 === numero1) {
    document.write("Los numeros son iguales, el numero ingresado: " + numero2);
  } else {
    document.write(
        "El segundo numero es el mayor, el numero ingresado: " + numero2
      );
  }