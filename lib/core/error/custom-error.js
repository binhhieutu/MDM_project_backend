class DomainError extends Error {
  constructor (message, code, status = 500) {
    super(message);
    this.code = code;
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ResourceNotFoundError extends DomainError {
  constructor (resource, query, code, status = 404) {
    super(`Resource ${resource} was not found.`, code, status);
    this.data = { resource, query };
  }
}

class InternalError extends DomainError {
  constructor (errorCode, status = 500) {
    super(errorCode.message, errorCode.code, status);
  }
}

class ClientError extends DomainError {
  constructor (errorCode, status = 400) {
    super(errorCode.message, errorCode.code, status);
  }
}

module.exports = {
  ResourceNotFoundError,
  InternalError,
  ClientError,
};
