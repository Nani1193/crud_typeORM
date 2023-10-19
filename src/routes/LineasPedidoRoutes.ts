// routes/lineasPedido.ts
import express from "express";
import LineaPedidoController from "../controllers/LineasPedidoController";

const router = express.Router();
const lineaPedidoController = new LineaPedidoController();

// Definir rutas para Líneas de Pedido
router.get("/", lineaPedidoController.obtenerLineasPedido);
router.post("/", lineaPedidoController.crearLineaPedido);

export default router;