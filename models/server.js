const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        this.middlewares();


        this.routers();
    }

    middlewares(){
        this.app.use( cors() );

        this.app.use( express.json());

        this.app.use( express.static('public') );
    }

    routers(){

        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en el puerrto...', this.port);
        });
    }
}

module.exports = Server;