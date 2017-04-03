var conditionTravis = require('@semantic-release/condition-travis');

module.exports = function (cwd, version, cb) {
  var config = {
    env: process.env,
    options: {
      branch: 'master'
    }
  };

  conditionTravis({}, config, cb);
};
