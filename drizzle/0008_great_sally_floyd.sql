PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_application` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`applicationNumber` text NOT NULL,
	`schoolSessionName` text NOT NULL,
	`schoolSessionId` text,
	`status` text DEFAULT 'pending' NOT NULL,
	`hasPaidAdmissionFees` integer DEFAULT false,
	`firstName` text NOT NULL,
	`middleName` text,
	`otherNames` text,
	`lastName` text NOT NULL,
	`phoneNumber` text,
	`birthDay` integer NOT NULL,
	`birthMonth` text NOT NULL,
	`birthYear` integer NOT NULL,
	`gender` text,
	`stateOfOrigin` text,
	`lga` text,
	`nationality` text,
	`nin` text,
	`firstParentName` text,
	`firstParentAddress` text,
	`firstParentStatus` text,
	`secondParentName` text,
	`secondParentAddress` text,
	`secondParentStatus` text,
	`nextOfKinName` text,
	`nextOfKinAddress` text,
	`nextOfKinRelationship` text,
	`nextOfKinPhoneNumber` text,
	`course` text,
	`degreeType` text,
	`jambRegNumber` text,
	`secondarySchoolName` text,
	`secondarySchoolAddress` text,
	`secondarySchoolGraduationMonth` text,
	`secondarySchoolGraduationYear` integer,
	`passportUrl` text,
	`birthCirtificateUrl` text,
	`stateOfOriginUrl` text,
	`oLevelResultUrl` text,
	`postUTMESlipUrl` text,
	`admissionFormPaymentReceiptUrl` text,
	`createdAt` integer DEFAULT (strftime('%s','now') * 1000) NOT NULL,
	`updatedAt` integer DEFAULT (strftime('%s','now') * 1000) NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`schoolSessionId`) REFERENCES `school_session`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
INSERT INTO `__new_application`("id", "userId", "applicationNumber", "schoolSessionName", "schoolSessionId", "status", "hasPaidAdmissionFees", "firstName", "middleName", "otherNames", "lastName", "phoneNumber", "birthDay", "birthMonth", "birthYear", "gender", "stateOfOrigin", "lga", "nationality", "nin", "firstParentName", "firstParentAddress", "firstParentStatus", "secondParentName", "secondParentAddress", "secondParentStatus", "nextOfKinName", "nextOfKinAddress", "nextOfKinRelationship", "nextOfKinPhoneNumber", "course", "degreeType", "jambRegNumber", "secondarySchoolName", "secondarySchoolAddress", "secondarySchoolGraduationMonth", "secondarySchoolGraduationYear", "passportUrl", "birthCirtificateUrl", "stateOfOriginUrl", "oLevelResultUrl", "postUTMESlipUrl", "admissionFormPaymentReceiptUrl", "createdAt", "updatedAt") SELECT "id", "userId", "applicationNumber", "schoolSessionName", "schoolSessionId", "status", "hasPaidAdmissionFees", "firstName", "middleName", "otherNames", "lastName", "phoneNumber", "birthDay", "birthMonth", "birthYear", "gender", "stateOfOrigin", "lga", "nationality", "nin", "firstParentName", "firstParentAddress", "firstParentStatus", "secondParentName", "secondParentAddress", "secondParentStatus", "nextOfKinName", "nextOfKinAddress", "nextOfKinRelationship", "nextOfKinPhoneNumber", "course", "degreeType", "jambRegNumber", "secondarySchoolName", "secondarySchoolAddress", "secondarySchoolGraduationMonth", "secondarySchoolGraduationYear", "passportUrl", "birthCirtificateUrl", "stateOfOriginUrl", "oLevelResultUrl", "postUTMESlipUrl", "admissionFormPaymentReceiptUrl", "createdAt", "updatedAt" FROM `application`;--> statement-breakpoint
DROP TABLE `application`;--> statement-breakpoint
ALTER TABLE `__new_application` RENAME TO `application`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `application_applicationNumber_unique` ON `application` (`applicationNumber`);--> statement-breakpoint
CREATE UNIQUE INDEX `application_nin_unique` ON `application` (`nin`);--> statement-breakpoint
CREATE UNIQUE INDEX `application_user_session_unique` ON `application` (`userId`,`schoolSessionName`);