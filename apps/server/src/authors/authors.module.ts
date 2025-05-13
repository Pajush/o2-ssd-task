import { Module } from '@nestjs/common';
import { AuthorsRepository } from './authors.repository';
import { DrizzleModule } from '@/database/drizzle.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { drizzleProvider } from '@/database/drizzle.provider';

@Module({
    imports: [ConfigModule.forRoot(), DrizzleModule],
    controllers: [],
    providers: [AuthorsRepository, ...drizzleProvider],
    exports: [AuthorsRepository],
})
export class AuthorsModule { }
