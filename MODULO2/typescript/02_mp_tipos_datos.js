var edad = 20;
var nombre = "AliAcademy";
var activo = true;
var valor = 10;
if (edad > 18 && activo) {
    console.log("Estudiante activo");
}
else {
    console.log("No habilitado");
}
var cursos = ["Programación", "Redes", "Base de Datos"];
for (var i = 0; i < cursos.length; i++) {
    console.log(cursos[i]);
}
var Estado;
(function (Estado) {
    Estado[Estado["Pendiente"] = 0] = "Pendiente";
    Estado[Estado["Enviado"] = 1] = "Enviado";
    Estado[Estado["Procesado"] = 2] = "Procesado";
})(Estado || (Estado = {}));
console.log(Estado);
console.log(Estado.Procesado);
