import {
  sqliteTable,
  text,
  integer,
  uniqueIndex,
  real
} from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";
import { id, timestamps } from "./mixins";

/**
 * BETTER-AUTH AUTHENTICATION TABLES
 */

// User Table
export const user = sqliteTable("user", {
  id: text("id").primaryKey(), // PK
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" })
    .notNull()
    .default(false),
  image: text("image"),
  role: text("role", { enum: ["admin", "student", "staff", "applicant"] })
    .notNull()
    .default("applicant"),
  ...timestamps
});

// Session Table
export const session = sqliteTable("session", {
  id: text("id").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => user.id),
  token: text("token").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  ...timestamps
});

// Account Table
export const account = sqliteTable("account", {
  id: text("id").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => user.id),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  accessTokenExpiresAt: integer("access_token_expires_at", {
    mode: "timestamp"
  }),
  refreshTokenExpiresAt: integer("refresh_token_expires_at", {
    mode: "timestamp"
  }),
  scope: text("scope"),
  idToken: text("id_token"),
  password: text("password"),
  ...timestamps
});

// Verification Table
export const verification = sqliteTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  ...timestamps
});

/**
 * APPLICATION TABLES
 */
export const schoolSession = sqliteTable(
  "school_session",
  {
    ...id,
    name: text("name")
      .$defaultFn(() => sql`start_year || '\' || end_year`)
      .notNull(),
    startYear: integer("start_year").notNull(),
    endYear: integer("end_year").$defaultFn(() => sql`start_year + 1`),
    currentYear: integer("current_year").notNull(),
    isCurrent: integer("is_current", { mode: "boolean" })
      .notNull()
      .default(false),

    ...timestamps
  },
  (table) => [
    uniqueIndex("school_session_start_year_unique").on(table.startYear)
  ]
);

export const studentClass = sqliteTable("student_class", {
  ...id,
  className: text("class_name").notNull().unique(),
  enrolmentYear: integer("enrolment_year").notNull(),
  currentLevel: integer("current_level").notNull(),
  isActive: integer("is_active", { mode: "boolean" }),
  ...timestamps
});

export const course = sqliteTable("course", {
  ...id,
  semester: text({ enum: ["harmattan", "rain"] }).notNull(),
  code: text().notNull().unique(),
  level: integer().notNull(),
  title: text().notNull(),
  description: text(),
  departmentId: text("department_id")
    .notNull()
    .references(() => department.id),
  facultyId: text("faculty_id")
    .notNull()
    .references(() => faculty.id),
  ...timestamps
});

export const courseRelations = relations(course, ({ one, many }) => ({
  department: one(department, {
    fields: [course.departmentId],
    references: [department.id]
  }),
  faculty: one(faculty, {
    fields: [course.facultyId],
    references: [faculty.id]
  }),
  courseAllocations: many(courseAllocation)
}));

export const faculty = sqliteTable("faculty", {
  ...id,
  name: text().notNull().unique(),
  code: text().notNull().unique(),
  ...timestamps
});

export const facultyRelations = relations(faculty, ({ many }) => ({
  departments: many(department)
}));

export const department = sqliteTable("department", {
  ...id,
  name: text().notNull().unique(),
  code: text().notNull().unique(),
  facultyId: text("faculty_id")
    .notNull()
    .references(() => faculty.id),
  ...timestamps
});

export const departmentRelations = relations(department, ({ one }) => ({
  faculty: one(faculty, {
    fields: [department.facultyId],
    references: [faculty.id]
  })
}));

export const semester = sqliteTable("semester", {
  ...id,
  name: text({ enum: ["harmattan", "rain"] })
    .notNull()
    .unique(),
  isCurrent: integer("is_current", { mode: "boolean" }).notNull().unique()
});

export const level = sqliteTable("level", {
  ...id,
  name: integer().notNull().unique(),
  minCreditUnitsHarmattan: integer("min_credit_units_harmattan").notNull(),
  maxCreditUnitsHarmattan: integer("max_credit_units_harmattan").notNull(),
  minCreditUnitsRain: integer("min_credit_units_rain").notNull(),
  maxCreditUnitsRain: integer("max_credit_units_rain").notNull()
});

