import { RowDataPacket } from "mysql2";
import { conexion } from "./dbConnection";
import { User } from "../types/User"
import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"
import { dataInToken } from "../types/dataInToken";

export class dbUsers {
    static async registrarse (nombre: string, pass: string) {
        const _pass = await bcrypt.hash(pass, 10)
        if(await dbUsers.checkNombre(nombre)){
        conexion.getInstance().connection.query(
            'INSERT INTO users (nombre, passwordhash) VALUES (?, ?)',
            [nombre, _pass],
            (err) => {
                if (err) return err;
            }
        )}
        else return "el nombre de usuario ya existe"
        
    }

    static login (nombre: string, _pass: string) {
        return new Promise<string>((resolve, reject) => {
        conexion.getInstance().connection.query(
            "SELECT * FROM users WHERE nombre = ?",
            [nombre],
            async (err, res) => {
                if (err) reject (err);
                const row = (<RowDataPacket>res)[0];
                const user: User = new User(row.nombre, row.passwordhash)
                const pMatch = await bcrypt.compare(_pass, user.pass)
                if(pMatch) {
                    const _dataInToken: dataInToken = {
                        _nombre: user.nombre
                    }
                    const token = jwt.sign(_dataInToken, "secret_key", {
                        expiresIn: '2 days',
                      });
                    resolve(token);
                }
                else resolve("La contraseña es incorrecta");
            }
        )
        })
    }

    static checkNombre(nombre: string) {
        return new Promise<boolean>((resolve, reject) => {
        let d:boolean = true
        conexion.getInstance().connection.query(
            "SELECT * FROM users WHERE nombre = ?",
            [nombre],
             (err, res) => {
                if (err) reject (err)
                const rows = (<RowDataPacket>res)[0];                
                if (rows == undefined) d = true;
                else d =  false

                resolve(d);
            }
        )        
    })
        
    }
}