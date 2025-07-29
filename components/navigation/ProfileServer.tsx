// components/ProfileServer.tsx
import { auth } from "@/auth";
import ProfileClient from "./ProfileClient";

export default async function ProfileServer() {
  const session = await auth();
  const user = session?.user || null;

  return <ProfileClient user={user} />;
}
