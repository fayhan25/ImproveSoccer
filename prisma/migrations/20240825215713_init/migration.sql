BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Stats] (
    [id] INT NOT NULL IDENTITY(1,1),
    [shooting] INT NOT NULL,
    [passing] INT NOT NULL,
    [dribbling] INT NOT NULL,
    [speed] INT NOT NULL,
    [weight] INT NOT NULL,
    [height] INT NOT NULL,
    [style] NVARCHAR(1000) NOT NULL,
    [userId] INT NOT NULL,
    CONSTRAINT [Stats_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [email] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000),
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_email_key] UNIQUE NONCLUSTERED ([email])
);

-- AddForeignKey
ALTER TABLE [dbo].[Stats] ADD CONSTRAINT [Stats_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
