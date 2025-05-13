import { Injectable } from '@nestjs/common';
import {
    DrizzleAsyncProvider,
    DrizzleDatabase,
} from '@/database/drizzle.provider';
import { Inject } from '@nestjs/common';
import { authors, Authors } from './authors.schema';
import { eq } from 'drizzle-orm';
import { CreateAuthorDto } from './dto/create-author.dto';

@Injectable()
export class AuthorsRepository {
    @Inject(DrizzleAsyncProvider) private readonly db: DrizzleDatabase;

    async create(data: CreateAuthorDto) {
        return await this.db.insert(authors).values({
          firstName: data.firstName,
          lastName: data.lastName,
          birthdate: data.birthdate ?? null,
          nationality: data.nationality ?? null,
        }).returning();
      }
      

  async findAll(): Promise<Authors[]> {
    return await this.db.select().from(authors);
  }

  async findOne(id: number): Promise<Authors | undefined> {
    const result = await this.db.select().from(authors).where(eq(authors.id, id));
    return result[0];
  }

  async remove(id: number) {
    return await this.db.delete(authors).where(eq(authors.id, id));
  }
}
