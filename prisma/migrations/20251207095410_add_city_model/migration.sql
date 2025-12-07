/*
  Warnings:

  - Made the column `updatedAt` on table `Airplane` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Airplane" ALTER COLUMN "updatedAt" SET NOT NULL,
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "phoneNumber" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "City_name_key" ON "City"("name");
