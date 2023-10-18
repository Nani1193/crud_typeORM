// routes/clientes.ts
import express from "express";
import ClienteController from "../controllers/ClienteController";

const router = express.Router();
const clienteController = new ClienteController();

// Definir rutas para Clientes
router.get("/", clienteController.obtenerCliente);
router.post("/", clienteController.crearCliente);

export default router;
