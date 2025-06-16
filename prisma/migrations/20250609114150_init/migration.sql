-- AlterTable
ALTER TABLE `user` ADD COLUMN `nomor` VARCHAR(191) NULL,
    ADD COLUMN `role` ENUM('Admin', 'User') NULL,
    MODIFY `updatedAt` DATETIME(3) NULL;
