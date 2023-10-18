import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Entrega } from "./Entrega";

@Entity()
export class Pedido {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numeroPedido: string;

  @Column({ type: "date" })
  fechaPedido: Date;

  @Column()
  estadoPedido: string;

  @Column()
  informacionAdicional: string;

  @OneToMany(() => Entrega, entrega => entrega.pedido)
  entregas: Entrega[];
    lineasPedido: any;
}
