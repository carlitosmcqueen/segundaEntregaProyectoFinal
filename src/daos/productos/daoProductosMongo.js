import ContenedorMongoDB from "../../contenedores/contenedorMongo.js";

class ProductosDaoMongo extends ContenedorMongoDB{
    constructor(){
        super("productos",{
            id:{type:String, require:true},
            nombre:{type:String, require:true},
            descripcion:{type:Number, require:true},
            foto:{type:String, require:true},
            precio:{type:Number, require:true},
            stock:{type:Number, require:true},
        })
    }
}
export default ProductosDaoMongo

