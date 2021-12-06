//Envío de información del formulario. Realicé un for of ya que son dos formulario (uno en index y el otro en contacto)
//Envento submit

/* let formulario = document.getElementsByClassName("form"); //tomar formulario // hice un for OF para recorrer el array
for (const form of formulario) {
    formulario.addEventListener("submit", validarFomulario); //se llama al evento y a la funcion
}  */

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

//Crear funcion validar formulario
/* function validarFomulario(e) {
    e.preventDefault();
    alert("Formulario enviado");
} */

