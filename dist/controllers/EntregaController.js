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
const Entrega_1 = require("../entities/Entrega");
class EntregaController {
    constructor() {
        this.entregaRepository = (0, typeorm_1.getRepository)(Entrega_1.Entrega);
        // Otras funciones del controlador para obtener una entrega por ID, actualizar una entrega, etc.
    }
    crearEntrega(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numeroGuiaTransporte, fechaDespacho, fechaEntrega, estadoEntrega, observaciones, idCliente, idPedido } = req.body;
            try {
                const entrega = this.entregaRepository.create({
                    numeroGuiaTransporte,
                    fechaDespacho,
                    fechaEntrega,
                    estadoEntrega,
                    observaciones,
                    cliente: { id: idCliente },
                    pedido: { id: idPedido } // Asociar con el pedido
                });
                yield this.entregaRepository.save(entrega);
                res.status(201).json({ mensaje: "Entrega creada exitosamente", entrega });
            }
            catch (error) {
                // Ahora especificamos el tipo de "error" como "any"
                res.status(500).json({ mensaje: "Error al crear la entrega", error: error.message });
            }
        });
    }
    obtenerEntregas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const entregas = yield this.entregaRepository.find();
                res.json(entregas);
            }
            catch (error) {
                // Especificamos el tipo de "error" como "any"
                res.status(500).json({ mensaje: "Error al obtener las entregas", error: error.message });
            }
        });
    }
}
exports.default = EntregaController;
