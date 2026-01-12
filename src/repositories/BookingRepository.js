import CrudRepository from "./crudrepositories";

class BookingRepository extends CrudRepository{
     constructor (){
        super("city")
     }
}

export default BookingRepository;