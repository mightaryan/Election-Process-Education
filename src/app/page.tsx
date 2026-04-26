import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { ArrowRight, BookOpen, Clock, ShieldCheck, MessageSquare } from "lucide-react";

import Image from "next/image";

export default function Home() {
  const features = [
    {
      title: "Interactive Guide 📖",
      description: "Step-by-step explanation of the election process from registration to results.",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      href: "/guide",
    },
    {
      title: "AI Assistant 🤖",
      description: "Ask questions and get beginner-friendly, accurate answers about voting.",
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      href: "/chat",
    },
    {
      title: "Election Timeline ⏳",
      description: "Visual timeline of key milestones in the election process.",
      icon: <Clock className="w-8 h-8 text-primary" />,
      href: "/timeline",
    },
    {
      title: "Eligibility Checker ✅",
      description: "Quickly check your eligibility to vote with our simple tool.",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      href: "/eligibility",
    },
  ];

  return (
    <div className="py-12 md:py-20 flex flex-col items-center justify-center space-y-12">

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-6xl">
        <div className="text-center md:text-left space-y-6 max-w-2xl flex-1">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-primary">
            Democracy, Demystified. 🗳️
          </h1>
          <p className="text-xl text-muted-foreground">
            Your comprehensive, easy-to-understand guide to the election process. Learn, ask questions, and get ready to vote. 🇺🇸
          </p>
          <div className="pt-4 flex justify-center md:justify-start gap-4">
            <Link href="/guide">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center shadow-[0_0_20px_rgba(139,92,246,0.5)] gap-2">
                Get Started 🚀 <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>

        {/* Generated Image */}
        <div className="flex-1 w-full max-w-md relative flex justify-center group perspective-[1000px]">
          {/* Animated Glow Behind Image */}
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transition-all duration-500 group-hover:bg-primary/40 group-hover:blur-[60px]" />
          
          {/* 3D Hover Image */}
          <div className="relative z-10 transition-transform duration-500 transform-style-3d group-hover:rotate-y-[-10deg] group-hover:rotate-x-[10deg] group-hover:scale-110">
            <Image
              src="/hero.png"
              alt="Glowing frosted glass ballot box"
              width={400}
              height={400}
              className="animate-in fade-in zoom-in duration-1000 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-500 group-hover:drop-shadow-[0_0_60px_rgba(232,121,249,0.8)]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mt-12">
        {features.map((feature, idx) => (
          <Link key={idx} href={feature.href} className="block group">
            <GlassCard className="h-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.15)] dark:group-hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.5)]">
              <div className="flex flex-col space-y-4">
                <div className="p-3 bg-white/50 dark:bg-black/30 rounded-full w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
