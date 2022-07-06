/* 
while (condicion logica){
    todo le codigo que quiero ejecutar repetidas veces
    incluir una linea que la condicion logica cambie porque sino sera un bucle infinito
}
*/

let cantidadMatess = 1;

while( cantidadMatess <= 20){
    document.write("<br>Mate cebado N: " + cantidadMatess)
    cantidadMatess = cantidadMatess + 1; //cantidadMates++ le agregamos 1 porque sino siempre valdra 1 y se volvera infinito
 }

//SI LO QUIERO HACER AL REVES SERIA ASI:

let cantidadMates = 20;

while (cantidadMates >= 1){
    document.write("<br>Mate cebado numero: "+ cantidadMates)
    cantidadMates = cantidadMates -1 //cantidadMates--
}
