/**
 * tests for calculateNumber
 */
const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe('calculateNumber', function(){
  it('Returns the sum of two rounded nums', function(){
    assert.equal(calculateNumber('SUM', 1, 3), 4);
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('Returns the subtraction of two rounded nums', function(){
    assert.equal(calculateNumber('SUBTRACT', 5, 3), 2);
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('Returns the division of two rounded nums', function(){
    assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
