import ContenedorMongoDB from "../../contenedores/contenedorMongo.js";

class CarritoDaoMongo extends ContenedorMongoDB{
    constructor(){
        super("carrito",{
            nombre:{type:String,required:true},
            descripcion:{type:String,required:true},
            foto:{type:String,required:true},
            precio:{type:Number,required:true},
            
        })
    }
}
export default CarritoDaoMongo


