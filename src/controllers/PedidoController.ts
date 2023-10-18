import { Request, Response } from "express";
import { Pedido } from "../entities/Pedido";
import { AppDataSource } from "../db";

class PedidoController {
  private pedidoRepository = AppDataSource.getRepository(Pedido);

  async crearPedido(req: Request, res: Response) {
    const { numeroPedido, fechaPedido, estadoPedido, informacionAdicional } = req.body;

    try {
      const pedido = this.pedidoRepository.create({
        numeroPedido,
        fechaPedido,
        estadoPedido,
        informacionAdicional,
      });

      await this.pedidoRepository.save(pedido);

      res.status(201).json({ mensaje: "Pedido creado exitosamente", pedido });
    } catch (error: any) {
      res.status(500).json({ mensaje: "Error al crear el pedido", error: error.message });
    }
  }

  async obtenerPedidos(req: Request, res: Response) {
    try {
      const pedidos = await this.pedidoRepository.find();
      res.json(pedidos);
    } catch (error: any) {
      res.status(500).json({ mensaje: "Error al obtener los pedidos", error: error.message });
    }
  }

  // Otros métodos del controlador: obtener un pedido por ID, actualizar un pedido, eliminar un pedido, etc.
}

export default PedidoController;