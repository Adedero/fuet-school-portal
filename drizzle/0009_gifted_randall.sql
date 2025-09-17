CREATE TABLE `metadata` (
	`id` text PRIMARY KEY NOT NULL,
	`total_applications` integer DEFAULT 0 NOT NULL,
	`total_applicants` integer DEFAULT 0 NOT NULL,
	`total_students` integer DEFAULT 0 NOT NULL,
	`createdAt` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updatedAt` integer DEFAULT (strftime('%s','now')) NOT NULL
);
