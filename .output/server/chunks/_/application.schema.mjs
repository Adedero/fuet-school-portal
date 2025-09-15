import z from 'zod';

const applicationPersonalSchema = z.object({
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
  nin: z.string("Invalid ID nunmmber").trim().nonempty("ID number cannot be empty")
});
const applicationFamilySchema = z.object({
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
const applicationSchema = applicationPersonalSchema;

export { applicationSchema as a, applicationFamilySchema as b, applicationPersonalSchema as c };
//# sourceMappingURL=application.schema.mjs.map
