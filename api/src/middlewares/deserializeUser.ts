import { Request, Response, NextFunction } from "express";
import { User } from "@/schema/user.schema";
import { ResponseError } from "@/errors/error-response";
import { verifyJWT } from "@/utils/token.util";

export const deserializeUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies["nganimek-token"];

  try {
    const decoded = verifyJWT(token);

    req.user = decoded as User;
    next();
  } catch (err) {
    next(new ResponseError(401, "Token invalid"));
  }
};
