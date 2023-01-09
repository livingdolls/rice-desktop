/*
  Warnings:

  - You are about to drop the column `etag` on the `Image` table. All the data in the column will be lost.
  - Added the required column `detail` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `original_extension` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Album` ADD COLUMN `detail` TEXT NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Image` DROP COLUMN `etag`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL,
    ADD COLUMN `original_extension` VARCHAR(191) NOT NULL;
