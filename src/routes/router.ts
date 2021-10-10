import { Router, Request, Response } from 'express';
// import MySQL from '../mysql/mysql';

import { obtenerHeroes, obtenerHeroeId } from '../controllers/heroes';

const router = Router();

router.get( '/heroes', obtenerHeroes)

router.get( '/heroes/:id', obtenerHeroeId);

export default router;