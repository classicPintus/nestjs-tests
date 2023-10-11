import { Module } from '@nestjs/common';
import { InjectedService } from './injected.service';

@Module({
  imports: [],
  controllers: [],
  providers: [InjectedService],
})
export class InjectedModule {}
