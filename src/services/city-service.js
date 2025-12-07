import { StatusCodes } from "http-status-codes";
import repositories from "../repositories/index.js";
import AppError from "../utils/errors/app-error.js";

const cityRepository = new repositories.CityReposiory();

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;

  } catch (error) {
   if(error.code==="P2002"){
        throw new AppError ("Duplicate Entry",StatusCodes.CONFLICT)
    }
    
    throw new AppError("Internal Server Error", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

export default {
  createCity,
};
