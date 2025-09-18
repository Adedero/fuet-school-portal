import z from "zod";

export const studentCreationSchema = z.object({
  applicationId: z
    .string("Invalid application ID")
    .nonempty("Application ID is required"),
  regNumber: z
    .string("Invalid registration number")
    .nonempty("Registration number is required"),
  studentClass: z
    .string("Invalid student class")
    .nonempty("Student class is required"),
  department: z.string("Invalid department").nonempty("Department is required")
});

export type StudentCreationSchema = z.infer<typeof studentCreationSchema>;
