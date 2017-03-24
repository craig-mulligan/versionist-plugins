const spawn = require('child_process').spawn;

/**
* @summary spawn system command
* @name cmd
* @public
* @function
* @memberof utils
* @param {string} command
* @param {array} args
* @param {callback} callback - The callback that handles the response.
**/
exports.cmd = (command, args, callback) => {
  const child = spawn(command, args);

  child.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  child.stderr.on('data', (data) => {
    console.log(data.toString());
  });

  child.on('error', (err) => {
    console.log(err);
  });

  child.on('close', (code) => {
    if (code !== 0) {
      callback(new Error('Failed: ' + code));
    } else {
      callback(null, code);
    }
  });
};
