//Airport repository (Create a Airport, get a Airport, Update a Airport, Delete a Airport)
import CrudRepository from "./crudrepositories.js";

class AirportRepository extends CrudRepository {
  constructor() {
    super("airport");
  }
}

export default AirportRepository;
