const print = (message) => log(message, new Date());

const log = (message, timestamp) => console.log(`${timestamp}: ${message}`);

module.exports = { print, log };
