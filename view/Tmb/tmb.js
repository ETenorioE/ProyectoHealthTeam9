function tmb() {
    var nombre = document.getElementById("nombre").value;

    var edad = document.getElementById("edad").value;
    var a = Number(edad);

    var pesoactual = document.getElementById("pesoactual").value;
    var b = Number(pesoactual);

    var altura = document.getElementById("altura").value;
    var c = Number(altura);

    var genero = document.getElementById("genero");
    var d = genero.options[genero.selectedIndex].value;

    var tmb;


    if (d == "M") {
        tmb = (10 * b) + (6.25 * c) - (5 * a) + 5 
    }
    else if (d == "F") {
        tmb = (10 * b) + (6.25 * c) - (5 * a) - 161
    }
    else {
        tmb = 0
    }

    document.getElementById("resultado").innerHTML = "USUARIO: <br><br>" + nombre + "<br><br>APROXIMADAMENTE, USTED REQUIERE: <br><br>" + tmb + " Kcal por día";

    
   
}