//Class Objeto Servicio

class servicios {
    constructor(objetoLiteral) {
        this.id = objetoLiteral.id;
        this.nombreServicio = objetoLiteral.nombreServicio;
        this.descripcion = objetoLiteral.descripcion;
        this.precio = objetoLiteral.precio;
        this.vendido = false;
        this.stock = true;
    }
}

//Array de objetos

const servicioWeb = [
    {
        id: 1, nombreServicio: "Landing Page", descripcion: "Incluye: \nPágina principal\n Formulario de contacto\n SEO\n Vinculación a WhatsApp y redes sociales\n Diseño Responsive.\n Adicional gratuito: Un(1) año de hosting, Dominio y Certificado SSL", foto: src = "/images/landingPage.svg", precio: 10000
    },

    {
        id: 2, nombreServicio: "Página web profecional", descripcion: "Incluye:\n 3 Secciones \n 1 correo corporativo\n Integración con Redes Sociales(Botón de WS y a redes sociales)\n QR de sitio \n SEO \n Formulario de contacto\n Vinculación a WhatsApp y redes sociales\n Diseño Responsive \n Adicional gratuito: Un(1) año de hosting, Dominio y Certificado SSL",
        foto: src = "/images/sitioWeb.svg", precio: 20000
    },

    {
        id: 3, nombreServicio: "Tienda online", descripcion: "Incluye: \nDiseño personalizado y responsive\n Soporte y capacitación\n Ventas minoristas y mayoristas \n Aplica variedad de métodos de pago \n Gestión de envíos a todo el país", foto: src = "/images/tiendaOnline.svg", precio: 30000
    }];
