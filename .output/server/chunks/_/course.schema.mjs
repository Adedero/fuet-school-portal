import z from 'zod';

const courseEditSchema = z.object({
  code: z.string("Course code is required").nonempty("Course code is required"),
  title: z.string("Course title is required").nonempty("Course title is required"),
  level: z.number("Course level is required").gte(100, "Invalid course level"),
  semester: z.enum(
    ["harmattan", "rain"],
    "Semester must be either harmattan or rain"
  ),
  department: z.object({
    label: z.string("Department name is required").nonempty("Department name is required"),
    value: z.string(),
    faculty: z.string()
  }, "Department is required"),
  description: z.string("Invalid course description").nonempty("Course description must not be empty").optional().nullable()
});

export { courseEditSchema as c };
//# sourceMappingURL=course.schema.mjs.map
