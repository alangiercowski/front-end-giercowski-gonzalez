import { RowDataPacket } from "mysql2";
import { conexion } from "./dbConnection";

export class dbMxA {
    static anotarseEnMateria(ID: number, IDMateria: number) {
        conexion.getInstance().connection.query(
            'INSERT INTO MxA (ID, IDMateria) VALUES (?, ?)',
            [ID, IDMateria],
            (err) => {
                if (err) return err;
            }
        )
    }

    static subirNotasAlumno(ID: number, IDMateria: number, Nota: number) {
        if (Nota > 10 || Nota < 0) { throw new Error("Por favor ingresar un valor valido.")}
        else {
            conexion.getInstance().connection.query(
                'INSERT INTO MxA (ID, IDMateria, Nota) VALUES (?, ?, ?)',
                [ID, IDMateria, Nota],
                (err: any) => {
                    if (err) return err;
                }
            )
        }
    }

    static verNotas(ID: number) {
        return new Promise((resolve, reject) => {
            conexion.getInstance().connection.query(
                'SELECT materias.nombre, MxA.nota FROM MxA INNER JOIN materias ON MxA.IDMateria = materias.IDMateria WHERE MxA.ID = ?',
                [ID],
                (err, res) => {
                    if (err) reject(err);
                    class aux {
                        nombre: string;
                        nota: number;

                        constructor(n: string, nt: number) {
                            this.nombre = n;
                            this.nota = nt;
                        }
                    }
                    const rows = <RowDataPacket[]>res;
                    const mxa: aux[] = [];
                    rows.forEach(row => {
                        const _mxa = new aux(row.nombre, row.nota);
                        mxa.push(_mxa);
                    })
                    resolve(mxa)
                }
            );
        });
    }
}
