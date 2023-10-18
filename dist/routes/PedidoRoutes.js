"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/pedidos.ts
const express_1 = __importDefault(require("express"));
const PedidoController_1 = __importDefault(require("../controllers/PedidoController"));
const router = express_1.default.Router();
const pedidoController = new PedidoController_1.default();
// Definir rutas para Pedidos
router.get("/", pedidoController.obtenerPedidos);
router.post("/", pedidoController.crearPedido);
exports.default = router;
