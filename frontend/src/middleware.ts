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
    "/freelancers",
    "/profile",
    "/projectDetail",
    "/chat",
    "/user-profile",
    "/new-gig",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
