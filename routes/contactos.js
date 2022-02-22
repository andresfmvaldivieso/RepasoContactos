import express from "express";
import contactos from "../controllers/contactos.js"

const router = express.Router();

router.get("/listarContactos", contactos.listContactos);


export default router;