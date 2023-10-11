import { StringService } from './string.service';
import { StringUtils } from './string-utils';

describe('StringService', () => {
  let target: StringService;
  const stringUtils = jest.createMockFromModule<StringUtils>('./string-utils');

  beforeEach(async () => {
    target = new StringService(stringUtils);
  });

  it('should be defined', () => {
    stringUtils.toUpperCase = jest.fn().mockReturnValue('XxX');
    expect(target.toUpperCase('ciao')).toBe('XxX');
  });
});
