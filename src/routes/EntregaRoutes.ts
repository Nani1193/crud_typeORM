// routes/entregas.ts
import express from "express";
import EntregaController from "../controllers/EntregaController";

const router = express.Router();
const entregaController = new EntregaController();

// Definir rutas para Entregas
router.get("/", entregaController.obtenerEntregas);
router.post("/", entregaController.crearEntrega);

export default router;