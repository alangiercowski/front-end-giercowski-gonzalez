export class Materia {
    idmateria: number;
    nombre: string;

    constructor(nombre: string, id?: number) {
        this.nombre = nombre;
        this.idmateria = id || 0;
    }
}