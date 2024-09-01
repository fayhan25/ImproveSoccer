/*
  Warnings:

  - You are about to drop the column `email` on the `Users` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [Users_email_key];

-- AlterTable
ALTER TABLE [dbo].[Users] DROP COLUMN [email];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
