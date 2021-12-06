//El carrito funciona para turnos, agenda

//Carrito - Array vacio

let carrito = []; //Array vacío

//Creación de títulos para total y para cantidad de productos

let tituloTotalCompra = document.createElement("h4");
tituloTotalCompra.innerText = "Total de tu compra $";
document.getElementById("carrito").appendChild(tituloTotalCompra);

let montoTotalCompra = document.createElement("h4");
montoTotalCompra.innerText = "0";
document.getElementById("carrito").appendChild(montoTotalCompra);

let tituloCantidadProductos = document.createElement("h4");
tituloCantidadProductos.innerText = "Cantidad de productos en el carro:";
document.getElementById("carrito").appendChild(tituloCantidadProductos);

let cantidadProductos = document.createElement("h4");
cantidadProductos.innerText = "0";
document.getElementById("carrito").appendChild(cantidadProductos);

let botonFinalizar = document.createElement("button")
botonFinalizar.innerText = "Finalizar compra";
document.getElementById("carrito").appendChild(botonFinalizar);
botonFinalizar.id = "botonFinalizar";

botonFinalizar.onclick = () => {
    const precioFinal = montoTotalCompra.innerText;
    Swal.fire("Finalizaste la compra \n Total a abonar $ " + precioFinal);

}



//redenrizado de los servicios (plantilla literal)
for (const serv of servicioWeb) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h4> Servicio: ${serv.nombreServicio} </h4>
    <p> Descripción: ${serv.descripcion}</p>
    <img src="${serv.foto}" width="250px" height="250px">
    <h4> Precio $: ${serv.precio} </h4>
    <button id = "${serv.id}" class='btn btn-secondary'>Comprar</button>`;
    document.getElementById("carrito").appendChild(contenedor);
    document.getElementById(`${serv.id}`).onclick = () => agregarAlCarro(`${serv.id}`);
}

//hoisting (primero lee las variables globales y funciones declaradas con function)
function agregarAlCarro(miId) {
    carrito.push(servicioWeb[miId - 1]);
    //carrito.push(servicioWeb.find(servicio.servicio.id == miId));
    console.log(carrito);
    localStorage.setItem("carritoServicios", JSON.stringify(carrito)); //LocalStorage para que se guarden los productos en el carrito
    calcularTotalCarrito();
}

function calcularTotalCarrito() {
    let total = 0;
    for (const servEnCarro of carrito) {
        total += servEnCarro.precio;
        console.log(total);
    }
    montoTotalCompra.innerText = total;
    cantidadProductos.innerText = carrito.length;
}

let botonComprarLP = document.getElementById("comprarLP");
