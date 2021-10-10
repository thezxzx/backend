"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import MySQL from '../mysql/mysql';
const heroes_1 = require("../controllers/heroes");
const router = (0, express_1.Router)();
router.get('/heroes', heroes_1.obtenerHeroes);
router.get('/heroes/:id', heroes_1.obtenerHeroeId);
exports.default = router;
