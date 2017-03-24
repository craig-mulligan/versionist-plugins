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
    cmd('git', [ 'tag', `v${version}` ], callback);
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
    let remote;
    if (process.env.TRAVIS) {
      remote = `https://${process.env.GITHUB_TOKEN}@$github.com/${process.env.GITHUB_REPO}.git`;
    } else {
      remote = 'origin';
    }

    cmd('git', [ 'push', remote, 'master', '-f', '--tags' ], callback);
  }
};
