var i=0; edad=0; suma=0; promedio=0;menor=0; mayor=0;var a=0;
for(i=1;i<5;i++) {
    edad=prompt("Ingrese la edad " +i);
    console.log (edad);
    suma=suma+parseInt(edad);

    if(edad<18){
        console.log ("es menor de edad");
        menor=menor+1;
    }else{
        console.log ("es mayor de edad");
        mayor=mayor+1;
    }
}
console.log ("la suma de las edades es de: " +suma);
promedio=suma/4;
console.log ("El promedio de edades es de: "+promedio);
console.log("Cantidad de mayores de edad "+mayor);
console.log("Cantidad de menores de edad "+menor);


    /*
    */
