
import AirplaneService from "../repositories/index.js";


const airplaneRepository = new AirplaneService.AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    throw error;
  }
}

export default { createAirplane };
