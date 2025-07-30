"use client";

import { ThemeProvider } from "../ThemeProvider";
import Sidebar from "@/components/navigation/Sidebar";
import Navbar from "@/components/navigation/Navbar";
import { User } from "@/app/types/user";

export default function ClientLayout({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen flex flex-col">
          <Navbar user={user} />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}
