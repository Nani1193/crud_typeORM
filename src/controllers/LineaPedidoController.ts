import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { LineasPedido } from "../entities/LineaPedido";

class LineaPedidoController {
  private lineaPedidoRepository = getRepository(LineasPedido);

  async crearLineaPedido(req: Request, res: Response) {
    const { idProducto, cantidad, fechaEntrega, tipo } = req.body;

    try {
      const lineaPedido = this.lineaPedidoRepository.create({
        idProducto,
        cantidad,
        fechaEntrega,
        tipo,
      });

      await this.lineaPedidoRepository.save(lineaPedido);

      res.status(201).json({ mensaje: "Línea de pedido creada exitosamente", lineaPedido });
    } catch (error: any) {
      res.status(500).json({ mensaje: "Error al crear la línea de pedido", error: error.message });
    }
  }

  async obtenerLineasPedido(req: Request, res: Response) {
    try {
      const lineasPedido = await this.lineaPedidoRepository.find();
      res.json(lineasPedido);
    } catch (error: any) {
      res.status(500).json({ mensaje: "Error al obtener las líneas de pedido", error: error.message });
    }
  }

  // Otros métodos del controlador: obtener una línea de pedido por ID, actualizar una línea de pedido, eliminar una línea de pedido, etc.
}

export default LineaPedidoController;
