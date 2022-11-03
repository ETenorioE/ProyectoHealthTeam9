function testresistencia(name, km) {

    let nombre = document.getElementById(name).value;
    let kilometros = document.getElementById(km).value;

    if (nombre == "" || kilometros == "") {
        swal("Debe completar todos los campos")
    } else {

        let km = parseFloat(kilometros);
        let VOmax = (22 * km) - 11;
        let rspt = "Estimado/a " + nombre + "<br> El consumo máximo de Oxígeno es:<br>" + '<div style="Color:blue;"> ' + VOmax + ' ml/kg/min</div>';

        console.log(rspt)

        document.getElementById('result').innerHTML = rspt;

        limpiar();

        //Hacer Scroll hacia abajo
        window.scroll(0, 200)
    }

}




function limpiar() {
    //Eliminar contenido
    document.getElementById('name').value = ""
    document.getElementById('km').value = ""
    //Select primer input
    document.getElementById('name').select();
}

function limpiarAll() {
    limpiar();
    document.getElementById('result').innerHTML = "";

}