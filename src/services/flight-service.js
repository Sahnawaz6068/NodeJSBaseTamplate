import repositories from "../repositories/index.js";
import AppError from "../utils/errors/app-error.js";
import { StatusCodes } from "http-status-codes";

const FlightRepository = new repositories.FlightRepository();

async function createFlight(data) {
  try {
    const response = await FlightRepository.create(data);
    return response;
  } catch (error) {
    return new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getAllFlight(filter) {
  let customFilter = {};
  //F1: trips =MUM-DEL
}

export default {
  createFlight,
};
