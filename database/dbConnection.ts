import mysql, { RowDataPacket } from "mysql2"

export class conexion {
  private static instance: conexion;
  connection: mysql.Connection
  constructor() {
    this.connection = mysql.createConnection({
      user: "marbo",
      password: "marbo123",
      database: "notas",
      host: "127.0.0.1",
    })
  }

  public static getInstance(): conexion {
    if (!conexion.instance) {
      conexion.instance = new conexion();
    }
    return conexion.instance;
  }
}