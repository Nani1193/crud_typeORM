import express from "express";
import morgan from "morgan";
import cors from "cors";
import clienteRouter from "./routes/ClienteRoutes";
import pedidoRouter from "./routes/PedidoRoutes";
import lineaPedidoRouter from "./routes/LineaPedidoRoutes";
import productoRouter from "./routes/ProductoRoutes";
import entregaRouter from "./routes/EntregaRoutes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Usar los routers para las diferentes entidades
app.use("/cliente", clienteRouter);
app.use("/pedido", pedidoRouter);
app.use("/lineapedido", lineaPedidoRouter);
app.use("/producto", productoRouter);
app.use("/entrega", entregaRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

export default app;
