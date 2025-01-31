// Pide al usuario que ingrese, el valor de dos números. Posteriormente el usuario tendrá que elegir qué operación quiere que se realice entre ellos según un menú que muestre las opciones:

// 1-Suma
// 2-Resta
// 3-Multiplicación.
// 4-División. Si intenta dividir entre O habrá que indicarlo con un mensaje.

function operaciones( num1, num2, action) {
  if (action =='+') {
    let act = num1+num2
    console.log(act);
  } else if (action == '-') {
    let act = num1-num2
    console.log(act);
  } else if (action=='*' ){
    let act = num1*num2
    console.log(act);
  }  else {
    if (num2 == 0) {
      alert('No es posible dividir entre cero')
    }
    let act = num1/num2
    console.log(act);
  }
}
operaciones(0, 7, '/')

// Un artículo determinado sigue la siguiente política de descuentos:
//- 15% si se compran 1000 o más de 1000 unidades.
//- 10% si se compran entre 500 y 999 unidades.
//- 5% si se compran entre 200 y 499 unidades.
//Calcula el coste final de un pedido dado el precio de artículo y las unidades de compra.
function descuentos(precio, cantidad) {
  if (cantidad>999) {
    let descuento = precio*0.15
    let monto = precio - descuento
    console.log('Tiene el 15% de descuento, su pago es de '+(monto*cantidad));
  }else if (cantidad>499) {
    let descuento = precio*0.10
    let monto = precio - descuento
    console.log('Tiene el 10% de descuento, su pago es de '+(monto*cantidad));
  } else {
    let descuento = precio*0.05
    let monto = precio - descuento
    console.log('Tiene el 5% de descuento, su pago es de '+(monto*cantidad));
  }
}
descuentos(100, 100)

// Para determinar la tarifa de un gimnasio se tiene en cuenta la siguiente tabla:
// Indica cuánto tendrá que pagar el usuario según sus preferencias:
// TURNO/ HORAS	    1	  2	   3
// MAÑANAS = T1	    20	30	40
// TARDES	 = T2     25	35	45

function gym(turno, hora) {
  if (turno=='T1') {
    if (hora ==1) {
      console.log('El pago es ' + 20);
    }else if (hora ==2) {
      console.log('El pago es ' + 30);
    } else if (hora == 3){
      console.log('El pago es ' + 40);
    }
  
  }else if (turno=='T2') {
      if (hora ==1) {
        console.log('El pago es ' + 25);
      }else if (hora ==2) {
        console.log('El pago es ' + 35);
      } else if (hora == 3){
        console.log('El pago es ' + 45);
      }
  }
}
gym('T2', 1)