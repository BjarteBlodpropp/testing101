import { expect } from 'chai';
import { capitalizeFirstLetter } from './capitalizeFirstLetter';

describe('capitalizeFirstLetter', () => {
  it('should capitalize first letter', () => {
    expect(capitalizeFirstLetter('innit')).to.equal('Innit');
    expect(capitalizeFirstLetter('INNIT')).to.equal('INNIT');
    expect(capitalizeFirstLetter('inniT')).to.equal('InniT');
  });
  it('should return input if not a string', () => {
    expect(capitalizeFirstLetter(3)).to.equal(3);
    expect(capitalizeFirstLetter([])).to.eql([]);
  })
});
