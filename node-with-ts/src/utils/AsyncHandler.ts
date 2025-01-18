import { type NextFunction, Request, Response } from "express";

type RequestHandler = (req: Request, res: Response, next: NextFunction) => void;

const asyncHandler = (reqHandler: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(reqHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
