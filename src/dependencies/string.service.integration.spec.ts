import { Test, TestingModule } from '@nestjs/testing';
import { StringService } from './string.service';
import { StringUtils } from './string-utils';

describe('StringService', () => {
  let target: StringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StringService, StringUtils],
    }).compile();

    target = module.get<StringService>(StringService);
  });

  it('should manager lowercase', () => {
    expect(target.toUpperCase('ciao')).toBe('CIAO');
  });
});
