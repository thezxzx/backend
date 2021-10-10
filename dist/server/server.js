"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const path = require("path");
class Server {
    constructor(puerto) {
        this.port = puerto;
        this.app = express();
        this.paths = {
            heroes: '/api/heroes'
        };
        this.middlewares();
    }
    middlewares() {
        // CORS
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
    }
    static init(puerto) {
        return new Server(puerto);
    }
    publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }
    routes() {
    }
    start(callback) {
        this.app.listen(this.port, callback());
        this.publicFolder();
    }
}
exports.default = Server;
