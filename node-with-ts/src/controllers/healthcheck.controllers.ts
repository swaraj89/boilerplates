import HttpStatusCode from "../types/HttpStatusCode.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import logger from "../utils/logger.js";

const HealthcheckController = asyncHandler(async (req, res) => {
  res
    .status(HttpStatusCode.OK)
    .json(new ApiResponse(200, { status: "healthy" }, "Server is healthy"));
});

export { HealthcheckController };
