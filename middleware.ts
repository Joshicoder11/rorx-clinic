import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

const PUBLIC_PATHS = ["/admin/login", "/api/auth/login", "/api/auth/logout", "/api/appointments", "/api/contact"];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Allow all public paths and static content
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/fonts") ||
    pathname === "/" ||
    pathname.startsWith("/api/appointments") && request.method === "POST" ||
    pathname.startsWith("/api/contact") && request.method === "POST" ||
    pathname === "/admin/login"
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin") || (pathname.startsWith("/api/appointments") && request.method === "GET") || (pathname.startsWith("/api/contact") && request.method === "GET")) {
    const token = request.cookies.get("token")?.value;
    if (!token || !verifyToken(token)) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/appointments", "/api/appointments/:path*", "/api/contact", "/api/contact/:path*"],
};
