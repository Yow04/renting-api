-- AlterTable
ALTER TABLE `detaillapangan` MODIFY `updatedAt` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `booking` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `lapanganId` VARCHAR(191) NOT NULL,
    `tanggalBooking` DATE NULL,
    `totalharga` INTEGER NULL,
    `status` ENUM('PENDING', 'CONFIRMED', 'CANCELED', 'COMPLETED') NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `tersedia` BOOLEAN NOT NULL DEFAULT true,
    `isLookingForPartner` BOOLEAN NOT NULL DEFAULT false,
    `slotWaktuId` VARCHAR(191) NOT NULL,

    INDEX `booking_lapanganId_fkey`(`lapanganId`),
    INDEX `booking_slotWaktuId_fkey`(`slotWaktuId`),
    INDEX `booking_userId_fkey`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `slotwaktu` (
    `id` VARCHAR(191) NOT NULL,
    `jamMulai` TIME(3) NULL,
    `jamSelesai` TIME(3) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `booking` ADD CONSTRAINT `booking_lapanganId_fkey` FOREIGN KEY (`lapanganId`) REFERENCES `detailLapangan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `booking` ADD CONSTRAINT `booking_slotWaktuId_fkey` FOREIGN KEY (`slotWaktuId`) REFERENCES `slotwaktu`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `booking` ADD CONSTRAINT `booking_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
