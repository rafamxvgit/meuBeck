-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "bio" TEXT NOT NULL DEFAULT '',
    "foto" TEXT
);
INSERT INTO "new_User" ("curso", "departamento", "email", "foto", "id", "nome", "senha") SELECT "curso", "departamento", "email", "foto", "id", "nome", "senha" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check("User");
PRAGMA foreign_keys=ON;
