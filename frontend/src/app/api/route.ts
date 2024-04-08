import { currentUser } from "@clerk/nextjs";

export async function GET() {
  const user: any = await currentUser();

  return Response.json({ user });
}
