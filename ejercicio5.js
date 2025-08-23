//Pedir cedula y monto de compra
//Partiendo de un saldo inicial de 100 puntos, sumar los puntos según el tramo del monto de compra
//Si el monto es menor a 100000, sumar 100 puntos
//Si el monto es entre 100000 y 500000, sumar 250 puntos
//Si el monto es mayor a 500000, sumar 400 puntos
//Mostrar la cedula y el total de puntos acumulados

let cedula = prompt("Ingrese su cedula:");
let Monto = parseFloat(prompt("Ingrese el monto de su compra:"));
let puntosIniciales = 100;
let sumapuntos1 = 100;
let sumarpuntos2 = 250;
let sumarpuntos3 = 400;
let cantidadPuntosFinales = 0;
let descuento = 0;
let saldoFinal = 0;
let valorFaltante = 0;

if (Monto >= 1 && Monto <= 100000) {
    cantidadPuntosFinales = puntosIniciales + sumapuntos1;
} 

if (Monto >=101000 && Monto <= 500000) {
    cantidadPuntosFinales = puntosIniciales + sumarpuntos2;
} 

if (Monto > 501000) {
    cantidadPuntosFinales = puntosIniciales + sumarpuntos3;
} 

if (cantidadPuntosFinales >= 500) {
    descuento = Monto * 20/ 100;
    saldoFinal = Monto - descuento;
    console.log("su cedula es", cedula, "su monto es de:", Monto, "su descuento es de:", descuento, "su saldo final es de:", saldoFinal );

}
if (cantidadPuntosFinales < 500) {
    valorFaltante = 500 - cantidadPuntosFinales;
    console.log("puntos insuficientes, valor actual:",Monto,"la cantidad de puntos que le faltan es:", valorFaltante);
} 
        



