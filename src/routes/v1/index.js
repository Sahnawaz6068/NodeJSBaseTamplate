import express from "express";
import controller from '../../controllers/index.js'
import airplaneRoute from './airplane-routes.js'

const router=express.Router();

router.use('/airplanes',airplaneRoute)

router.get('/info',controller.infoController)

export default router;
