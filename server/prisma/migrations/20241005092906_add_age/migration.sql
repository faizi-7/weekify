/*
  Warnings:

  - You are about to drop the column `endDate` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "endDate",
ADD COLUMN     "expectedAge" INTEGER;
