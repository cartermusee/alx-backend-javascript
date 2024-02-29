/**
 * tests for calculateNumber
 */
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function(){
  it('Returns the sum of two rounded nums', function(){
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('Returns the subtraction of two rounded nums', function(){
    expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('Returns the division of two rounded nums', function(){
    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
