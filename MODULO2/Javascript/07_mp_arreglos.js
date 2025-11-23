console.log("Arreglos AliAcademy");

let cursos = ["Programación", "Redes", "Base de Datos", "Etica"];
let vacio1 = new Array();
let vacio2 = [];

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

let idx = 0;
while (idx < cursos.length) {
    console.log("Curso", idx, "=", cursos[idx]);
    idx++;
}

for (let i = 0; i < cursos.length; i++) {
    console.log(cursos[i]);
}

for (let curso of cursos) {
    console.log(curso);
}

cursos.forEach(function(valor, indice) {
    console.log(indice, valor);
});
