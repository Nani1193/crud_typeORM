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
const LineaPedido_1 = require("../entities/LineaPedido");
class LineaPedidoController {
    constructor() {
        this.lineaPedidoRepository = (0, typeorm_1.getRepository)(LineaPedido_1.LineasPedido);
        // Otros métodos del controlador: obtener una línea de pedido por ID, actualizar una línea de pedido, eliminar una línea de pedido, etc.
    }
    crearLineaPedido(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idProducto, cantidad, fechaEntrega, tipo } = req.body;
            try {
                const lineaPedido = this.lineaPedidoRepository.create({
                    idProducto,
                    cantidad,
                    fechaEntrega,
                    tipo,
                });
                yield this.lineaPedidoRepository.save(lineaPedido);
                res.status(201).json({ mensaje: "Línea de pedido creada exitosamente", lineaPedido });
            }
            catch (error) {
                res.status(500).json({ mensaje: "Error al crear la línea de pedido", error: error.message });
            }
        });
    }
    obtenerLineasPedido(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lineasPedido = yield this.lineaPedidoRepository.find();
                res.json(lineasPedido);
            }
            catch (error) {
                res.status(500).json({ mensaje: "Error al obtener las líneas de pedido", error: error.message });
            }
        });
    }
}
exports.default = LineaPedidoController;
