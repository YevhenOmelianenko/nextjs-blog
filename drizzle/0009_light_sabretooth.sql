CREATE TABLE "static_contents" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"title" varchar(255),
	"body" text NOT NULL,
	"page_slug" varchar(255),
	"seo_description" text,
	"og_image" varchar(1024),
	"is_sitemap" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
