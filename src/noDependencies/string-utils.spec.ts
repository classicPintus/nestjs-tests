import { StringUtils } from './string-utils';

describe('StringUtils', () => {
  let target: StringUtils;
  beforeEach(() => {
    target = new StringUtils();
  });

  describe('toUpperCase', () => {
    it('should manage null', () => {
      const result = target.toUpperCase(null);

      expect(result).toBeNull();
    });

    it('should manage undefined', () => {
      const result = target.toUpperCase(undefined);

      expect(result).toBeUndefined();
    });

    it('should keep input value if is uppercase', () => {
      const result = target.toUpperCase('CIAO');

      expect(result).toBe('CIAO');
    });

    it('should keep input value if is uppercase', () => {
      const result = target.toUpperCase('ciao');

      expect(result).toBe('CIAO');
    });

    it('should keep input value if is uppercase', () => {
      const result = target.toUpperCase('cIaO');

      expect(result).toBe('CIAO');
    });

    describe('parameterized test example', () => {
      it.each([
        { input: 'HelloWorld', expected: 'HELLOWORLD' },
        { input: 'hello', expected: 'HELLO' },
        { input: '_', expected: '_' },
        { input: 'à', expected: 'À' },
      ])('target.toUpperCase($input) should return $expected', ({ input, expected }) => {
        const result = target.toUpperCase(input);

        expect(result).toBe(expected);
      });
    });
  });

  // toBe vs toEqual
});
