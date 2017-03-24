/**
  * @namespace boileroom
  * @description
  * Welcome to the boileroom documentation.
  *
  * This document aims to describe all the functions supported by the module, as well as showing examples of their expected usage.
  *
  * @param {object} - anything
  * @returns {Object}
  * @example
  * var boilerroom = require('boilerroom')({})
*/
const boileroom = (config) => {
  return ({
    /**
    * @namespace command1
    * @memberof boileroom
    **/
    command1: (config) => {
      console.log(config);
    }
  });
};

module.exports = boileroom;
