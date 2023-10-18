import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Pedido } from "./Pedido";
import { Cliente } from "./Cliente";

@Entity()
export class Entrega {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numeroGuiaTransporte: string;

  @Column({ type: "date" })
  fechaDespacho: Date;

  @Column({ type: "date" })
  fechaEntrega: Date;

  @Column()
  estadoEntrega: string;

  @Column()
  observaciones: string;

  @ManyToOne(() => Cliente, cliente => cliente.entregas)
  cliente: Cliente;

  @ManyToOne(() => Pedido, pedido => pedido.entregas)
  pedido: Pedido;
}
