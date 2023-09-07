const express = require('express')
const cors = require('cors');

class Server{
  
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT

        this.paths = {
            crm:   '/api/crm',
            holaVet:    '/api/holaVet',
            mercadoPagoPath: '/api/mercadoPago'
        }

        //middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){
        //cors
        this.app.use( cors() );
        
        // Lectura y parsero del body

        this.app.use( express.json());

        //directorio publico
        this.app.use( express.static('public'));
    }

    routes(){

        this.app.use( this.paths.crm, require('../routes/crmRoutes'));
        this.app.use( this.paths.holaVet, require('../routes/holaVet'));
        this.app.use( this.paths.mercadoPagoPath, require('../routes/mercadoPago'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        })
    }
}


module.exports = Server;