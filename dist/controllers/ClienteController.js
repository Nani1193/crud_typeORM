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
const Cliente_1 = require("../entities/Cliente");
class ClienteController {
    constructor() {
        this.clienteRepository = (0, typeorm_1.getRepository)(Cliente_1.Cliente);
    }
    crearCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, direccion, contacto, informacionAdicional } = req.body;
            try {
                const cliente = this.clienteRepository.create({
                    nombre,
                    direccion,
                    contacto,
                    informacionAdicional,
                });
                yield this.clienteRepository.save(cliente);
                res.status(201).json({ mensaje: "Cliente creado exitosamente", cliente });
            }
            catch (error) {
                res.status(500).json({ mensaje: "Error al crear el cliente", error: error.message });
            }
        });
    }
    obtenerClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientes = yield this.clienteRepository.find();
                res.json(clientes);
            }
            catch (error) {
                res.status(500).json({ mensaje: "Error al obtener los clientes", error: error.message });
            }
        });
    }
}
exports.default = ClienteController;
