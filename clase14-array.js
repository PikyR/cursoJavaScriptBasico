// Array's

var frutas = ["manzana", "uva", "pera", "naranja"];

console.log(frutas); // (4) ['manzana', 'uva', 'pera', 'naranja']

console.log(frutas.length); // 4

console.log(frutas[0]); // manzana

console.log(frutas[2]); // pera

// Metodos para manipular array's
// push() 
// agrega items al final del array 
var otrasFrutas = frutas.push("Papaya");
// output: (5) ['manzana', 'uva', 'pera', 'naranja', 'Papaya']

// pop() 
// elimina el ultimo item del array
var ultimo = frutas.pop();
// output: (4) ['manzana', 'uva', 'pera', 'naranja']

// unshift() 
// agrega items al inicio del array
var primero = frutas.unshift("mandarina");
// output: (5) ['mandarina', 'manzana', 'uva', 'pera', 'naranja']

// shift()
// elimina el primer item del array
var borrarPrimero = frutas.shift();
// output: (4) ['manzana', 'uva', 'pera', 'naranja']

// Metodo para buscar el index de un item
// indexOf()
// busca el index del valor ingresado
var indexPosition = frutas.indexOf("pera")
// output: 2
