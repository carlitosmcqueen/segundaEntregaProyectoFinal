const config ={
    mongo:{
        uri: "mongodb://localhost:27017/ecommerce",
        options:{
            serverSelectionTimeout: 5000,
        }
    },
    file:{
        path:"./Data"
    }

}
export default config