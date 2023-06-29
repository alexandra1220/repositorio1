let edad=0;nombre="";cont=0;a=0;
a=prompt("Cuantas veces quieres repetir el ciclo?");
edad=parseInt (edad);
cont=parseInt (cont);
a=parseInt (a);
while(cont<a){
nombre=prompt("ingresa el nombre");
edad=prompt("Ingresa la edad");
console.log (nombre + edad)
cont++;

if(edad<18){
    console.log ("es menor de edad");

}else{
    console.log ("es mayor de edad");

}
}
