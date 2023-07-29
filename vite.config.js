// Obtener elementos del DOM
const contadorProductos = document.getElementById('contador-productos');
const iconoCarrito = document.querySelector('.icon-cart');
const carritoProductos = document.querySelector('.container-cart-products');
const totalPagar = document.querySelector('.total-pagar');
const items = document.querySelectorAll('.item');

let cantidadProductos = 0;
let total = 0;

// Función para actualizar la cantidad de productos y el total
function actualizarCarrito() {
    contadorProductos.textContent = cantidadProductos;
    totalPagar.textContent = `$${total.toFixed(2)}`;
}

// Función para agregar un producto al carrito
function agregarProducto(event) {
    const item = event.target.closest('.item');
    const titulo = item.querySelector('h2').textContent;
    const precio = parseFloat(item.querySelector('.price').textContent.slice(1));

    // Crear nuevo elemento en el carrito
    const nuevoProducto = document.createElement('div');
    nuevoProducto.classList.add('cart-product');
    nuevoProducto.innerHTML = `
        <div class="info-cart-product">
            <span class="cantidad-producto-carrito">1</span>
            <p class="titulo-producto-carrito">${titulo}</p>
            <span class="precio-producto-carrito">$${precio.toFixed(2)}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    `;

    // Agregar evento al botón de eliminar
    const botonEliminar = nuevoProducto.querySelector('.icon-close');
    botonEliminar.addEventListener('click', eliminarProducto);

    // Agregar nuevo producto al carrito
    carritoProductos.insertBefore(nuevoProducto, carritoProductos.firstChild);

    // Actualizar la cantidad de productos y el total
    cantidadProductos++;
    total += precio;
    actualizarCarrito();

    // Mostrar el carrito
    carritoProductos.classList.remove('hidden-cart');
}

// Función para eliminar un producto del carrito
function eliminarProducto(event) {
    const producto = event.target.closest('.cart-product');
    const cantidad = parseInt(producto.querySelector('.cantidad-producto-carrito').textContent);
    const precio = parseFloat(producto.querySelector('.precio-producto-carrito').textContent.slice(1));

    // Eliminar producto del carrito
    producto.remove();

    // Actualizar la cantidad de productos y el total
    cantidadProductos -= cantidad;
    total -= cantidad * precio;
    actualizarCarrito();

    // Ocultar el carrito si no hay productos
    if (cantidadProductos === 0) {
        carritoProductos.classList.add('hidden-cart');
    }
}

// Agregar evento al botón de añadir al carrito de cada producto
items.forEach(item => {
    const botonAgregar = item.querySelector('button');
    botonAgregar.addEventListener('click', agregarProducto);
});

// Mostrar u ocultar el carrito al hacer clic en el icono
iconoCarrito.addEventListener('click', () => {
    carritoProductos.classList.toggle('hidden-cart');
});



// const btnCart = document.querySelector('.container-icon');
// const containerCartProducts = document.querySelector('.container-cart-products');

// btnCart.addEventListener('click', () => {
//     containerCartProducts.classList.toggle('hidden-cart');
// });
// window.addEventListener('DOMContentLoaded', () => {
//   const ProductosContainer = document.getElementById('productos');

//   const Productos = [
//       { nombre: 'Zapatos Nike', precio: 80 },
//       { nombre: 'Audifonos', precio: 20 },
//       { nombre: 'Reloj', precio: 50 }
//   ];

//   Productos.forEach(producto => {
//       const ProductoDiv = document.createElement('div');
//       ProductoDiv.classList.add('producto');

//       const NombreH3 = document.createElement('h3');
//       NombreH3.textContent = producto.nombre;

//       const PrecioP = document.createElement('p');
//       PrecioP.textContent = `Precio: $${producto.precio}`;

//       ProductoDiv.appendChild(NombreH3);
//       ProductoDiv.appendChild(PrecioP);

//       ProductosContainer.appendChild(ProductoDiv);
//   });
// });



// const btnCart = document.querySelector('.container-icon')
// const containerCartProducts = document.querySelector('.container-cart-products')

// btnCart.addEventListener('click', () => {
//     containerCartProducts.classList.toggle('hidden-cart')
// })

// window.addEventListener('DOMContentLoaded', () => {
//   const productosContainer = document.getElementById('productos');
  
//   const productos = [
//     { nombre: 'Zapatos Nike', precio: 80 },
//     { nombre: 'Audifonos', precio: 20 },
//     { nombre: 'Reloj', precio: 50 }
//   ];
//     productos.forEach(producto => {
//     const productoDiv = document.createElement('div');
//     productoDiv.classList.add('producto');
    
//     const nombreH3 = document.createElement('h3');
//     nombreH3.textContent = producto.nombre;
    
//     const precioP = document.createElement('p');
//     precioP.textContent = `Precio: $${producto.precio}`;
    
//     productoDiv.appendChild(nombreH3);
//     productoDiv.appendChild(precioP);
    
//     productosContainer.appendChild(productoDiv);
//   });
// });
