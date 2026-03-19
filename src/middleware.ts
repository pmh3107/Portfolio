import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function unauthorizedResponse() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Portfolio Admin", charset="UTF-8"',
    },
  });
}

function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Basic ")) {
    return false;
  }

  const expectedUser = process.env.ADMIN_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedUser || !expectedPassword) {
    return false;
  }

  const encoded = authHeader.split(" ")[1];

  try {
    const decoded = atob(encoded);
    const [user, password] = decoded.split(":");
    return user === expectedUser && password === expectedPassword;
  } catch {
    return false;
  }
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/admin") || request.nextUrl.pathname.match(/^\/(vi|en)\/admin/)) {
    if (!isAuthorized(request)) {
      return unauthorizedResponse();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:locale/admin/:path*", "/api/admin/:path*"],
};
