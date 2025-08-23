//

let horasLP = parseInt(prompt("Ingrese la cantidad de horas que va a usar la lavadora pequeña:"));
let horasLG = parseInt(prompt("Ingrese la cantidad de horas que va a usar la lavadora grande:"));
let totalhoras = horasLP + horasLG;
let valorLavadoraPequeña = 3000;
let valorLavadoraGrande = 4000;
let porcentaje = 0;
let valorTotal = 0;
if (totalhoras > 10) {
    valorTotal = ((horasLP * valorLavadoraPequeña) + (horasLG * valorLavadoraGrande))*97/100;


} else {
    valorTotal = (horasLP * valorLavadoraPequeña) + (horasLG * valorLavadoraGrande);
}

console.log( valorTotal);