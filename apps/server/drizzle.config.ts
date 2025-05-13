import { Config, defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: [
    './src/**/*.schema.ts',
    './src/drizzle/schema/*.ts',
  ],
  out: './migrations',
  dbCredentials: {
    url:
      (process.env.NODE_ENV === 'test'
        ? process.env.DATABASE_URL_TEST
        : process.env.DATABASE_URL) || '',
  },
  verbose: true,
  strict: true,
}) satisfies Config;
