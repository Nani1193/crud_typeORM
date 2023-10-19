import { Request, Response } from "express";
import { Producto } from "../entities/Producto";
import { AppDataSource } from "../db";

class ProductoController {
  private productoRepository = AppDataSource.getRepository(Producto);

  async crearProducto(req: Request, res: Response) {
    const { nombre, descripcion, informacionAdicional } = req.body;

    try {
      const producto = this.productoRepository.create({
        nombre,
        descripcion,
        informacionAdicional,
      });

      await this.productoRepository.save(producto);

      res.status(201).json({ mensaje: "Producto creado exitosamente", producto });
    } catch (error: any) {
      res.status(500).json({ mensaje: "Error al crear el producto", error: error.message });
    }
  }

  async obtenerProductos(req: Request, res: Response) {
    try {
      const productos = await this.productoRepository.find();
      res.json(productos);
    } catch (error: any) {
      res.status(500).json({ mensaje: "Error al obtener los productos", error: error.message });
    }
  }

  // Otros métodos del controlador: obtener un producto por ID, actualizar un producto, eliminar un producto, etc.
}

export default ProductoController;