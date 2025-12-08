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
  } catch (error) {
    const status = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    errorResponse.message = error.message;
    errorResponse.error = error;
    error.statusCode =status;

    return res.status(status).json(errorResponse);
  }
}
//API --> GET:/city/:id
async function getCityById(req, res) {
  try {
    const response = await cityService.readCityById(req.params.id);
    sucessResponse.data = response;
    sucessResponse.message = `this is your city for id ${req.params.id}`;
    return res.status(StatusCodes.OK).json(sucessResponse);
  } 
  catch (error) {
    const status = error.statusCode;
    errorResponse.message = error.message;
    errorResponse.statusCode = status;
    errorResponse.error = error;

    return res.status(status).json(errorResponse);
  }
}
//API -->GET:/city/:id
async function getAllCity(req,res){
  try{
    const response = await cityService.readAllCity();
    sucessResponse.message='All city list is here';
    sucessResponse.data = response;

    return res.status(StatusCodes.OK).json({sucessResponse})
  }catch(error){
    const status = error.statusCode;
    errorResponse.data =error;
    errorResponse.statusCode = status;
    errorResponse.message =error.message;

    return res.status(status).json(errorResponse);
  }
}

export default {
  createCity,
  getCityById,
  getAllCity
};
