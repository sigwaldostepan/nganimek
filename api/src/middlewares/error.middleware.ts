import { ResponseError } from "@/errors/error-response";
import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (
  err: ResponseError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.statusCode).json({
    success: false,
    statusCode: err.statusCode,
    message: err.message,
  });
};
