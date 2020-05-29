/* eslint-disable no-console */

/**
 * Helper for logging from a central point troughout the codebase.
 */

/**
 * Logs regular log message to the console.
 *
 * @param {string} message - The message to be logged.
 *
 * @return {undefined}
 */
function log(message) {
  return console.log(message);
}

/**
 * Logs an error message with an optional Error to the console.
 *
 * @param {string} message - The message to be logged.
 * @param {Error} [err] - The Error to be logged.
 *
 * @return {undefined}
 */
function error(message, err) {
  return console.log(message, err);
}

module.exports = {
  log,
  error,
};
