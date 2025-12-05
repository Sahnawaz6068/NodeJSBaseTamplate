import { PrismaClient } from "../../generated/prisma/index.js";
import { logger } from "../config/index.js";

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
    const response = prisma[this.model].create({ data });
    return response;
  }

  async read(id) {
    const response = prisma[this.model].findUnique({ where: { id } });
    return response;
  }

  async readAll() {
    const response = prisma[this.model].findMany();
    return response;
  }

  async update(id, data) {
    const response = prisma[this.model].update({
      where: { id },
      data,
    });
    return response;
  }

  async delete(id) {
    const response = prisma[this.model].delete({ where: { id } });
    return response;
  }
}

export default CrudRepository;
