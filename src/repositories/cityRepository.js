import CrudRepository from "./crudrepositories.js";

class CityReposiory extends CrudRepository{
     constructor (){
        super("city")
     }
}

export default CityReposiory;