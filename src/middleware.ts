// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/login", request.url));
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: [
//     "/Dashboard",
//     "/Dashboard/skills",
//     "/Dashboard/blogs",
//     "/Dashboard/projects",
//   ],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // You can add additional token validation logic here if necessary

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/Dashboard",
    "/Dashboard/skills",
    "/Dashboard/blogs",
    "/Dashboard/projects",
  ],
};
