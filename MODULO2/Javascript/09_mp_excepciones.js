try {
    console.log("AliAcademy - Iniciando proceso de verificación de documentos:", variableNoDeclarada);
} catch (error) {
    console.log("Error en verificación: documento no encontrado -", error.message);
}

try {
    console.log("Intentando acceder a la ficha académica del estudiante...");
    throw new Error("Ficha académica no disponible en el sistema");
} catch (error) {
    console.log("Error en AliAcademy:", error.message);
} finally {
    console.log("Proceso finalizado: cierre de sesión administrativa en AliAcademy");
}
