//Flight repository (Create a Flight, get a Flight, Update a Flight, Delete a Flight)
import CrudRepository from "./crudrepositories.js";
import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

class FlightRepository extends CrudRepository {
  constructor() {
    super("flight");
  }
//Filter 
  async getAllFlight(filter) {
    const response = await prisma.flight.findMany({
      where: filter,
      // orderBy: sort
      //||JOIN 
      include:{
        airplane:true
      }
    });
    return response;
  }
}

export default FlightRepository;
