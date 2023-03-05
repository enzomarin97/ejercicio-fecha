/* Crea un archivo llamado fechas.js que contenga las siguientes líneas
- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos) */
const fechaHoy = new Date();
console.log(fechaHoy)

const fechaNac = new Date(1997, 8, 28, 15, 22, 10);
console.log(fechaNac);

const varFecha = fechaHoy > fechaNac;
console.log(varFecha);

const diaNac = fechaNac.getDate();
console.log(diaNac);

const mesNac = fechaNac.getMonth() + 1;
console.log(mesNac);

const anioNac = fechaNac.getFullYear();
console.log(anioNac);
