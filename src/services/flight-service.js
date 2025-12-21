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
  //F1: trips =MUM-DEL
  if (query.trips) {
    const [departureAirportId, arrivalAirportId] = query.trips.split("-");
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;
    // TODO : Add a Check that they are not same
  }
  if (query.price) {
    const [minimumPrice, maximumPrice] = query.price.split("-");
    customFilter.price = {
      gte: parseInt(minimumPrice), // Greater than or equal to min
      lte: parseInt(maximumPrice == undefined ? 20000 : maximumPrice), // Less than or equal to max
    };
  }
  if (query.travellers) {
    const totalSeats = query.travellers == undefined ? 100 : query.travellers;
    customFilter.totalSeats = {
      gte: parseInt(totalSeats),
    };
  }
  //Date based Filter
  if (query.tripDate) {
    // 1.Start Day (00:00:00)
    const startOfDay = new Date(`${query.tripDate}T00:00:00.000Z`);
    // 2. END day (23:59:59)
    const endOfDay = new Date(`${query.tripDate}T23:59:59.999Z`);
    customFilter.departureTime = {
      gte: startOfDay,
      lte: endOfDay,
    };
  }

  // if (query.sort) {
  //   const params = query.sort.split(",");
  //   let sortFilter = params.map((params) => params.split("_"));

  //   sortFilter = sortFilter;
  // }

  try {
    const flights = await FlightRepository.getAllFlight(
      customFilter
    );
    return flights;
  } catch (error) {
    throw new Error(
      error.message,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

export default {
  createFlight,
  getAllFlight,
};
