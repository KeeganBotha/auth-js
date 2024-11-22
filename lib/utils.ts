const bcrypt = require("bcryptjs");

import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function saltAndHashPassword(password: string) {
  try {
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw new Error("Password hashing failed");
  }
}

export async function comparePasswords(
  password: string,
  hashedPassword2: string
) {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword2);
    return isMatch;
  } catch (error) {
    console.error("error matching passwords", error);
    throw new Error("password compare failed");
  }
}
