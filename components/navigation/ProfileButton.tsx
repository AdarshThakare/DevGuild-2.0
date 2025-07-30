"use client";

import { useEffect } from "react";
import useAuthStore from "@/app/store/AuthStore"; // Zustand store
import Image from "next/image";
import { signIn } from "next-auth/react";
import { User } from "@/app/types/user";

export default function ProfileButton({ user }: { user: User | null }) {
  return (
    <div className="flex items-center gap-2">
      {user ? (
        <Image
          src={user.image || "/fallback-avatar.png"}
          alt={user.name || "User avatar"}
          width={40}
          height={40}
          className="rounded-full"
        />
      ) : (
        <button onClick={() => signIn("google")}>Sign In with Google</button>
      )}
    </div>
  );
}
