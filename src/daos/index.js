import * as dotenv from 'dotenv'
dotenv.config()

const daos = {
    mongo : async () =>{
        const {default: CarritoDaoMongo } = await import ("./carrito/daoCarritoMongo.js")
        const {default: ProductosDaoMongo } = await import ("./productos/daoProductosMongo.js")
        return {
            carritoDAO : new CarritoDaoMongo(),
            productosDAO: new ProductosDaoMongo()
        }
    },
    archivo: async () =>{
        const { default : CarritoDaoArchivo } = await import ("./carrito/daoCarritoArchivo.js")
        const { default : ProductosDaoArchivo } = await import ("./productos/daoProductosArchivo.js")
        return {
            carritoDAO : new CarritoDaoArchivo(),
            productosDAO : new ProductosDaoArchivo()
        }
    }
    
}


export default daos[process.env.TIPO];
