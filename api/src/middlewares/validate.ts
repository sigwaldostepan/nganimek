import { createUserSchema, loginSchema } from "@/schema/user.schema";
import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export const validateRegister = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    createUserSchema.parse(req.body);

    next();
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(400).send({
        statusCode: 400,
        success: false,
        message: err.issues,
      });
    }

    next();
  }
};

export const validateLogin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    loginSchema.parse(req.body);

    next();
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(400).send({
        statusCode: 400,
        success: false,
        message: err.issues,
      });
    }
  }
};
