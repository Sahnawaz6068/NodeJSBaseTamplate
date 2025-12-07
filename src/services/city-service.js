import { StatusCodes } from "http-status-codes";
import repositories from "../repositories/index.js";
import AppError from "../utils/errors/app-error.js";

const cityRepository = new repositories.CityReposiory();

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    throw error;
  }
}

export default {
  createCity,
};
