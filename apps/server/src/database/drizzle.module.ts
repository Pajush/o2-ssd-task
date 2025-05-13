import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { drizzleProvider } from '@/database/drizzle.provider';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [...drizzleProvider],
})
export class DrizzleModule {}
