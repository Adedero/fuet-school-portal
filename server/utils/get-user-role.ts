import { db } from "../database/connection";

export default async function getUserRole(id: string): Promise<string | null> {
  const user = await db.query.user.findFirst({
    where: (u, { eq }) => eq(u.id, id),
    columns: {
      id: true,
      role: true
    }
  });

  return user?.role ?? null;
}
