import { sql } from "drizzle-orm";
import { integer, text } from "drizzle-orm/sqlite-core";
import { ulid } from "ulid";

export const id = {
  id: text()
    .primaryKey()
    .$defaultFn(() => ulid())
};

export const timestamps = {
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s','now'))`),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s','now'))`)
};
