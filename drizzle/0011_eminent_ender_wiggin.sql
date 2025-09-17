ALTER TABLE `course` RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE `metadata` RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE `metadata` RENAME COLUMN "updatedAt" TO "updated_at";--> statement-breakpoint
ALTER TABLE `student` RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE `student` RENAME COLUMN "updatedAt" TO "updated_at";--> statement-breakpoint
ALTER TABLE `student_class` RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE `student_class` RENAME COLUMN "updatedAt" TO "updated_at";--> statement-breakpoint
ALTER TABLE `course` ADD `updated_at` integer DEFAULT (strftime('%s','now')) NOT NULL;--> statement-breakpoint
ALTER TABLE `course` DROP COLUMN `updatedAt`;