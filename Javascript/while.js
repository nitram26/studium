//Suma todos los números que indique el usuario hasta que introduzca un O.
let suma1 = 0; // Inicializa la suma en 0
let numero;   // Variable para almacenar el número del usuario
do {
  //Solicita un número al usuario
  numero = parseInt(prompt("Introduce un número (o 0 para terminar):"));
  //Suma el número si no es 0
  if (numero !== 0) {
    suma1 += numero;
  }
} while (numero !== 0); 

alert(`La suma total es: ${suma1}`);
console.log(`La suma total es: ${suma1}`);


// Haz un juego en el que el usuario tenga que acertar un número al azar entre el 0 y el 9. Después el programa indicará cuantos intentos ha necesitado para acertar.

function azar(n) {
  return Math.floor(Math.random() * n); 
}


const numeroSecreto = azar(10);
let intentos = 0;
let adivinado = false;

alert("¡Adivina el número entre 0 y 9!");

while (!adivinado) {
  const numeroUsuario = parseInt(prompt("Introduce un número (entre 0 y 9):"));

  intentos++; 

  if (numeroUsuario === numeroSecreto) {
    adivinado = true;
    alert(`¡Felicidades! Has acertado el número ${numeroSecreto} en ${intentos} intentos.`);
  } else if (numeroUsuario > numeroSecreto) {
    alert("El número es menor. Intenta de nuevo.");
  } else {
    alert("El número es mayor. Intenta de nuevo.");
  }
}

console.log(`Número secreto: ${numeroSecreto}, intentos: ${intentos}`);
