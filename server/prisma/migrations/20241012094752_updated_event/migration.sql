/*
  Warnings:

  - You are about to drop the column `weekId` on the `Event` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[week,userId]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `week` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_userId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_weekId_fkey";

-- DropIndex
DROP INDEX "Event_weekId_key";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "weekId",
ADD COLUMN     "week" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Event_week_userId_key" ON "Event"("week", "userId");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_week_userId_fkey" FOREIGN KEY ("week", "userId") REFERENCES "Week"("week", "userId") ON DELETE RESTRICT ON UPDATE CASCADE;
