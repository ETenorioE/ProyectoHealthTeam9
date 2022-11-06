function fbrazo() {
    var nombre = document.getElementById("nombre").value;

    var repeticiones = document.getElementById("repeticiones").value;
    var a = Number(repeticiones);

    var edad = document.getElementById("edad");
    var b = edad.options[edad.selectedIndex].value;

    var fbrazo;


    if (b == "A") {

        switch (a) {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19:
                fbrazo = "MALO";
                break;

            case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34:
                fbrazo = "MEDIO";
                break;

            case 35: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44:
                fbrazo = "BUENO ✔️";
                break;

            case 45: case 46: case 47: case 48: case 49: case 50: case 51: case 52: case 53:
                fbrazo = "MUY BUENO ✔️";
                break;

            case 54:
                fbrazo = "EXCELENTE ✅";
                break;

            default:
                fbrazo = "EXCELENTE ✅"
                break;
        }

    }
    else if (b == "B") {

        switch (a) {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14:
                fbrazo = "MALO";
                break;

            case 15: case 16: case 17: case 18: case 19: case 20: case 21: case 22: case 23:
                fbrazo = "MEDIO";
                break;

            case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34:
                fbrazo = "BUENO ✔️";
                break;

            case 35: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43:
                fbrazo = "MUY BUENO ✔️";
                break;

            case 44:
                fbrazo = "EXCELENTE ✅";
                break;

            default:
                fbrazo = "EXCELENTE ✅"
                break;
        }

    }
    else if (b == "C") {

        switch (a) {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11:
                fbrazo = "MALO";
                break;

            case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19:
                fbrazo = "MEDIO";
                break;

            case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29:
                fbrazo = "BUENO ✔️";
                break;

            case 30: case 31: case 32: case 33: case 34: case 35: case 36: case 37: case 38:
                fbrazo = "MUY BUENO ✔️";
                break;

            case 39:
                fbrazo = "EXCELENTE ✅";
                break;

            default:
                fbrazo = "EXCELENTE ✅"
                break;
        }

    }
    else if (b == "D") {

        switch (a) {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                fbrazo = "MALO";
                break;

            case 8: case 9: case 10: case 11: case 12: case 13: case 14:
                fbrazo = "MEDIO";
                break;

            case 15: case 16: case 17: case 18: case 19: case 20: case 21: case 22: case 23:
                fbrazo = "BUENO ✔️";
                break;

            case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33:
                fbrazo = "MUY BUENO ✔️";
                break;

            case 34:
                fbrazo = "EXCELENTE ✅";
                break;

            default:
                fbrazo = "EXCELENTE ✅"
                break;
        }

    }
    else if (b == "E") {

        switch (a) {
            case 0: case 1: case 2: case 3: case 4:
                fbrazo = "MALO";
                break;

            case 5: case 6: case 7: case 8: case 9:
                fbrazo = "MEDIO";
                break;

            case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19:
                fbrazo = "BUENO ✔️";
                break;

            case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28:
                fbrazo = "MUY BUENO ✔️";
                break;

            case 29:
                fbrazo = "EXCELENTE ✅";
                break;

            default:
                fbrazo = "EXCELENTE ✅"
                break;
        }

    }
    else {
        fbrazo = 0;
    }

    document.getElementById("titulo1").innerHTML = "ESTIMADO/A USUARIO/A:";
    document.getElementById("resultado1").innerHTML = nombre;
    document.getElementById("titulo2").innerHTML = "SU ESTADO ES:";

    if (fbrazo == "MALO") {
        document.getElementById("resultado2").innerHTML = fbrazo;
        document.getElementById("resultado2").style.color = "red";
    }
    else if (fbrazo == "MEDIO") {
        document.getElementById("resultado2").innerHTML = fbrazo;
        document.getElementById("resultado2").style.color = "gold";
    }
    else if (fbrazo == "BUENO ✔️") {
        document.getElementById("resultado2").innerHTML = fbrazo;
        document.getElementById("resultado2").style.color = "blue";
    }
    else if (fbrazo == "MUY BUENO ✔️") {
        document.getElementById("resultado2").innerHTML = fbrazo;
        document.getElementById("resultado2").style.color = "green";
    }
    else if (fbrazo == "EXCELENTE ✅") {
        document.getElementById("resultado2").innerHTML = fbrazo + " !";
        document.getElementById("resultado2").style.color = "green";
    }

}