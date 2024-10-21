import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

export const connectDB = async () => {
  try {
    await db.$connect();
    console.log("Connect db success");
  } catch (err) {
    console.log("Failed to connect db");
    process.exit(0);
  } finally {
    db.$disconnect();
  }
};
