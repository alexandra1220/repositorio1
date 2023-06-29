let estudiante=[50];
let materia=[50];
let ing=[50];
let edad=[50];
let n=0,e=0;
let prom_notas=0;
let prom_edad=0;
let prom_materias=0;
let suma_notas=0,suma_edad=0;suma_materias=0;
do{
    n=prompt(`cuantos estudiantes se van a entrevistar?  `);
}while(n<1||n>=50);


for(e=1;e<n;e++){

        do{
            estudiante[e]=prompt(`ingrese el promedio de notas del estudiante:  `+e);
        }while(estudiante[e]<0||estudiante[e]>21);

        do{
            materia[e]=prompt(`ingrese la cant de asignaturas cursadas: `+e);

        }while(materia[e]<0||materia[e]>21);

        do{
            edad[e]=prompt(`introduzca la edad`+e);
        }while(edad[e]<0||edad[e]>80);

        suma_notas=suma_notas+parseInt(estudiante[e]);
        suma_materias=suma_materias+parseInt(estudiante[e]);
        suma_edad=suma_edad+parseInt(edad[e]);

}
            prom_notas=suma_notas/n;
            prom_materias=suma_materias/n;
            prom_edad=suma_edad/n;

        alert("el promedio de notas es de:"+prom_notas);
        alert("la edad promedio es de:"+prom_edad);
        alert("el promedio de materias es de:"+prom_materias);

