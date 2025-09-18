import { createClient } from "@libsql/client";
import fs from "fs";
import path from "path";

async function seed() {
  const client = createClient({
    url: "file:./database/dev.db"
  });
  // Read SQL file
  const sql = fs.readFileSync(path.resolve("database/seed.sql"), "utf8");

  // Run it (split on `;` if multiple statements)
  for (const stmt of sql.split(";")) {
    if (stmt.trim()) {
      console.log(stmt)
      await client.execute(stmt);
    }
  }

  console.log("✅ Seeding completed!");
}

seed().catch((err) => {
  console.error("❌ Seeding failed:", err);
});
