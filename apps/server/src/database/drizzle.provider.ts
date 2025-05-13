import { ConfigService } from '@nestjs/config';
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { schema } from '@/database/schema';
import * as postgres from 'postgres';

export const DrizzleAsyncProvider = 'drizzleProvider';
export type DrizzleDatabase = PostgresJsDatabase<typeof schema>;

export const drizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    inject: [ConfigService],
    useFactory: (
      configService: ConfigService,
    ): PostgresJsDatabase<typeof schema> => {
      const databaseUrl =
        configService.get<string>('NODE_ENV') === 'test'
          ? configService.get<string>('DATABASE_URL_TEST')
          : configService.get<string>('DATABASE_URL');

      if (!databaseUrl) {
        throw new Error('Database URL is not configured');
      }
      const client = postgres(databaseUrl);

      return drizzle(client, { schema: schema }) as PostgresJsDatabase<
        typeof schema
      >;
    },
    exports: [DrizzleAsyncProvider],
  },
];
