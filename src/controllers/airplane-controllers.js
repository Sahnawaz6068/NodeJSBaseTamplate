import AirplaneService from "../services/index.js";
import { StatusCodes } from "http-status-codes";
import reqResponses from "../utils/common/index.js";

const errorResponse = reqResponses.ErrorResponse;
const sucessResponse = reqResponses.SucessResponse;

// API --> POST:/airplanes
// req-body --> { modelNumber: 'AirBus-230', capacity:230 }

async function createAirplane(req, res) {
  console.log(req.body);

  try {
    //createAirplane service return the airplane
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

// API --> GET:/airplanes
async function getAllAirplanes(req, res) {
  try {
    const airplanes = await AirplaneService.getAllAirplanes();
    sucessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(sucessResponse);
  } catch (err) {
    errorResponse.error=err;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
                                   
  }
}

// API --> GET:/airplanes/:id
async function getAirplaneById(req,res) {
  try{
    const airplane = await AirplaneService.getAirplane(req.params.id);
    sucessResponse.data = airplane;
    return res
              .status(StatusCodes.OK).json(sucessResponse)
  }catch(error){
    errorResponse.error=error;
    return res.status(error.statusCode).json(errorResponse)
  }
}

// API --> DELETE:/airplanes/:id
async function deleteAirplaneById(req,res) {
  try{
    const response =await AirplaneService.deleteAirplane(req.params.id);
    sucessResponse.data=response;
    return res.status(StatusCodes.OK).json(sucessResponse);
  }catch(error){
    errorResponse.error=error; 
    return res.status(error.statusCode).json(errorResponse)
  }
}

export default { createAirplane, getAllAirplanes, getAirplaneById, deleteAirplaneById };
