"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      className="bg-[#bd2222] w-[90%] mt-10 mx-auto  text-white px-3 py-2 rounded-md flex  items-center justify-between "
      onClick={() => signOut()}
    >
      <span className="text-[17px] tracking-wider font-sans">Logout</span>
      <LogOut className="w-5 h-5" />
    </button>
  );
}
