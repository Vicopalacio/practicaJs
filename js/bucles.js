/* 
while (condicion logica){
    todo le codigo que quiero ejecutar repetidas veces
    incluir una linea que la condicion logica cambie porque sino sera un bucle infinito
}
*/

// let cantidadMatess = 1;

// while( cantidadMatess <= 20){
//     document.write("<br>Mate cebado N: " + cantidadMatess)
//     cantidadMatess = cantidadMatess + 1; //cantidadMates++ le agregamos 1 porque sino siempre valdra 1 y se volvera infinito
//  }

//SI LO QUIERO HACER AL REVES SERIA ASI:

let cantidadMates = 20;

// while (cantidadMates >= 1){
//     document.write("<br>Mate cebado numero: "+ cantidadMates)
//     cantidadMates = cantidadMates -1 //cantidadMates--
// }


//segundo bucle y se llama DO WHILE
//ejemplo do-while, hacer...... mientras (se cumple la condicion logica)

/* 
do{
    todas las lineas de codigo que quiero ejecutar varia veces
    cambiar la condicion logica para no entrar en bucle infinito
}whilePEGADITO(condicion logica);
*/

do{
    document.write("<br>mate cebado n: " + cantidadMates)
    cantidadMates--; // cantidadMates = cantidadMates -1
}while( cantidadMates >= 1)

//por ejemplo, si yo quiero decir que cantidad de mates es 0, el DO hace que si o si se realice esa primera linea de codigo, y despues vemos que no seguira realizando el bucle, pero al menos una vez si lo realiza. Esa es la diferencia.

