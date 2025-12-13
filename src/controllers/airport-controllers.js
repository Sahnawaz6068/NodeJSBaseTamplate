import airportService from "../services/airport-service.js";
import { StatusCodes } from "http-status-codes";
import reqResponse from "../utils/common/index.js";

const errorResponse = reqResponse.ErrorResponse;
const sucessResponse = reqResponse.SucessResponse;

async function createAirport(req, res) {
  try {
    const Airport = await airportService.createAirport({
      name: req.body.airportName,
      code: req.body.airportCode,
      address: req.body.airportAddress,
      cityId: parseInt(req.body.cityId),
    });
    sucessResponse.data = Airport;
    sucessResponse.message = "Successfully created an airport";
    return res.status(StatusCodes.OK).json(sucessResponse);
  } catch (error) {
    errorResponse.message = error.message;
    errorResponse.statusCode = error.statusCode;

    return res.status(error.statusCode).json(errorResponse);
  }
}

async function getAirport(req, res) {
  try {
    const Airport = await airportService.readAirportById(req.params.id);
    sucessResponse.message = `The airport for id:${req.params.id} is here..`;
    sucessResponse.data = Airport;
    return res.status(StatusCodes.OK).json(sucessResponse);
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    errorResponse.data = error.message;
    errorResponse.message = statusCode;
    return res.status(statusCode).json(errorResponse);
  }
}

async function allAirport (req,res){
    try{
        const response = await airportService.readAllAirport();
        sucessResponse.data = response;
        return res.status(StatusCodes.OK).json(sucessResponse)
    }catch(error){
        const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
        errorResponse.message = error.message;
        errorResponse.statusCode = statusCode
        return res.status(statusCode).json(errorResponse);
    }
}

export default {
  createAirport,
  getAirport,
  allAirport
};
