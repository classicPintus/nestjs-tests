import { StringService } from './string.service';
import { StringUtils } from './string-utils';

describe('StringService', () => {
  let target: StringService;
  const stringUtils = jest.createMockFromModule<StringUtils>('./string-utils');

  beforeEach(async () => {
    target = new StringService(stringUtils);
  });

  it('should be defined', () => {
<<<<<<< HEAD
=======
    stringUtils.toUpperCase = jest.fn().mockReturnValue('XxX');
>>>>>>> a2dfd6baa3058b0101a76154d9a694ea6769fa6e
    expect(target.toUpperCase('ciao')).toBe('XxX');
  });
});
