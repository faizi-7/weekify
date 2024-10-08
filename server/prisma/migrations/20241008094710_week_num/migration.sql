/*
  Warnings:

  - Added the required column `userId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `week` to the `Week` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Week" ADD COLUMN     "week" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
