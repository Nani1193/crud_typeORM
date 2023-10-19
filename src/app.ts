
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import clienteRoutes from './routes/ClienteRoutes'
import entregaRoutes from './routes/EntregaRoutes'
import pedidoRoutes from './routes/PedidoRoutes'
import lineasPedidoRoutes from './routes/LineasPedidoRoutes'
import productoRoutes from './routes/ProductoRoutes'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json());

// Usar los routers para las diferentes entidades
app.use("/cliente", clienteRoutes);
app.use("/pedido", pedidoRoutes);
app.use("/lineapedido", lineasPedidoRoutes);
app.use("/producto", productoRoutes);
app.use("/entrega", entregaRoutes);

export default app;