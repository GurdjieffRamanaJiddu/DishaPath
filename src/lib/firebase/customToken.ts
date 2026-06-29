import "server-only";
import jwt from "jsonwebtoken";
import { loadServiceAccount } from "./admin";

const FIREBASE_AUDIENCE =
  "https://identitytoolkit.googleapis.com/google.identity.identitytoolkit.v1.IdentityToolkit";

/**
 * Sign a Firebase custom token directly with the service-account key, so the
 * production path never imports firebase-admin/auth (which fails to load on
 * Vercel via the jwks-rsa -> jose ESM chain). The output is a standard Firebase
 * custom token that the client SDK accepts via signInWithCustomToken.
 */
export function signCustomToken(
  uid: string,
  claims: Record<string, unknown>,
): string {
  const sa = loadServiceAccount();
  if (!sa) throw new Error("No FIREBASE_SERVICE_ACCOUNT configured");

  const now = Math.floor(Date.now() / 1000);
  return jwt.sign(
    {
      iss: sa.client_email,
      sub: sa.client_email,
      aud: FIREBASE_AUDIENCE,
      iat: now,
      exp: now + 3600,
      uid,
      claims,
    },
    sa.private_key,
    { algorithm: "RS256" },
  );
}
