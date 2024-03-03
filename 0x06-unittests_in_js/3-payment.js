/**
 * module Utils
 */
const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const total_sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total_sum}`);
};

module.exports = sendPaymentRequestToApi;
