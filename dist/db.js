"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Entrega_1 = require("./entities/Entrega");
const Cliente_1 = require("./entities/Cliente");
const LineaPedido_1 = require("./entities/LineaPedido");
const Pedido_1 = require("./entities/Pedido");
const Producto_1 = require("./entities/Producto");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "1234",
    port: 5432,
    database: "typeormdb",
    logging: true,
    entities: [Entrega_1.Entrega, Cliente_1.Cliente, LineaPedido_1.LineasPedido, Pedido_1.Pedido, Producto_1.Producto],
    synchronize: true,
});
