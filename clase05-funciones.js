// Tipos de finciones 

// declarativas 
function miFuncion() {
  return 99;
}

miFuncion(); // 99

// de expresión o funcion anonima
var miOtraFuncion = function(a,b){
  return a + b;
}

miOtraFuncion(2, 44); // 46

// Ejemplos
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

function sumar(a, b) {
  let resultado = a + b;
  return resultado;
}