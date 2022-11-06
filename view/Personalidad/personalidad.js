
function resultado() {
    let sumaTotal = 0;
    let contadorPreg = 0;
    let msg, color, texto, back;
    let porcentaje = 0;
    let cortado;
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

    porcentaje = (100 * contador) / 24;
    cortado = porcentaje.toFixed(1);
    console.log(cortado);
    if (porcentaje >= 0 && porcentaje <= 33) {
        msg = "Nada impulsivo";
        color = "white";
        back = "deepskyblue";
        texto = "Eres una persona bastante reflexiva a la que le gusta pensar antes de actuar. Esta actitud te evitará sin duda problemas, pero intenta no perderte en tus reflexiones postergando demasiado tus decisiones.";
    } else if (porcentaje >= 34 && porcentaje <= 66) {
        msg = "Un poco impulsivo";
        color = "black";
        back = "yellow";
        texto = "Has logrado un adecuado equilibrio entre la reflexión y la impulsividad. En esta actitud reside en muchos casos el éxito personal y profesional. Continúa así, sin dejar de valorar tus procedimientos seguidos ante nuevas situaciones. Continuarás aprendiendo de tu experiencia.";
    } else {
        msg = "Muy impulsivo";
        color = "white";
        back = "red";
        texto = "Eres una bomba de relojería, puesto que la falta de control sobre tu conducta impulsiva puede traerte consigo consecuencias desagradables. Debes intentar valorar las consecuencias a corto plazo de tu conducta, procurando aumentar el tiempo entre tu emoción y tu respuesta, si no quieres que tu impulsividad te pase factura.";
    }

    document.getElementById('result').innerHTML = `<div style='background-color:${back}' id='texto-div'>` + `<span style='color:${color}' id='porcentaje'>` + cortado + "%" + "</span>"
        + "<br>"
        + `<span style='color:${color}'>` + msg + "</span>" + "</div>" + "<hr>" + "<br>" + "<span>" + texto + "</span>";
}