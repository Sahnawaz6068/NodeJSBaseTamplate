import AirplaneService from "../services/index.js";
import { StatusCodes } from "http-status-codes";
import reqResponses from "../utils/common/index.js";

const errorResponse = reqResponses.ErrorResponse;
const sucessResponse = reqResponses.SucessResponse;

// API --> POST:/airplanes
// req-body --> { modelNumber: 'AirBus-230', capacity:230 }

async function createAirplane(req, res) {
  console.log(req.body);

  try {//createAirplane service return the airplane
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    sucessResponse.data = airplane;
    sucessResponse.message = "Successfully created an Airplane";
    return res.status(StatusCodes.CREATED).json({ sucessResponse });
    
  } catch (error) {
    errorResponse.message = "Something went wrong while creating airplane";
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ errorResponse });
  }
}

export default { createAirplane };
