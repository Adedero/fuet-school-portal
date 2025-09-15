import { PrismaBetterSQLite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "./generated/client";

const adapter = new PrismaBetterSQLite3({
  url: "file:../database/prisma.db"
});

export const prisma = new PrismaClient({ adapter });
