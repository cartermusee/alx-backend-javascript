/**
 * utils test
 */
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {

  beforeEach(() => {
    sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', () => {
    sendPaymentRequestToApi(100, 20);

    expect(Utils.calculateNumber.calledOnce).to.be.true;
    expect(Utils.calculateNumber.called).to.be.true;
    expect(Utils.calculateNumber.calledCount).to.be.equal(1);
    expect(Utils.calculateNumber.firstCall.args[0]).to.equal('SUM');
    expect(Utils.calculateNumber.calledWith('The total is: 120')).to.be.true;
  });

  it('should call Utils.calculateNumber with correct arguments', () => {
    sendPaymentRequestToApi(10, 10);

    expect(Utils.calculateNumber.calledOnce).to.be.true;
    expect(Utils.calculateNumber.called).to.be.true;
    expect(Utils.calculateNumber.calledCount).to.be.equal(1);
    expect(Utils.calculateNumber.firstCall.args[0]).to.equal('SUM');
    expect(Utils.calculateNumber.calledWith('The total is: 20')).to.be.true;
  });
});