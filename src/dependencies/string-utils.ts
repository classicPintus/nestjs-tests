import { Injectable } from '@nestjs/common';

@Injectable()
export class StringUtils {
  toUpperCase(input: string): string {
    let res = input;
    if (input) {
      res = input.toUpperCase();
    }

    return res;
  }
}
