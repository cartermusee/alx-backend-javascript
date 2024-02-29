/**
 * utils test
 */
const { expect } = await import('chai');
const sinon = require('sinon');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call calculateNumber from utils with correct arguments', function() {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    calculateNumberSpy.restore()
  });
});
