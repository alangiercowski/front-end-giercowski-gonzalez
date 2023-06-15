import { dbMxA } from "../database/dbMXA";
import { Router } from "express";
export const rutasPersonalizadas = Router();

rutasPersonalizadas.post("/:alumnoid/:id", (_req, _res) => {
    dbMxA.anotarseEnMateria(Number(_req.params.alumnoid), Number(_req.params.id));
    _res.sendStatus(200);
});

rutasPersonalizadas.post("/:id/:alumnoid/:nota", (_req, _res) => {
    dbMxA.subirNotasAlumno(Number(_req.params.alumnoid), Number(_req.params.id), Number(_req.params.nota))
    _res.sendStatus(200);
});

rutasPersonalizadas.get("/:alumnoid/vernotas", (_req, _res) => {
    dbMxA.verNotas(Number(_req.params.alumnoid)).then((mxa) => _res.json(mxa))
        .catch((err) => _res.json({ "msg": err.message }))
});
