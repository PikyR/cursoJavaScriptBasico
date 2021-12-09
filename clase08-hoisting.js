// Hoisting
// se produce cuando se llama a una variabble antes de declararla

console.log(miNombre);

var miNombre = "pky";

//Salida: undefined

// Cuando el navegador esta compliando el codigo y se encuentra con la llamada a la variable en la linea 4, como la misma no esta declarada, JS la crea y le asigna el valor de 'undefined', como el siguiente ejemplo

//  var myName = undefined;
//  console.log(myName);

//  Salida: undefined 


// Hoistin en las funciones
// como el compilador procesa antes que se ejecute el codigo las funciones y las variables, cuando se llama a una funcion antes de su declaracion si va a dar el resultado esperado, pero en este ejemplo, como la variable esta declarada e inicializada (linea 27) despues de que se le hace el llamado (linea 24), en el output de la función 'hola()' tendra el valor 'undefined'

hola();

function hola() {
  console.log("Hola " + miApellido);
}

var miApellido = "rms";

// Salida: Hola undefined

// Buenas practicas
// Primero se declaran las variables, luego las funciones y despues se llama a las mismas.