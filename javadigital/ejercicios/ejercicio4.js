let cantVendedor=[50];
let zona=["x","y","z","w"];
let nom=[100];
let monto=[5000];
let n=0,e=0;
let cont=0;

do{
    n=prompt(`cuantas personas se entrevistaran?  `);
}while(n<1||n>=50);

for(e=0;e<n;e++)

    switch(zona[e]){

        case "x":
        cantVendedor[e]=prompt("Cuantos vendedores hay en la zona x?");
        while(cont<cantVendedor[e]);
        nom[e]=prompt("Ingrese el nombre del vendedor"+cantVendedor[e]);
        monto[e]=prompt("Ingrese el monto del vendedor"+cantVendedor[e]);

            break;
        case "y":
            cantVendedor[e]=prompt("Cuantos vendedores hay en la zona x?");
            while(cont<cantVendedor[e]);
            nom[e]=prompt("Ingrese el nombre del vendedor"+cantVendedor[e]);
            monto[e]=prompt("Ingrese el monto del vendedor"+cantVendedor[e]);

            break;
    }

    alert ("info"+zona[e]+cantVendedor[e]+nom[e]+monto[e]);