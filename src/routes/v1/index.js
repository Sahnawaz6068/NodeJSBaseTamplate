import express from "express";
import controller from '../../controllers/index.js';
import cityRoute from './city-routes.js'
import airplaneRoute from './airplane-routes.js';
import airportRoute from './airport-routes.js';
import flightRoute from './flight-routes.js'
import userRoute from './user-routes.js'

const router=express.Router();

router.use('/airplanes',airplaneRoute);
router.use('/cities',cityRoute);
router.use('/airports' ,airportRoute);
router.use('/flights', flightRoute)
router.use('/auth',userRoute)

router.get('/info',controller.infoController);


export default router;