"use client";

import { useState, useRef, useEffect } from "react";
import { GlassCard } from "@/components/GlassCard";
import { Send, User, Bot, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm your Election Guide Assistant. Ask me anything about how to register, voting rules, or the election process!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user" as const, content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages((prev) => [...prev, data.result]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error while processing your request. Please try again." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-8 h-[calc(100vh-5rem)] flex flex-col items-center">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">AI Chat Assistant</h1>
        <p className="text-muted-foreground">Ask me anything about the election process</p>
      </div>

      <GlassCard className="w-full max-w-3xl flex-1 flex flex-col overflow-hidden p-0 sm:p-0">
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={cn(
                "flex w-max max-w-[80%] flex-col gap-2 rounded-2xl px-4 py-3 text-sm",
                msg.role === "user"
                  ? "ml-auto bg-primary text-primary-foreground"
                  : "bg-white/50 dark:bg-black/30 backdrop-blur-sm border border-white/20"
              )}
            >
              <div className="flex items-center gap-2 mb-1 opacity-80 text-xs font-semibold">
                {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
                {msg.role === "user" ? "You" : "Assistant"}
              </div>
              <p className="leading-relaxed">{msg.content}</p>
            </div>
          ))}
          {isLoading && (
            <div className="flex w-max max-w-[80%] flex-col gap-2 rounded-2xl px-4 py-3 text-sm bg-white/50 dark:bg-black/30 backdrop-blur-sm border border-white/20">
              <div className="flex items-center gap-2 mb-1 opacity-80 text-xs font-semibold">
                <Bot size={14} /> Assistant
              </div>
              <Loader2 className="w-5 h-5 animate-spin text-primary" />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-white/10 dark:bg-black/10 border-t border-white/20">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. How do I register to vote?"
              className="flex-1 rounded-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="rounded-full w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              <Send size={20} className={cn(isLoading && "opacity-0")} />
              {isLoading && <Loader2 size={20} className="absolute animate-spin" />}
            </button>
          </form>
        </div>
      </GlassCard>
    </div>
  );
}
