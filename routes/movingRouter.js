import express from 'express'
import {
  createAppointments,
  getAppointments,
} from '../controllers/movingController.js'

const router = express.Router()

router
  .route('/create-appointment')
  .post(createAppointments)
  .get(getAppointments)

export default router
