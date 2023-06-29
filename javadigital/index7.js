let canthDia=0;canthNoche=0,sueldoD=0;sueldoN=0;totalSueldo=0;totalD=0;totalN=0;bono=0;nuevoS=0,
canthDia=parseInt (canthDia);
canthNoche=parseInt (canthNoche);
sueldoD=parseFloat(sueldoD);
sueldoN=parseFloat(sueldoN);
totalD=parseFloat (totalD);
totalN=parseFloat (totalN);
totalSueldo=parseFloat (totalSueldo);
bono=parseFloat (bono);
nuevoS=parseFloat (bono);
canthDia=prompt("Ingresa la cantidad de horas trabajadas de dia");
canthNoche=prompt("Ingresa la cantidad de horas trabajadas de noche");
sueldoD=prompt("Ingresa el sueldo pagado de dia");
sueldoN=prompt("Ingresa el sueldo pagado de noche");

totalD=canthDia*sueldoD;
totalN=canthNoche*sueldoN;
totalSueldo=totalD+totalN;

alert (" El sueldo final del trabajador es de " + totalSueldo + "$");

    if (totalSueldo>1000){

        bono=0.15*totalSueldo;
        nuevoS=totalSueldo+bono;
        alert ("Felicidades recibiste un bono de 15% ahora tu  sueldo es de " + nuevoS +"");

    }else{
        alert ("No recibiste ningun bono tu sueldo final es de " + totalSueldo);
    }
