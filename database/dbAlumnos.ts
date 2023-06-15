import { RowDataPacket } from "mysql2";
import { Alumno } from "../types/Alumno";
import { conexion } from "./dbConnection";

export class dbAlumnos {
  static alumnosGet(): Promise<Alumno[]> {
    return new Promise((resolve, reject) => {
      conexion.getInstance().connection.query(
        'SELECT * FROM alumnos',
        [],
        (err, res) => {
          if (err) reject(err);
          const rows = <RowDataPacket[]>res;
          const alumnos: Alumno[] = [];
          rows.forEach(row => {
            const alumno = new Alumno(row.nombre);
            alumnos.push(alumno);
          })
          resolve(alumnos)
        }
      );
    });
  }

  public static alumnosGetbyID(id: number): Promise<Alumno> {
    return new Promise((resolve, reject) => {
      conexion.getInstance().connection.query(
        'SELECT * FROM alumnos where ID = ?',
        [id],
        (err, res) => {
          if (err) reject(err);
          const row = (<RowDataPacket>res)[0];
          const alumno: Alumno = new Alumno(row.nombre);
          resolve(alumno);
        }
      );
    });
  }

  static createAlumno(nombre: string) {
    conexion.getInstance().connection.query(
      'INSERT INTO alumnos (nombre) VALUES (?)',
      [nombre],
      (err) => {
        if (err) return err;
      }
    )
  }

  static deleteAlumno(id: number) {
    conexion.getInstance().connection.query('DELETE FROM alumnos WHERE ID = ?',
      [id],
      (err) => {
        if (err) return err;
      }
    )
  }

  static updateAlumno(nombre: string, id: number) {
    conexion.getInstance().connection.query(
      'UPDATE alumnos SET nombre = ? WHERE ID = ?',
      [nombre, id],
      (err) => {
        if (err) return err;
      }
    )
  }

  public static createNewAlumno(nombre: String): Promise<String> {
    return new Promise((resolve, reject) => {
      conexion.getInstance().connection.query("INSERT INTO alumno (nombre) VALUES (?)",
        [nombre],
        (err, res) => {
          if (err) reject(err);
          resolve(nombre);
        }
      )
    });
  }
}