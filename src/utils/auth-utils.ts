import { Input } from "@/features/auth/mutations/login";
import { SecurePassword } from "@blitzjs/auth/secure-password";
import { AuthenticationError } from "blitz";
import db from "db";

export const authenticateUser = async (rawEmail: string, rawPassword: string) => {
  const { email, password } = Input.parse({ email: rawEmail, password: rawPassword });
  const user = await db.user.findFirst({ where: { email } });
  if (!user) throw new AuthenticationError();

  const result = await SecurePassword.verify(user.hashedPassword, password);

  if (result === SecurePassword.VALID_NEEDS_REHASH) {
    // Upgrade hashed password with a more secure hash
    const improvedHash = await SecurePassword.hash(password);
    await db.user.update({ where: { id: user.id }, data: { hashedPassword: improvedHash } });
  }

  const { hashedPassword, ...rest } = user;
  return rest;
};
