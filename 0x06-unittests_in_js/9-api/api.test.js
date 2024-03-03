const request = require('request');
const { expect } = require('chai');


describe('cart page', function () {
  it('returns status code 200', function (done) {
    request.get('http://localhost:7865', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('returns correct result', function (done) {
    request.get('http://localhost:7865/cart/2', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
  
  it('returns 404 when no id', function (done) {
    request.get('http://localhost:7865/cart/lop', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('returns 404 when wrong id', function (done) {
    request.get('http://localhost:7865/cart/no', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });


});