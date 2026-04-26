import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { FloatingChatbot } from "@/components/FloatingChatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Election Guide Assistant",
  description: "Your interactive guide to understanding the election process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-mesh flex flex-col text-foreground`}>
        {/* Glowing stars background layer */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-stars" />
        
        <Navbar />
        <main className="flex-1 pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
          {children}
        </main>
        <FloatingChatbot />
      </body>
    </html>
  );
}
