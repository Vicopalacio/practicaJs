//funcion sin parametro
function saludar(){
    //todo el codigo que quiero que haga la funcion
    document.write("<p>hola mundo</p>");
}

//funcion con parametro: parametro es una palabra que escribimos dentro de los()que seria como una variable local a la funcion
function felicitar(nombre, apellido){
    document.write(`<p> Feliz dia ${nombre}, ${apellido}</p>`);
    let edad = 20;
}
 
//funciones que retornan un valor
function convertirDolaresAPesos(dolares){
    let precioFinal = 318 * dolares;
    return precioFinal; //siempre return es la ultima linea de mi codigo
}

//funcion en forma de flecha (forma actual de escribir una funcion)
let convertirDolaresAPesos = (dolares) => {
    let precioFinal = 318 * dolares;
    return precioFinal;
}

//DIFERENCIAS ENTRE LA FUNCION TRADICIONAL Y FORMA DE FLECHA.
//necesitamos declararlas antes, por ende escribirlas siempre arriba de donde las voy a invocar.
//la ventaja de forma de flecha: escribimos menos
//cuando tengo solo una linea de codigo puedo eliminar los {}.
//cuando tengo un solo parametro puedo eliminar (), pero cuando no tengo o tengo mas de uno tengo que tener los (). 
//POR EJEMPLO
//let convertirDolaresAPesos = dolares =>  318 * dolares;


//para que mi funcion funcione la tengo que "INVOCAR O LLAMAR"
saludar();

let nombreUsuario = prompt("Ingrese un nombre");
let apellidoUsuario = prompt("Ingrese un apellido");

felicitar(nombreUsuario, apellidoUsuario);
//podemos usar los mismos nombres de variables siempre y cuando sean de ambitos distintos, osea local/ global.

let ipad = convertirDolaresAPesos(700);
console.log(ipad);
document.write(`<p>Ipad pro 12 $${convertirDolaresAPesos(760)} sin impuestos </p>`);

