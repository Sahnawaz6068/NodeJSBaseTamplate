import { StatusCodes } from "http-status-codes";
import flightService from "../services/flight-service.js";
import reqResponse from "../utils/common/index.js";

const errorResponse = reqResponse.ErrorResponse;
const sucessResponse = reqResponse.SucessResponse;

//POST:/flights
/*
request body-->
{
  "flightNumber": "UK-820",
  "airplaneId": 12,
  "departureAirportId": "DEL",
  "arrivalAirportId": "BOM",
  "departureTime": "2025-12-25T10:00:00.000Z",
  "arrivalTime": "2025-12-25T12:30:00.000Z",
  "price": 4500,
  "boardingGate": "12A",
  "totalSeats": 180
}

*/
async function createFlight(req, res) {
  try {
    const flight = await flightService.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeats: req.body.totalSeats,
    });
    sucessResponse.data = flight;
    sucessResponse.message = `Flight Create`;
    return res.status(StatusCodes.CREATED).json(sucessResponse);
  } catch (error) {
    const status = error.statusCode;
    errorResponse.message = error.message;
    error.statusCode = status;
    errorResponse.error = error;
    return res.status(status).json(errorResponse);
  }
}

async function getAllFlight(req,res) {
  try {
    const flight = await flightService.getAllFlight(req.query);
    sucessResponse.data = flight;
    return res.status(StatusCodes.OK).json(flight)
  } catch (error) {
    errorResponse.message = error.message;
    return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(errorResponse)
  }
}

export default {
  createFlight,
  getAllFlight
};
