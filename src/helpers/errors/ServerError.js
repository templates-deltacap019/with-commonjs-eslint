const { HTTPStatusCodes } = require('../../constants');

class ServerError extends Error {
  status;

  data;

  constructor(message, data = undefined) {
    super(message);
    this.status = HTTPStatusCodes.SERVER_ERROR;
    this.message = message;
    this.name = 'Server Error';
    this.data = data;
  }
}

module.exports = {
  ServerError,
};
