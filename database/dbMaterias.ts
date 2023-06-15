import { RowDataPacket } from "mysql2";
import { Materia } from "../types/Materia";
import { conexion } from "./dbConnection";

export class dbMaterias {
  static materiasGet(): Promise<Materia[]> {
    return new Promise((resolve, reject) => {
      conexion.getInstance().connection.query(
        'SELECT * FROM materias',
        [],
        (err, res) => {
          if (err) reject(err);
          const rows = <RowDataPacket[]>res;
          const materias: Materia[] = [];
          rows.forEach(row => {
            const materia = new Materia(row.nombre, row.IDMateria);
            materias.push(materia);
          })
          resolve(materias)
        }
      );
    });
  }

  static materiasGetbyID(id: number): Promise<Materia> {
    return new Promise((resolve, reject) => {
      conexion.getInstance().connection.query(
        'SELECT * FROM materias WHERE IDMateria = ?',
        [id],
        (err, res) => {
          if (err) reject(err);
          const rows = (<RowDataPacket[]>res)[0];
          const materia: Materia = new Materia(rows.nombre);
          resolve(materia)
        }
      );
    });
  }

  static createMateria(nombre: string) {
    conexion.getInstance().connection.query(
      'INSERT INTO materias (nombre) VALUES (?)',
      [nombre],
      (err) => {
        if (err) return err;
      }
    )
    return "Materia creada"
  }

  static deleteMateria(id: number) {
    conexion.getInstance().connection.query(
      'DELETE FROM materias WHERE IDMateria = ?',
      [id],
      (err: any) => {
        if (err) return err;
      }
    )
  }

  static updateMateria(nombre: string, id: number) {
    conexion.getInstance().connection.query(
      'UPDATE materias SET nombre = ? WHERE IDMateria = ?',
      [nombre, id],
      (err: any) => {
        if (err) return err;
      }
    )
  }
}