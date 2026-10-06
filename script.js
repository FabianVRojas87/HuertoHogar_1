// Base de datos de productos según el documento
const productos = [
  {
    sku: "FR001",
    nombre: "Manzanas Fuji",
    categoria: "Frutas Frescas",
    precio: 1200,
    unidad: "kilo",
    stock: 150,
    origen: "Valle del Maule",
    descripcion: "Manzanas Fuji crujientes y dulces."
  },
  {
    sku: "FR002",
    nombre: "Naranjas Valencia",
    categoria: "Frutas Frescas",
    precio: 1000,
    unidad: "kilo",
    stock: 200,
    origen: "Zona Central",
    descripcion: "Jugosas y ricas en vitamina C."
  },
{
    sku: "FR003",
    nombre: "Plátanos Cavendish",
    categoria: "Frutas Frescas",
    precio: 800,
    unidad: "kilo",
    stock: 250,
    origen: "Importación Selección",
    descripcion: "Plátanos maduros y dulces."
  },
  {
    sku: "VR001",
    nombre: "Zanahorias Orgánicas",
    categoria: "Verduras Orgánicas",
    precio: 900,
    unidad: "kilo",
    stock: 100,
    origen: "Región de O'Higgins",
    descripcion: "Zanahorias cultivadas sin pesticidas."
  },
{
    sku: "VR002",
    nombre: "Espinacas Frescas",
    categoria: "Verduras Orgánicas",
    precio: 700,
    unidad: "bolsa 500g",
    stock: 80,
    origen: "Región Metropolitana",
    descripcion: "Espinacas nutritivas e ideales para batidos."
  },
  {
    sku: "PO001",
    nombre: "Miel Orgánica",
    categoria: "Productos Orgánicos",
    precio: 5000,
    unidad: "frasco 500g",
    stock: 50,
    origen: "Apicultores Locales",
    descripcion: "Miel pura y orgánica producida localmente."
  }
];

let carrito = [];

// Función para renderizar los productos en la rejilla HTML
function cargarProductos(listaProductos) {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";

  listaProductos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <span class="sku">${prod.sku}</span>
      <h3>${prod.nombre}</h3>
      <span class="origen">Origen: ${prod.origen}</span>
      <p>${prod.descripcion}</p>
      <p class="precio">$${prod.precio.toLocaleString("es-CL")} CLP / ${prod.unidad}</p>
      <button class="btn-add" onclick="agregarAlCarrito('${prod.sku}')">Agregar al Carrito</button>
    `;
    grid.appendChild(card);
  });
}

// Función para filtrar productos por categoría
function filtrarProductos(categoria) {
  // Actualizar estilos de los botones
  const botones = document.querySelectorAll(".filter-btn");
  botones.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  if (categoria === "todos") {
    cargarProductos(productos);
  } else {
    const filtrados = productos.filter(p => p.categoria === categoria);
    cargarProductos(filtrados);
  }
}










