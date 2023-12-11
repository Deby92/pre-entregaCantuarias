
function quimioterapia () {
    let quimioterapia = prompt("Resultado de examenes");

    if (quimioterapia === "no hay metastasis"){
        alert("El siguiente paso es cirugia");

    } else {
        alert("Seguir con quimioterapia");
    }
}
quimioterapia();