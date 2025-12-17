//Flight repository (Create a Flight, get a Flight, Update a Flight, Delete a Flight)
import CrudRepository from "./crudrepositories.js";

class FlightRepository extends CrudRepository {
  constructor() {
    super("flight");
  }
}

export default FlightRepository;
