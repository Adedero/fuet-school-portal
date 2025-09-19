import z from 'zod';
import { p as passwordSchema } from './password.schema.mjs';
import { M as MIN_AGE } from './nitro.mjs';

const applicationInitiationSchema = z.object({
  firstName: z.string().trim().nonempty("First name is required."),
  middleName: z.string().trim().optional(),
  otherNames: z.string().trim().optional(),
  lastName: z.string().trim().nonempty("Last name is required."),
  email: z.email("Email is not valid"),
  password: passwordSchema.optional(),
  confirmPassword: z.string().optional(),
  birthDay: z.number("Birth day is required."),
  birthMonth: z.string().nonempty("Birth month is required."),
  birthYear: z.number("Birth year is required").positive("Birth year must be greater than 0").refine((val) => {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return year - val >= MIN_AGE;
  }, `You must be at least ${MIN_AGE} years old to continue.`)
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});

export { applicationInitiationSchema as a };
//# sourceMappingURL=application-initiation.schema.mjs.map
