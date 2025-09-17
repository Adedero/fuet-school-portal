DROP INDEX `application_user_session_unique`;--> statement-breakpoint
ALTER TABLE `application` ADD `schoolSessionName` text;--> statement-breakpoint
ALTER TABLE `application` ADD `hasPaidAdmissionFees` integer DEFAULT false;--> statement-breakpoint
CREATE UNIQUE INDEX `application_user_session_unique` ON `application` (`userId`,`schoolSessionName`);