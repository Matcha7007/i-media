-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "password" VARCHAR(250) NOT NULL,
    "created_on" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "modified_on" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER,
    "modified_by" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_detail" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "user_id" INTEGER NOT NULL,
    "city" VARCHAR(50),
    "bio" TEXT,
    "birth_date" TIMESTAMPTZ,
    "cover_pict" VARCHAR(250),
    "profile_pict" VARCHAR(250),
    "created_on" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "modified_on" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER,
    "modified_by" INTEGER,

    CONSTRAINT "user_detail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_app" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "user_id" INTEGER NOT NULL,
    "apps_id" INTEGER NOT NULL,
    "desc" VARCHAR(150) NOT NULL,
    "created_on" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "modified_on" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER,
    "modified_by" INTEGER,

    CONSTRAINT "user_app_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "apps" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "desc" VARCHAR(250),
    "created_on" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "modified_on" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER,
    "modified_by" INTEGER,

    CONSTRAINT "apps_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_uuid_key" ON "user"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_detail_uuid_key" ON "user_detail"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "user_app_uuid_key" ON "user_app"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "apps_uuid_key" ON "apps"("uuid");

-- AddForeignKey
ALTER TABLE "user_detail" ADD CONSTRAINT "user_detail_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_app" ADD CONSTRAINT "user_app_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_app" ADD CONSTRAINT "user_app_apps_id_fkey" FOREIGN KEY ("apps_id") REFERENCES "apps"("id") ON DELETE CASCADE ON UPDATE CASCADE;
