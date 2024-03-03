/**
 * utils test
 */
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js')


describe('sendPaymentRequestToApi', () => {

  beforeEach(() => {
    sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore();
  });
 
  it('should call Utils.calculateNumber with correct arguments and log 120', function() {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWithExactly(console.log, 'The total is: 120');
  });

  it('should call Utils.calculateNumber with correct arguments and log 20', function() {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWithExactly(console.log, 'The total is: 20');
  });
});