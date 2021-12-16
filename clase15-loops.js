var estudiantes = ["lorena", "pablo", "raul", "maria"];

function saludar(estudiante) {
  console.log(`Hola ${estudiante}`);
}

console.log("Primer loop for");
for (let i = 0; i < estudiantes.length; i++) {
  saludar(estudiantes[i]);
}

console.log("Segundo loop for-of");
for (const estudiante of estudiantes) {
  saludar(estudiante);
}
