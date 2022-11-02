import ContenedorMongoDB from "../../contenedores/contenedorMongo.js";

class CarritoDaoMongo extends ContenedorMongoDB{
    constructor(){
        super("carritos",{
            productos:{type:[ ],required:true},
        })
    }
    async addMoney(){

    }
}
export default CarritoDaoMongo


