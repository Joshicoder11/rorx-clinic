import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export function verifyToken(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET!);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function createToken(payload: object) {
  return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "1h" });
}