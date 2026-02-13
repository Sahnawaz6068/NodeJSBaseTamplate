import express from 'express';
import controllers from '../../controllers/index.js';
import middlewares from '../../middlewares/index.js';

const router = express.Router();

router.post('/',middlewares.flightMiddleware.validateCreateFlight,controllers.flightControllers.createFlight);
//api/v1/flights?trips=MUM-DEL GET
router.get('/',controllers.flightControllers.getAllFlight);

router.get('/:id',controllers.flightControllers.getFlight);

// api/v1/flights/seats PATCH
router.get('/seats',middlewares.flightMiddleware.validateUpdateSeatRequest,controllers.flightControllers.updateSeats);


export default router;