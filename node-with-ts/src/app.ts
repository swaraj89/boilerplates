import express, { ErrorRequestHandler } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { morganFormat } from "./constants.js";
//middlewares
import { errorMiddleware } from "./middlewares/Error.middlewares.js";
//utils
import logger from "./utils/logger.js";
//routes
import { router as healthcheck } from "./routes/healthcheck.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  }),
);

//common middlewares
app.use(
  express.json({
    limit: "16kb",
  }),
);
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes
app.use("/api/v1/healthcheck", healthcheck);

//error middleware
app.use(errorMiddleware);

export default app;
