import "reflect-metadata"
import app from "./app"
import { AppDataSource } from "./db"

async function main() {
    try {
      await AppDataSource.initialize();
      console.log("Database connected")
      app.listen(3000);
      console.log("Server on port", 3000);
    } catch (error) {
      console.error(error);
    }
  }
  
  main();

  // Patrón Controlador - Servicio - Repositorio

  // Controlador
  // Capa que se encarga de recibir peticiones HTTP y decidir las acciones a tomar

  // POST, GET, PUT, DELETE
  // C      R     U    D

  // Servicio
  // Capa que se encarga de ejecutar la lógica del negocio, llama a los repositorios

  // Repositorio
  // Contiene lógica para acceder a la base de datos

