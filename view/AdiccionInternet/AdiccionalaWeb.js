function resultado() {
    let sumaTotal = 0;
    let contadorPreg = 0;
    var contador = 0;
    let respPregunta = new Array();
    let respUser = new Array();
    for (let i = 0; i < 8 ; i++) {
        respPregunta = document.getElementsByName('p' + (i + 1));
        for (let j = 0; j <= 1; j++) {
            if (respPregunta[j].checked == true) {

                //contadorPreg++;
                //respUser[i] = respPregunta[j].value;
                contador = contador + parseInt(respPregunta[j].value);

            }
        }
    }



    document.getElementById('result').innerHTML = contador;
}