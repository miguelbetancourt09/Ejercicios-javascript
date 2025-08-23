let operador = prompt("claro / tigo/ movistar");
let monto = parseFloat(prompt("ingrese el monto total"));
let tipoOperacion = prompt("recarga o paquete");
let codigoPaquete = "";
let valorTipo = 0;

if (tipoOperacion == "recarga" && monto > 10000) {
    console.log("el valor es de:",valorTipo,"el operador elegido es:",operador,"tipo de operacion:",paquete,"el monto es de :",monto);
    
}else if (tipoOperacion == "paquete" && operador == "movistar"){
console.log("paquetes suspendidos para movistar, intente con recarga");

}else if (tipoOperacion == "paquete" && operador == "movistar" || operador == "claro") {
    codigoPaquete = prompt("ingrese el codigo del paquete");
     if (codigoPaquete == "CV") {
        valorTipo += 12000
    }else if (codigoPaquete == "CA") {
        valorTipo += 20000;
    }else if (codigoPaquete == "TA"){
        valorTipo += 22000
    }else if (codigoPaquete == "TB") {
        valorTipo += 30000
    }
}
else{
    console.log("incorrecto");
}
console.log("el valor es de:",valorTipo,"el operador elegido es:",operador,"tipo de operacion:",tipoOperacion,"el monto es de :",monto);