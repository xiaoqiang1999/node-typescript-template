import http, { Server } from 'http';
import request from 'supertest';
// import { assert, expect, should } from 'chai';
import { add } from '../src/utils';
import sinon from 'sinon';

describe('http server test', () => {
	let httpServer: Server;

	before(done => {
		httpServer = http
			.createServer((req, res) => {
				res.end('1 2 3 4 5 6 7 8 9 index');
			})
			.listen(3000, done);
	});

	after(done => {
		httpServer.close(done);
	});

	it('request index', () => {
		// request(httpServer)
		// 	.get('/')
		// 	.expect(200)
		// 	.expect('1 2 3 4 5 6 7 8 9 index', done);
		// throw new Error('hahahahaha');
		return request(httpServer)
			.get('/')
			.expect(200)
			.expect('1 2 3 4 5 6 7 8 9 index');
	});

	it('utils add', () => {
		add(1, 2, 3).should.be.a('number').a.equal(6);
		expect(add(1, 2, 3)).to.equal(6);
		expect(add(1, 2)).to.equal(3);
		expect(add(1)).to.equal(1);
		assert(1 === 1);
	});

	it('sino console.log', () => {
		const stub = sinon.stub(console, 'log');

		console.log(1);
		console.log(1);
		console.log(1);

		expect(stub.callCount).equal(3);
	});
});
