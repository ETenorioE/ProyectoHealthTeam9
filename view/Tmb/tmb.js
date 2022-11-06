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

    document.getElementById("titulo1").innerHTML = "ESTIMADO/A USUARIO/A:";
    document.getElementById("resultado1").innerHTML = nombre;
    document.getElementById("titulo2").innerHTML = "APROXIMADAMENTE USTED REQUIERE:";
    document.getElementById("resultado2").innerHTML = tmb + " Kcal por día";
    document.getElementById("resultado2").style.color = "green";



}