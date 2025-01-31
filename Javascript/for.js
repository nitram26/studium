// Escribe todos los números enteros comprendidos entre el O y el 100 (incluidos), de uno en un uno, y en orden creciente.
for (let index = 0; index < 11; index++) {
  console.log(index);
  }

// Escribe todos los números pares del 0 al 100, en orden inverso.
for (let index = 100; index >1; index-=2) {
  console.log(index);
  }

  // Suma todos los números comprendidos entre los dos números enteros que indique el usuario (sin incluirlos).
function suma(num1, num2) {
  let acumula = 0
  for (let index = num1+1; index < num2; index++) {
  acumula= acumula+index
    console.log(acumula);
  }
}
suma(1, 10)

//* Escribe una función llamada : "sumaArreglo " que reciba un arreglo de números y retorne la suma de todos sus elementos.
function sumaArreglo(num) {
  let suma = 0;
  for (let i = 0; i < num.length; i++) {
    suma += num[i];
  }
  return suma;
}
const arreglo = [1, 2, 3, 4, 5];
console.log(sumaArreglo(arreglo));

// * Escribe una función llamada : "contarVocales " que reciba una frase y retorne el número de vocales que contiene.
function contarVocales(frase) {
  let fraseMin = frase.toLowerCase();

  // let vocales = "aeiouáéíóú";
  let vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
  let contador = 0;

  for (let i = 0; i < fraseMin.length; i++) {
      if (vocales.includes(fraseMin[i])) {
          contador++;
      }
  }
  return contador;
}

let frase = "¡Hola, esto es un ejemplo, Viva el Perú!";
let numeroVocales = contarVocales(frase);

console.log("Frase: ", frase);
console.log("Número de vocales: ", numeroVocales);

 //   ** Escribe una función que genere los n primeros números de la secuencia de Fibonacci.
 function generarFibonacci(n) {
  let fibonacci = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
      fibonacci.push(a);
      // let temp = a + b; // Calcula el siguiente número
      // a = b;            // Desplaza los valores
      // b = temp;         // Actualiza b con la suma

      [a, b] = [b, a+b]
  }
  return fibonacci;
}

console.log(generarFibonacci(4));