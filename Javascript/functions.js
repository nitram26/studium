//FUNCTIONS

// Calcular el precio final de un artículo, conociendo  el precio inicial  y el porcentaje de descuento es de 15%
function pago(precio) {
  let descuento = precio *0.15
  console.log("El pago es de " + (precio-descuento));
}
pago(200)

// Pide al usuario dos números. Posteriormente muestra por pantalla el resultado de sumarlos, restarlos, multiplicarlos, dividirlos, hacer la potencia del primero elevado al segundo(**) y el resto que resulte de dividir el primero entre el segundo.(%)

function operaciones(num1, num2) {
  let suma = num1+num2
  let resta = num1-num2
  let multiplica = num1*num2
  let dividir = num1/num2
  let potencia = num1*num2 
  let resto = num1%num2
  console.log("La suma es " +suma);
  console.log("La resta es " +resta);
  console.log("La multiplicación es " +multiplica);
  console.log("La división es " +dividir);
  console.log("La potencia es " +potencia);
  console.log("El resto es " +resto);
}
operaciones(3,2)

// Diseña el programa que dado el precio de venta de un artículo calcule su precio antes de impuestos, (IGV 19%).
function calcularPrecioAntesIGV(precioVenta) {  
  const tasaIGV = 0.19;  
  const precioAntesIGV = precioVenta / (1 + tasaIGV);  
 console.log("El precio sin IGV es "+  precioAntesIGV);
}
 calcularPrecioAntesIGV(119)

 // Calcula la longitud de la circunferencia y el área del círculo dado el radio.

function circulo(radio) {
  let area = 3.1416*(radio**2)
  let perímetro = 2*3.1416*radio
  console.log("El area del circulo es "+ area);
  console.log("El perímetro del circulo es " + perímetro);
  
}
circulo (2)


// ** Escribe una función llamada  factorial  que reciba un número y retorne su factorial.
function factorial(num) {
  let total = 1
    for (let index = 1; index < (num+1); index++) {
    total = index*total
  console.log(total);
    }
  }
  factorial(5)
//***************************************************************************** **/
//MÉTODOS
// Escribe un programa que calcule el área y el perímetro de un triángulo rectángulo, dados los dos catetos.
function area_perímetro(cat1, cat2) {
  let cateto = cat1**2 + cat2**2
  let cat3 = Math.sqrt(cateto)

  let area = cat1*cat2/2
  let perímetro = cat1+cat2+cat3
  console.log("El area del triangulo es : " + area);
  console.log("El perímetro del triangulo es : " + perímetro);
}
area_perímetro(3, 4)

// Calcula cuántos dígitos tiene un número.
function contarDígitos(numero) {
  return (numero.toString().length);
}

let números = 12345;
 let res = contarDígitos(125487)
console.log(`El número ${números} tiene ${res} dígitos.`);
Math.sqrt(cateto)
 function encontrarMax(arr) {
  return Math.max(...arr);
}

 let num1 = [5, 3, 8, 1, 2, 7];
let numeroMax = encontrarMax(num1);
console.log(numeroMax); 


 //   ** Crea una función que reciba un array y retorne el número más pequeño. 
 function encontrarMin(arr) {
  return Math.min(...arr);
}
let num2 = [5, 3, 8, 1, 2, 7];
let numeroMin = encontrarMin(num2);
console.log(numeroMin); 

// ** Escribe una función llamada número Aleatorio que reciba 2 números como parámetro y retorne un número al azar comprendido entre ambos.
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let aleatorio = numeroAleatorio(1, 10);
console.log(aleatorio);

 //   ** Escribe una función llamada  filtrarLargas  que reciba un arreglo de palabras y un número n, y retorne un nuevo arreglo con las palabras que tengan más de n letras.
 function filtrarLargas(palabras, n) {
  return palabras.filter(palabra => palabra.length > n);
}

let palabras1 = ["programación", "JavaScript", "código", "crear", "arreglo"];
let numeroLetras = 6;
let palabrasLargas = filtrarLargas(palabras1, numeroLetras);

console.log("Palabras: ", palabras1);
console.log("Palabras con más de " + numeroLetras + " letras: ", palabrasLargas);

 //   ** Crea una función que cuente cuántas vocales hay en una cadena de texto.
 function contarVocales(cadena) {
  let vocales = cadena.match(/[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/g);
  return vocales ? vocales.length : 0;
}

 let texto = "¡Hola, mundo!";
 let numeroDeVocales = contarVocales(texto);
 console.log(numeroDeVocales); 

function calcularPromedio(arr) {
  const suma = arr.reduce((acumulador, valor) =>acumulador * valor );
  console.log(suma);
  const promedio = suma / 2;
  return promedio;
}

const num = [1,2,3,4,5];
const resultado = calcularPromedio(num);
console.log(`El promedio es: ${resultado}`); 

 //   ** Escribe una función llamada  contarPalabras  que reciba una frase y retorne cuántas palabras tiene.
 function contarPalabras(frase) {
  let palabras = frase.trim().split(/\s+/);
  return palabras.length;
}
 let frase = 'Crea una función que cuente cuántas vocales hay en una cadena de texto.'
let palabras = contarPalabras(frase)
console.log(palabras);

 //   ** Escribe una función llamada  ordenarArreglo  que reciba un arreglo de números y lo ordene de menor a mayor.
 function ordenarArreglo(arr) {
  return arr.sort((a, b) => a - b);
}
let eros = [5, 3, 8, 1, 2, 7];
let erosOrdenados = ordenarArreglo(eros);
console.log(erosOrdenados); 

// ** Escribe una función llamada <strong>eliminarDuplicados " que reciba un arreglo y retorne otro sin elementos repetidos. <br> NOTAS: <br> new Set(arreglo): crea un conjunto a partir del arreglo, eliminando duplicados. <br>[...]: El operador rest convierte el conjunto de vuelta en un arreglo.
function eliminarDuplicados(arreglo) {
  let sinDuplicados = [...new Set(arreglo)];
  return sinDuplicados;
}

let arregloOriginal = [1, 2, 2, 3, 4, 4, 5];
let arregloSinDuplicados = eliminarDuplicados(arregloOriginal);
console.log(arregloSinDuplicados);

console.log("Arreglo original: ", arregloOriginal);
console.log("Arreglo sin duplicados: ", arregloSinDuplicados);

//   ** Escribe una función que determine si un número es primo.
function esPrimo(n) {
  if (n < 2) return false; // 0 y 1 no son primos
  for (let i = 2; i <= Math.sqrt(n); i++) { // Solo verificamos hasta la raíz cuadrada de n
    if (n % i === 0) {
      return false; //es divisible
    }
  }
  return true; // no hay encontró divisores
}


console.log(esPrimo(183)); 
