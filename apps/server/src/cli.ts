import { AppModule } from '@/app.module';
import { Logger } from '@nestjs/common';
import { CommandFactory } from 'nest-commander';

async function bootstrap(): Promise<void> {
  await CommandFactory.run(AppModule, new Logger());
  process.exit(0);
}
void bootstrap();
