let productosDAO
let carritoDAO

switch (process.env.TIPO) {
    case "mongo":
        const { default: CarritoDaoMongo} = await import("./carrito/daoCarritoMongo.js")
        const { default: ProductosDaoMongo} = await import("./productos/daoProductosMongo.js")
        productosDAO = new ProductosDaoMongo()
        carritoDAO = new CarritoDaoMongo()
        break

    case "file":
        const {default: CarritoDaoArchivo} = await import("./carrito/daoCarritoArchivo.js")
        const {default: ProductosDaoArchivo} = await import("./productos/daoProductosArchivo.js")

        productosDAO = new ProductosDaoArchivo()
        carritoDAO = new CarritoDaoArchivo()
        break
}

export default productosDAO