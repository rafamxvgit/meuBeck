-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Professor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "foto" TEXT
);
INSERT INTO "new_Professor" ("curso", "departamento", "email", "foto", "id", "nome", "senha") SELECT "curso", "departamento", "email", "foto", "id", "nome", "senha" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");
PRAGMA foreign_key_check("Professor");
PRAGMA foreign_keys=ON;
