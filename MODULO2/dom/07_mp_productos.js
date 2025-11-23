const productos = [
  { nombre: "Desarrollo de Software", descripcion: "3 años", precio: 1200, existencia: "Disponible", ubicacion: "Presencial" },
  { nombre: "Marketing Digital", descripcion: "2 años", precio: 900, existencia: "Disponible", ubicacion: "Online" },
  { nombre: "Diseño Gráfico", descripcion: "3 años", precio: 1100, existencia: "Cupos limitados", ubicacion: "Presencial" },
  { nombre: "Enfermería", descripcion: "3 años", precio: 1500, existencia: "Disponible", ubicacion: "Presencial" }
];

const tabla = document.getElementById('cuerpoTabla');

productos.forEach(p => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${p.nombre}</td>
    <td>${p.descripcion}</td>
    <td>$${p.precio.toFixed(2)}</td>
    <td>${p.existencia}</td>
    <td>${p.ubicacion}</td>
  `;
  tabla.appendChild(fila);
});
