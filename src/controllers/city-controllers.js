
import { StatusCodes } from "http-status-codes";
import reqResponses from "../utils/common/index.js";
import cityService from "../services/city-service.js";

const errorResponse = reqResponses.ErrorResponse;
const sucessResponse = reqResponses.SucessResponse;

// API --> POST:/city
// req-body --> { name:Banglore}

async function createCity(req, res) {
//   console.log(req.body);

  try {
    //createCity service return the City
    const city = await cityService.createCity({
      name:req.body.name
    });
    sucessResponse.data = city;
    sucessResponse.message = "Successfully created a City";
    return res.status(StatusCodes.CREATED).json({ sucessResponse });
  } catch (error) {
    errorResponse.message = "Something went wrong while creating city";
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ errorResponse });
  }
}


export default{
    createCity
}