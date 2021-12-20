var articulos = [
  {nombre: "bici", costo: 3000},
  {nombre: "tele", costo: 2500},
  {nombre: "libro", costo: 300},
  {nombre: "celu", costo: 10000},
  {nombre: "compu", costo: 20000},
  {nombre: "teclado", costo: 500},
  {nombre: "auriculares", costo: 1700}
]

var articulosFiltrados = articulos.filter(function(articulo) {
  return articulo.costo <= 500;
});

var nombreArticulos = articulos.map(function(articulo) {
  return articulo.nombre;
});