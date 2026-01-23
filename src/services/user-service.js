import repositories from "../repositories/index.js";
import AppError from "../utils/errors/app-error.js";
import { StatusCodes } from "http-status-codes";


const UserRepository = new repositories.UserRepository();

async function createUser(data) {
    try{
        const response =await UserRepository.create(data);
        return response;
    }catch(err){
        throw new AppError(err.message,StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getUser(id) {
    const userId = parseInt(id);
    try{
        const response = await UserRepository.read(id);
        return response;
    }catch(error){
        throw new AppError(error.message,StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

export default {
    getUser,
    createUser
}