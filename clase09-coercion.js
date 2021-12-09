// Coerción implícita 
// Ejemplo 1
let a = 4 + "7";
typeof a; // string

// JS al encontrarse con dos tipos de datos diferentes, un 'number' (4) y un 'string' ("7") y un signo más, entiende que es una concatenación y no una operación matemática, por eso convierte al dato (4) de 'number' a 'string'.
console.log(a); // "47"

// Ejemplo 2
let b = 4 * "7";
typeof b; // number

// En este caso, como el signo de multiplicacón (*) solo se utiliza en operacones matemáticas, convierte al dato 'string' ("7") a 'number'
console.log(b); // 28

// Coerción explícita
let c = 20; 
let d = String(c);
// Mediante el metodo 'String()' se cambia el tipo de dato almacenado en 'c' de 'number' a 'string'
typeof(d); // string

let e = Number(d);
// Mediante el metodo 'Number()' se cambia el tipo de dato almacenado en 'd' de 'string' a 'number'
typeof(d); // number