const express = require("express");
var cors = require('cors')


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use(cors())

        // Lectura y pharseo del body
        this.app.use( express.json() );

        // Directorio Publico 
        this.app.use( express.static( 'public' ) );
    }

    // Rutas
    routes() {
        this.app.use( this.usuariosPath, require('../routes/usuarios.routes'));
    }

    listen() {
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en el puerto: ', this.port);
        })
    }
}


module.exports = Server