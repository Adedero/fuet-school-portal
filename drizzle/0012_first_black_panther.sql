CREATE TABLE `admission_fee_payment` (
	`id` text PRIMARY KEY NOT NULL,
	`application_id` text NOT NULL,
	`amount` real NOT NULL,
	`transaction_ref` text NOT NULL,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	FOREIGN KEY (`application_id`) REFERENCES `application`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
ALTER TABLE `application` ADD `admission_fee_payment_id` text REFERENCES admission_fee_payment(id);