import { CookieOptions, NextFunction, Request, Response } from "express";
import { AuthService } from "@/services/auth.service";
import { signJWT } from "@/utils/token.util";
import { config } from "@/config";

export class AuthController {
  private readonly authService = new AuthService();

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      const user = await this.authService.register(email, password);

      res.status(201).send({
        message: "Register berhasil",
        success: true,
        data: {
          id: user.id,
          email: user.email,
          username: user.username,
        },
        statusCode: 201,
      });
    } catch (err) {
      next(err);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      const user = await this.authService.login(email, password);

      const JWTPayload = {
        id: user.id,
        username: user.username as string,
        email: user.email,
      };

      const token = signJWT(JWTPayload, config.JWT_SECRET_KEY!);

      res.cookie("nganimek-token", token, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000,
      });
      res
        .status(200)
        .send({
          message: "Login berhasil",
          success: true,
          data: {
            user: JWTPayload,
          },
          statusCode: 200,
        })
        .end();
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}
