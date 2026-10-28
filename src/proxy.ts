
import { NextRequest, NextResponse } from "next/server";

export function proxy(_request: NextRequest) {
  // Keep the homepage in Japanese.
  // English is available explicitly at /en.
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
