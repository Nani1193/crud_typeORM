// routes/productos.ts
import express from "express";
import ProductoController from "../controllers/ProductoController";

const router = express.Router();
const productoController = new ProductoController();

// Definir rutas para Productos
router.get("/", productoController.obtenerProductos);
router.post("/", productoController.crearProducto);

export default router;
