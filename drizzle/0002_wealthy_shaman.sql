ALTER TABLE `student` ADD `department_id` text NOT NULL REFERENCES department(id);--> statement-breakpoint
ALTER TABLE `student` ADD `faculty_id` text NOT NULL REFERENCES faculty(id);