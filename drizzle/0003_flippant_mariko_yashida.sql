DROP INDEX `department_faculty_name_unique`;--> statement-breakpoint
DROP INDEX `department_faculty_code_unique`;--> statement-breakpoint
CREATE UNIQUE INDEX `department_name_unique` ON `department` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `department_code_unique` ON `department` (`code`);