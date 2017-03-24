/* eslint-env mocha */

import m from 'mochainon';
import boileroom from '../src/';

describe('boileroom', () => {
  boileroom().expect.to.be.true;
});
