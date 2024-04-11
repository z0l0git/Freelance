import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/sign",
    "/zolo",
    "/testAzaa",
    "/sainaa",
    "/munkhjin",
    "/Chinzorig",
    "/battulga",
    "/barkhas",
    "/contact",
    "/projects",
    "/profile",
    "/user-profile",
    "/profile",
    "/new-gig",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
