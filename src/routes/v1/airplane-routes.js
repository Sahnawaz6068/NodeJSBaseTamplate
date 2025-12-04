import express from 'express';
import controller from '../../controllers/index.js';
import middleware from '../../middlewares/index.js';

const router = express.Router();

router.post('/',middleware.airplaneMiddleware,controller.airplaneController.createAirplane)

export default router;