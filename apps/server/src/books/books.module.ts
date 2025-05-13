import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksRepository } from './books.repository';
import { DrizzleModule } from '@/database/drizzle.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { drizzleProvider } from '@/database/drizzle.provider';
import { AuthorsRepository } from '@/authors/authors.repository';

@Module({
    imports: [ConfigModule.forRoot(), DrizzleModule],
    controllers: [BooksController],
    providers: [
        BooksRepository, 
        AuthorsRepository,
        ...drizzleProvider,],
    exports: [BooksRepository],
})
export class BooksModule { }
