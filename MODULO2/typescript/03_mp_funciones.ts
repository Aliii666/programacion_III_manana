function saludar(nombre?: string): string {
    return `Hola ${nombre}`;
}
console.log(saludar("Estudiante AliAcademy"));

const sumar = (a: number, b: number): number => {
    return a + b;
};
console.log(sumar(10, 5));

function bienvenida(): void {
    console.log("Bienvenido a AliAcademy");
}
bienvenida();

function calcularAreaCirculo(radio: number): number {
    return Math.PI * radio * radio;
}

function calcularAreaCirculoVoid(radio: number): void {
    console.log(Math.PI * radio * radio);
}

console.log(calcularAreaCirculo(6));
calcularAreaCirculoVoid(8);
