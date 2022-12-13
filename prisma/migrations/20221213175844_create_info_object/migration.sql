-- CreateTable
CREATE TABLE "Info" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "text" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Info_title_key" ON "Info"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Info_color_key" ON "Info"("color");
