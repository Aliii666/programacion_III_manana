console.log("📘 AliAcademy | Inicializando módulo DOM...");

console.log("HEAD del documento:", document.head);
console.log("Elementos dentro del BODY:", document.body.children);

document.title = "AliAcademy | Administración del DOM";

const descripcion = document.getElementById("descripcion");
descripcion.textContent = 
    "Este panel utiliza JavaScript para gestionar, actualizar y visualizar dinámicamente la información del sitio de Admisiones de AliAcademy.";

console.log("✔ Módulo DOM cargado correctamente.");