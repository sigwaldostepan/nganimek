import { z } from "zod";

export type User = {
  id: string;
  email: string;
  username: string;
  password: string;
  provider: string;
};

export const createUserSchema = z.object({
  email: z
    .string({ required_error: "Mana emailnya kocak" })
    .email({ message: "Kasi email yg bener" }),
  username: z.string().optional(), // by default not needed, automatically will generate a username
  password: z
    .string({ required_error: "Mana passwordnya bjir" })
    .min(8, "Password minimal 8 karakter")
    .max(32, "Kepanjangan password lu, maks 32 karakter ae bang"),
});

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Mana emailnya kocak" })
    .email({ message: "Kasi email yg bener" }),
  password: z
    .string({ required_error: "Mana passwordnya bjir" })
    .min(8, "Password minimal 8 karakter")
    .max(32, "Kepanjangan password lu, maks 32 karakter ae bang"),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
