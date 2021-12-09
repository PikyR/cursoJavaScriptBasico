// Valores que por defaul regresan 'true' o 'false'
// Valores falsy
false == false;
0 == false;
null == false;
NaN == false;
undefined == false;
"" == false;

// Valores truthy
true == true;
" " == true; // Cualquier caracter incluso un espacio
1 == true; // Caulquier numero distinto a 0 (cero)
{} == true; // Un objeto incluso que este vacio 
[] == true; // Un array incluso que este vacio 
function(){} == true; // una funcion incluso que este vacia 