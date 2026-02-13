import { StatusCodes } from "http-status-codes";
import reqResponses from "../utils/common/index.js";

function validateCreateFlight(req, res, next) {
  const ErrorResponse = { ...reqResponses.ErrorResponse };

  const requiredFields = [
    "flightNumber",
    "airplaneId",
    "departureAirportId",
    "arrivalAirportId",
    "arrivalTime",
    "departureTime",
    "price",
    "totalSeats",
  ];

  // Loop through fields to find missing ones
  for (const field of requiredFields) {
    if (!req.body[field]) {
      ErrorResponse.error = StatusCodes.BAD_REQUEST;
      ErrorResponse.message = `${field} not found in the incoming request`;

      return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
  }

  if (new Date(req.body.arrivalTime) <= new Date(req.body.departureTime)) {
    ErrorResponse.error = StatusCodes.BAD_REQUEST;
    ErrorResponse.message = "Arrival time must be after departure time";
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}

function validateUpdateSeatRequest(req, res, next) {
  const ErrorResponse = { ...reqResponses.ErrorResponse };

  const requiredFields = [
    "flightId",
    "seats"
  ];

  // Loop through fields to find missing ones
  for (const field of requiredFields) {
    if (!req.body[field]) {
      ErrorResponse.error = StatusCodes.BAD_REQUEST;
      ErrorResponse.message = `${field} not found in the incoming request`;

      return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
  }

  next();
}

export default { validateCreateFlight, validateUpdateSeatRequest };
