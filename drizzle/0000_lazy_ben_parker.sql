CREATE TABLE `account` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`account_id` text NOT NULL,
	`provider_id` text NOT NULL,
	`access_token` text,
	`refresh_token` text,
	`access_token_expires_at` integer,
	`refresh_token_expires_at` integer,
	`scope` text,
	`id_token` text,
	`password` text,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `admission_fee_payment` (
	`id` text PRIMARY KEY NOT NULL,
	`application_id` text NOT NULL,
	`amount` real NOT NULL,
	`transaction_ref` text NOT NULL,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s','now')) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `application` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`application_number` text NOT NULL,
	`school_session_name` text NOT NULL,
	`school_session_id` text,
	`status` text DEFAULT 'pending' NOT NULL,
	`admission_fee_payment_id` text,
	`has_paid_admission_fee` integer DEFAULT false,
	`first_name` text NOT NULL,
	`middle_name` text,
	`other_names` text,
	`last_name` text NOT NULL,
	`phone_number` text,
	`birth_day` integer NOT NULL,
	`birth_month` text NOT NULL,
	`birth_year` integer NOT NULL,
	`gender` text,
	`state_of_origin` text,
	`lga` text,
	`nationality` text,
	`nin` text,
	`first_parent_name` text,
	`first_parent_address` text,
	`first_parent_status` text,
	`second_parent_name` text,
	`second_parent_address` text,
	`second_parent_status` text,
	`next_of_kin_name` text,
	`next_of_kin_address` text,
	`next_of_kin_relationship` text,
	`next_of_kin_phone_number` text,
	`course` text,
	`degree_type` text,
	`jamb_reg_number` text,
	`secondary_school_name` text,
	`secondary_school_address` text,
	`secondary_school_graduation_month` text,
	`secondary_school_graduation_year` integer,
	`passport_url` text,
	`birth_certificate_url` text,
	`state_of_origin_url` text,
	`o_level_result_url` text,
	`post_utme_slip_url` text,
	`admission_form_payment_receipt_url` text,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`school_session_id`) REFERENCES `school_session`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`admission_fee_payment_id`) REFERENCES `admission_fee_payment`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE UNIQUE INDEX `application_application_number_unique` ON `application` (`application_number`);--> statement-breakpoint
CREATE UNIQUE INDEX `application_nin_unique` ON `application` (`nin`);--> statement-breakpoint
CREATE UNIQUE INDEX `application_user_session_unique` ON `application` (`user_id`,`school_session_name`);--> statement-breakpoint
CREATE TABLE `course` (
	`id` text PRIMARY KEY NOT NULL,
	`semester` text NOT NULL,
	`code` text NOT NULL,
	`level` integer NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`faculty` text NOT NULL,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s','now')) NOT NULL
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
CREATE TABLE `school_session` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`start_year` integer NOT NULL,
	`end_year` integer,
	`current_year` integer NOT NULL,
	`is_current` integer DEFAULT false NOT NULL,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s','now')) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `school_session_start_year_unique` ON `school_session` (`start_year`);--> statement-breakpoint
CREATE TABLE `semester` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`is_current` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `semester_name_unique` ON `semester` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `semester_is_current_unique` ON `semester` (`is_current`);--> statement-breakpoint
CREATE TABLE `session` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`token` text NOT NULL,
	`expires_at` integer NOT NULL,
	`ipAddress` text,
	`userAgent` text,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `settings` (
	`id` text PRIMARY KEY NOT NULL,
	`applications_open` integer,
	`applications_open_at` integer,
	`applications_closed_at` integer,
	`course_registrations_open` integer,
	`course_registrations_open_at` integer,
	`course_registrations_closed_at` integer,
	`admission_fee` real DEFAULT 0,
	`admission_fee_payment_deadline` integer,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s','now')) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `student` (
	`id` text PRIMARY KEY NOT NULL,
	`reg_number` text NOT NULL,
	`application_id` text NOT NULL,
	`student_class_id` text NOT NULL,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
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
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s','now')) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`email_verified` integer DEFAULT false NOT NULL,
	`image` text,
	`role` text DEFAULT 'applicant' NOT NULL,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s','now')) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
CREATE TABLE `verification` (
	`id` text PRIMARY KEY NOT NULL,
	`identifier` text NOT NULL,
	`value` text NOT NULL,
	`expires_at` integer NOT NULL,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s','now')) NOT NULL
);
