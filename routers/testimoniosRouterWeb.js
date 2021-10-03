import express from 'express'
import controller from '../controllers/testimoniosController.js'

const router = express.Router();

router.route('/')
.get(controller.home)

router.route('/testimonio')
.get(controller.testimonio)


router.route('/exito')
.post(controller.exito)

export default router