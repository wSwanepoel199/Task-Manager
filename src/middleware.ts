import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { middlewareChain } from "./utils/middleware/middlewareChain";
import { indexMiddleware } from "./app/indexMiddleware";

export default middlewareChain([indexMiddleware]);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
