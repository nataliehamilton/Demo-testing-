
const chai = require('chai');
const mocha = require('mocha');
global.expect = chai.expect;

describe('testing', () => {
  it('checks the things', () => {
    expect(false).to.be.true;
  });
});
