import { StatusCodes } from "http-status-codes";
import { PrismaClient } from "../../generated/prisma/index.js";
import AppError from "../utils/errors/app-error.js";

const prisma = new PrismaClient();

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  // async create(data) {
  //   try {
  //     return await prisma[this.model].create({ data });
  //   } catch (error) {
  //     logger.error("Something went wrong in Crud Repo: Create");
  //     throw error;
  //   }
  // }  //Because in servise we alredy handling the error handling try catch(err)

  async create(data) {
    const response = await prisma[this.model].create({ data });
    return response;
  }

  async read(id) {
    const response = await prisma[this.model].findUnique({ where: { id } });
    if (!response) {
      throw new AppError(
        "Not able to find the resources",
        StatusCodes.NOT_FOUND
      );
    }
    return response;
  }

  async readAll() {
    const response = await prisma[this.model].findMany();
    return response;
  }

  async update(id, data) {
    const response = await prisma[this.model].update({
      where: { id },
      data,
    });
    return response;
  }

  async delete(id) {
    try {
        const response = await prisma[this.model].delete({ where: { id } });
        return response;
    } catch(error) {
        // P2025 is the code for "Record to delete does not exist"
        if(error.code === 'P2025') {
            throw new AppError("Not able to find the resources", StatusCodes.NOT_FOUND);
        }
        throw error;
    }
  }
}

export default CrudRepository;
