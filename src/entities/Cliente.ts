import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Entrega } from "./Entrega";

@Entity()
export class Cliente {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column()
  contacto: string;

  @Column()
  informacionAdicional: string;

  @OneToMany(() => Entrega, entrega => entrega.cliente)
  entregas: Entrega[];
}