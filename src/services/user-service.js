import repositories from "../repositories/index.js";
import AppError from "../utils/errors/app-error.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import serverConfig from "../config/server-config.js";


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

async function signin(data) {
    try{
        const user = await UserRepository.getUserByEmail(data.email);
        if(!user){
            throw new AppError("No User Find for given email",StatusCodes.NOT_FOUND)
        }
        const passwordMatch =await bcrypt.compare(data.password,user.password);
        // console.log(passwordMatch);
        if(!passwordMatch){
            throw new AppError("Invalid Credential",StatusCodes.BAD_REQUEST)
        }
        const jwt =await createToken({id:user.id, email:user.email});
        return jwt;
    }catch(error){
        throw error;
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


async function createToken (input){
    try{
        return jwt.sign(input,serverConfig.JWT_SECRET,{expiresIn:serverConfig.JWT_EXPIRY})
    }catch(error){

    }
}

export default {
    getUser,
    createUser,
    signin
}