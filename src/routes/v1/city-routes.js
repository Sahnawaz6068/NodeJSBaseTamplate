import express from 'express';
import controller from '../../controllers/index.js';

const router = express.Router();

//post-->api/v1/airplanes/
router.post('/',controller.cityControllers.createCity)

export default router;