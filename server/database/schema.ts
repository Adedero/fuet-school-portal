import {
  sqliteTable,
  text,
  integer,
  uniqueIndex
} from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";
import { ulid } from "ulid";

/**
 * BETTER-AUTH AUTHENTICATION TABLES
 */

// User Table
export const user = sqliteTable("user", {
  id: text("id").primaryKey(), // PK
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("emailVerified", { mode: "boolean" })
    .notNull()
    .default(false),
  image: text("image"),
  role: text("role", { enum: ["admin", "student", "staff", "applicant"] })
    .notNull()
    .default("applicant"),
  createdAt: integer("createdAt", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s','now') * 1000)`),
  updatedAt: integer("updatedAt", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s','now') * 1000)`)
});

// Session Table
export const session = sqliteTable("session", {
  id: text("id").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => user.id),
  token: text("token").notNull(),
  expiresAt: integer("expiresAt", { mode: "timestamp" }).notNull(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  createdAt: integer("createdAt", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s','now') * 1000)`),
  updatedAt: integer("updatedAt", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s','now') * 1000)`)
});

// Account Table
export const account = sqliteTable("account", {
  id: text("id").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => user.id),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  accessTokenExpiresAt: integer("accessTokenExpiresAt", { mode: "timestamp" }),
  refreshTokenExpiresAt: integer("refreshTokenExpiresAt", {
    mode: "timestamp"
  }),
  scope: text("scope"),
  idToken: text("idToken"),
  password: text("password"),
  createdAt: integer("createdAt", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s','now') * 1000)`),
  updatedAt: integer("updatedAt", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s','now') * 1000)`)
});

// Verification Table
export const verification = sqliteTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expiresAt", { mode: "timestamp" }).notNull(),
  createdAt: integer("createdAt", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s','now') * 1000)`),
  updatedAt: integer("updatedAt", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s','now') * 1000)`)
});

/**
 * APPLICATION TABLES
 */
export const schoolSession = sqliteTable("school_session", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => ulid()),
  name: text("name").notNull().unique(),
  startYear: integer("startYear").notNull(),
  currentYear: integer("currentYear").notNull(),
  isCurrent: integer("isCurrent", { mode: "boolean" }).notNull().default(false),
  createdAt: integer("createdAt", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s','now') * 1000)`),
  updatedAt: integer("updatedAt", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s','now') * 1000)`)
});

export const application = sqliteTable(
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

    status: text("status", { enum: ["open", "closed"] })
      .notNull()
      .default("open"),

    // Status
    isComplete: integer("isComplete", { mode: "boolean" })
      .notNull()
      .default(false),
    isSubmitted: integer("isSubmitted", { mode: "boolean" }),

    firstName: text("firstName").notNull(),
    middleName: text("middleName"),
    otherNames: text("otherNames"),
    lastName: text("lastName").notNull(),

    phoneNumber: text("phoneNumber"),

    birthDay: integer("birthDay").notNull(),
    birthMonth: text("birthMonth").notNull(),
    birthYear: integer("birthYear").notNull(),
    gender: text("gender", { enum: ["male", "female"] }),

    // Identification
    stateOfOrigin: text("stateOfOrigin"),
    lga: text("lga"),
    nationality: text("nationality"),
    nin: text("nin").unique(),
    /* address: text("address"), */

    // Family Info
    firstParentName: text("firstParentName"),
    firstParentAddress: text("firstParentAddress"),
    firstParentStatus: text("firstParentStatus", {
      enum: ["living", "deceased"]
    }),

    secondParentName: text("secondParentName"),
    secondParentAddress: text("secondParentAddress"),
    secondParentStatus: text("secondParentStatus", {
      enum: ["living", "deceased"]
    }),

    nextOfKinName: text("nextOfKinName"),
    nextOfKinAddress: text("nextOfKinAddress"),
    nextOfKinRelationship: text("nextOfKinRelationship"),
    nextOfKinPhoneNumber: text("nextOfKinPhoneNumber"),

    // Academic Info
    course: text("course"),
    degreeType: text("degreeType"),
    jambRegNumber: text("jambRegNumber"),
    secondarySchoolName: text("jambRegNumber"),
    secondarySchoolGraduationMonth: text("secondarySchoolGraduationMonth"),
    secondarySchoolGraduationYear: text("secondarySchoolGraduationYear"),

    // Documents
    passportUrl: text("passportUrl"),
    birthCertificateUrl: text("birthCirtificateUrl"),
    stateOfOriginUrl: text("stateOfOriginUrl"),
    oLevelResultUrl: text("oLevelResultUrl"),
    postUTMESlipUrl: text("postUTMESlipUrl"),
    admissionFormPaymentReceiptUrl: text("admissionFormPaymentReceiptUrl"),

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
);

export const applicationRelations = relations(application, ({ one }) => ({
  schoolSession: one(schoolSession, {
    fields: [application.schoolSessionId],
    references: [schoolSession.id]
  }),
  user: one(user, {
    fields: [application.userId],
    references: [user.id]
  })
}));

export const settings = sqliteTable("settings", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => ulid()),

  applicationsOpen: integer("applicationsOpen", { mode: "boolean" }),
  applicationsOpenAt: integer("applicationsOpenAt", { mode: "timestamp" }),
  applicationsClosedAt: integer("applicationsClosedAt", { mode: "timestamp" }),

  courseRegistrationsOpen: integer("courseRegistrationsOpen", {
    mode: "boolean"
  }),
  courseRegistrationsOpenAt: integer("courseRegistrationsOpenAt", {
    mode: "timestamp"
  }),
  courseRegistrationsClosedAt: integer("courseRegistrationsClosedAt", {
    mode: "timestamp"
  }),

  createdAt: integer("createdAt", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s','now') * 1000)`),
  updatedAt: integer("updatedAt", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s','now') * 1000)`)
});
