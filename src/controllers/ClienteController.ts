import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Cliente } from "../entities/Cliente";

class ClienteController {
  private clienteRepository = getRepository(Cliente);

  async crearCliente(req: Request, res: Response) {
    const { nombre, direccion, contacto, informacionAdicional } = req.body;

    try {
      const cliente = this.clienteRepository.create({
        nombre,
        direccion,
        contacto,
        informacionAdicional,
      });

      await this.clienteRepository.save(cliente);

      res.status(201).json({ mensaje: "Cliente creado exitosamente", cliente });
    } catch (error: any) {
      res.status(500).json({ mensaje: "Error al crear el cliente", error: error.message });
    }
  }

  async obtenerClientes(req: Request, res: Response) {
    try {
      const clientes = await this.clienteRepository.find();
      res.json(clientes);
    } catch (error: any) {
      res.status(500).json({ mensaje: "Error al obtener los clientes", error: error.message });
    }
  }
}

export default ClienteController;
