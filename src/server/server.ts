import express = require('express');
import cors = require('cors');
import path = require('path');

interface Path {
    [path: string]: string;
}

export default class Server {

    public app: express.Application;
    public port: number;
    public paths: Path;

    constructor( puerto: number ) {
        this.port = puerto;
        this.app = express();
        this.paths = {
            heroes: '/api/heroes'
        }

        this.middlewares();

    }

    private middlewares() {
        
        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

    }

    static init( puerto: number ) {
        return new Server( puerto );
    }

    private publicFolder() {
        const publicPath = path.resolve( __dirname, '../public' );
        this.app.use( express.static( publicPath ) );
    }

    private routes() {
        
    }

    start( callback: Function ) {
        this.app.listen( this.port, callback() );
        this.publicFolder();
    }

}