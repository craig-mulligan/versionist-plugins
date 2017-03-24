const cmd = require('./utils').cmd;

module.exports = {
  /**
  * @summary build and tag docker image
  * @name build
  * @public
  * @function
  * @memberof docker
  * @param {string} cwd - Current working directory
  * @param {string} version - Current version
  * @param {callback} callback - The callback that handles the response.
  **/
  build: (cwd, version, callback) => {
    if (!process.env.DOCKER_IMAGE) {
      callback(new Error('DOCKER_IMAGE environment variable required'));
    }
    const imageName = `${process.env.DOCKER_IMAGE}:v${version}`;
    console.log(`docker building... ${imageName}`);

    cmd('docker', [ 'build', '-t', `${imageName}`, '.' ], callback);
  },
  /**
  * @summary push a docker image
  * @name push
  * @public
  * @function
  * @memberof docker
  * @param {string} cwd - Current working directory
  * @param {string} version - Current version
  * @param {callback} callback - The callback that handles the response.
  **/
  push: (cwd, version, callback) => {
    const imageName = `${process.env.DOCKER_IMAGE}:v${version}`;
    console.log('docker pushing...');
    cmd('docker', [ 'push', `${imageName}` ], callback);
  }
};
