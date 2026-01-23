import express from 'express';
import controllers from '../../controllers/index.js';

const router = express.Router();
console.log("helo")
router.post('/signup',controllers.userControllers.createUser);

export default router;