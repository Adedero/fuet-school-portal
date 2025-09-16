import z from "zod";

export const serverFileSchema = z.object({
  name: z.string("Invalid file name"),
  type: z.string("Invalid file type"),
  size: z
    .number("Invalid file size")
    .nonnegative("File size cannot be negative"),
  ext: z.string("Invalid file extension").nullable(),
  data: z.string("Invalid file data").nonempty("File data cannot be empty")
});

export type ServerFile = z.infer<typeof serverFileSchema>;
