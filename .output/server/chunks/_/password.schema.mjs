import { z } from 'zod';
import { Z as MIN_PASSWORD_LENGTH } from './nitro.mjs';

const passwordSchema = z.string().min(MIN_PASSWORD_LENGTH, {
  message: `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`
}).refine((val) => /[a-z]/.test(val), {
  message: "Password must contain at least one lowercase letter"
}).refine((val) => /[A-Z]/.test(val), {
  message: "Password must contain at least one uppercase letter"
}).refine((val) => /\d/.test(val), {
  message: "Password must contain at least one number"
}).refine((val) => /[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]/.test(val), {
  message: "Password must contain at least one special character"
});

export { passwordSchema as p };
//# sourceMappingURL=password.schema.mjs.map
