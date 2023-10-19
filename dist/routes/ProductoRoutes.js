"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/productos.ts
const express_1 = __importDefault(require("express"));
const ProductoController_1 = __importDefault(require("../controllers/ProductoController"));
const router = express_1.default.Router();
const productoController = new ProductoController_1.default();
// Definir rutas para Productos
router.get("/", productoController.obtenerProductos);
router.post("/", productoController.crearProducto);
exports.default = router;
