/*
  Warnings:

  - A unique constraint covering the columns `[userId,week]` on the table `Week` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Week_userId_week_key" ON "Week"("userId", "week");
