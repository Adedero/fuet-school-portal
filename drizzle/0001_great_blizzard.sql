CREATE TABLE `department` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`code` text NOT NULL,
	`faculty_id` text NOT NULL,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	FOREIGN KEY (`faculty_id`) REFERENCES `faculty`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `department_faculty_name_unique` ON `department` (`faculty_id`,`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `department_faculty_code_unique` ON `department` (`faculty_id`,`code`);--> statement-breakpoint
CREATE TABLE `faculty` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`code` text NOT NULL,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s','now')) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `faculty_name_unique` ON `faculty` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `faculty_code_unique` ON `faculty` (`code`);--> statement-breakpoint
ALTER TABLE `course` ADD `department_id` text NOT NULL REFERENCES department(id);--> statement-breakpoint
ALTER TABLE `course` ADD `faculty_id` text NOT NULL REFERENCES faculty(id);--> statement-breakpoint
ALTER TABLE `course` DROP COLUMN `faculty`;--> statement-breakpoint
CREATE UNIQUE INDEX `student_class_class_name_unique` ON `student_class` (`class_name`);