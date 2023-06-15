export class NotasXAlumno {
    idmateria: number;
    idalumno: number;
    nota: number;

    constructor(idmateria: number, idalumno: number, nota: number) {
        this.idalumno = idalumno;
        this.idmateria = idmateria;
        this.nota = nota;
    }
}