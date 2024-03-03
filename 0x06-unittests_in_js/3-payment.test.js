/**
 * utils test
 */
const chai = require('chai');
const expect = chai.expect();
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;

  beforeEach(() => {
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    calculateNumberSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', () => {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.called).to.be.true;
    expect(calculateNumberSpy.calledCount).to.be.equal(1);
    expect(calculateNumberSpy.firstCall.args[0]).to.equal('SUM');
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
  });
});