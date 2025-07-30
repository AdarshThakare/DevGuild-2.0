import type { Metadata } from "next";
import { Poppins, Outfit } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/navigation/ClientLayout";
import { auth } from "@/auth";
import useAuthStore from "./store/AuthStore";

const poppins = Poppins({
  weight: ["200", "300", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: ["200", "300", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevGuild",
  description: "Developed by P.A.R.K",
};

export default async function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const user = session?.user || null;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ClientLayout user={user}>{children}</ClientLayout>
      </body>
    </html>
  );
}
