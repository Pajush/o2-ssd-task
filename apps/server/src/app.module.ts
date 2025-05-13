import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { DrizzleModule } from '@/database/drizzle.module';
import { drizzleProvider } from '@/database/drizzle.provider';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DrizzleModule,
    BooksModule,
    AuthorsModule,
  ],
  controllers: [AppController],
  providers: [AppService, ...drizzleProvider],
})
export class AppModule {}
