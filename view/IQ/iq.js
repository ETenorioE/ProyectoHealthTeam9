
function iq(name, edadC, edadM) {

    let nombre = document.getElementById(name).value;
    let edadMental = document.getElementById(edadM).value;
    let edadCronologica = document.getElementById(edadC).value;

    if (nombre == "" || edadMental == "" || edadCronologica == "") {

        swal("Debe completar todos los campos")

    } else {

        let CI = parseInt((edadMental / edadCronologica) * 100)

        if (CI > 130) {
            var rspt = '<div style="Color:blue;">Muy Dotado/a</div>';
        } else if (CI >= 121 && CI <= 130) {
            var rspt = '<div style="Color:blue;">Dotado/a</div>';
        } else if (CI >= 111 && CI <= 120) {
            var rspt = '<div style="Color:blue;">Inteligencia por encima de la media</div>';
        } else if (CI >= 90 && CI <= 110) {
            var rspt = '<div style="Color:blue;">Inteligencia media</div>';
        } else if (CI >= 80 && CI <= 89) {
            var rspt = '<div style="Color:blue;">Inteligencia por debajo de la media</div>';
        } else if (CI >= 70 && CI <= 79) {
            var rspt = '<div style="Color:blue;">Retraso Mental</div>';
        }


        var respuesta = 'Estimado : ' + nombre + '<br> Edad mental es : ' + edadMental + '<br>Edad cronologica es : ' + edadCronologica + '<br> IQ : ' + CI + ' que corresponde : ' + rspt;

        // Mostrar en Respuesta
        document.getElementById('result').innerHTML = respuesta;

        limpiar();

        //Hacer Scroll hacia abajo
        window.scroll(0, 200)



    }
}


function limpiar() {
    //Eliminar contenido
    document.getElementById('name').value = ""
    document.getElementById('edadC').value = ""
    document.getElementById('edadM').value = ""
    //Select primer input
    document.getElementById('name').select();
}

function limpiarAll() {
    limpiar();
    document.getElementById('result').innerHTML = "";

}