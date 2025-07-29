import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        await signIn("google");
      }}
    >
      <button
        type="submit"
        className="px-4 py-2 border flex gap-3 items-center border-slate-700 dark:border-gray-600 rounded-lg text-slate-700 dark:text-gray-200 hover:border-slate-400 dark:hover:border-gray-400 font-mono hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-300 dark:focus:bg-gray-700 hover:shadow transition duration-150"
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
  );
}
