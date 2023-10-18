"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/clientes.ts
const express_1 = __importDefault(require("express"));
const ClienteController_1 = __importDefault(require("../controllers/ClienteController"));
const router = express_1.default.Router();
const clienteController = new ClienteController_1.default();
// Definir rutas para Clientes
router.get("/", clienteController.obtenerClientes);
router.post("/", clienteController.crearCliente);
exports.default = router;
