import { getCurrencySymbol } from '../src/index';

describe('getCurrencySymbol()', () => {
  describe('with valid input', () => {
    it('should return $ when the input is USD', () => {
      const expected = '$';
      const actual = getCurrencySymbol('USD');

      expect(actual).toEqual(expected);
    });

    it('should return € when the input is EUR', () => {
      const expected = '€';
      const actual = getCurrencySymbol('EUR');

      expect(actual).toEqual(expected);
    });

    it('should return $ when the input is usd', () => {
      const expected = '$';
      const actual = getCurrencySymbol('usd');

      expect(actual).toEqual(expected);
    });

    it('should return ₿ when the input is btc', () => {
      const expected = '₿';
      const actual = getCurrencySymbol('btc');

      expect(actual).toEqual(expected);
    });
  });

  describe('with invalid input', () => {
    it('should return undefined when the input is an invalid string', () => {
      const expected = undefined;
      const actual = getCurrencySymbol('INVALID');

      expect(actual).toEqual(expected);
    });

    it('should return undefined when the input is a number', () => {
      const expected = undefined;
      const actual = getCurrencySymbol(10);

      expect(actual).toEqual(expected);
    });

    it('should return undefined when the input is null', () => {
      const expected = undefined;
      const actual = getCurrencySymbol(null);

      expect(actual).toEqual(expected);
    });

    it('should return undefined when the input is undefined', () => {
      const expected = undefined;
      const actual = getCurrencySymbol();

      expect(actual).toEqual(expected);
    });
  });
});
