const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 5700 },
    { nombre: 'Tablet', precio: 5200 },
    { nombre: 'Audifonos', precio: 5300 },
    { nombre: 'Teclado', precio: 5200 },
    { nombre: 'Bocinas', precio: 1500 },
    { nombre: 'Lapto', precio: 4500 },
]

const obtenerNombres = producto => {
    return producto.nombre
}

const resultado = carrito.map(obtenerNombres)
console.log(resultado)