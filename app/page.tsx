import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import { ModeToggle } from "../components/ModeToggle";

// This is a Server Component
export default async function SignInPage() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      {user ? (
        <>
          <Image
            src={user.image || ""}
            alt={user.name || "User avatar"}
            width={80}
            height={80}
            className="rounded-full mb-4"
          />
          <p className="text-xl font-mono text-slate-700 dark:text-slate-200">
            Welcome, {user.name}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {user.email}
          </p>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
            className="mt-6"
          >
            <button
              type="submit"
              className="px-4 py-2 rounded-xl tracking-wider font-mono bg-red-500 hover:bg-red-600 text-white"
            >
              Logout
            </button>
            <ModeToggle />
          </form>
        </>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button
            type="submit"
            className="px-4 py-2 border flex gap-6 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 font-mono hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
          >
            <Image
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              width={24}
              height={24}
              loading="lazy"
              alt="google logo"
            />
            <span>Continue with Google</span>
          </button>
        </form>
      )}
    </div>
  );
}
