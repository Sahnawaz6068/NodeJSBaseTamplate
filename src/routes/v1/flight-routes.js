import express from 'express';
import controllers from '../../controllers/index.js';
import middlewares from '../../middlewares/index.js';

const router = express.Router();

router.post('/',middlewares.flightMiddleware,controllers.flightControllers.createFlight);
//api/v1/flights?trips=MUM-DEL GET
router.get('/',controllers.flightControllers.getAllFlight);


export default router;