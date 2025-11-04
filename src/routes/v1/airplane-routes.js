import express from 'express';
import airplane from '../../controllers/index.js';
import AirplaneMiddleware from '../../middlewares/index.js';

const router = express.Router();

router.post('/',AirplaneMiddleware.airplaneMiddleware,airplane.airplaneController.createAirplane)

export default router;