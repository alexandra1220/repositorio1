let cantVendedor=[50];
let zona=["x","y","z","w"];
let nom=[100];
let monto=[5000];
let n=0,e=0;

do{
    n=prompt(`cuantas personas se entrevistaran?  `);
}while(n<1||n>=50);

for(e=0;e<n;e++){

        do{
        cantVendedor[e]=prompt(`introduzca numero de vendedores`);
        }while( cantVendedor[e]<0||cantVendedor[e]<n);

        do{
            zona[e]=prompt(`ingrese la zona de los vendedores x,y,z,w:  `);
        }while(zona[e]=='');

        do{


            nom[e]=prompt(`ingrese su nombre: `);

        }while(nom[e]=='');

        do{
            monto[e]=prompt(`introduzca el monto vendido`);
        }while(monto[e]<0||monto[e]>5000);

    }

    alert ("info"+zona[e]+cantVendedor[e]+nom[e]+monto[e])

        /*  prom_edad=suma_edad/n;
        prom_ing=suma_ing/n;
        alert("la edad promedio es de:"+prom_edad);
        alert("el promedio de los ingresos es de:"+prom_ing);*/



/*let cantVendedor=[50];
let zona=["x","y","z","w"];
let nom=[100];
let monto=[5000];
var cont=0;

switch(zona["x","y","z","w"]){

    case "x":
    cantVendedor[50]=prompt("Cuantos vendedores hay en la zona x?");
    while(cont<cantVendedor[50]);
    nom[100]=prompt("Ingrese el nombre del vendedor"+cantVendedor);
    monto[5000]=prompt("Ingrese el monto del vendedor"+cantVendedor);

        break;
    case "y":
        cantVendedor[50]=prompt("Cuantos vendedores hay en la zona x?");
        while(cont<cantVendedor[50]);
        nom[100]=prompt("Ingrese el nombre del vendedor"+cantVendedor);
        monto[5000]=prompt("Ingrese el monto del vendedor"+cantVendedor);

        break;
        alert ("en la zona x hay"+cantVendedor +" y sus nombres son:" +nom+"monto vendido"+monto)*/ ;