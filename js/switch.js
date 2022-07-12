let estacion = prompt(
  "seleccione su estacion preferida: 1-verano, 2-otoño, 3-invierno, 4-primavera"
);

// if(estacion === "1"){
//     document.write(
//     `<ul>
//         <li>comida= sandwich de milanesa</li>
//         <li>bebida= cerveza</li>
//     </ul>`)
// }else{
//     if(estacion === "2"){
//         document.write(
//             `<ul>
//                 <li>comida= lasagna de verdura</li>
//                 <li>bebida= vino tinto</li>
//             </ul>`);
// }else if(estacion === "3"){
//     document.write(
//         `<ul>
//             <li>comida= humita</li>
//             <li>bebida= vino blanco</li>
//         </ul>`);
// }else if(estacion === "4"){
//     document.write(
//         `<ul>
//             <li>comida= salteado de verduras</li>
//             <li>bebida= agua</li>
//         </ul>`);
// }else{
//     document.write("seleccionaste una opcion erronea")
// }
// }

//SWITCH

switch (estacion) {
  case "1":
    document.write(
      `<ul>
        <li>comida= sandwich de milanesa</li>
        <li>bebida= cerveza</li>
    </ul>`);
    break;
  case "2":
    document.write(
      `<ul>
        <li>comida= lasagna de verdura</li>
        <li>bebida= vino tinto</li>
    </ul>`);
    break;
  case "3":
    document.write(
      `<ul>
        <li>comida= humita</li>
        <li>bebida= vino tinto</li>
    </ul>`);
    break;
  case "4":
    document.write(
      `<ul>
        <li>comida= salteado de verduras</li>
        <li>bebida= agua</li>
    </ul>`);
    break;
    default: 
        document.write("seleccionaste una opcion erronea")
}

//defoult es la ultima opcion si es que no se cumplen las otras condiciones.
//siempre va un case y despues un break
//tambien podemos poner un case y otro case abajo
// va todo en la misma llave
