/* global describe, it, beforeEach */
'use strict';
var assert = require('assert');
var Pie = require('../build/index.js').Pie;


describe('typescript pi', function () {
	it('can be imported without blowing up', function () {
		var pi = new Pie(3);
		pi.generate();
		assert(Math.abs(pi.generate() - 3.14159265358979323846264338327950288419) < 0.001);
	  // assert(require('../build/index.js') !== undefined);
	});

	it('can be imported without blowing up', function () {
		var pi = new Pie(5);
		pi.generate();
		assert(Math.abs(pi.generate() - 3.14159265358979323846264338327950288419) < 0.00001);
	  // assert(require('../build/index.js') !== undefined);
	});
});