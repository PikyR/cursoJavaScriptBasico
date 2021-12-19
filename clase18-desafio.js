var autos = [];

function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

function nuevoAuto(continuar) {
  continuar = true;
  while (continuar) {
    let nuevoAuto = new auto();
    nuevoAuto.marca = prompt("Marca: ");
    nuevoAuto.modelo = prompt("Modelo: ");
    nuevoAuto.annio = prompt("Año: ");    
    autos.push(nuevoAuto);
    continuar = confirm("Continuar?");
  }
}

function agregarAutos() {
  let agregarAutos = confirm("Agregar autos?");
  
  if (agregarAutos) {
    nuevoAuto();
  } 
  
  console.log("Lista: ");
  for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);    
  }
}