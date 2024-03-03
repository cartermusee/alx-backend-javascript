/**
 * utils test
 */
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js')

describe('sendPaymentRequestToApi', function() {

  beforeEach(() => {
    sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', function() {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(Utils.calculateNumber, 'SUM', 100, 20);
  });
});