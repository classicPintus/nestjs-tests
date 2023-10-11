import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepedencyInjectionModule } from './dependencyInjection/dependency-injection.module';

@Module({
  imports: [DepedencyInjectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
