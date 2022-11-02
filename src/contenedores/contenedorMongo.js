import mongoose from "mongoose";
import config from "../../config.js";

await mongoose.connect(config.mongo.uri, config.mongo.options);

class ContenedorMongoDBCarrito {
  constructor(coleccionCarrito, esquema) {
    this.db = mongoose.model(coleccionCarrito, esquema);
  }
  async saveCarrito(newDoc) {
    try {
      const doc = await this.db.create(newDoc)
      return doc;
    } catch (e) {
      throw new Error(e)
    }
  }
  async getAllCarritos() {
    try {
      const data = await this.db.find({})
      return data;
    } catch (e) {
      throw new Error(e)
    }
  }

  async getbyCarritoId(id) {
    try {
      const data = await this.db.findOne({
        _id: id
      })
      return data;
    } catch (e) {
      throw new Error(e)
    }
  }


  async updateCarrito(elem) {
    try {
      this.db.replaceOne({
        _id: elem._id
      }, elem)
      return elem;
    } catch (e) {
      throw new Error(e)
    }
  }
  async borrarCarrito(id) {
    try {
      await this.db.deleteOne({
        _id: id
      })
    } catch (e) {
      throw new Error(e)
    }
  }
  async borrarTodosCarrito() {
    await this.db.deleteMany({})
  }

}


class ContenedorMongoDBproductos {
  constructor(coleccionProductos, esquema) {
    this.db = mongoose.model(coleccionProductos, esquema)
  }
  async saveProd(newDoc) {
    try {
      const doc = await this.db.create(newDoc)
      return doc;
    } catch (e) {
      throw new Error(e)

    }
  }
  async getAllProducts() {
    try {
      const data = await this.db.find({})
      return data;
    } catch (e) {
      throw new Error(e)

    }
  }

  async getbyProdId(id) {
    try {
      const data = await this.db.findOne({
        _id: id
      })
      return data;
    } catch (e) {
      throw new Error(e)
    }
  }
  async updateProducto(elem) {
    try {
      this.db.replaceOne({
        _id: elem._id
      }, elem)
      return elem;
    } catch (e) {
      throw new Error(e)
    }
  }
  async borrarProducto(id) {
    try {
      await this.db.deleteOne({
        _id: id
      })
    } catch (e) {
      throw new Error(e)
    }
  }
  async borrarTodosProductos() {
    await this.db.deleteMany({})
  }


}

export default {
  ContenedorMongoDBCarrito,
  ContenedorMongoDBproductos
}