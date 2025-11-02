import express from 'express';
import airplane from '../../controllers/index.js'

const router = express.Router();

router.post('/',airplane.airplaneController.createAirplane)

export default router;