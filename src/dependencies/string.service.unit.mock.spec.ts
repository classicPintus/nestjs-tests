import { StringService } from './string.service';
import { StringUtils } from './string-utils';

describe('StringService', () => {
  let target: StringService;
  const stringUtils = jest.mock<StringUtils>('./string-utils') as any;

  beforeEach(async () => {
    target = new StringService(stringUtils);
  });

  it('should be defined', () => {
    stringUtils.toUpperCase.and.returnValue('XxX');
    expect(target.toUpperCase('ciao')).toBe('XxX');
  });
});
