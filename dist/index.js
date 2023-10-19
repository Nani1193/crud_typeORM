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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const db_1 = require("./db");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db_1.AppDataSource.initialize();
            console.log("Database connected");
            app_1.default.listen(3000);
            console.log("Server on port", 3000);
        }
        catch (error) {
            console.error(error);
        }
    });
}
main();
// Patrón Controlador - Servicio - Repositorio
// Controlador
// Capa que se encarga de recibir peticiones HTTP y decidir las acciones a tomar
// POST, GET, PUT, DELETE
// C      R     U    D
// Servicio
// Capa que se encarga de ejecutar la lógica del negocio, llama a los repositorios
// Repositorio
// Contiene lógica para acceder a la base de datos
