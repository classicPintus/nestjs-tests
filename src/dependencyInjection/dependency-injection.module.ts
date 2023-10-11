import { Module } from '@nestjs/common';
import { InjectedModule } from './injectedService/injected.module';

@Module({
  imports: [InjectedModule],
  controllers: [],
  providers: [],
})
export class DepedencyInjectionModule {}
