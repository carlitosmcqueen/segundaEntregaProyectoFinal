import express from 'express';
const {Router} = express;

import {
    productosDAO as productosApi,
} from "./daos/index.js"

const app = express();
const productosRouter = new Router() 

console.log(await productosApi.guardar({nombre:"asdas,",descripcion:"www.asdas.com",foto:"asdas.eqwe.asd",precio:200,stock:3}))


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


app.use("/ecommerce",productosRouter)

export default app
