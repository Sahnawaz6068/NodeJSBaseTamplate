import { StatusCodes } from "http-status-codes";
import repositories from "../repositories/index.js";
import AppError from "../utils/errors/app-error.js";

const airportRepository = new repositories.AirportRepository();

async function createAirport(data) {
  try {
    const response = await airportRepository.create(data);
    return response;
  } catch (error) {
    throw new AppError(error.message,StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function readAirportById(id) {
    const airportId = parseInt(id);
  try {
    const response = await airportRepository.read(airportId);
    return response;
  } catch (error) {
    if(error.statusCode === StatusCodes.NOT_FOUND){
        throw new AppError(`Airport with id:${airportId} is not present`,StatusCodes.NOT_FOUND)
    }
    throw new AppError("Something wrong with server",StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function readAllAirport() {
  try {
    const response = await airportRepository.readAll();
    return response;
  } catch (error) {
    throw new AppError("Something wrong with server",StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function deleteAirport(id) {
    const airportId= parseInt(id);
  try {
    const response = await airportRepository.delete(airportId);
    return response;
  } catch (error) {
    if(error.statusCode){
        throw new AppError(`The airport with this id ${airportId} is not present`,StatusCodes.NOT_FOUND)
    }
    throw new AppError("Something wrong with server",StatusCodes.INTERNAL_SERVER_ERROR);
    
  }
}

async function updateAirport(id, data) {
  const airportId =  parseInt(id);
  try {
    const response = await airportRepository.update(airportId,data);
    return response
  } catch (error) {
    if(error.statusCode){
      throw new AppError(`The airport with this id ${airportId} is not present`,StatusCodes.NOT_FOUND);
    }
    throw  new AppError("Something wrong with server", StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

export default {
  createAirport,
  readAirportById,
  readAllAirport,
  deleteAirport,
  updateAirport,
};
