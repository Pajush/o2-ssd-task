import { Injectable } from '@nestjs/common';
import {
    DrizzleAsyncProvider,
    DrizzleDatabase,
} from '@/database/drizzle.provider';
import { Inject } from '@nestjs/common';
import { books, Books } from './books.schema';
import { eq } from 'drizzle-orm';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksRepository {
    @Inject(DrizzleAsyncProvider) private readonly db: DrizzleDatabase;

    async create(data: CreateBookDto) {
        return await this.db.insert(books).values({
          title: data.title,
          isbn: data.isbn,
          authorId: data.authorId ?? null,
          genre: data.genre ?? null,
          publishedDate: data.publishedDate ?? null,
          publisher: data.publisher ?? null,
          language: data.language ?? null,
          pageCount: data.pageCount ?? null,
          availability: data.availability ?? true,
          rating: data.rating ? data.rating.toString() : null,
        }).returning();
      }
      

  async findAll(): Promise<Books[]> {
    return await this.db.select().from(books);
  }

  async findOne(id: number): Promise<Books | undefined> {
    const result = await this.db.select().from(books).where(eq(books.id, id));
    return result[0];
  }

  async remove(id: number) {
    return await this.db.delete(books).where(eq(books.id, id));
  }
}
