const git = require('./git');
const docker = require('./docker');

/**
  * @namespace versionist-plugins
  * @description
  * Welcome to the versionist-plugins documentation.
  *
  * This document aims to describe all the functions supported by the module, as well as showing examples of their expected usage.
  *
  * @returns {Object}
  * @example
  * var plugins = require('versionist-plugins')
  * module.exports = {
  *   updateVerion: [ plugins.git.commit, plugins.git.tag, plugins.git.push ]
  *   template: [
  *     '## v{{version}} - {{moment date "Y-MM-DD"}}',
  *     '',
  *     '{{#each commits}}',
  *     '- {{capitalize this.subject}}',
  *     '{{/each}}'
  *   ].join('\n')
  * }
};
*/

const plugins = {
  /**
  * @namespace git
  * @memberof versionist-plugins
  **/
  git,
  /**
  * @namespace docker
  * @memberof versionist-plugins
  **/
  docker
};

module.exports = plugins;
