function imc() {

var nombre = document.getElementById("nombre").value;

var altura = document.getElementById("altura").value;
var a = Number(altura);

var pesoactual = document.getElementById("pesoactual").value;
var b = Number(pesoactual);

var imc = Math.round(b / (a*a));

var estad = imc

    switch (estad) {
        case 18:
        case 17:
        case 16:
        case 15:
        case 14:
        case 13:
        case 12:
        case 11:
        case 10:
        case 9:
        case 8:
        case 7:
        case 6:
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            estad = "BAJO PESO" 
            break;

        case 24:
        case 23:
        case 22:
        case 21:
        case 20:
        case 19:
            estad = "PESO NORMAL"
            break;

        case 29:
        case 28:
        case 27:
        case 26:
        case 25:
            estad = "SOBREPESO"
            break;

        case 50:
        case 49:
        case 48:
        case 47:
        case 46:
        case 45:
        case 40:
        case 39:
        case 38:
        case 37:
        case 36:
        case 35:
        case 34:
        case 33:
        case 32:
        case 31:
        case 30:
            estad = "OBESIDAD"
            break;          

        default:
            estad = "NO INGRESÓ DATOS"
    }

document.getElementById("resultado").innerHTML = "USUARIO: <br><br>" + nombre + "<br><br> TU IMC: <br><br>" + imc + "<br><br> ESTADO: <br><br>" + estad;

}