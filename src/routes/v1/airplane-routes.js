import express from 'express';
import controller from '../../controllers/index.js';
import middleware from '../../middlewares/index.js';

const router = express.Router();

//post-->api/v1/airplanes/
router.post('/',middleware.airplaneMiddleware,controller.airplaneController.createAirplane)

//get-->api/v1/airplanes/
router.get("/",controller.airplaneController.getAllAirplanes);

//get-->api/v1/airplanes/:id
router.get("/:id",controller.airplaneController.getAirplaneById);

//delete-->api/v1/airplanes/:id
router.delete("/:id",controller.airplaneController.deleteAirplaneById);

//PATCH-->api/v1/airplanes/:id
router.patch("/:id",controller.airplaneController.updateAirplane);



export default router;