//Airplane repository (Create a plane, get a plane, Update a plane, Delete a plane)
import CrudRepository from "./crudrepositories.js";

class AirplaneRepository extends CrudRepository{
     constructor (){
        super("airplane")
     }
}

export default AirplaneRepository;