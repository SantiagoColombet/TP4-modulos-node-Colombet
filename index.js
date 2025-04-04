// 1
import concatenar from './modules/concatenar.js';
console.log(concatenar("a", "b"))

// 2
import matematica from './modules/matematica.js'; 

console.log(matematica.sumar(2, 3)); 
console.log(matematica.restar(5, 3)); 
console.log(matematica.dividir(6, 2)); 
console.log(matematica.multiplicar(4, 3)); 
console.log(matematica.PI)

// 3
import Alumno from './modules/alumno.js'; 

const alumno1 = new Alumno("fernando", "23932671");
const alumno2 = new Alumno("agustin", "19328529")
console.log(alumno1);
console.log(alumno2); 

// 4

