const { conexion } = require("./basedatos/conexion")
const express = require("express")
const cors = require("cors")

console.log("hola que tal")

//conectar a la base de datos
conexion()


//servidor de node
const app = express()
const puerto = 3900

//configurar cors
app.use(cors())


//convertir body a objeto js
app.use(express.json())


//rutas
app.get("/send", (req, res) => {
    console.log("se ha ejecutado el endpoint probando")
    return res.status(200).json({
        curso: "react",
        autor: "tito",
        url: "www.google.com.uy"
    }
 )
})


app.get("/json", (req, res) => {
    console.log("se ha ejecutado el endpoint probando")
    return res.status(200).json([{
        curso: "react",
        autor: "tito",
        url: "www.google.com.uy"
    },
   {
        curso: "react",
        autor: "tito",
        url: "www.google.com.uy"
    }
    ])
})
app.get("/html", (req, res) => {
    console.log("se ha ejecutado el endpoint probando")
    return res.status(200).send(`<h1>ruta html</h1>`)
})


//servidor
app.listen(puerto, () => {
    console.log("servidor corriendo en el puerto: ", puerto)
})