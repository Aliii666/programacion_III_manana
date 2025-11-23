try {
    console.log(variableNoDeclarada);
} catch (error) {
    console.log("Error:", error.message);
}
try {
    console.log("Procesando archivo de matrícula...");
    throw new Error("Archivo de matrícula no disponible");
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Proceso finalizado");
}
