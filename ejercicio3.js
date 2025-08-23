//Preguntar si el semaforo está encendido o apagado
//Si esta encendido, preguntar si el semaforo es rojo, amarillo, verde u otrovalor
//si esta en rojo, mostrar un mensaje de "detengase"
//si esta en amarillo, mostrar un mensaje de "precaucion"     
//si esta en verde, mostrar un mensaje de "puede avanzar"
//si es otro valor, mostrar un mensaje de "fallo en el dispositivo"
//Si el semaforo esta apagado, mostrar un mensaje de "semaforo apagado"

let semaforo = prompt("El semaforo esta encendido o apagado?")
//encendido
if (semaforo == "encendido" || semaforo == "ENCENDIDO") {
    let color = prompt("Ingrese el color del semaforo: rojo, amarillo, verde u otro valor")
    if (color == "rojo" || color == "ROJO") {
        console.log("Detengase")
    }
    else if (color == "amarillo" || color == "AMARILLO") {
        console.log("Precaucion")
    }
    else if (color == "verde" || color == "VERDE") {
        console.log("Puede avanzar")
    }
    else if (otrovalor == "otro valor" || otrovalor == "OTRO VALOR")
        console.log("Fallo en el dispositivo")

}
//apagado
else if (semaforo == "apagado" || semaforo == "APAGADO") {
    console.log("Semaforo apagado")
} 
