import Image from "next/image";
import { ModeToggle } from "../ModeToggle";

import { useSidebarStore } from "@/app/store/SidebarStore";
import { Menu, Plus } from "lucide-react";
import SignInButton from "./SignInButton";
import { User } from "@/app/types/user";
import ProfileButton from "./ProfileButton";

export default function Navbar({ user }: { user: User | null }) {
  const { toggleSidebar } = useSidebarStore();

  return (
    <nav className="w-full max-w-screen h-16 px-2 sm:ps-6 sm:pe-10 overflow-x-clip bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-sm z-10">
      <div className="flex items-center gap-1 sm:gap-4">
        <button
          onClick={toggleSidebar}
          className="text-black dark:text-white p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <Menu />
        </button>

        <div className="flex items-center md:gap-4">
          <Image
            src={"/devlogo.png"}
            alt="DEVELOPERS' GUILD LOGO"
            width={100}
            height={100}
            className="size-12 rounded-2xl hidden sm:block"
          />

          <p className="sm:ms-2 text-2xl font-bold tracking-wide">
            Dev<span className="text-blue-400">Guild</span>
          </p>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-1 sm:gap-4  md:mx-5">
        <ModeToggle />
        {user && (
          <button
            //   onClick={() => {
            //     router.push(`/project/create/${user?.id}`);
            //   }}
            className="bg-[#416dff] hover:bg-[#375cd4] text-white px-1 sm:px-4 py-1 sm:py-[8px] rounded-full sm:rounded-md flex items-center gap-2"
          >
            <Plus />
            <span className="hidden sm:block">Create Project</span>
          </button>
        )}
        {user ? <ProfileButton user={user} /> : <SignInButton />}
      </div>
    </nav>
  );
}
