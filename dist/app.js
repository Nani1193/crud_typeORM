"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const ClienteRoutes_1 = __importDefault(require("./routes/ClienteRoutes"));
const PedidoRoutes_1 = __importDefault(require("./routes/PedidoRoutes"));
const LineaPedidoRoutes_1 = __importDefault(require("./routes/LineaPedidoRoutes"));
const ProductoRoutes_1 = __importDefault(require("./routes/ProductoRoutes"));
const EntregaRoutes_1 = __importDefault(require("./routes/EntregaRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
// Usar los routers para las diferentes entidades
app.use("/cliente", ClienteRoutes_1.default);
app.use("/pedido", PedidoRoutes_1.default);
app.use("/lineapedido", LineaPedidoRoutes_1.default);
app.use("/producto", ProductoRoutes_1.default);
app.use("/entrega", EntregaRoutes_1.default);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
exports.default = app;