export const admissionFeePayment = sqliteTable("admission_fee_payment", {
  ...id,
  applicationId: text("application_id").notNull().notNull(),
  schoolSessionName: text("string").notNull(),
  amount: real().notNull(),
  transactionRef: text("transaction_ref").notNull(),
  paymentRef: text("payment_ref").notNull(),
  status: text({
    enum: ["successful", "pending", "cancelled", "failed"]
  }).notNull(),
  ...timestamps
});

export const admissionFeePaymentComplaint = sqliteTable(
  "admission_fee_payment_complaint",
  {
    ...id,
    userId: text("user_id")
      .notNull()
      .references(() => user.id),
    applicationId: text("application_id")
      .notNull()
      .references(() => user.id),
    admissionFeePaymentId: text("admission_fee_payment_id")
      .notNull()
      .references(() => admissionFeePayment.id),
    description: text().notNull(),
    supportDocumentUrl: text("support_document_url"),
    ...timestamps
  }
);

export const admissionFeePaymentComplaintRelations = relations(
  admissionFeePaymentComplaint,
  ({ one }) => ({
    paymentRecord: one(admissionFeePayment, {
      fields: [admissionFeePaymentComplaint.admissionFeePaymentId],
      references: [admissionFeePayment.id]
    })
  })
);

export const application = sqliteTable(
  "application",
  {
    ...id,

    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),

    applicationNumber: text("application_number").notNull().unique(),

    schoolSessionName: text("school_session_name").notNull(),

    schoolSessionId: text("school_session_id").references(
      () => schoolSession.id,
      { onDelete: "set null" }
    ),

    status: text({
      enum: ["pending", "submitted", "accepted", "rejected"]
    })
      .notNull()
      .default("pending"),

    approvedAt: integer("approved_at", { mode: "timestamp" }),

    admissionFeePaymentId: text("admission_fee_payment_id").references(
      () => admissionFeePayment.id,
      { onDelete: "set null" }
    ),
    hasPaidAdmissionFee: integer("has_paid_admission_fee", {
      mode: "boolean"
    }).default(false),

    firstName: text("first_name").notNull(),
    middleName: text("middle_name"),
    otherNames: text("other_names"),
    lastName: text("last_name").notNull(),

    phoneNumber: text("phone_number"),

    birthDay: integer("birth_day").notNull(),
    birthMonth: text("birth_month").notNull(),
    birthYear: integer("birth_year").notNull(),
    gender: text({ enum: ["male", "female"] }),

    // Identification
    stateOfOrigin: text("state_of_origin"),
    lga: text(),
    nationality: text(),
    nin: text().unique(),
    /* address: text("address"), */

    // Family Info
    firstParentName: text("first_parent_name"),
    firstParentAddress: text("first_parent_address"),
    firstParentStatus: text("first_parent_status", {
      enum: ["living", "deceased"]
    }),

    secondParentName: text("second_parent_name"),
    secondParentAddress: text("second_parent_address"),
    secondParentStatus: text("second_parent_status", {
      enum: ["living", "deceased"]
    }),

    nextOfKinName: text("next_of_kin_name"),
    nextOfKinAddress: text("next_of_kin_address"),
    nextOfKinRelationship: text("next_of_kin_relationship"),
    nextOfKinPhoneNumber: text("next_of_kin_phone_number"),

    // Academic Info
    course: text(),
    degreeType: text("degree_type"),
    jambRegNumber: text("jamb_reg_number"),
    secondarySchoolName: text("secondary_school_name"),
    secondarySchoolAddress: text("secondary_school_address"),
    secondarySchoolGraduationMonth: text("secondary_school_graduation_month"),
    secondarySchoolGraduationYear: integer("secondary_school_graduation_year"),

    // Documents
    passportUrl: text("passport_url"),
    birthCertificateUrl: text("birth_certificate_url"),
    stateOfOriginUrl: text("state_of_origin_url"),
    oLevelResultUrl: text("o_level_result_url"),
    postUTMESlipUrl: text("post_utme_slip_url"),
    admissionFormPaymentReceiptUrl: text("admission_form_payment_receipt_url"),

    ...timestamps
  },
  (table) => [
    // Ensure each user can only have one application per session
    uniqueIndex("application_user_session_unique").on(
      table.userId,
      table.schoolSessionName
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
  }),
  admissionFeePayment: one(admissionFeePayment, {
    fields: [application.admissionFeePaymentId],
    references: [admissionFeePayment.id]
  }),
  student: one(student)
}));

