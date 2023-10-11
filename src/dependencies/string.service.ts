import { Injectable } from '@nestjs/common';
import { StringUtils } from './string-utils';

@Injectable()
export class StringService {
  private stringUtils: StringUtils;

  constructor(stringUtils: StringUtils) {
    this.stringUtils = stringUtils;
  }

  toUpperCase(input: string): string {
    return this.stringUtils.toUpperCase(input);
  }
}
