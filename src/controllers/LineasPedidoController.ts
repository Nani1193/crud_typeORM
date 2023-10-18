import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { LineasPedido } from "../entities/LineasPedido";

class LineasPedidoController {
  private lineasPedidoRepository = AppDataSource.getRepository(LineasPedido);

  async crearLineaPedido(req: Request, res: Response) {
    const { idProducto, cantidad, fechaEntrega, tipo } = req.body;

    try {
      const lineaPedido = this.lineasPedidoRepository.create({
        idProducto,
        cantidad,
        fechaEntrega,
        tipo,
      });

      await this.lineasPedidoRepository.save(lineaPedido);

      res.status(201).json({ mensaje: "Línea de pedido creada exitosamente", lineaPedido });
    } catch (error: any) {
      res.status(500).json({ mensaje: "Error al crear la línea de pedido", error: error.message });
    }
  }

  async obtenerLineasPedido(req: Request, res: Response) {
    try {
      const lineasPedido = await this.lineasPedidoRepository.find();
      res.json(lineasPedido);
    } catch (error: any) {
      res.status(500).json({ mensaje: "Error al obtener las líneas de pedido", error: error.message });
    }
  }

  // Otros métodos del controlador: obtener una línea de pedido por ID, actualizar una línea de pedido, eliminar una línea de pedido, etc.
}

export default LineasPedidoController;