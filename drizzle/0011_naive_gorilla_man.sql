CREATE TABLE `admission_fee_payment_complaint` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`application_id` text NOT NULL,
	`admission_fee_payment_id` text NOT NULL,
	`description` text NOT NULL,
	`support_document_url` text,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`application_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`admission_fee_payment_id`) REFERENCES `admission_fee_payment`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
ALTER TABLE `admission_fee_payment` ADD `payment_ref` text NOT NULL;--> statement-breakpoint
ALTER TABLE `admission_fee_payment` ADD `status` text NOT NULL;