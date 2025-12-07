import { StatusCodes } from "http-status-codes";
import reqResponses from "../utils/common/index.js";
import cityService from "../services/city-service.js";

const errorResponse = reqResponses.ErrorResponse;
const sucessResponse = reqResponses.SucessResponse;

// API --> POST:/city
async function createCity(req, res) {
  try {
    const city = await cityService.createCity({
      name: req.body.name,
    });
    sucessResponse.data = city;
    sucessResponse.message = "Successfully created a City";
    return res.status(StatusCodes.CREATED).json({ sucessResponse });
  } 
  catch (error) {
    console.log(error);
    const status = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

    errorResponse.message = error.message;

    errorResponse.error = error;
    return res.status(status).json(errorResponse);
  }
}

export default {
  createCity,
};
