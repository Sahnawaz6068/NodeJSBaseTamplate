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
  let sort = [];
  if (query.trips) {
    const [departureAirportId, arrivalAirportId] = query.trips.split("-");
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;
  }
  if (query.price) {
    const [minimumPrice, maximumPrice] = query.price.split("-");
    customFilter.price = {
      gte: parseInt(minimumPrice),
      lte: parseInt(maximumPrice == undefined ? 20000 : maximumPrice),
    };
  }
  if (query.travellers) {
    const totalSeats = query.travellers == undefined ? 100 : query.travellers;
    customFilter.totalSeats = {
      gte: parseInt(totalSeats),
    };
  }

  if (query.tripDate) {
    const startOfDay = new Date(`${query.tripDate}T00:00:00.000Z`);
    const endOfDay = new Date(`${query.tripDate}T23:59:59.999Z`);
    customFilter.departureTime = {
      gte: startOfDay,
      lte: endOfDay,
    };
  }
  //Just working above code ?

  try {
    const flights = await FlightRepository.getAllFlight(customFilter);
    return flights;
  } catch (error) {
    throw new Error(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getFlight(id) {
  try {
    const flight = await FlightRepository.read(parseInt(id));
    return flight;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        `The flight you requested is not present`,
        error.statusCode,
      );
    }
    throw new AppError(`something wrong during fetching flight details`)
  }
}

async function updateSeats(data){
  try {
    const response = await FlightRepository.updateRemainingSeats(data.flightId,data.seats,data.dec);
    return response;
  } catch (error) {
    throw new AppError('Can not update data of the flight',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

export default {
  createFlight,
  getAllFlight,
  getFlight,
  updateSeats
};
