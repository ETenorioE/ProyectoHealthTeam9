
function resultado() {
    let sumaTotal = 0;
    let contadorPreg = 0;
    var contador = 0;
    let msg, color, texto, back;
    let parchado;
    let porcentaje = 0;
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


    porcentaje = (100 * contador) / 24;
    parchado = porcentaje.toFixed(1);

    if (porcentaje >= 0 && porcentaje <= 33) {
        msg = "Ausencia de depresión";
        color = "white";
        back = "deepskyblue";
        texto = "Tu estado de ánimo es bastante bueno y estable. Tiendes a ser optimista y gozas de una buena salud emocional. Para seguir así mantén el estilo de afrontamiento seguido hasta ahora y escapa de la represión emocional expresando tanto tus emociones negativas como las positivas.";
    } else if (porcentaje >= 34 && porcentaje <= 66) {
        msg = "Estado de ánimo bajo";
        color = "black";
        back = "yellow";
        texto = "Llevas una temporada con el estado de ánimo de “capa caída”. Estas perdiendo el interés por determinadas actividades y muestras tendencia a la apatía.Intenta eliminar este malestar haciendo actividades(queda con amigos, haz cosas que te gusten, etcétera), aunque sean pocas.El estar activo y el apoyo social disminuyen la probabilidad de sufrir depresión.";
    } else {
        msg = "Estado de ánimo deprimido";
        color = "white";
        back = "red";
        texto = "Tu puntuación sugiere un estado de ánimo excesivamente bajo, pudiendo sufrir depresión. Valoras de forma negativa a tu pasado, presente y futuro y muestras sentimientos de desesperanza. Tal vez sería bueno que consultases con un especialista que te ayude a superar este malestar.";
    }

    document.getElementById('result').innerHTML = `<div style='background-color:${back}' id='texto-div'>` + `<span style='color:${color}' id='porcentaje'>` + parchado + "%" + "</span>"
        + "<br>"
        + `<span style='color:${color}'>` + msg + "</span>" + "</div>" + "<hr>" + "<br>" + "<span>" + texto + "</span>";
}
