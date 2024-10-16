import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "@/config";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();
const PORT = config.port;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Bro mengakses API Nganimek");
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
