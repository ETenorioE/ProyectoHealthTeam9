function estadosalud(name, P1, P2, P3) {

    let nombre = document.getElementById(name).value;
    let p1 = document.getElementById(P1).value;
    let p2 = document.getElementById(P2).value;
    let p3 = document.getElementById(P3).value;

    if (nombre == "" || p1 == "" || p2 == "" || p3 == "") {
        swal("Debe completar todos los campos")
    } else {


        let dato1 = parseInt(p1);
        let dato2 = parseInt(p2);
        let dato3 = parseInt(p3);

        let I = ((dato1 + dato2 + dato3) - 200) / 10;


        if (I == 0) {
            var rspt = '<div style="Color:blue;">Tienes un : Corazón de Atleta <p>&#128513</p></div>';
        } else if (I > 0 && I <= 5) {
            var rspt = '<div style="Color:blue;">Tienes un : Corazón bueno <p>&#128578</p></div>';
        } else if (I > 5 && I <= 10) {
            var rspt = '<div style="Color:blue;">Tienes un : Corazón medio <p>&#128528</p></div>';
        } else if (I > 10 && I <= 15) {
            var rspt = '<div style="Color:blue;">Tienes un : Corazón medio bajo <p>&#128533</p></div>';
        } else if (I > 15) {
            var rspt = '<div style="Color:blue;">Tienes un : Corazón insuficiente <p>&#128565</p></div>';
        }

        let mostrar = "Estimado/a " + nombre + "<br>" + rspt;

        // console.log(I)

        document.getElementById('result').innerHTML = mostrar;

        limpiar();

        //Hacer Scroll hacia abajo
        window.scroll(0, 200)
    }

}




function limpiar() {
    //Eliminar contenido
    document.getElementById('name').value = ""
    document.getElementById('P1').value = ""
    document.getElementById('P2').value = ""
    document.getElementById('P3').value = ""
    //Select primer input
    document.getElementById('name').select();
}

function limpiarAll() {
    limpiar();
    document.getElementById('result').innerHTML = "";

}