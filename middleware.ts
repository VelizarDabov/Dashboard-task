import { authMiddleware } from "@clerk/nextjs/server";

 
export default authMiddleware({
  publicRoutes: [
    '/',
    '/dashboard',
    '/api/webhook/clerk',
    '/api/uploadthing'
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/uploadthing'
  ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)', '/search/:path*'],}