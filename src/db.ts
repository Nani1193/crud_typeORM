import {DataSource} from 'typeorm';
import { Entrega } from "./entities/Entrega";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "1234",
    port: 5432,
    database: "typeormdb",
    logging: true,
    entities: [Entrega],
    synchronize: true,
  });