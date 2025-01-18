import { ErrorRequestHandler } from "express";
import { ApiResponse } from "../utils/ApiResponse.js";

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.stack);
  res
    .status(err.statusCode || 500)
    .json(
      new ApiResponse(
        err.statusCode || 500,
        null,
        err.message || "Error From Server",
      ),
    );
};

export { errorMiddleware };
