import type { Metadata } from "next";
import { Poppins, Outfit } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/navigation/ClientLayout";
import ProfileServer from "@/components/navigation/ProfileServer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ProfileServer />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
