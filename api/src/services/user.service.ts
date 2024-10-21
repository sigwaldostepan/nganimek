import { ResponseError } from "@/errors/error-response";
import { UserRepository } from "@/repositories/user.repository";
import { User } from "@/schema/user.schema";

export class UserService {
  private readonly userRepository = new UserRepository();

  async getProfile(userPayload: User) {
    if (!userPayload) {
      throw new ResponseError(401, "Unauthorized brok");
    }

    const userFromDB = await this.userRepository.getUserById(userPayload.id);

    if (!userFromDB) {
      throw new ResponseError(404, "User ga ketemu bjir");
    }

    return userFromDB;
  }
}
