import { db } from "@/lib/db";
import { CreateUserSchema } from "@/schema/user.schema";

export class UserRepository {
  private readonly selectOptions = {
    id: true,
    email: true,
    username: true,
    bookmarks: true,
  };

  async getUserById(id: string) {
    return await db.user.findUnique({
      where: {
        id,
      },
      select: this.selectOptions,
    });
  }

  async getUserByEmail(email: string) {
    return await db.user.findUnique({
      where: {
        email,
      },
      select: this.selectOptions,
    });
  }

  async getUserWithPasswordByEmail(email: string) {
    return await db.user.findUnique({
      where: {
        email,
      },
      select: {
        ...this.selectOptions,
        password: true,
      },
    });
  }

  async createUser({ email, username, password }: CreateUserSchema) {
    return await db.user.create({
      data: {
        email,
        username,
        password,
      },
      select: this.selectOptions,
    });
  }
}
