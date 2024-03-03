/**
 * tests for calculateNumber
 */
const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe('calculateNumber', function(){
  it('Returns the sum of two rounded nums', function(){
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('Returns the sum of two rounded nums', function(){
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('Returns the sum of two rounded nums', function(){
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it('Returns the sum of two rounded nums', function(){
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  it('Returns the sum of two rounded nums', function(){
    assert.equal(calculateNumber(1.5, 3.1), 5);
  });
});
