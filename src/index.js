import { exec } from 'child_process';

/**
  * @namespace versionist-plugins
  * @description
  * Welcome to the versionist-plugins documentation.
  *
  * This document aims to describe all the functions supported by the module, as well as showing examples of their expected usage.
  *
  * @param {object} - anything
  * @returns {Object}
  * @example
  * var plugins = require('versionist-plugins')
  * module.exports = {
  *   updateVerion: [ plugins.commit, plugins.tag, plugins.push ]
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
  * @summary git commit with version as message
  * @name commit
  * @public
  * @function
  * @memberof plugins
  * @param {string} cwd - Current working directory
  * @param {string} version - Current version
  * @param {callback} callback - The callback that handles the response.
  **/
  commit: (cwd, version, callback) => {
    console.log(`Committing... v${version}`);
    exec(`git commit -a -m "v${version}"`, (err, data) => {
      if (err) {
        callback(err);
      }
      console.log('commited');
      callback(null, data);
    });
  },
  /**
  * @summary git tag with version as message
  * @name tag
  * @public
  * @function
  * @memberof plugins
  * @param {string} cwd - Current working directory
  * @param {string} version - Current version
  * @param {callback} callback - The callback that handles the response.
  **/
  tag: (cwd, version, callback) => {
    console.log('Tagging...');
    exec(`git tag v${version}`, (err, data) => {
      if (err) {
        callback(err);
      }
      console.log('Tagged');
      callback(null, data);
    });
  },
  /**
  * @summary git push all commits + tags
  * @name push
  * @public
  * @function
  * @memberof plugins
  * @param {string} cwd - Current working directory
  * @param {string} version - Current version
  * @param {callback} callback - The callback that handles the response.
  **/
  push: (cwd, version, callback) => {
    console.log('Pushing...');
    exec(`git push origin master --tags`, (err, data) => {
      if (err) {
        callback(err);
      }
      console.log('Pushed');
      callback(null, data);
    });
  }
};

module.exports = plugins;
