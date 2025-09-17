import z from "zod";

export const sessionSchema = z.object({
  name: z.string("Invalid session name").nonempty("Session name is required"),
  startYear: z.number("Start year of session is required.")
});

export const extendedSessionSchema = z.object({
  ...sessionSchema.shape,
  isCurrent: z.boolean("Current status of session must be true or false")
});

export type Session = z.infer<typeof sessionSchema>;
export type ExtendedSession = z.infer<typeof extendedSessionSchema>;
