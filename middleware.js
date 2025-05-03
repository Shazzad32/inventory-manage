// import { NextResponse } from "next/server";

// export function middleware(request) {
//   const isLoggedIn = request.cookies.get("auth")?.value || "";

//   const isLoginPage = request.nextUrl.pathname === "/login";

//   if (!isLoggedIn && !isLoginPage) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   if (isLoggedIn && isLoginPage) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/", "/login"],
// };

// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const authCookie = request.cookies.get("auth");

  const isLoggedIn = authCookie?.value === "true";
  const isLoginPage = request.nextUrl.pathname === "/login";

  if (!isLoggedIn && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLoggedIn && isLoginPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
      Protect all routes:
      - app pages
      - nested routes like /user, /settings, etc.
    */
    "/((?!api|_next|favicon.ico|login).*)",
  ],
};
