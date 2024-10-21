import bcrypt from "bcrypt";
import { ResponseError } from "@/errors/error-response";
import { UserRepository } from "@/repositories/user.repository";
import { nanoid } from "nanoid";

export class AuthService {
  private readonly userRepository = new UserRepository();

  async register(email: string, password: string) {
    const emailExist = await this.userRepository.getUserByEmail(email);

    if (emailExist) {
      throw new ResponseError(409, "Emailnya udh kepake nich");
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const generatedUsername = "user-" + nanoid(12);

    return await this.userRepository.createUser({
      email,
      username: generatedUsername,
      password: hashedPassword,
    });
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.getUserWithPasswordByEmail(email);

    if (!user) {
      throw new ResponseError(404, "Waduh, akun kamu ga ketemu");
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
      throw new ResponseError(401, "Password salah bre");
    }

    return {
      id: user.id,
      email: user.email,
      username: user.username,
    };
  }
}
