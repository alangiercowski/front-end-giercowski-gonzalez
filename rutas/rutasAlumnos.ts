import { dbAlumnos } from "../database/dbAlumnos";
import { Router } from "express";
export const rutasAlumnos = Router();


rutasAlumnos.get("/",(_req, _res) => {
    dbAlumnos.alumnosGet().then((alumno) => _res.json(alumno))
        .catch((err) => _res.json({ "msg": err.message }))
})

rutasAlumnos.get("/:id", (_req, _res) => {
    const id: number = Number(_req.params.id);
    dbAlumnos.alumnosGetbyID(id)
        .then((alumno) => _res.json(alumno))
})

rutasAlumnos.post("/", (_req, _res) => {
    dbAlumnos.createAlumno(_req.body.nombre);
    _res.status(200).send();
})

rutasAlumnos.delete("/:id", (_req, _res) => {
    dbAlumnos.deleteAlumno(Number(_req.params.id));
    _res.status(204).send();
})

rutasAlumnos.put("/:id", (_req, _res) => {
    dbAlumnos.updateAlumno(_req.body.nombre, Number(_req.params.id));
    _res.status(204).send();
})

rutasAlumnos.patch("/:id", (_req, _res) => {
    dbAlumnos.updateAlumno(_req.body.nombre, Number(_req.params.id));
    _res.status(204).send();
})
