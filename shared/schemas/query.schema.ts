import z from "zod";

export const querySchema = z.object({
  search: z.string("Invalid search value"),
  limit: z.coerce
    .number("Limit query must be a number")
    .positive("Limit query must be a positive number"),
  offset: z.coerce
    .number("Limit query must be a number")
    .nonnegative("Offset query must be a 0 or greater")
});
