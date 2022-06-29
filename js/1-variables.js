//Esto es un comentario de una unica linea

/*Esto es un comentario 
de multiples
lineas */

//mostrar o imprimir un mensaje en el documento html o pantalla
document.write("<h1>Hola mundo, año 2022, canción</h1>");

//mostrar un mensaje por consola
console.log("alguna frase");

//mostrar un mensaje por una ventana emergente
// alert("esto es una ventana emergente");

//mostrar por pantalla la suma de dos numeros 29+6
// document.write("29+6"); esto no lo resuelve
// document.write(26+6) //va sin comillas para realizar la operacion matematica
//resultado: 35
document.write("<p>Resultado: " + (29+6) + "</p>");
//cuando un signo + tiene texto de un lado o del otro directamente concatena es decir, unir texto, entonces aislo la operacion en otro parentesis.Agregamos p de parrafo, lo envolvemos entre comillas al otro </p> porque es texto y lo separamos con el + para que quede todo prolijo.

// crear o declarar o inicializar VARIABLES (var - let - const) var no se usa, usamos let o const
//con let usamos variables que van a cambiar
// con const constante usamos variables que no van a cambiar su valor

let nombrePersona = "Cristian";
let dolar = 238;

document.write ("<p>Persona:"+ nombrePersona +"</p>")
document.write ("<p>Play5: $"+(500* dolar) +" sin impuestos </p>")

//actualizar el valor del dolar
dolar = 220; 
document.write ("<p>Play5: $"+(500* dolar) +" sin impuestos </p>");

//pedimos al usuario que ingrese el valor del dolar
dolar = parseInt(prompt ("Ingrese el valor del dolar")); 
console.log(dolar);
document.write ("<p>Play5: $"+(500* dolar) +" sin impuestos </p>")

//parseFloat numero decimal y parseInt numero entero.