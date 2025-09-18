PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_student` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`reg_number` text NOT NULL,
	`application_id` text NOT NULL,
	`student_class_id` text NOT NULL,
	`department_id` text NOT NULL,
	`faculty_id` text NOT NULL,
	`is_expelled` integer DEFAULT false NOT NULL,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`application_id`) REFERENCES `application`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`student_class_id`) REFERENCES `student_class`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`department_id`) REFERENCES `department`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`faculty_id`) REFERENCES `faculty`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_student`("id", "user_id", "reg_number", "application_id", "student_class_id", "department_id", "faculty_id", "is_expelled", "created_at", "updated_at") SELECT "id", "user_id", "reg_number", "application_id", "student_class_id", "department_id", "faculty_id", "is_expelled", "created_at", "updated_at" FROM `student`;--> statement-breakpoint
DROP TABLE `student`;--> statement-breakpoint
ALTER TABLE `__new_student` RENAME TO `student`;--> statement-breakpoint
PRAGMA foreign_keys=ON;