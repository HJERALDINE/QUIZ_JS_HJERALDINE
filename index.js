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
        document.write ("5. No existe un valor válido para tipo de bomba");
    }