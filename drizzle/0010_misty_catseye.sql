CREATE TABLE `course` (
	`id` text PRIMARY KEY NOT NULL,
	`semester` text NOT NULL,
	`code` text NOT NULL,
	`level` integer NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`faculty` text NOT NULL,
	`createdAt` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updatedAt` integer DEFAULT (strftime('%s','now')) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `course_code_unique` ON `course` (`code`);--> statement-breakpoint
CREATE TABLE `level` (
	`id` text PRIMARY KEY NOT NULL,
	`name` integer NOT NULL,
	`min_credit_units_harmattan` integer NOT NULL,
	`max_credit_units_harmattan` integer NOT NULL,
	`min_credit_units_rain` integer NOT NULL,
	`max_credit_units_rain` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `level_name_unique` ON `level` (`name`);--> statement-breakpoint
CREATE TABLE `semester` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`is_current` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `semester_name_unique` ON `semester` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `semester_is_current_unique` ON `semester` (`is_current`);--> statement-breakpoint
CREATE TABLE `student` (
	`id` text PRIMARY KEY NOT NULL,
	`reg_number` text NOT NULL,
	`application_id` text NOT NULL,
	`student_class_id` text NOT NULL,
	`createdAt` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updatedAt` integer DEFAULT (strftime('%s','now')) NOT NULL,
	FOREIGN KEY (`application_id`) REFERENCES `application`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`student_class_id`) REFERENCES `student_class`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `student_class` (
	`id` text PRIMARY KEY NOT NULL,
	`class_name` text NOT NULL,
	`enrolment_year` integer NOT NULL,
	`current_level` integer NOT NULL,
	`is_active` integer,
	`createdAt` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updatedAt` integer DEFAULT (strftime('%s','now')) NOT NULL
);
