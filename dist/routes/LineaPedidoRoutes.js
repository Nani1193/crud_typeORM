"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/lineasPedido.ts
const express_1 = __importDefault(require("express"));
const LineaPedidoController_1 = __importDefault(require("../controllers/LineaPedidoController"));
const router = express_1.default.Router();
const lineaPedidoController = new LineaPedidoController_1.default();
// Definir rutas para Líneas de Pedido
router.get("/", lineaPedidoController.obtenerLineasPedido);
router.post("/", lineaPedidoController.crearLineaPedido);
exports.default = router;
