export class Libro {
    public titulo: string;
    private cota: any;
    protected idGeneric: string = "ALI-ACAD-001";

    constructor(titulo: string) {
        this.titulo = titulo;
        this.generarCota();
    }

    generarCota(): void {
        this.cota = new Date().toISOString();
    }

    getCota(): any {
        return this.cota;
    }

    getAtributes(): any {
        return {
            titulo: this.titulo,
            cota: this.cota,
            id: this.idGeneric
        };
    }
}
