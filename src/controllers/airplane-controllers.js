import AirplaneService from '../services/index.js';
import { StatusCodes } from 'http-status-codes';

// API --> POST:/airplanes
// req-body --> { modelNumber: 'AirBus-230', capacity:230 }

async function createAirplane(req, res) {
  console.log(req.body);

  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Successfully created an Airplane',
      data: airplane,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Something went wrong while creating airplane',
      data: {},
      error: error.message, 
    });
  }
}

export default { createAirplane };
