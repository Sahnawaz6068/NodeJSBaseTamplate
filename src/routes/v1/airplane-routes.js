import express from 'express';
import controller from '../../controllers/index.js';
import middleware from '../../middlewares/index.js';

const router = express.Router();

//api/v1/airplanes/post
router.post('/',middleware.airplaneMiddleware,controller.airplaneController.createAirplane)
//api/v1/airplanes/get
router.get("/",controller.airplaneController.getAllAirplanes);


export default router;