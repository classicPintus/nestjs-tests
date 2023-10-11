import { Injectable } from '@nestjs/common';
import { StringUtils } from './string-utils';

@Injectable()
export class StringService {
  constructor(private stringUtils: StringUtils) {}

  toUpperCase(input: string): string {
    return this.stringUtils.toUpperCase(input);
  }
}
