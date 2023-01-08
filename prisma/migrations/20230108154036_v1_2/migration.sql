/*
  Warnings:

  - You are about to drop the column `asset_id` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `bytes` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `etag` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `folder` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `format` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `original_filename` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `public_id` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `resource_type` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `secure_url` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `signature` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `version` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `version_id` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `width` on the `Album` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Album` DROP COLUMN `asset_id`,
    DROP COLUMN `bytes`,
    DROP COLUMN `etag`,
    DROP COLUMN `folder`,
    DROP COLUMN `format`,
    DROP COLUMN `height`,
    DROP COLUMN `original_filename`,
    DROP COLUMN `public_id`,
    DROP COLUMN `resource_type`,
    DROP COLUMN `secure_url`,
    DROP COLUMN `signature`,
    DROP COLUMN `url`,
    DROP COLUMN `version`,
    DROP COLUMN `version_id`,
    DROP COLUMN `width`;

-- CreateTable
CREATE TABLE `Image` (
    `id` VARCHAR(191) NOT NULL,
    `albumId` VARCHAR(191) NOT NULL,
    `asset_id` VARCHAR(191) NOT NULL,
    `public_id` VARCHAR(191) NOT NULL,
    `version` INTEGER NOT NULL,
    `version_id` VARCHAR(191) NOT NULL,
    `signature` VARCHAR(191) NOT NULL,
    `width` INTEGER NOT NULL,
    `height` INTEGER NOT NULL,
    `format` VARCHAR(191) NOT NULL,
    `resource_type` VARCHAR(191) NULL,
    `bytes` INTEGER NOT NULL,
    `etag` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `secure_url` VARCHAR(191) NOT NULL,
    `folder` VARCHAR(191) NOT NULL,
    `original_filename` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_albumId_fkey` FOREIGN KEY (`albumId`) REFERENCES `Album`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
