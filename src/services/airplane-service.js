
import { StatusCodes } from "http-status-codes";
import AirplaneRepo from "../repositories/index.js";


const airplaneRepository = new AirplaneRepo.AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    throw error;
  }
}

async function getAllAirplanes (){
  try{
    const airplanes = await airplaneRepository.readAll();
    return airplanes;
  }catch(error){
    throw new Error("can not fetch data of all the airplanes",StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function getAirplane(id){
  const airplaneId = parseInt(id);
  try{
    const airplane = await airplaneRepository.read(airplaneId);
    return airplane;
  }catch(error){
    throw new Error("Some problem during fetching Airplane using Id",StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

export default { createAirplane, getAllAirplanes, getAirplane };
