var a=0; b=0; i=0;res=0;
a=prompt("Ingresa el primer numero");
console.log (a);
b=prompt("Ingresa el segundo numero");
console.log (b);
a=parseInt (a);
b=parseInt (b);

for(i=1;i<=a;i++){

   res=res+b;
   console.log(res);
}
alert("el producto es de "+res);
