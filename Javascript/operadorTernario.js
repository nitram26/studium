// Indica si un número dado es positivo o negativo. (El cero se considerará positivo).

function positivo(num) {
  return (num < 0)? "El número es Negativo" : "El número es Positivo"
}
console.log(positivo(-28));

// Indica si un número entero dado es par o impar. (Entendemos el cero como par).
function par(num1) {
  return (num1 % 2 == 0)? "El numero es par" : "El número es Impar"
}
console.log(par(1111111111));

//  Calcula el sueldo de un trabajador dado su sueldo base (5,600) y sabiendo que si ha trabajado más de 40 horas cobrará un 20% más.

function pago(hora) {
  let pago = 5600
  return (hora > 40)? (`El trabajador recibirá ${pago*1.2}`): (`El trabajador recibirá ${pago}`)
}
console.log(pago(50));

// Determinar si un número dado es a la vez múltiplo de 2 y 3, o solo es múltiplo de 2, o solo es múltiplo de 3 o es  múltiplo de otro numero.

function multi(num1) {
  return(num1% 2==0 && num1%3 ==0)? (`El número es múltiplo de 2 y 3`) : (`El número NO es múltiplo de 2 y 3`) 
}
console.log(multi(120));

//  Determinar cuál es el menor de tres números dados.
function menor(num1, num2, num3) {
  return(num1<num2 && num1<num3)? (`El menor numero es ${num1}`)
  :(num2<num1 && num2<num3)? (`El menor numero es ${num2}`)
  :(`El menor numero es ${num3}`)
}
console.log(menor(27,19,72));

// Determina si una letra dada es vocal o no. (escriba solo en minúscula y sin tildes).

function vocal(letra) {
 return(letra == 'a' || letra =='e' || letra == 'i' || letra == 'o' || letra == 'u')? (`La letra ${letra} es vocal`) : (`La letra ${letra} NO es vocal`)
}
console.log(vocal('a'));

// Indica la calificación de un alumno (SOBRESALIENTE 20-18, NOTABLE1 17-15 ,APROBADO 15-11,SUSPENSO 10-0 ) según su calificación numérica.

function califica(nota) {
  return(nota>17)? (`La calificación ${nota} es SOBRESALIENTE`)
  :(nota>14)? (`La calificación ${nota} es NOTABLE`)
  : (nota>10)? (`La calificación ${nota} es APROBADO`)
  : (`La calificación ${nota} es EN SUSPENSO`)
}
console.log(califica(19));




















