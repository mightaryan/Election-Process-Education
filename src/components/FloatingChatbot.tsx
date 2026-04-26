"use client";

import Link from "next/link";
import { MessageSquareText } from "lucide-react";
import { usePathname } from "next/navigation";

export function FloatingChatbot() {
  const pathname = usePathname();

  // Don't show the floating button if we are already on the chat page
  if (pathname === "/chat") return null;

  return (
    <Link href="/chat" className="fixed bottom-6 right-6 z-50 group">
      <div className="relative flex items-center justify-center">
        {/* Glow effect behind the button */}
        <div className="absolute inset-0 bg-primary/40 blur-xl rounded-full group-hover:bg-primary/60 transition-colors duration-300" />
        
        {/* The Button */}
        <div className="relative flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(168,85,247,0.5)] transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] border border-purple-400/50">
          <MessageSquareText className="w-6 h-6 animate-pulse" />
          <span>Ask Me!</span>
        </div>
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#050505] animate-bounce" />
      </div>
    </Link>
  );
}
