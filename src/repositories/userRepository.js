import CrudRepository from "./crudrepositories.js";

class UserRepository extends CrudRepository{
     constructor (){
        super("user")
     }
}

export default UserRepository;