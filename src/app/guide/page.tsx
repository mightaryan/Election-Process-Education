"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { ClipboardEdit, Mic, Vote, CheckSquare, Trophy, ArrowRight, ArrowLeft } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Registration",
    description: "The first step is ensuring you are registered to vote in your state before the deadline.",
    details: "Each state has its own voter registration deadlines. You can usually register online, by mail, or in person at designated locations like the DMV.",
    icon: <ClipboardEdit className="w-12 h-12 text-blue-500" />,
  },
  {
    id: 2,
    title: "Campaigning",
    description: "Candidates run their campaigns to outline their platforms and gain public support.",
    details: "During this phase, candidates participate in debates, hold rallies, and run advertisements. It's the best time for voters to research and understand where each candidate stands on key issues.",
    icon: <Mic className="w-12 h-12 text-purple-500" />,
  },
  {
    id: 3,
    title: "Voting",
    description: "Voters cast their ballots either early, by mail, or on Election Day.",
    details: "Election Day is traditionally the first Tuesday following the first Monday in November. Make sure to bring necessary ID if your state requires it, and know your polling location.",
    icon: <Vote className="w-12 h-12 text-red-500" />,
  },
  {
    id: 4,
    title: "Counting",
    description: "Polls close and election officials begin counting the ballots securely.",
    details: "Ballot counting can take days depending on the state's rules, especially with the influx of mail-in ballots. Election security and integrity are closely monitored during this process.",
    icon: <CheckSquare className="w-12 h-12 text-yellow-500" />,
  },
  {
    id: 5,
    title: "Results",
    description: "Results are certified, and the winners prepare to take office.",
    details: "Once all valid votes are counted and certified by state officials, the results are final. For the Presidency, the Electoral College formally casts their votes in December.",
    icon: <Trophy className="w-12 h-12 text-green-500" />,
  },
];

export default function GuidePage() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="py-12 flex flex-col items-center max-w-4xl mx-auto">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-bold">The Election Process</h1>
        <p className="text-xl text-muted-foreground">Follow the steps to understand how elections work.</p>
      </div>

      {/* Progress Tracker */}
      <div className="w-full flex justify-between items-center mb-12 px-4 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-white/20 dark:bg-white/10 -z-10 rounded-full">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-500 ${
              idx <= currentStep ? "bg-primary text-primary-foreground" : "glass text-muted-foreground"
            }`}
          >
            {step.id}
          </div>
        ))}
      </div>

      {/* Step Card */}
      <div className="w-full relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full absolute"
          >
            <GlassCard className="flex flex-col items-center text-center p-8 md:p-12">
              <div className="p-6 bg-white/50 dark:bg-black/30 rounded-full mb-6">
                {steps[currentStep].icon}
              </div>
              <h2 className="text-3xl font-bold mb-4">{steps[currentStep].title}</h2>
              <p className="text-xl font-medium mb-4">{steps[currentStep].description}</p>
              <p className="text-muted-foreground">{steps[currentStep].details}</p>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-8 pt-[450px] md:pt-[350px]">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="flex items-center gap-2 px-6 py-3 rounded-full glass font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Previous
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
        >
          Next <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
