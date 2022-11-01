const nodemailer = require("nodemailer")

const http = require("http")  // Creamos nuestro servidor
const express = require("express") //Es una función que encapsula toda la funcionalidad de Express, de la misma manera nos crea y levanta el servidor de forma rápida
const socketio = require("socket.io")//llamamos a socket.io para lograr realizar las conexiones entre cliente y servidor. 

const app = express() //Nuestra aplicación va hacer igual a express, es decir, nuestro servidor. 
const server = http.createServer(app) //Asi lo vamos a iniciar 
const io = socketio.listen(server)//creamos la interfaz de socketio la cual vamosa llamar io, i de input o ouput// las llamadas que le vamos hacer al servidor.  

app.set("port", process.env.PORT || 3000)// creamos y agregamos el puerto, el puerto no puede ser cualquiera, tiene que ser el que nos arroje el host, el puerto se obtiene con process.env.PORT

require("./socket")(io, app)//

app.use(express.static("./public"))//acá renderizamos, está será la carpeta a la que los usuarios van a tener acceso, lo que esta por fuera será solo para nosotros como desarrolladores y creadores del codigo

server.listen(app.get("port"), () => {
    console.log("puerto " + app.get("port"))//acá pondremos a correr el servidor en el respectivo puerto.
})
