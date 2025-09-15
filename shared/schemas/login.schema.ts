import z from "zod";
import { passwordSchema } from "./password.schema";

export const loginSchema = z.object({
  email: z.email("Email is not valid"),
  password: passwordSchema,
  rememberMe: z.boolean().optional()
});

export type LoginSchema = z.infer<typeof loginSchema>;
