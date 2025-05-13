import { pgTable, serial, varchar, date, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { books } from '@/books/books.schema';

export const authors = pgTable('authors', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  birthdate: date('birthdate', { mode: 'date' }),
  nationality: varchar('nationality', { length: 50 }),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const authorsRelations = relations(authors, ({ many }) => ({
  books: many(books),
}));

export type Authors = typeof authors.$inferSelect;
