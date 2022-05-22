/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function menorMayor(numeros) {
  // La función llamada 'menorMayor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
  // arreglo que contenga el menor número del arreglo 'numeros' en la posición cero y el mayor número del arreglo
  // 'numeros' en la posición 1.
  // Ej:
  // menorMayor([4, 6, 1, 7, 15]) debe retornar [1, 15]
  // ya que 1 es el número más chico (menor) dentro del arreglo [4, 6, 1, 7, 15]
  // y 15 es el número más grande (mayor) dentro del arreglo [4, 6, 1, 7, 15]

  // Tu código aca:

 
  numeros.sort((a, b) => {
    if(a == b) {
       return 0; 
    }
    if(a < b) {
      return -1;
    }
    return 1;
  });
let primero = numeros[0];
let ultimo = numeros[numeros.length -1];
return [primero, ultimo]
}

// No modifiques nada debajo de esta linea //

module.exports = menorMayor