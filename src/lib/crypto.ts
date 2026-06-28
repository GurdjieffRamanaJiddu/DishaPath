import "server-only";
import { createHash, randomInt } from "node:crypto";

const SECRET = process.env.APP_SECRET ?? "dev-only-secret-change-me";

/** Salted SHA-256 hash of a PIN. Deterministic so we can compare on login. */
export function hashPin(pin: string): string {
  return createHash("sha256").update(`${pin}::${SECRET}`).digest("hex");
}

export function verifyPin(pin: string, hash: string): boolean {
  return hashPin(pin) === hash;
}

const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; // no easily-confused chars

/** Short, human-friendly login code, e.g. "K7P2QX". */
export function generateLoginCode(length = 6): string {
  let out = "";
  for (let i = 0; i < length; i++) {
    out += CODE_ALPHABET[randomInt(CODE_ALPHABET.length)];
  }
  return out;
}

/** 4-digit numeric PIN as a string (keeps leading zeros). */
export function generatePin(): string {
  return String(randomInt(0, 10000)).padStart(4, "0");
}
