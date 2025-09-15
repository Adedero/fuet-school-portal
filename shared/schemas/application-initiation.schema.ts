import z from "zod";
import { passwordSchema } from "./password.schema";
import { MIN_AGE } from "../utils/constants";

export const applicationInitiationSchema = z
  .object({
    firstName: z.string().trim().nonempty("First name is required."),
    middleName: z.string().trim().optional(),
    otherNames: z.string().trim().optional(),
    lastName: z.string().trim().nonempty("Last name is required."),
    email: z.email("Email is not valid"),
    password: passwordSchema,
    confirmPassword: z.string(),
    birthDay: z.number("Birth day is required."),
    birthMonth: z.string().nonempty("Birth month is required."),
    birthYear: z
      .number("Birth year is required")
      .positive("Birth year must be greater than 0")
      .refine((val) => {
        const year = new Date().getFullYear();
        return year - val >= MIN_AGE;
      }, `You must be at least ${MIN_AGE} years old to continue.`)
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  });

export type ApplicationInitiationSchema = z.infer<
  typeof applicationInitiationSchema
>;
