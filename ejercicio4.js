//Socilitar el codigo alfanumerico de la entrada
//Validar si el codigo cumpla el control de seguridad (es decir, que tenga letras como O,S,N,T + 5 digitos)
//Si el codigo es valido, identificar la zona de entrada (O es Oriental, S es Sur, N es Norte, T es Occidental) 
//Si la zona es Oriental, mostrar un mensaje de "Bienvenido a la zona Oriental"
//Si la zona es Sur, mostrar un mensaje de "Bienvenido a la zona Sur" 
//Si la zona es Norte, mostrar un mensaje de "Bienvenido a la zona Norte"
//Si la zona es Occidental, mostrar un mensaje de "Bienvenido a la zona Occidental"
//En caso de error, mostrar un mensaje de "Codigo invalido"

let codigoString = prompt("Ingrese el codigo String");
let codigoInt = prompt("Ingrese los numeros");

if (codigoString.length === 1 && codigoInt.length === 5) {

    if (codigoString == "O" || codigoString == "o") {
        console.log("Bienvenido a la zona Oriental");
    }
    else if (codigoString == "S" || codigoString == "s") {
        console.log("Bienvenido a la zona Sur");
    }
    else if (codigoString == "N" || codigoString == "n") {
        console.log("Bienvenido a la zona Norte");

    }
}

else console.log("Codigo invalido.Por favor verifique e intente nuevamente.");
