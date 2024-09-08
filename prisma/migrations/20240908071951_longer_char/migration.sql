/*
  Warnings:

  - You are about to alter the column `messages` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `VarChar(1000)`.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Post] ALTER COLUMN [messages] VARCHAR(1000) NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
