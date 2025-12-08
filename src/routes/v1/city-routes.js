import express from "express";
import controller from "../../controllers/index.js";
import middlewares from "../../middlewares/index.js";

const router = express.Router();

//post-->api/v1/airplanes/
router.post("/", controller.cityControllers.createCity);
//GET -->api/v1/airplanes/:id
router.get("/:id", controller.cityControllers.getCityById);
//GET -->api/v1/airplanes
router.get("/", controller.cityControllers.getAllCity);

export default router;
