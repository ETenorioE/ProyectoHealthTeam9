
function resultado() {
    let sumaTotal = 0;
    let contadorPreg = 0;
    let porcantaje = 0;
    var contador = 0;
    let respPregunta = new Array();
    let respUser = new Array();
    for (let i = 0; i < 12; i++) {
        respPregunta = document.getElementsByName('p' + (i + 1));
        for (let j = 0; j <= 2; j++) {
            if (respPregunta[j].checked == true) {

                //contadorPreg++;
                //respUser[i] = respPregunta[j].value;
                contador = contador + parseInt(respPregunta[j].value);

            }
        }
    }

    porcantaje = (100 * contador) / 24;

    document.getElementById('result').innerHTML = contador + " --->" + porcantaje + "%";
}