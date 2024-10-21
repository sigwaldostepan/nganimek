import { User } from "@/schema/user.schema";
import { UserService } from "@/services/user.service";
import { NextFunction, Request, Response } from "express";

export class UserController {
  private readonly userService = new UserService();

  getProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user: payload } = req;

      const user = await this.userService.getProfile(payload as User);

      res.status(200).send({
        message: "Data user dikirim y",
        success: true,
        data: user,
        statusCode: 200,
      });
    } catch (err) {
      next(err);
    }
  };
}
