import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 4000,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
};
