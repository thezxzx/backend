import { Request, Response } from "express";
import MySQL from "../mysql/mysql";

// Obtener heroes
export const obtenerHeroes = ( req: Request, res: Response) => {
    const query = `
        select *
        from heroes;
    `

    MySQL.ejecutarQuery( query, (err: any, heroes: Object[]) => {
        if( err ) {
            res.status(400).json({
                ok: false,
                error: err
            });
        } else {
            res.json({
                ok: true,
                heroes
            })
        }

    });

    res.status
}

export const obtenerHeroeId = ( req: Request, res: Response ) => {
    const { id } = req.params;
    const escapedID = MySQL.instance.cnn.escape( id );

    const query = `
        select *
        from heroes
        where id = ${ escapedID }
    `;

    MySQL.ejecutarQuery( query, (err: any, heroe: Object ) => {
        if( err ) {
            res.status(400).json({
                ok: false,
                error: err
            });
        } else {
            res.json({
                ok: true,
                heroe
            });
        }
    });
}