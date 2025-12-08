import { StatusCodes } from "http-status-codes";
import repositories from "../repositories/index.js";
import AppError from "../utils/errors/app-error.js";

const cityRepository = new repositories.CityReposiory();

//Create city
async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    if (error.code === "P2002") {
      //the P2002 error come form the DB
      throw new AppError("Duplicate Entry", StatusCodes.CONFLICT);
    }

    throw new AppError(
      "Internal Server Error",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

//read city by Id
async function readCityById(id) {
  const cityId = parseInt(id);
  try {
    const response = await cityRepository.read(cityId);
    return response;
  } 
  catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        `THE city with this ${cityId} is not found`,
        error.statusCode
      );
    }
    throw new AppError(
      "Some problem during fetching City using id",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function readAllCity(){
  try{
    const response = await cityRepository.readAll();
    return response ;
  }
  catch(error){
    throw new AppError(error.message,StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

export default {
  createCity,
  readCityById,
  readAllCity
};
