-- CreateTable
CREATE TABLE "Comentario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idAutor" INTEGER NOT NULL,
    "idAlvo" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    CONSTRAINT "Comentario_idAutor_fkey" FOREIGN KEY ("idAutor") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Comentario_idAlvo_fkey" FOREIGN KEY ("idAlvo") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
