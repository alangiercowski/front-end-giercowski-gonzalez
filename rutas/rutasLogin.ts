import { Router } from "express";
import { dbUsers } from "../database/dbUsers";
export const rutasLogin = Router();

rutasLogin.post("/register", (_req, _res) => {
    dbUsers.registrarse(_req.body.nombre, _req.body.passwordhash).then(v =>{
        if(v == "el nombre de usuario ya existe"){
            _res.send(v)
        }
        else{
            _res.send(v);
        }
    })

});

rutasLogin.post("/login", (_req, _res) => {
    dbUsers.login(_req.body.nombre, _req.body.passwordhash).then(r => {
        if(r == "La contraseña es incorrecta"){
            _res.send(r)
        }
        else{
            _res.json(r)
        }
    })
});
