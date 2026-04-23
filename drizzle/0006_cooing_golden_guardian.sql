ALTER TABLE "categories" ADD COLUMN "weight" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "teaser" text NOT NULL;