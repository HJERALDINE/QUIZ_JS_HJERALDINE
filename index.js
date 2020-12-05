console.log ("Quiz Js Hjeraldine Ricaurte.js");

/*Ejercicio No. 01*/
var tipo_motor = 5

switch (tipo_motor) {
    case 0: 
        document.write ("0. No hay establecido un valor definido para el tipo de bomba")
        break;
    case 1: 
        document.write ("1. La bomba es una bomba de agua");
        break;
    case 2: 
        document.write ("2. La bomba es una bomba de gasolina");
        break;
    case 3: 
        document.write ("3. La bomba es una bomba de hormigón");
        break;
    case 4: 
        document.write ("4. La bomba es una bomba de pasta alimenticia");
        break;
    default:
        document.write ("5. No existe un valor válido para tipo de bomba  ");
    }

/*Ejercicio No. 02*/

function obtenerImporteConImpuestos() {
    let producto = prompt ("Ingrese el tipo del producto");
    let precio_sin = prompt ("Ingrese valor sin iva") ;

    producto = parseInt (producto)
    precio_sin = parseInt (precio_sin)

    if (producto == 1) { 
        document.write ( "Valor con iva " + ((precio_sin * 0.21) + precio_sin));
    }

    else if (producto == 2) {
        document.write ( "Valor con iva " + ((precio_sin * 0.10) + precio_sin));
    }

    else if (producto == 3) {
        document.write ( "Valor con iva " + ((precio_sin * 0.03) + precio_sin));
    }
}

obtenerImporteConImpuestos();
    
    



