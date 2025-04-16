// alert("js incluido");


let botonEnviar =  document.getElementById("enviar");

const tableBody = document.getElementsByTagName("tbody")[0];

botonEnviar.addEventListener("click", function () {
    let txtNombre = document.getElementById("nombre").value;
    let txtApellidos = document.getElementById("apellidos").value;

    console.log("Nombre: " + txtNombre);
    console.log("Apellidos: " + txtApellidos);
        tableBody.innerHTML += "<tr><td>"+txtNombre+"</td><td>"+txtApellidos+"</td></tr>";
});