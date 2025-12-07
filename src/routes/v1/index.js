import express from "express";
import controller from '../../controllers/index.js';
import cityRoute from './city-routes.js'
import airplaneRoute from './airplane-routes.js'

const router=express.Router();

router.use('/airplanes',airplaneRoute);
router.use('/cities',cityRoute)

router.get('/info',controller.infoController);

export default router;