function fabdom() {
    var nombre = document.getElementById("nombre").value;

    var repeticiones = document.getElementById("repeticiones").value;
    var a = Number(repeticiones);

    var edad = document.getElementById("edad");
    var b = edad.options[edad.selectedIndex].value;

    var fabdom;


    if (b == "A") {

        switch (a) {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19: case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29:
                fabdom = "MALO";
            break;

            case 30: case 31: case 32: case 33: case 34: case 35: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44:
                fabdom = "MEDIO";
            
            break;

            case 45: case 46: case 47: case 48: case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: case 58: case 59:
                fabdom = "BUENO";
            break;

            case 60:
                fabdom = "EXCELENTE";
            break;

            default:
                fabdom = "EXCELENTE"
            break;
        }
    }

    else if (b == "B") {

        switch (a) {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19: case 20: case 21: case 22: case 23: case 24:
                fabdom = "MALO";
            break;

            case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34: case 35: case 36: case 37: case 38: case 39:
                fabdom = "MEDIO";
                
            break;

            case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 49:
                fabdom = "BUENO";
            break;

            case 50: 
                fabdom = "EXCELENTE";
            break;

            default:
                fabdom = "EXCELENTE";
            break;
        }

    }

    else if (b == "C") {

        switch (a) {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14:
                fabdom = "MALO";
            break;

            case 15: case 16: case 17: case 18: case 19: case 20: case 21: case 22: case 23: case 24:
                fabdom = "MEDIO";

            break;

            case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34: case 35: case 36: case 37: case 38: case 39:
                fabdom = "BUENO";

            break;

            case 40:
                fabdom = "EXCELENTE";
            break;

            default:
                fabdom = "EXCELENTE";
            break;
        }
    }
    else {
        fabdom = 0
    }

    document.getElementById("resultado").innerHTML = "USUARIO: <br><br>" + nombre + "<br><br>ESTADO: <br><br>" + fabdom;
}