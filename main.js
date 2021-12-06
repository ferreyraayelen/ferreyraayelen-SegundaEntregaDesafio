// Formulario
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFomulario);

//Tomar campo nombre
let campoNombre = document.getElementById("nombreForm");

//Tomar campo celular
let campoCel = document.getElementById("WS");

//Tomar campo email
let campoEmail = document.getElementById("campoEmail")
console.log(campoEmail)

function validarFomulario(e) {
    if (isNaN(campoCel.value) || campoNombre.value == "" ||
        campoEmail.value == "") {
        e.preventDefault(); //prevenime el comportamiento por defecto // Esto evita que se borren todos los campos
        alert("Ingrese un nombre, un mail o un cel válido");
    }
}
