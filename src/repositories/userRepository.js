import CrudRepository from "./crudrepositories.js";
import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();


class UserRepository extends CrudRepository{
     constructor (){
        super("user")
     }
 
     async getUserByEmail(email){
      const user = await prisma.user.findUnique({
         where:{
            email:email
         }
      });
      return user;
     }
}

export default UserRepository;