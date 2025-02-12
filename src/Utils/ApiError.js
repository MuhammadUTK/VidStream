class ApiError extends Error {
  constructor(message = "Something is wrong", statusCode, errors = [], stack = "") {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.statusCode = statusCode;
    this.errors = errors;
    this.success = false;
    this.data = null;

    if (stack) {
      this.stack = stack;
    }
    else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

export { ApiError };