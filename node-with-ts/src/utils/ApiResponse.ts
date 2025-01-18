import HttpStatusCode from "../types/HttpStatusCode.js";

interface ApiResponseInterface {
  statusCode: HttpStatusCode;
  data: any;
  message: string;
  success: boolean;
}

class ApiResponse {
  data: any;
  statusCode: HttpStatusCode;
  message: string;
  success: boolean;

  constructor(statusCode: HttpStatusCode, data: any, message = "success") {
    this.data = data;
    this.statusCode = statusCode;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { ApiResponse, ApiResponseInterface };
