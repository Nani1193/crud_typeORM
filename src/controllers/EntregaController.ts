import { Request, Response } from "express";
import { AppDataSource } from '../db';
import { Entrega } from "../entities/Entrega";

class EntregaController {
   entregaRepository = AppDataSource.getRepository(Entrega);

  async crearEntrega(req: Request, res: Response) {
    const { numeroGuiaTransporte, fechaDespacho, fechaEntrega, estadoEntrega, observaciones, idCliente, idPedido } = req.body;

    try {
      const entrega = this.entregaRepository.create({
        numeroGuiaTransporte,
        fechaDespacho,
        fechaEntrega,
        estadoEntrega,
        observaciones,
        cliente: { id: idCliente }, // Asociar con el cliente
        pedido: { id: idPedido }    // Asociar con el pedido
      });

      await this.entregaRepository.save(entrega);

      res.status(201).json({ mensaje: "Entrega creada exitosamente", entrega });
    } catch (error: any) {
      // Ahora especificamos el tipo de "error" como "any"
      res.status(500).json({ mensaje: "Error al crear la entrega", error: error.message });
    }
  }

  async obtenerEntregas(req: Request, res: Response) {
    try {
      const entregas = await this.entregaRepository.find();
      res.json(entregas);
    } catch (error: any) {
      // Especificamos el tipo de "error" como "any"
      res.status(500).json({ mensaje: "Error al obtener las entregas", error: error.message });
    }
  }
}

export default EntregaController;