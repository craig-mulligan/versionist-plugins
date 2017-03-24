/* eslint-env mocha */

import m from 'mochainon';
import plugins from '../src/';

describe('plugins', () => {
  it('should return an object', () => {
    m.chai.expect(plugins).to.be.a('object');
  });
});
