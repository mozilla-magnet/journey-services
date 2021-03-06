class HttpError extends Error {
  constructor(statusCode, message, errorCode) {
    super(message);

    this.code = errorCode;
    this.httpStatusCode = statusCode;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError);
    } else {
      this.stack = Error(message).stack;
    }
  }
}

module.exports = HttpError;
