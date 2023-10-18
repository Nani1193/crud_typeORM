"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Producto_1 = require("../entities/Producto");
class ProductoController {
    constructor() {
        this.productoRepository = (0, typeorm_1.getRepository)(Producto_1.Producto);
        // Otros métodos del controlador: obtener un producto por ID, actualizar un producto, eliminar un producto, etc.
    }
    crearProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, descripcion, informacionAdicional } = req.body;
            try {
                const producto = this.productoRepository.create({
                    nombre,
                    descripcion,
                    informacionAdicional,
                });
                yield this.productoRepository.save(producto);
                res.status(201).json({ mensaje: "Producto creado exitosamente", producto });
            }
            catch (error) {
                res.status(500).json({ mensaje: "Error al crear el producto", error: error.message });
            }
        });
    }
    obtenerProductos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productos = yield this.productoRepository.find();
                res.json(productos);
            }
            catch (error) {
                res.status(500).json({ mensaje: "Error al obtener los productos", error: error.message });
            }
        });
    }
}
exports.default = ProductoController;
