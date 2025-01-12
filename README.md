# Plataforma de Compras para Gamers

Este proyecto simula el funcionamiento básico de una plataforma de compras en línea para productos dirigidos a gamers, utilizando variables, funciones y métodos de JavaScript.

## Contenido

- [Plataforma de Compras para Gamers](#plataforma-de-compras-para-gamers)
  - [Contenido](#contenido)
  - [Variables Simples](#variables-simples)
  - [Tipos Compuestos](#tipos-compuestos)
  - [Manejo de Strings](#manejo-de-strings)
  - [Template Strings](#template-strings)
  - [Transformación de Números](#transformación-de-números)
  - [Condicionales](#condicionales)
  - [Comparaciones](#comparaciones)
  - [Bucles](#bucles)
  - [Funciones](#funciones)
    - [Función Declarada](#función-declarada)
    - [Función Expresada](#función-expresada)
  - [Funciones Auto-Ejecutadas](#funciones-auto-ejecutadas)
  - [Funciones con Argumentos y Valores por Defecto](#funciones-con-argumentos-y-valores-por-defecto)
  - [Arrow Functions](#arrow-functions)
  - [Instalación](#instalación)
  - [Uso](#uso)
  - [Contribución](#contribución)

---

## Variables Simples

Definimos variables básicas que representan los datos clave de los productos y las operaciones, como `precioProducto`, `nombreProducto`, `descuento`, y `enStock`.

```js
let precioProducto = 59.99;
let descuento = 10;
let nombreProducto = "Teclado Mecánico RGB";
let enStock = true;
```

## Tipos Compuestos

Definimos un array de categorías y un objeto `producto` con sus propiedades básicas:

```js
let categorias = ["Accesorios","Perifericos","Consolas"];
let producto = {
    id: "producto123",
    nombre: "Teclado Mecánico RGB",
    precio: 59.99,
    enStock: true
};
```

## Manejo de Strings

Se utilizan varios métodos de string como `length`, `toUpperCase()`, `toLowerCase()`, `trim()` e `includes()`.

```js
let mensajeBienvenida = "Bienvenido a Gamers Ecuador.";
console.log(mensajeBienvenida.length);
console.log(mensajeBienvenida.toUpperCase());
```

## Template Strings

Concatenación de strings usando Template Strings:

```js
let message = "Has recorrido un largo camino...";
console.log(`${mensajeBienvenida} ${message}`);
```

## Transformación de Números

Convertimos y manipulamos cadenas numéricas:

```js
let price = "59.99";
let discount = 10.00;
console.log(+price - discount);
```

## Condicionales

Verificamos el contenido de un array con un operador ternario:

```js
let productos = ["mouse","teclado","monitor"];
let result = productos.length > 0 ? "Hay productos" : "No hay stock";
console.log(result);
```

## Comparaciones

Hacemos una comparación estricta para verificar el ID de compra:

```js
let purchase_id = "ABCD43";
purchase_id === "ABCE43" ? console.log("Registro de compra") : console.log("No existe ese ID");
```

## Bucles

Iteramos sobre un array de productos disponibles y mostramos la información:

```js
let productosDisponibles = [
    {
        nombre: "Mouse Pad Megaman X 80x30x0.4cm",
        precioOriginal: 25.00,
        precioActual: 15.00,
        descuento: 40
    },
    // Más productos...
];

productosDisponibles.forEach((producto, index) => {
    console.log(`${index+1}. ${producto.nombre} - Precio Actual: $${producto.precioActual}`);
});
```

## Funciones

### Función Declarada

Se utiliza una función declarada para simular un inicio de sesión:

```js
function Login() {
    console.log("Bienvenido a la plataforma de compras");
}

Login();
```

### Función Expresada

Una función expresada para simular la conexión a una base de datos:

```js
const connectionBDD = function() {
    console.log("Conectado a la base de datos");
};

connectionBDD();
```

## Funciones Auto-Ejecutadas

Creamos una función auto-ejecutada que imprime un mensaje de bienvenida:

```js
(function(){
    console.log(`${mensajeBienvenida} ${message}`);
})();
```

## Funciones con Argumentos y Valores por Defecto

Simulamos la validación de credenciales de usuario y la selección de cantidad de productos con valores por defecto.

```js
function ValidarCreedenciales(user, pass) {
    return user === "admin" && pass === "admin" ? console.log("Welcome") : console.log("login Incorrect");
}

ValidarCreedenciales("admin","admin");

const CantidadProductos = function(producto, cantidad = 1) {
    console.log(`Producto: ${producto} Cantidad: ${cantidad}`);
};

CantidadProductos("Keyboard");
```

## Arrow Functions

Utilizamos una arrow function para buscar un producto en un array de productos:

```js
const ObtenerNombreProducto = (nombre) => {
    let ArrayProductos = productosDisponibles;
    return ArrayProductos.find(producto => producto.nombre === nombre);
};

console.log(ObtenerNombreProducto("Soporte de Controles Cable Guy Sonic"));
```

## Instalación

Este proyecto es ejecutado directamente en un navegador web, no requiere instalación adicional.

## Uso

1. Copia el código en un archivo `.js`.
2. Ejecuta el archivo en tu entorno de desarrollo favorito o en la consola del navegador para ver el funcionamiento del código.
3. Modifica las variables y funciones para experimentar con distintos casos de uso.

## Contribución

Sientete libre de contribuir mejorando las funciones y añadiendo nuevos casos de uso.

---

**Autor:** Mathias Teran
```

Este `README.md` proporciona una descripción completa del código, explicando las funciones y cómo interactuar con él.