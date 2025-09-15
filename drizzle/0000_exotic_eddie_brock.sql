CREATE TABLE `account` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`accountId` text NOT NULL,
	`providerId` text NOT NULL,
	`accessToken` text,
	`refreshToken` text,
	`accessTokenExpiresAt` integer,
	`refreshTokenExpiresAt` integer,
	`scope` text,
	`idToken` text,
	`password` text,
	`createdAt` integer DEFAULT (strftime('%s','now') * 1000) NOT NULL,
	`updatedAt` integer DEFAULT (strftime('%s','now') * 1000) NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `application` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`applicationNumber` text NOT NULL,
	`schoolSessionId` text,
	`course` text,
	`degreeType` text,
	`status` text DEFAULT 'open' NOT NULL,
	`isComplete` integer DEFAULT false NOT NULL,
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
	`passportUrl` text,
	`birthCirtificateUrl` text,
	`stateOfOriginUrl` text,
	`oLevelResultUrl` text,
	`createdAt` integer DEFAULT (strftime('%s','now') * 1000) NOT NULL,
	`updatedAt` integer DEFAULT (strftime('%s','now') * 1000) NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`schoolSessionId`) REFERENCES `school_session`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE UNIQUE INDEX `application_applicationNumber_unique` ON `application` (`applicationNumber`);--> statement-breakpoint
CREATE UNIQUE INDEX `application_nin_unique` ON `application` (`nin`);--> statement-breakpoint
CREATE UNIQUE INDEX `application_user_session_unique` ON `application` (`userId`,`schoolSessionId`);--> statement-breakpoint
CREATE TABLE `school_session` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`startYear` integer NOT NULL,
	`currentYear` integer NOT NULL,
	`isCurrent` integer DEFAULT false NOT NULL,
	`createdAt` integer DEFAULT (strftime('%s','now') * 1000) NOT NULL,
	`updatedAt` integer DEFAULT (strftime('%s','now') * 1000) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `school_session_name_unique` ON `school_session` (`name`);--> statement-breakpoint
CREATE TABLE `session` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`token` text NOT NULL,
	`expiresAt` integer NOT NULL,
	`ipAddress` text,
	`userAgent` text,
	`createdAt` integer DEFAULT (strftime('%s','now') * 1000) NOT NULL,
	`updatedAt` integer DEFAULT (strftime('%s','now') * 1000) NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `settings` (
	`id` text PRIMARY KEY NOT NULL,
	`applicationsOpen` integer,
	`applicationsOpenAt` integer,
	`applicationsClosedAt` integer,
	`courseRegistrationsOpen` integer,
	`courseRegistrationsOpenAt` integer,
	`courseRegistrationsClosedAt` integer,
	`createdAt` integer DEFAULT (strftime('%s','now') * 1000) NOT NULL,
	`updatedAt` integer DEFAULT (strftime('%s','now') * 1000) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`emailVerified` integer DEFAULT false NOT NULL,
	`image` text,
	`role` text DEFAULT 'applicant' NOT NULL,
	`createdAt` integer DEFAULT (strftime('%s','now') * 1000) NOT NULL,
	`updatedAt` integer DEFAULT (strftime('%s','now') * 1000) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
CREATE TABLE `verification` (
	`id` text PRIMARY KEY NOT NULL,
	`identifier` text NOT NULL,
	`value` text NOT NULL,
	`expiresAt` integer NOT NULL,
	`createdAt` integer DEFAULT (strftime('%s','now') * 1000) NOT NULL,
	`updatedAt` integer DEFAULT (strftime('%s','now') * 1000) NOT NULL
);
