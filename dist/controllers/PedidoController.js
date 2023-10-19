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
const Pedido_1 = require("../entities/Pedido");
class PedidoController {
    constructor() {
        this.pedidoRepository = (0, typeorm_1.getRepository)(Pedido_1.Pedido);
        // Otros métodos del controlador: obtener un pedido por ID, actualizar un pedido, eliminar un pedido, etc.
    }
    crearPedido(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numeroPedido, fechaPedido, estadoPedido, informacionAdicional } = req.body;
            try {
                const pedido = this.pedidoRepository.create({
                    numeroPedido,
                    fechaPedido,
                    estadoPedido,
                    informacionAdicional,
                });
                yield this.pedidoRepository.save(pedido);
                res.status(201).json({ mensaje: "Pedido creado exitosamente", pedido });
            }
            catch (error) {
                res.status(500).json({ mensaje: "Error al crear el pedido", error: error.message });
            }
        });
    }
    obtenerPedidos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pedidos = yield this.pedidoRepository.find();
                res.json(pedidos);
            }
            catch (error) {
                res.status(500).json({ mensaje: "Error al obtener los pedidos", error: error.message });
            }
        });
    }
}
exports.default = PedidoController;
