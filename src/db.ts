import { DataSource } from 'typeorm';
import { Entrega } from "./entities/Entrega";
import { Cliente } from './entities/Cliente';
import { LineasPedido } from './entities/LineasPedido';
import { Pedido } from './entities/Pedido';
import { Producto } from './entities/Producto';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "postgres",
  password: "1234",
  port: 5432,
  database: "typeormdb",
  logging: true,
  entities: [Entrega, Cliente, LineasPedido, Pedido, Producto],
  synchronize: true,
});