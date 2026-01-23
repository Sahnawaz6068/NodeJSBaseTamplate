import CrudRepository from "./crudrepositories.js";

class BookingRepository extends CrudRepository{
     constructor (){
        super("city")
     }
}

export default BookingRepository;