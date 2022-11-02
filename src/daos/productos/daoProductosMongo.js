import ContenedorMongoDB from "../../contenedores/contenedorMongo.js";

class ProductosDaoMongo extends ContenedorMongoDB{
    constructor(){
        super("productos",{
            title: {type:String, required:true},
            price: {type:Number, required:true},
            thumbnail: { type: String, required: true}

        })
    }
}

export default ProductosDaoMongo

