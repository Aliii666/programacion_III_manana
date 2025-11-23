var cursos = ["Programación", "Redes", "Base de Datos", "Ética"];
var vacio1 = new Array();
var vacio2 = [];
console.log("Cursos disponibles:", cursos);
console.log(vacio1);
console.log(vacio2);
console.log(cursos[0]);
console.log(cursos[3]);
cursos[0] = "Ciberseguridad";
console.log(cursos);
cursos.push("Inteligencia Artificial");
console.log(cursos);
cursos.unshift("Matemáticas");
console.log(cursos);
cursos.pop();
console.log(cursos);
cursos.shift();
console.log(cursos);
var idx2 = 0;
while (idx2 < cursos.length) {
    console.log("Curso", idx2, "=", cursos[idx2]);
    idx2++;
}
for (var j = 0; j < cursos.length; j++) {
    console.log(cursos[j]);
}
for (var _a = 0, cursos_1 = cursos; _a < cursos_1.length; _a++) {
    var curso_1 = cursos_1[_a];
    console.log(curso_1);
}
cursos.forEach(function (valor, indice) {
    console.log(indice, valor);
});
