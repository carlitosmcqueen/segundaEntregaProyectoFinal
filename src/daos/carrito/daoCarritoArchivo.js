import ContenedorArchivo from "../../contenedores/contenedorArchivo.js";

class CarritoDaoArchivo extends ContenedorArchivo{
    constructor(){
        super("carrito.json");
    }
    async guardar(car = { productos:[] }){
        return super.guardar(car);
    }
}

export default CarritoDaoArchivo;