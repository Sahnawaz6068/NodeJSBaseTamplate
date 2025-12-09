import { StatusCodes } from "http-status-codes";
import reqResponses from "../utils/common/index.js";
import cityService from "../services/city-service.js";

const errorResponse = reqResponses.ErrorResponse;
const sucessResponse = reqResponses.SucessResponse;

// API --> POST:/cities
async function createCity(req, res) {
  try {
    const city = await cityService.createCity({
      name: req.body.name,
    });
    sucessResponse.data = city;
    sucessResponse.message = "Successfully created a City";
    return res.status(StatusCodes.CREATED).json({ sucessResponse });
  } catch (error) {
    const status = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    errorResponse.message = error.message;
    errorResponse.error = error;
    error.statusCode = status;

    return res.status(status).json(errorResponse);
  }
}
//API --> GET:/cities/:id
async function getCityById(req, res) {
  try {
    const response = await cityService.readCityById(req.params.id);
    sucessResponse.data = response;
    sucessResponse.message = `this is your city for id ${req.params.id}`;
    return res.status(StatusCodes.OK).json(sucessResponse);
  } catch (error) {
    const status = error.statusCode;
    errorResponse.message = error.message;
    errorResponse.statusCode = status;
    errorResponse.error = error;

    return res.status(status).json(errorResponse);
  }
}
//API -->GET:/cities/
async function getAllCity(req, res) {
  try {
    const response = await cityService.readAllCity();
    sucessResponse.message = "All city list is here";
    sucessResponse.data = response;

    return res.status(StatusCodes.OK).json({ sucessResponse });
  } catch (error) {
    const status = error.statusCode;
    errorResponse.data = error;
    errorResponse.statusCode = status;
    errorResponse.message = error.message;

    return res.status(status).json(errorResponse);
  }
}
//API -->DELETE:/cities/:id
async function deleteCityById(req, res) {
  try {
    const response = await cityService.deleteCityById(req.params.id);
    sucessResponse.message =`The city with id ${req.params.id} is deleted.`
    sucessResponse.data = response;


    return res.status(StatusCodes.OK).json(sucessResponse);
  } catch (error) {
    const status=error.statusCode;
    errorResponse.message =error.message;
    errorResponse.statusCode =error.statusCode;

    return res.status(status).json(errorResponse);
  }
}
//API-->PATCH:/cities/:id
async function updateCity(req,res) {
  const cityId = req.params.id;
  try{
    const response = await cityService.updateCity(cityId,req.body);

    sucessResponse.data = response;
    return res.status(StatusCodes.OK).json(sucessResponse)
  }
  catch(error){
    const status = error.statusCode;
    const errRes = { ...errorResponse };
    errRes.error = error;
    errRes.message = error.message;
    errRes.statusCode=error.statusCode;

    return res.status(status).json(errRes)
  }
}

export default {
  createCity,
  getCityById,
  getAllCity,
  deleteCityById,
  updateCity
};
