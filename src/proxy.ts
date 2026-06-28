import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all paths except API, Next internals, and static files (those with a dot).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
