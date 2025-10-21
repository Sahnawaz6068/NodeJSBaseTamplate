import express from "express";
import controller from '../../controllers/index.js'

const router=express.Router();

router.get('/info',controller.infoController)

export default router;
