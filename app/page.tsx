import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import { ModeToggle } from "../components/ModeToggle";

// This is a Server Component
export default async function SignInPage() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      Hi
    </div>
  );
}
