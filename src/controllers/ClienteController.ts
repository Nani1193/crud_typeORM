import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Cliente } from "../entities/Cliente";

class ClienteController {
  private clienteRepository = AppDataSource.getRepository(Cliente);

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

  async obtenerCliente(req: Request, res: Response) {
    try {
      const clientes = await this.clienteRepository.find();
      res.json(clientes);
    } catch (error: any) {
      res.status(500).json({ mensaje: "Error al crear el cliente", error: error.stack });
    }    
  }
}

export default ClienteController;