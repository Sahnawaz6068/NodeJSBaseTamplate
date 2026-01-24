import repositories from "../repositories/index.js";
import AppError from "../utils/errors/app-error.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from 'bcrypt'


const UserRepository = new repositories.UserRepository();

async function createUser(data) {
    const hashPassword = await bcrypt.hash(data.password,10);
    try{
        const response =await UserRepository.create({...data,password:hashPassword});
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