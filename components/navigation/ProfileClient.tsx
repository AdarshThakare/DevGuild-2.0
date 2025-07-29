"use client";

import { useEffect } from "react";
import useAuthStore from "@/app/store/AuthStore";
import { User } from "@/app/types/user";

export default function ProfileClient({ user }: { user: User | null }) {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    setUser(user);
  }, [user, setUser]);

  return null; // no UI, just side-effect to set Zustand state
}
