// 

let eleccionEmpresa = prompt(("ingresar a que suscripcion quiere pertenecer 1.Dinero 2.national geographic 3.american journal"));
let tiempoSuscripcion= 0;
let operador = prompt("ingrese a que operador telefonico pertenece")
let valorTresMeses = 0;
let valorSeisMeses = 0;
let valorAño = 0;
let valorFinal = 0;
//DINERO
if ((eleccionEmpresa == "dinero" || eleccionEmpresa == "DINERO") && (operador ==  "claro"|| operador =="CLARO")) {
    tiempoSuscripcion = parseInt(prompt("ingresar cuantos meses va a pertenecer 3-para 3 meses 6-para 6 meses 1-para un año"));
    if (tiempoSuscripcion == "3") {
        valorFinal = 6 * 95/100;
        console.log(valorFinal);
    }if (tiempoSuscripcion == "6") {
        valorFinal = 11 * 95/100 ; 
        console.log(valorFinal);
        
    }if (tiempoSuscripcion == "1") {
        valorFinal = 20 * 95/100;
        console.log(valorFinal);
        
    }
}else if (eleccionEmpresa == "dinero" || eleccionEmpresa == "DINERO")
    {
    tiempoSuscripcion = parseInt(prompt("ingresar cuantos meses va a pertenecer 3-para 3 meses 6-para 6 meses 1-para un año"));
    if (tiempoSuscripcion == "3") {
        console.log("6 dolares debes pagar");
    }
    if (tiempoSuscripcion == "6") {
        console.log("11 dolares debes pagar");
    }
    if (tiempoSuscripcion == "1") {
        console.log("20 dolares debes pagar");
        
    }
}

//national geographic
if ((eleccionEmpresa == "national geographic" ||  eleccionEmpresa == "NATIONAL GEOGRAPHIC") && (operador == "claro" ||operador =="CLARO")) {
    tiempoSuscripcion = parseInt(prompt("ingresar cuantos meses va a pertenecer 3-para 3 meses 6-para 6 meses 1-para un año"));
    if (tiempoSuscripcion == "3") {
        valorFinal = 10 * 95/100;
        console.log(valorFinal);
    }if (tiempoSuscripcion == "6") {
        valorFinal = 13 * 95/100 ; 
        console.log(valorFinal);
        
    }if (tiempoSuscripcion == "1") {
        valorFinal = 22 * 95/100;
        console.log(valorFinal);
        
    }
}else if (eleccionEmpresa == "national geographic" || eleccionEmpresa == "NATIONAL GEOGRAPHIC") 
   
{
    tiempoSuscripcion = parseInt(prompt("ingresar cuantos meses va a pertenecer 3-para 3 meses 6-para 6 meses 1-para un año"));
    if (tiempoSuscripcion == "3") {
        console.log("10 dolares debes pagar");
    }
    if (tiempoSuscripcion == "6") {
        console.log("13 dolares debes pagar");
    }
    if (tiempoSuscripcion == "1") {
        console.log("22 dolares debes pagar");
        
    }
}
//american journal
if   ((eleccionEmpresa == "american journal" ||  eleccionEmpresa =="AMERICAN JOURNAL") && (operador == "claro" ||operador == "CLARO")) {
    tiempoSuscripcion = parseInt(prompt("ingresar cuantos meses va a pertenecer 3-para 3 meses 6-para 6 meses 1-para un año"));
    if (tiempoSuscripcion == "3") {
        valorFinal = 12 * 95/100;
        console.log(valorFinal);
    }if (tiempoSuscripcion == "6") {
        valorFinal = 18 * 95/100 ; 
        console.log(valorFinal);
        
    }if (tiempoSuscripcion == "1") {
        valorFinal = 30 * 95/100;
        console.log(valorFinal);
        
    }
}else if (eleccionEmpresa == "american journal" ||eleccionEmpresa == "AMERICAN JOURNAL") 
    {
    tiempoSuscripcion = parseInt(prompt("ingresar cuantos meses va a pertenecer 3-para 3 meses 6-para 6 meses 1-para un año"));
    if (tiempoSuscripcion == "3") {
        console.log("12 dolares debes pagar");
    }
    if (tiempoSuscripcion == "6") {
        console.log("18 dolares debes pagar");
    }
    if (tiempoSuscripcion == "1") {
        console.log("30 dolares debes pagar");
        
    }
}


