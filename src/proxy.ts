import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "biztools-language";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only run on the homepage
  if (pathname !== "/") {
    return NextResponse.next();
  }

  // Check if the user has already selected a language
  const savedLanguage = request.cookies.get(COOKIE_NAME)?.value;

  if (savedLanguage === "en") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  if (savedLanguage === "ja") {
    return NextResponse.next();
  }

  // Detect browser language
  const acceptLanguage =
    request.headers.get("accept-language") || "";

  const prefersJapanese =
    acceptLanguage.toLowerCase().startsWith("ja");

  if (prefersJapanese) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/en", request.url));
}

export const config = {
  matcher: ["/"],
};