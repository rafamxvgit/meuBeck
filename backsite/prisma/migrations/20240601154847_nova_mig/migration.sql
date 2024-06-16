-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comentario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idAutor" INTEGER NOT NULL,
    "idAlvo" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    CONSTRAINT "Comentario_idAutor_fkey" FOREIGN KEY ("idAutor") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Comentario_idAlvo_fkey" FOREIGN KEY ("idAlvo") REFERENCES "Post" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Comentario" ("conteudo", "data", "id", "idAlvo", "idAutor") SELECT "conteudo", "data", "id", "idAlvo", "idAutor" FROM "Comentario";
DROP TABLE "Comentario";
ALTER TABLE "new_Comentario" RENAME TO "Comentario";
PRAGMA foreign_key_check("Comentario");
PRAGMA foreign_keys=ON;
