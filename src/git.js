const cmd = require('./utils').cmd;

module.exports = {
  /**
  * @summary git commit with version as message
  * @name commit
  * @public
  * @function
  * @memberof git
  * @param {string} cwd - Current working directory
  * @param {string} version - Current version
  * @param {callback} callback - The callback that handles the response.
  **/
  commit: (cwd, version, callback) => {
    console.log(`Committing... v${version}`);
    cmd('git', ['commit', '-a', '-m', `v${version}`], callback);
  },
  /**
  * @summary git tag with version as message
  * @name tag
  * @public
  * @function
  * @memberof git
  * @param {string} cwd - Current working directory
  * @param {string} version - Current version
  * @param {callback} callback - The callback that handles the response.
  **/
  tag: (cwd, version, callback) => {
    console.log(`Tagging... v${version}`);
    cmd('git', [ 'tag', '-a', `v${version}`, '-m', `v${version} - automatically bumped by versionist` ], callback);
  },
  /**
  * @summary git push all commits + tags
  * @name push
  * @public
  * @function
  * @memberof git
  * @param {string} cwd - Current working directory
  * @param {string} version - Current version
  * @param {callback} callback - The callback that handles the response.
  **/
  push: (cwd, version, callback) => {
    console.log('Pushing...');
    // Use git push based on config, don't assume origin/master
    cmd('git', [ 'push', '--follow-tags' ], callback);
  }
};
