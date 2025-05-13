CREATE TABLE "authors" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(100) NOT NULL,
	"last_name" varchar(100) NOT NULL,
	"birthdate" date,
	"nationality" varchar(50),
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "books" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"author_id" integer,
	"isbn" varchar(20) NOT NULL,
	"genre" varchar(50),
	"published_date" date,
	"publisher" varchar(100),
	"language" varchar(50),
	"page_count" integer,
	"availability" boolean DEFAULT true,
	"rating" numeric(2, 1)
);
--> statement-breakpoint
ALTER TABLE "books" ADD CONSTRAINT "books_author_id_authors_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."authors"("id") ON DELETE set null ON UPDATE no action;

INSERT INTO authors (first_name, last_name, birthdate, nationality) VALUES
('George', 'Orwell', '1903-06-25', 'British'),
('J.K.', 'Rowling', '1965-07-31', 'British'),
('Stephen', 'King', '1947-09-21', 'American'),
('Agatha', 'Christie', '1890-09-15', 'British'),
('Haruki', 'Murakami', '1949-01-12', 'Japanese');

INSERT INTO books (title, author_id, isbn, genre, published_date, publisher, language, page_count, availability, rating) VALUES
('1984', 1, '9780451524935', 'Dystopie', '1949-06-08', 'Secker & Warburg', 'Angličtina', 328, true, 4.7),
('Harry Potter a Kámen mudrců', 2, '9780747532699', 'Fantasy', '1997-06-26', 'Bloomsbury', 'Angličtina', 223, true, 4.8),
('Osvícení', 3, '9780385121675', 'Horor', '1977-01-28', 'Doubleday', 'Angličtina', 447, false, 4.5),
('Vražda v Orient expresu', 4, '9780007119318', 'Krimi', '1934-01-01', 'Collins Crime Club', 'Angličtina', 256, true, 4.3),
('Norské dřevo', 5, '9780375704024', 'Román', '1987-09-04', 'Kodansha', 'Japonština', 296, true, 4.4);