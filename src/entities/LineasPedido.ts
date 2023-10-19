import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from "typeorm";
import { Pedido } from "./Pedido";
import { Producto } from "./Producto";

@Entity()
export class LineasPedido extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idProducto: string;

  @Column()
  cantidad: number;

  @Column({ type: "date" })
  fechaEntrega: Date;

  @Column()
  tipo: string;

  @ManyToOne(() => Pedido, pedido => pedido.lineasPedido)
  pedido: Pedido;

  @ManyToOne(() => Producto, producto => producto.lineasPedido)
  producto: Producto;
}