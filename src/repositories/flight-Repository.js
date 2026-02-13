//Flight repository (Create a Flight, get a Flight, Update a Flight, Delete a Flight)
import CrudRepository from "./crudrepositories.js";
import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

class FlightRepository extends CrudRepository {
  constructor() {
    super("flight");
  }

  async getAllFlight(filter) {
    const response = await prisma.flight.findMany({
      where: filter,
      include:{
        airplane:true,
        departureAirport:true,
        arrivalAirport:true
      }
    });
    return response;
  }

  // On booking completed, seat should be decreased
  async updateRemainingSeats(flightId, seats, dec = true) {
    return await prisma.flight.update({
      where: { id: flightId },
      data: {
        totalSeats: dec
          ? { decrement: seats }
          : { increment: seats },
      },
    });
  }
}

export default FlightRepository;
