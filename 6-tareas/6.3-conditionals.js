1. Representar el diagrama de flujo 6.3.1 que esta en ./assets con js y condicionales.

var estadoLampara;
var estadoFoco;

if (estadoLampara == 'enchufada'){
    if (estadoFoco == 'quemado'){
        console.log('Reemplazar el foco')
    } else {
        console.log('Comprar nueva lámpara')
    }
} else {
    console.log('enchufarla');
}

2. El usuario va a ingresar por teclado (prompt) el nombre de una pelicula, decirle quien es el director (alert).
3. Definir un arreglo de objetos peliculas donde tengan una propiedad isFree, el usuario debe ingresar el nombre de
una pelicula y el sistema le respondera si puede ver la pelicula o sino puede, decirles el precio.
4. Hacer un switch case donde al escribir un numero de mes, nos imprima el nombre.

var dayOfWeek = 1;
switch (dayOfWeek) {
    case 1: 
      console.log('lunes');
    break;
    case 2: 
    console.log('martes');
    break;
    default: 
      console.log('ese dia no existe');
    break;
}