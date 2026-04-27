import { NextResponse } from "next/server";

export function middleware(request) {
  const auth = request.cookies.get("auth")?.value;
  const isLogin = request.nextUrl.pathname === "/login";

  if (!auth && !isLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (auth && isLogin) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
