import { dbMaterias } from "../database/dbMaterias";
import { Router } from "express";
export const rutasMaterias = Router()

rutasMaterias.get("/", (_req, _res) => {
    dbMaterias.materiasGet().then((materia) => {
        if(materia.length == 0){
            _res.send("No hay materias");
        }else{
            _res.json(materia)
        }
    })
        
})

rutasMaterias.get("/:id", (_req, _res) => {
    dbMaterias.materiasGetbyID(Number(_req.params.id)).then((materia) => _res.json(materia))
        .catch((err) => _res.json({ "msg": err.message }))
})

rutasMaterias.post("/", (_req, _res) => {
    dbMaterias.createMateria(_req.body.nombre)
    _res.status(200).send();
})

rutasMaterias.delete("/:id", (_req, _res) => {
    dbMaterias.deleteMateria(Number(_req.params.id));
    _res.status(200).send();
})

rutasMaterias.put("/:id", (_req, _res) => {
    dbMaterias.updateMateria(_req.body.nombre, Number(_req.params.id));
    _res.status(200).send();
})

rutasMaterias.patch("/:id", (_req, _res) => {
    dbMaterias.updateMateria(_req.body.nombre, Number(_req.params.id));
    _res.status(200).send();
})