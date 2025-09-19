import z from 'zod';
import { Q as formatBytes } from './nitro.mjs';

const querySchema = z.object({
  search: z.string("Invalid search value"),
  limit: z.coerce.number("Limit query must be a number").positive("Limit query must be a positive number"),
  offset: z.coerce.number("Limit query must be a number").nonnegative("Offset query must be a 0 or greater")
});

const personalSchema = z.object({
  firstName: z.string("Invalid first name").nonempty("First name cannot be empty").trim(),
  middleName: z.string("Invalid middlename").trim().optional(),
  otherNames: z.string("Invalid names").trim().optional(),
  lastName: z.string("Invalid last name").nonempty("Last name cannot be empty").trim(),
  phoneNumber: z.string("Invalid phone number").nonempty("Phone number cannot be empty").trim(),
  birthDay: z.number("Invalid day of birth"),
  birthMonth: z.string("Invalid month of birth").trim(),
  birthYear: z.number("Invalid year of birth"),
  gender: z.enum(["male", "female"], "Gender must be male or female"),
  nationality: z.string("Invalid nationality").trim(),
  stateOfOrigin: z.string("Invalid state of origin").trim().nonempty("State of origin cannot be empty"),
  lga: z.string("Invalid local government area or town").trim().nonempty("Local government area or town cannot be empty"),
  nin: z.string("Invalid ID nunmmber").trim().nonempty("NIN/ID number cannot be empty")
});
const familySchema = z.object({
  firstParentName: z.string().nonempty("Full name of first parent is required"),
  firstParentAddress: z.string().nonempty("Address of first parent is required"),
  firstParentStatus: z.enum(["living", "deceased"]),
  secondParentName: z.string().nonempty("Full name of second parent is required"),
  secondParentAddress: z.string().nonempty("Address of second parent is required"),
  secondParentStatus: z.enum(["living", "deceased"]),
  nextOfKinName: z.string().nonempty("Full name of next of kin is required"),
  nextOfKinAddress: z.string().nonempty("Address of next of kin is required"),
  nextOfKinRelationship: z.string().nonempty("Relationship with next of kin is required"),
  nextOfKinPhoneNumber: z.string().nonempty("Phone number of next of kin is required")
});
const academicSchema = z.object({
  course: z.string().nonempty("Course is required"),
  degreeType: z.string().nonempty("Degree type is required"),
  jambRegNumber: z.string().nonempty("JAMB registration number is required"),
  secondarySchoolName: z.string().nonempty("Secondary school name is required"),
  secondarySchoolAddress: z.string().nonempty("Secondary school address is required"),
  secondarySchoolGraduationMonth: z.string().nonempty("Secondary school graduation month is required"),
  secondarySchoolGraduationYear: z.int("Secondary school graduation year is required").refine((value) => {
    return value.toString().split("").length >= 4;
  }, "Invalid graduation year")
});
const documentsSchema = z.object({
  passportUrl: z.string("No passport photograph uploaded").nonempty("No passport photograph uploaded"),
  birthCertificateUrl: z.string("No birth certificate uploaded").nonempty("No birth certificate uploaded"),
  stateOfOriginUrl: z.string("No state of origin document uploaded").nonempty("No state of origin document uploaded"),
  oLevelResultUrl: z.string("No O'Level result uploaded").nonempty("No O'Level result uploaded"),
  postUTMESlipUrl: z.string("No post UTME slip uploaded").nonempty("No post UTME slip uploaded"),
  admissionFormPaymentReceiptUrl: z.string("No admission form payment slip uploaded").nonempty("No admission form payment slip uploaded")
});
const documentUploadSchema = ({
  maxFileSize,
  acceptedFileTypes
}) => z.object({
  documentType: z.object(
    {
      label: z.string(),
      value: z.string()
    },
    "Document type is required"
  ),
  file: z.instanceof(File, {
    message: "Please select a file to upload."
  }).refine((file) => file.size <= maxFileSize, {
    message: `The file is too large. Please choose an file smaller than ${formatBytes(
      maxFileSize
    )}.`
  }).refine((file) => acceptedFileTypes.includes(file.type), {
    message: "Please upload a valid file (PDF, JPEG, PNG, or WebP)."
  })
});
const applicationSchema = z.object({
  ...personalSchema.shape,
  ...familySchema.shape,
  ...academicSchema.shape,
  ...documentsSchema.shape
});
const applicationQuerySchema = z.object({
  schoolSessionName: z.string().nonempty(),
  admissionStatus: z.enum(["submitted", "accepted", "rejected"]),
  hasPaidAdmissionFee: z.coerce.boolean(),
  orderBy: z.union([z.array(z.string()), z.string()]),
  ...querySchema.shape
});

export { applicationQuerySchema as a, applicationSchema as b, academicSchema as c, documentUploadSchema as d, familySchema as f, personalSchema as p };
//# sourceMappingURL=application.schema.mjs.map
