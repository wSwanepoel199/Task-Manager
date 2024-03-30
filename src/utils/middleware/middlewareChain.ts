import { NextMiddleware, NextResponse } from "next/server";
import { MiddlewareFactory } from "./types";

export const middlewareChain = (
  middlewares: MiddlewareFactory[] = [],
  index = 0
): NextMiddleware => {
  const currentMiddleware = middlewares[index];
  if (currentMiddleware) {
    const nextMiddleware = middlewareChain(middlewares, index + 1);
    return currentMiddleware(nextMiddleware);
  }
  return () => NextResponse.next();
};
