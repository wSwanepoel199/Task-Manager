import { MiddlewareFactory } from "@/utils/middleware/types";
import { NextFetchEvent, NextRequest } from "next/server";

export const indexMiddleware: MiddlewareFactory =
  (next) => async (request: NextRequest, _next: NextFetchEvent) => {
    const nextUrl = request.nextUrl;

    if (["/"]?.some((path) => nextUrl.pathname.startsWith(path))) {
      console.log("NextUrl => ", nextUrl);
    }

    return next(request, _next);
  };
