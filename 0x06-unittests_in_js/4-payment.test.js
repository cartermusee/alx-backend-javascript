/**
 * utils test
 */
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js')


describe('sendPaymentRequestToApi', () => {

  beforeEach(() => {
    sinon.spy(console, 'log');
    sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(() => {
    sinon.restore();
  });
 
  it('should call Utils.calculateNumber with correct arguments', function() {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(Utils.calculateNumber, 'SUM', 100, 20);
    sinon.assert.calledWith(console.log, 'The total is: 10');
  });
});