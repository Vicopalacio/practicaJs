//como crear un arreglo vacio
let colores = [];

//como crear un arreglo con datos
let series = ["Better call Saul",6, "Stranger things",4, "Breaking bad",5, true];

console.log("cantidad de series " + series.length); //con lenght sabemos la cantidad de items que tiene el arreglo
console.log("cantidad de colores " + colores.length);

//mostrar el array en pantalla
document.write(series);
console.log(series[4]);//muestra un elemento especifico de un arreglo, en esa posicion.

document.write("<ul>");
for(let indiceSerie = 0; indiceSerie < series.length; indiceSerie++){
    document.write("<li>"+series[indiceSerie]+"</li>");
}
document.write("</ul>");

//agregar un nuevo elemento al final del arreglo
series.push("Mad men");

document.write("<h3>Agregar un nuevo dato al final del arreglo</h3>")
document.write("<ul>");
for(let indiceSerie = 0; indiceSerie < series.length; indiceSerie++){
    document.write("<li>"+series[indiceSerie]+"</li>");
}
document.write("</ul>");

//agregar un nuevo elemento en una posicion particular
series.splice(3,0,"Euphoria");//(1°posicion donde inserto nuevo elemento, 2°cantidad a elementos a borrar, 3°item a insertar que puede ser cualquier tipo de dato.)

document.write("<h3>Agregar un nuevo dato en posicion especifica</h3>")
document.write("<ul>");
for(let indiceSerie = 0; indiceSerie < series.length; indiceSerie++){
    document.write("<li>"+series[indiceSerie]+"</li>");
}
document.write("</ul>");

//eliminar un elemento del arreglo
series.splice(1,1);//(1°posicion del elemento que quiero borrar, 2° cantidad de elementos a borrar.)

document.write("<h3>Eliminar un dato en posicion especifica</h3>")
document.write("<ul>");
for(let indiceSerie = 0; indiceSerie < series.length; indiceSerie++){
    document.write("<li>"+series[indiceSerie]+"</li>");
}
document.write("</ul>");

//eliminar varios items desde una posicion particular en adelante
series.splice(5);//(un unico numero,posicion desde la que borramos todos los elementos en adelante).

document.write("<h3>Eliminar varios items desde una posicion en particular</h3>")
document.write("<ul>");
for(let indiceSerie = 0; indiceSerie < series.length; indiceSerie++){
    document.write("<li>"+series[indiceSerie]+"</li>");
}
document.write("</ul>");

//eliminar el elemento de la primera posicion
series.shift();
document.write("<h3>Eliminar elemento la primera posicion del arreglo</h3>")
document.write("<ul>");
for(let indiceSerie = 0; indiceSerie < series.length; indiceSerie++){
    document.write("<li>"+series[indiceSerie]+"</li>");
}
document.write("</ul>");

//eliminar el elemento de la ultima posicion
series.pop();
document.write("<h3>Eliminar un elemento de la ultima posicion</h3>")
document.write("<ul>");
for(let indiceSerie = 0; indiceSerie < series.length; indiceSerie++){
    document.write("<li>"+series[indiceSerie]+"</li>");
}
document.write("</ul>");

//modificar un item del arreglo
series[1] = "Peaky Blinders";
document.write("<h3>Modificar un item del arreglo</h3>")
document.write("<ul>");
for(let indiceSerie = 0; indiceSerie < series.length; indiceSerie++){
    document.write("<li>"+series[indiceSerie]+"</li>");
}
document.write("</ul>");

console.log(series[30]);//undefined

//ejercicio pequeño

// do{
//     let colorNuevo = prompt("ingrese un color");
//     colores.push(colorNuevo);
// }while(confirm("Desea ingresar mas colores?"));
// document.write(colores);