import type { Metadata } from "next";
import { Poppins, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Sidebar from "@/components/navigation/Sidebar";

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
      <body className={`${poppins.className}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen relative">
            <Sidebar />
          </div>
          <div className="">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
