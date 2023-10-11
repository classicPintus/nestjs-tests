import { Injectable } from '@nestjs/common';
import { InjectedService } from './injectedService/injected.service';

@Injectable()
export class DependencyInjectionService {
  constructor(public injectedService: InjectedService) {};
}
