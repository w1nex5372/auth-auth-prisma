import bcrypt from "bcrypt";

async function comparePasswords(inputPassword: string, storedHashedPassword: string): Promise<boolean> {
  try {
    const passwordMatch = await bcrypt.compare(inputPassword, storedHashedPassword);
    return passwordMatch;
  } catch (error) {
    console.error("Password hashing error:", error);
    return false;
  }
}

export { comparePasswords };
