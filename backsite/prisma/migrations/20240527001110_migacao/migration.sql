-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idAutor" INTEGER NOT NULL,
    "idAlvo" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    CONSTRAINT "Post_idAutor_fkey" FOREIGN KEY ("idAutor") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Post_idAlvo_fkey" FOREIGN KEY ("idAlvo") REFERENCES "Professor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("conteudo", "data", "id", "idAlvo", "idAutor") SELECT "conteudo", "data", "id", "idAlvo", "idAutor" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check("Post");
PRAGMA foreign_keys=ON;
