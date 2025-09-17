import z from 'zod';
import { p as passwordSchema } from './password.schema.mjs';

const resetPasswordSchema = z.object({
  password: passwordSchema,
  confirmPassword: z.string("Invalid password")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});
const changePasswordSchema = z.object({
  currentPassword: z.string("Invalid password"),
  newPassword: passwordSchema,
  confirmNewPassword: z.string("Invalid password")
}).refine((data) => data.newPassword !== data.currentPassword, {
  message: "New password must not be the same as current password",
  path: ["newPassword"]
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: "Passwords do not match",
  path: ["confirmNewPassword"]
});

export { changePasswordSchema as c, resetPasswordSchema as r };
//# sourceMappingURL=password-reset.schema.mjs.map
