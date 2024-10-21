import { ResponseError } from "@/errors/error-response";
import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (
  err: ResponseError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    statusCode: err.statusCode,
    message: err.message,
  });
};
