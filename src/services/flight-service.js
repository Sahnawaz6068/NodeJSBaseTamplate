import repositories from "../repositories/index.js";
import AppError from "../utils/errors/app-error.js";
import { StatusCodes } from "http-status-codes";

const FlightRepository = new repositories.FlightRepository();

async function createFlight(data) {
  try {
    const response = await FlightRepository.create(data);
    return response;
  } catch (error) {
    throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getAllFlight(query) {
  let customFilter = {};
  //F1: trips =MUM-DEL
  if(query.trips){
    const [departureAirportId,arrivalAirportId] = query.trips.split("-");
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;
    // TODO : Add a Check that they are not same
  }
  if(query.price){
    const [minimumPrice,maximumPrice] = query.price.split("-");
    customFilter.price = {
        gte: parseInt(minimumPrice), // Greater than or equal to min
        lte: parseInt((maximumPrice==undefined)?20000:maximumPrice)  // Less than or equal to max
    }
  }
  try {
    const flights = await FlightRepository.getAllFlight(customFilter);
    return flights
  } catch (error) {
     throw new Error(
      "can not fetch data of all the flight",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

export default {
  createFlight,
  getAllFlight
};
