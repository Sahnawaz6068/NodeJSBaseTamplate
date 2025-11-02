import { PrismaClient } from "../../generated/prisma/index.js";
import { logger } from "../config/index.js";

const prisma = new PrismaClient();

class CrudRepository {
  constructor(model) {
    this.model = model; 
  }

  async create(data) {
    try {
      return await prisma[this.model].create({ data });
    } catch (error) {
    //   logger.error("Something went wrong in Crud Repo: Create");
      throw error;
    }
  }

  async read(id) {
    try {
      return await prisma[this.model].findUnique({ where: { id } });
    } catch (error) {
      logger.error("Something went wrong in Crud Repo: Read");
      throw error;
    }
  }

  async readAll() {
    try {
      return await prisma[this.model].findMany();
    } catch (error) {
      logger.error("Something went wrong in Crud Repo: ReadAll");
      throw error;
    }
  }

  async update(id, data) {
    try {
      return await prisma[this.model].update({
        where: { id },
        data,
      });
    } catch (error) {
      logger.error("Something went wrong in Crud Repo: Update");
      throw error;
    }
  }

  async delete(id) {
    try {
      return await prisma[this.model].delete({ where: { id } });
    } catch (error) {
      logger.error("Something went wrong in Crud Repo: Destroy");
      throw error;
    }
  }
}

export default CrudRepository;
