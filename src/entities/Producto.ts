import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { LineasPedido } from "./LineasPedido";

@Entity()
export class Producto {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  informacionAdicional: string;

  @OneToMany(() => LineasPedido, lineaPedido => lineaPedido.producto)
  lineasPedido: LineasPedido[];
}