
function resultado() {
    let sumaTotal = 0;
    let contadorPreg = 0;
    var contador = 0;
    let msg, color, texto, back;
    let respPregunta = new Array();
    let respUser = new Array();
    for (let i = 0; i < 18; i++) {
        respPregunta = document.getElementsByName('p' + (i + 1));
        for (let j = 0; j <= 3; j++) {
            if (respPregunta[j].checked == true) {

                //contadorPreg++;
                //respUser[i] = respPregunta[j].value;
                contador = contador + parseInt(respPregunta[j].value);

            }
        }
    }


    if (contador >= 0 && contador <= 18) {
        msg = "Ausencia de ansiedad";
        color = "white";
        back = "deepskyblue";
        texto = "A pesar de que en algunas ocasiones te encuentres más nervioso de lo habitual tu respuesta ante situaciones ansiosas es adecuada y dentro de lo esperable. Puedes estar tranquilo, ya que tienes esta emoción bajo control.";
    } else if (contador >= 19 && contador <= 39) {
        msg = "Nivel de ansiedad leve o moderado";
        color = "black";
        back = "yellow";
        texto = "Llevas una temporada con el estado de ánimo de “capa caída”. Estas perdiendo el interés por determinadas actividades y muestras tendencia a la apatía.Intenta eliminar este malestar haciendo actividades(queda con amigos, haz cosas que te gusten, etcétera), aunque sean pocas.El estar activo y el apoyo social disminuyen la probabilidad de sufrir depresión.";
    } else {
        msg = "Estado de ánimo deprimido";
        color = "white";
        back = "red";
        texto = "Tu puntuación sugiere un estado de ánimo excesivamente bajo, pudiendo sufrir depresión. Valoras de forma negativa a tu pasado, presente y futuro y muestras sentimientos de desesperanza. Tal vez sería bueno que consultases con un especialista que te ayude a superar este malestar.";
    }



    document.getElementById('result').innerHTML = `<div style='background-color:${back}' id='texto-div'>` + `<span style='color:${color}' id='porcentaje'>` + contador + " pto" + "</span>"
        + "<br>"
        + `<span style='color:${color}'>` + msg + "</span>" + "</div>" + "<hr>" + "<br>" + "<span>" + texto + "</span>";
}