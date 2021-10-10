"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerHeroeId = exports.obtenerHeroes = void 0;
const mysql_1 = __importDefault(require("../mysql/mysql"));
// Obtener heroes
const obtenerHeroes = (req, res) => {
    const query = `
        select *
        from heroes;
    `;
    mysql_1.default.ejecutarQuery(query, (err, heroes) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                heroes
            });
        }
    });
    res.status;
};
exports.obtenerHeroes = obtenerHeroes;
const obtenerHeroeId = (req, res) => {
    const { id } = req.params;
    const escapedID = mysql_1.default.instance.cnn.escape(id);
    const query = `
        select *
        from heroes
        where id = ${escapedID}
    `;
    mysql_1.default.ejecutarQuery(query, (err, heroe) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                heroe
            });
        }
    });
};
exports.obtenerHeroeId = obtenerHeroeId;
