"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/entregas.ts
const express_1 = __importDefault(require("express"));
const EntregaController_1 = __importDefault(require("../controllers/EntregaController"));
const router = express_1.default.Router();
const entregaController = new EntregaController_1.default();
// Definir rutas para Entregas
router.get("/", entregaController.obtenerEntregas);
router.post("/", entregaController.crearEntrega);
exports.default = router;
