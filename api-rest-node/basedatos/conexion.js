const mongose = require("mongoose")

const conexion = async () => {
    try {
        await mongose.connect("mongodb://localhost:27017/ni_blog")

        //Parámetros dentro del objeto cono en caso de aviso------------
        //useNewUrlParser: true
        //useUnifieldTopology: true
        //useCreateIndex: true

     console.log("conectado a la base");

    } catch (erro) {
        console.log(error)
        throw new Error("==> no se conectó a la base de datos")
    }
}

module.exports = {conexion}