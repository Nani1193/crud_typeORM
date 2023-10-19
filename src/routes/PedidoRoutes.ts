// routes/pedidos.ts
import express from "express";
import PedidoController from "../controllers/PedidoController";

const router = express.Router();
const pedidoController = new PedidoController();

// Definir rutas para Pedidos
router.get("/", pedidoController.obtenerPedidos);
router.post("/", pedidoController.crearPedido);

export default router;