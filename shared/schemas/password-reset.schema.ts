import z from "zod";
import { passwordSchema } from "./password.schema";

export const resetPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string("Invalid password")
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  });
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

export const changePasswordSchema = z
  .object({
    currentPassword: z.string("Invalid password"),
    newPassword: passwordSchema,
    confirmNewPassword: z.string("Invalid password")
  })
  .refine((data) => data.newPassword !== data.currentPassword, {
    message: "New password must not be the same as current password",
    path: ["newPassword"]
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"]
  });
export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;
