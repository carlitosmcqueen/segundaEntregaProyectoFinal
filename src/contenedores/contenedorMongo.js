import mongoose from "mongoose";
import config from "../../config.js";

await mongoose.connect(config.mongoDB.uri, config.mongoDB.options);

class ContenedorMongoDBCarrito{
    constructor(coleccionCarrito, schema) {
        this.db = mongoose.model(coleccion, schema);
    }

    async findById(id) {
        try {
          const data = await this.db.findOne({ _id: id });
          return data;
        } catch (e) {
          throw new Error(e);
        }
      }
    
      async findAll() {
        try {
          const data = await this.db.find({});
          return data;
        } catch (e) {
          throw new Error(e);
        }
      }
    
      async save(newDoc) {
        try {
          const doc = await this.db.create(newDoc);
          return doc;
        } catch (e) {
          throw new Error(e);
        }
      }
    
      async update(elem) {
        try {
          const { n, nModified } = await this.db.replaceOne(
            { _id: elem._id },
            elem
          );
          return nModified > 0;
        } catch (e) {
          throw new Error(e);
        }
      }
    
      async delete(id) {
        try {
          const { n, nDeleted } = await this.db.deleteOne({ _id: id });
          return nDeleted > 0;
        } catch (e) {
          throw new Error(e);
        }
      }
    
      async deleteAll() {
        await this.db.deleteMany({});
      }
}


class ContenedorMongoDBproductos{
    constructor(coleccionProductos,esquema){
        this.db = mongoose.model(coleccionProductos,esquema)
    }

    async save(newDoc){
        try{
        const doc = await  this.db.create(newDoc)
        return doc;   
        }
        catch(e){

        }
    }
    async findAll() {
        try{
    const data = await this.db.find({})
    return data;
    }
    catch(e){
        throw new Error(e);
    }   
    }

    async findById(id) {
        try{
            const data = await this.db.findOne({_id: id})
            return data;
        }
        catch(e){
            throw new Error (e)
        }
    }
    async update(elem) {
    try{ this.db.replaceOne({_id: elem._id},elem)
        return elem;
    } catch(e){
        throw new Error(e)
    }
    }
    async delete(id){
        try{
        await this.db.deleteOne({_id:id})
        }
        catch(e){
            throw new Error(e)
        }
    }
    async deleteAll(){
        await this.db.deleteMany({})
    }   
}

export default { ContenedorMongoDBCarrito , ContenedorMongoDBproductos }