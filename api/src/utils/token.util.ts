import { config } from "@/config";
import jwt from "jsonwebtoken";

type JWTPayload = {
  id: string;
  email: string;
  username: string;
};

export const signJWT = (payload: JWTPayload, secretKey: string) => {
  return jwt.sign(payload, secretKey, {
    expiresIn: "1d",
  });
};

export const verifyJWT = (token: string) => {
  return jwt.verify(token, config.JWT_SECRET_KEY!);
};
