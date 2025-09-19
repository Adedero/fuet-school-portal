import z from 'zod';

const sessionSchema = z.object({
  name: z.string("Invalid session name").nonempty("Session name is required"),
  startYear: z.number("Start year of session is required.")
});
const extendedSessionSchema = z.object({
  ...sessionSchema.shape,
  isCurrent: z.boolean("Current status of session must be true or false")
});

export { extendedSessionSchema as e, sessionSchema as s };
//# sourceMappingURL=session.schema.mjs.map
