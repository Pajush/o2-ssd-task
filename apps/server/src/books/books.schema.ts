import { pgTable, serial, varchar, date, integer, boolean, numeric, timestamp } from 'drizzle-orm/pg-core';
import { authors } from '@/authors/authors.schema';
import { relations } from 'drizzle-orm';

export const books = pgTable('books', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  authorId: integer('author_id').references(() => authors.id, {
    onDelete: 'set null',
  }),
  isbn: varchar('isbn', { length: 20 }).notNull(),
  genre: varchar('genre', { length: 50 }),
  publishedDate: date('published_date', { mode: 'date' }),
  publisher: varchar('publisher', { length: 100 }),
  language: varchar('language', { length: 50 }),
  pageCount: integer('page_count'),
  availability: boolean('availability').default(true),
  rating: numeric('rating', { precision: 2, scale: 1 }),
});

export const booksRelations = relations(books, ({ one }) => ({
  author: one(authors, {
    fields: [books.authorId],
    references: [authors.id],
  }),
}));

export type Books = typeof books.$inferSelect;