export const settings = sqliteTable("settings", {
  ...id,

  applicationsOpen: integer("applications_open", { mode: "boolean" }),
  applicationsOpenAt: integer("applications_open_at", { mode: "timestamp" }),
  applicationsClosedAt: integer("applications_closed_at", {
    mode: "timestamp"
  }),

  courseRegistrationsOpen: integer("course_registrations_open", {
    mode: "boolean"
  }),
  courseRegistrationsOpenAt: integer("course_registrations_open_at", {
    mode: "timestamp"
  }),
  courseRegistrationsClosedAt: integer("course_registrations_closed_at", {
    mode: "timestamp"
  }),

  admissionFee: real("admission_fee").default(0),
  admissionFeePaymentDeadline: integer("admission_fee_payment_deadline", {
    mode: "timestamp"
  }),

  ...timestamps
});

export const student = sqliteTable("student", {
  ...id,
  userId: text("user_id")
    .notNull()
    .references(() => user.id)
    .unique(),
  regNumber: text("reg_number").notNull().unique(),
  applicationId: text("application_id")
    .notNull()
    .references(() => application.id, { onDelete: "cascade" }),
  studentClassId: text("student_class_id")
    .notNull()
    .references(() => studentClass.id),
  departmentId: text("department_id")
    .notNull()
    .references(() => department.id),
  facultyId: text("faculty_id")
    .notNull()
    .references(() => faculty.id),
  isExpelled: integer("is_expelled", { mode: "boolean" })
    .notNull()
    .default(false),
  ...timestamps
});

export const studentRelations = relations(student, ({ one }) => ({
  user: one(user, {
    fields: [student.userId],
    references: [user.id]
  }),
  application: one(application, {
    fields: [student.applicationId],
    references: [application.id]
  }),
  studentClass: one(studentClass, {
    fields: [student.studentClassId],
    references: [studentClass.id]
  }),
  department: one(department, {
    fields: [student.departmentId],
    references: [department.id]
  }),
  faculty: one(faculty, {
    fields: [student.facultyId],
    references: [faculty.id]
  })
}));

export const staff = sqliteTable(
  "staff",
  {
    ...id,
    userId: text("user_id")
      .notNull()
      .references(() => user.id)
      .unique(),
    staffId: text("staff_id").notNull().unique(),
    title: text(),
    phoneNumber: text("phone_number"),
    departmentId: text("department_id")
      .notNull()
      .references(() => department.id),
    facultyId: text("faculty_id")
      .notNull()
      .references(() => faculty.id),
    isDepartmentHead: integer("is_department_head", { mode: "boolean" })
      .notNull()
      .default(false),
    isActive: integer("is_active", { mode: "boolean" }).notNull().default(true),
    ...timestamps
  },
  (table) => [uniqueIndex("staff_is_active").on(table.isActive)]
);

export const staffRelations = relations(staff, ({ one, many }) => ({
  user: one(user, {
    fields: [staff.userId],
    references: [user.id]
  }),
  department: one(department, {
    fields: [staff.departmentId],
    references: [department.id]
  }),
  faculty: one(faculty, {
    fields: [staff.facultyId],
    references: [faculty.id]
  }),
  courseAllocations: many(courseAllocation)
}));

export const courseAllocation = sqliteTable("course_allocation", {
  ...id,
  courseId: text("course_id")
    .notNull()
    .references(() => course.id),
  staffId: text("staff_id")
    .notNull()
    .references(() => staff.id),
  ...timestamps
});

export const courseAllocationRelations = relations(
  courseAllocation,
  ({ one }) => ({
    staff: one(staff, {
      fields: [courseAllocation.staffId],
      references: [staff.id]
    }),
    course: one(course, {
      fields: [courseAllocation.courseId],
      references: [course.id]
    })
  })
);
