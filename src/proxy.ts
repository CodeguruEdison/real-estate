import { clerkMiddleware, createRouteMatcher, type ClerkMiddlewareAuth } from "@clerk/nextjs/server";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/settings(.*)",
  "/api/private(.*)",
]);

const isPublicRoute = createRouteMatcher([
  "/",
  "/properties(.*)",
  "/pricing(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/public(.*)",
]);
const isOnboardingRoute = createRouteMatcher([
  "/onboarding(.*)",
]);

const isAgentRoute = createRouteMatcher([
  "/api/agent(.*)",
]);
export default clerkMiddleware(async (auth: ClerkMiddlewareAuth, req: NextRequest)=>{
   if (isProtectedRoute(req)) {
     return NextResponse.next();
   }
  
   
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
