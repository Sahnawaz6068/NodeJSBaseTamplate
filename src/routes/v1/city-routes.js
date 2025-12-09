import express from "express";
import controller from "../../controllers/index.js";
import middlewares from "../../middlewares/index.js";

const router = express.Router();

//post-->api/v1/cities/
router.post("/", controller.cityControllers.createCity);
//GET -->api/v1/cities/:id
router.get("/:id", controller.cityControllers.getCityById);
//GET -->api/v1/cities
router.get("/", controller.cityControllers.getAllCity);
//GET -->api/v1/cities/:id
router.delete('/:id', controller.cityControllers.deleteCityById);
//PATCH -->api/v1/cities/:id
router.patch('/:id', controller.cityControllers.updateCity);

export default router;
