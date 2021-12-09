// Variable con scope gobal
var miNombre = "Pky"; 

function nombre() {
  // Variale con scope local (solo es accesible en el contexto de ejecución de la funcion nombre())
  var miApellido = "rms"; 
  console.log (miNombre + " " + miApellido);
}

nombre(); //Salida: Pky rms

console.log (miNombre); //Salida: Pky

console.log (miApellido); //Salida: miApellido is not defined