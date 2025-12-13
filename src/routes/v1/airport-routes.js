import express from 'express';
import controller from '../../controllers/index.js';

const router = express.Router();

//post-->api/v1/airports
router.post('/',controller.airportControllers.createAirport);
router.get('/:id',controller.airportControllers.getAirport);
router.get('/',controller.airportControllers.allAirport);
router.delete('/:id',controller.airportControllers.deleteAirport);



export default router;