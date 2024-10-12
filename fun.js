// Variables

// Tipos simples
let precioProducto = 59.99; // Precio del producto
let descuento = 10; // Descuento en porcentaje
let nombreProducto = "Teclado Mecánico RGB"; // Nombre del producto
let enStock = true; // Disponibilidad del producto
let cantidad = null; // Cantidad seleccionada por el usuario
let descripcion = undefined; // Descripción del producto

// Tipos Compuestos

let categorias = ["Accesorios","Perifericos","Consolas"]; // Array de Categorias
let producto = {
    id: "producto123",
    nombre: "Teclado Mecánico RGB",
    precio: 59.99,
    enStock:true
}

// Strings 

let mensajeBienvenida = "Bienvenido a Gamers Ecuador."


// Propiedades y metodos

console.log(mensajeBienvenida.length);
console.log(mensajeBienvenida.toUpperCase());
console.log(mensajeBienvenida.toLowerCase());
console.log(mensajeBienvenida.trim());
console.log(mensajeBienvenida.includes('Gamers'));

// Template Strings

let message = "Has recorrido un largo camino desde que derrotaste a Bowser y rescataste a la princesa del castillo.";
console.log(`${mensajeBienvenida} ${message}`);

// transformar un numero

let price = "59.99"
let discount = 10.00
console.log(+price - discount);

// Condicionales

let productos = ["mouse","teclado","monitor"]
let result = productos.length > 0 ? "Hay productos" : "No hay stock";
console.log(result)

// Comparacion estricta
let purchase_id = "ABCD43";

purchase_id === "ABCE43" ? console.log("Registro de compra") : console.log("No existe ese ID");

// loops

let productosDisponibles = [
    // Objetos
    {
        nombre: "Mouse Pad Megaman X 80x30x0.4cm",
        precioOriginal: 25.00,
        precioActual: 15.00,
        descuento: 40
    },
    {
        nombre: "Combo Pokemon Mouse Pad + Teclado Pikachu – Bulbasaur – Charmander – Squirtle",
        precioOriginal: 39.99,
        precioActual: 39.99,
        descuento: 0
    },
    {
        nombre: "Headset Onikuma K9 Neko Edition 7.1",
        precioOriginal: 49.99,
        precioActual: 45.00,
        descuento: 10
    },
    {
        nombre: "Mouse Pad Dragon Ball Z / Shenlong 80x30x0.4cm",
        precioOriginal: 19.99,
        precioActual: 19.99,
        descuento: 0
    },
    {
        nombre: "Soporte de Audífonos Onikuma RGB ST-2 Puertos USB – 3,5mm jack",
        precioOriginal: 32.00,
        precioActual: 28.00,
        descuento: 13
    },
    {
        nombre: "Teclado Mecánico Transparente E-Yooso Z11T",
        precioOriginal: 42.00,
        precioActual: 42.00,
        descuento: 0
    },
    {
        nombre: "Soporte de Controles Cable Guy Sonic",
        precioOriginal: 59.00,
        precioActual: 59.00,
        descuento: 0
    },
    {
        nombre: "Teclado Mecánico Redragon Fizz Pro K616 Wireless 60%",
        precioOriginal: 59.99,
        precioActual: 59.99,
        descuento: 0
    },
    {
        nombre: "Silla Gamer FoxLab RGB – Apoya Brazos 4D",
        precioOriginal: 292.00,
        precioActual: 292.00,
        descuento: 0
    }
];

console.log(productosDisponibles);

productosDisponibles.forEach((producto,index) =>{
    console.log(`${index+1}. ${producto.nombre} - Precio Original: $${producto.precioActual}`);
})

let productosNombre = productosDisponibles.map(producto => producto.nombre)
console.log(productosNombre);

// Funcion Anonima y autoEjecutada

(function(){
    console.log(`${mensajeBienvenida} ${message}`);
})()

// Funcion declarada

function Login(){
    console.log("Bienvenido a la plataforma de compras");
}

Login()

// Funcion Expresada

const connectionBDD = function(){
    console.log("Conectado a la base de datos");
} 
connectionBDD()

// Argumentos

function ValidarCreedenciales(user , pass){
    return user === "admin" && pass === "admin" ? console.log("Welcome") : console.log("login Incorrect");
}

ValidarCreedenciales("admin","admin");

const CantidadProductos = function(producto, cantidad = 1){
    console.log(`Producto: ${producto} Cantidad: ${cantidad}`);
}
CantidadProductos("Keyboard")
CantidadProductos("mouse",2)

// Retorno

function calcularPrecioTotal(precio,cantidad){
    return precio * cantidad;
}
console.log(calcularPrecioTotal(100,2))

// arrow function

const ObtenerNombreProducto= (nombre) =>{
    let ArrayProductos = productosDisponibles
    return ArrayProductos.find(producto => producto.nombre === nombre)
}

console.log(ObtenerNombreProducto("Soporte de Controles Cable Guy Sonic"));



