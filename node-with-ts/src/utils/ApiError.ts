import HttpStatusCode from "../types/HttpStatusCode.js";

interface ApiErrorInterface {
  statusCode: HttpStatusCode;
  data: any;
  message: string;
  success: boolean;
  errors: any[];
  stack?: string;
}

class ApiError extends Error implements ApiError {
  statusCode: HttpStatusCode;
  data: any;
  message: string;
  success: boolean;
  errors: any[];
  stack?: string;

  constructor(
    statusCode: HttpStatusCode,
    message = "Something went wrong",
    errors = [],
    stack = "",
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError, ApiErrorInterface };
