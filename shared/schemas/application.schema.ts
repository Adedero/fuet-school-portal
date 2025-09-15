import z from "zod";

export const applicationPersonalSchema = z.object({
  firstName: z
    .string("Invalid first name")
    .nonempty("First name cannot be empty")
    .trim(),
  middleName: z.string("Invalid middlename").trim().optional(),
  otherNames: z.string("Invalid names").trim().optional(),
  lastName: z
    .string("Invalid last name")
    .nonempty("Last name cannot be empty")
    .trim(),

  phoneNumber: z
    .string("Invalid phone number")
    .nonempty("Phone number cannot be empty")
    .trim(),
  birthDay: z.number("Invalid day of birth"),
  birthMonth: z.string("Invalid month of birth").trim(),
  birthYear: z.number("Invalid year of birth"),
  gender: z.enum(["male", "female"], "Gender must be male or female"),

  nationality: z.string("Invalid nationality").trim(),
  stateOfOrigin: z
    .string("Invalid state of origin")
    .trim()
    .nonempty("State of origin cannot be empty"),
  lga: z
    .string("Invalid local government area or town")
    .trim()
    .nonempty("Local government area or town cannot be empty"),
  nin: z
    .string("Invalid ID nunmmber")
    .trim()
    .nonempty("ID number cannot be empty")
});

export const applicationFamilySchema = z.object({
  firstParentName: z.string().nonempty(),
  firstParentAddress: z.string().nonempty(),
  firstParentStatus: z.enum(["living", "deceased"]),

  secondParentName: z.string().nonempty(),
  secondParentAddress: z.string().nonempty(),
  secondParentStatus: z.enum(["living", "deceased"]),

  nextOfKinName: z.string().nonempty(),
  nextOfKinAddress: z.string().nonempty(),
  nextOfKinRelationship: z.string().nonempty(),
  nextOfKinPhoneNumber: z.string().nonempty()
});

export type ApplicatiobPersonalSchema = z.infer<
  typeof applicationPersonalSchema
>;

export const applicationSchema = applicationPersonalSchema;

/* export const application = sqliteTable(
  "application",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => ulid()),

    userId: text("userId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),

    applicationNumber: text("applicationNumber").notNull().unique(),

    schoolSessionId: text("schoolSessionId").references(
      () => schoolSession.id,
      { onDelete: "set null" }
    ),

    course: text("course"),
    degreeType: text("degreeType"),

    status: text("status", { enum: ["open", "closed"] })
      .notNull()
      .default("open"),

    isComplete: integer("isComplete", { mode: "boolean" })
      .notNull()
      .default(false),

    firstName: text("firstName").notNull(),
    middleName: text("middleName"),
    otherNames: text("otherNames"),
    lastName: text("lastName").notNull(),

    phoneNumber: text("phoneNumber"),

    birthDay: integer("birthDay").notNull(),
    birthMonth: text("birthMonth").notNull(),
    birthYear: integer("birthYear").notNull(),
    gender: text("gender", { enum: ["male", "female"] }),

    stateOfOrigin: text("stateOfOrigin"),
    lga: text("lga"),
    nationality: text("nationality"),

    nin: text("nin").unique(),

    passportUrl: text("passportUrl"),
    birthCertificateUrl: text("birthCirtificateUrl"),
    stateOfOriginUrl: text("stateOfOriginUrl"),
    oLevelResultUrl: text("oLevelResultUrl"),

    createdAt: integer("createdAt", { mode: "timestamp" })
      .notNull()
      .default(sql`(strftime('%s','now') * 1000)`),
    updatedAt: integer("updatedAt", { mode: "timestamp" })
      .notNull()
      .default(sql`(strftime('%s','now') * 1000)`)
  },
  (table) => [
    // Ensure each user can only have one application per session
    uniqueIndex("application_user_session_unique").on(
      table.userId,
      table.schoolSessionId
    )
  ]
); */
