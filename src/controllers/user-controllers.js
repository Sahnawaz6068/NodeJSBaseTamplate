import { StatusCodes } from "http-status-codes";
import userService from "../services/user-service.js";
import reqResponse from "../utils/common/index.js";

const sucessResponse = reqResponse.SucessResponse;
const errorResponse  = reqResponse.ErrorResponse;

//post : /signup
async function signup(req,res){
    try{
        const user = await userService.createUser({
            userName : req.body.userName,
            email: req.body.email,
            password: req.body.password,
            phoneNumber : req.body.phoneNumber
      })
      sucessResponse.data = user;
      sucessResponse.message = "user signup sucessfully";
      
      return res.status(StatusCodes.OK).json(sucessResponse)
    }catch(error){
        errorResponse.message =  error.message;
        errorResponse.error = error
        
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}

//post:signin
async function signin(req,res){
    try{
        const token = await userService.signin({
            email: req.body.email,
            password: req.body.password,
      })
      sucessResponse.data = token;
      sucessResponse.message = "user signin sucessfully";
      
      return res.status(StatusCodes.OK).json(sucessResponse)
    }catch(error){
        errorResponse.message =  error.message;
        errorResponse.error = error
        
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse)
    }
}

//


export default {
    signup,signin
}