var nombre = prompt("Esta es la Trivia de la primera. Escribe tu nombre: ");

var res1 = prompt("¿Cómo se llama al primer día de la Primavera?\nA: Primer Día de la Primavera\nB: Equinoccio de Primavera\nC: Equinoccio de Invierno");

if(res1 == "B"){
    res1 = 25;
}else if(res1 == "A"){
    res1 = 0;
}
else if(res1 == "C"){    
    res1 = 0;
}else{
    alert(nombre + ", no es una opción válida");
}

var res2 = prompt("¿Qué sucede en el Polo Norte cuando llega la Primavera?\nA: 6 meses de luz diurna ininterrumpida\nB: 6 meses de oscuridad ininterrumpida\nC: 6 meses de alternancia de luz y oscuridad");

if(res2 == "A"){
    res2 = 25;
}else if(res2 == "B"){
    res2 = 0;
}
else if(res2 == "C"){    
    res2 = 0;
}else{
    alert(nombre + ", no es una opción válida");
}

var res3 = prompt("¿En qué mes empieza la Primavera en el Hemisferio Norte?\nA: Setiembre\nB: Junio\nC. Marzo");

if(res3 == "C"){
    res3 = 25;
}else if(res3 == "B"){
    res3 = 0;
}
else if(res3 == "A"){    
    res3 = 0;
}else{
    alert(nombre + ", no es una opción válida");
}

var res4 = prompt("¿Qué es la Fiesta de la PrimaverA en China?\nA: La Navidad\nB: el Año Nuevo\nC. Fiestas Patrias de China");

if(res4 == "B"){
    res4 = 25;
}else if(res4 == "C"){
    res4 = 0;
}
else if(res4 == "A"){    
    res4 = 0;
}else{
    alert(nombre + ", no es una opción válida");
}

var total = res1 + res2 + res3 + res4;

document.write(nombre + ", has logrado responder correctamente: <br>");
document.write(total + "%<br>");
if (total <= 25){
    document.write("Puedes hacerlo mejor");
}else{
    document.write("Felicitaciones, sabes mucho de la primavera");
}