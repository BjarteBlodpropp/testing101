import { expect } from 'chai';
import { sum } from './sum';

describe('Sum', () => {
  it('should return the sum of the numbers', () => {
    expect(sum(1, 2)).to.equal(3);
    expect(sum(5, 3)).to.equal(8);
  });
  it('should return NaN if floats are passed as parameters', () => {
    expect(sum(1.1, 2.1)).to.be.NaN;
  });
  it('should return NaN if parameters are missing', () => {
    expect(sum()).to.be.NaN;
    expect(sum(1)).to.be.NaN;
  });
  it('should return NaN if Strings are passed as parameters', () => {
    expect(sum('1', '2')).to.be.NaN;
  });
  it('should handle negative values', () => {
    expect(sum(-1, -4)).to.equal(-5);
  });
});
