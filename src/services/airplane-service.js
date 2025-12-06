import { StatusCodes } from "http-status-codes";
import AirplaneRepo from "../repositories/index.js";
import AppError from "../utils/errors/app-error.js";

const airplaneRepository = new AirplaneRepo.AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    throw error;
  }
}

async function getAllAirplanes() {
  try {
    const airplanes = await airplaneRepository.readAll();
    return airplanes;
  } catch (error) {
    throw new Error(
      "can not fetch data of all the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id) {
  const airplaneId = parseInt(id);
  try {
    const airplane = await airplaneRepository.read(airplaneId);
    return airplane;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "Airplane you requested is not present",
        error.statusCode
      );
    }
    throw new Error(
      "Some problem during fetching Airplane using Id",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteAirplane(id) {
  const airplaneId = parseInt(id);
  try {
    const response = await airplaneRepository.delete(airplaneId);
    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
       throw error; 
    }

    throw new AppError(
      "Cannot delete the airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// api/v1/airplanes -PATCH
async function updateAirplane(id, data) {
  const airplaneId = parseInt(id);
  try {
    const response = await airplaneRepository.update(airplaneId, data);
    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw error;
    }
    throw new AppError(
      "Cannot update the airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

export default { createAirplane, getAllAirplanes, getAirplane, deleteAirplane, updateAirplane };
