var chai = require('chai');
var chaiHttp = require('chai-http');
var should = require('chai').should();
chai.use(chaiHttp);
describe('Get Deals', function() {
it('Server Status Code ', function(done) {
    chai.request('http://localhost:3000')
    .get('/deals')
    .end(function(err, res){
      res.should.have.status(200);
      	done();
    	});
	});
it('should have JSON Response ', function(done) {
    chai.request('http://localhost:3000')
    .get('/deals')
    .end(function(err, res){
      res.should.be.json;
      	done();
    	});
	});
});