"use client";

import { useState } from "react";
import { GlassCard } from "@/components/GlassCard";
import { CheckCircle2, XCircle } from "lucide-react";

export default function EligibilityPage() {
  const [formData, setFormData] = useState({
    citizen: "",
    age: "",
    felony: "",
  });

  const [result, setResult] = useState<"eligible" | "ineligible" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.citizen === "yes" && formData.age === "yes" && formData.felony === "no") {
      setResult("eligible");
    } else {
      setResult("ineligible");
    }
  };

  const handleReset = () => {
    setFormData({ citizen: "", age: "", felony: "" });
    setResult(null);
  };

  return (
    <div className="py-12 flex flex-col items-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Voter Eligibility Checker</h1>
        <p className="text-xl text-muted-foreground">Find out if you meet the basic requirements to vote in U.S. federal elections.</p>
      </div>

      <GlassCard className="w-full max-w-2xl">
        {!result ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <label className="block text-lg font-semibold">1. Are you a U.S. citizen?</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="citizen"
                    value="yes"
                    checked={formData.citizen === "yes"}
                    onChange={(e) => setFormData({ ...formData, citizen: e.target.value })}
                    required
                    className="w-5 h-5 text-primary focus:ring-primary bg-transparent border-white/20"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="citizen"
                    value="no"
                    checked={formData.citizen === "no"}
                    onChange={(e) => setFormData({ ...formData, citizen: e.target.value })}
                    className="w-5 h-5 text-primary focus:ring-primary bg-transparent border-white/20"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-lg font-semibold">2. Will you be 18 years or older on Election Day?</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="age"
                    value="yes"
                    checked={formData.age === "yes"}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    required
                    className="w-5 h-5 text-primary focus:ring-primary bg-transparent border-white/20"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="age"
                    value="no"
                    checked={formData.age === "no"}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-5 h-5 text-primary focus:ring-primary bg-transparent border-white/20"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-lg font-semibold">3. Do you have a current felony conviction? (Rules vary by state, but for general purposes, answer if you are currently serving a sentence for a felony conviction)</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="felony"
                    value="yes"
                    checked={formData.felony === "yes"}
                    onChange={(e) => setFormData({ ...formData, felony: e.target.value })}
                    required
                    className="w-5 h-5 text-primary focus:ring-primary bg-transparent border-white/20"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="felony"
                    value="no"
                    checked={formData.felony === "no"}
                    onChange={(e) => setFormData({ ...formData, felony: e.target.value })}
                    className="w-5 h-5 text-primary focus:ring-primary bg-transparent border-white/20"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors"
            >
              Check Eligibility
            </button>
          </form>
        ) : (
          <div className="text-center py-8 flex flex-col items-center space-y-6 animate-in fade-in zoom-in duration-500">
            {result === "eligible" ? (
              <>
                <CheckCircle2 className="w-24 h-24 text-green-500" />
                <h2 className="text-3xl font-bold text-green-500">You appear eligible!</h2>
                <p className="text-lg text-muted-foreground">
                  Based on your answers, you likely meet the federal requirements to vote. Make sure you register in your specific state before their deadline!
                </p>
              </>
            ) : (
              <>
                <XCircle className="w-24 h-24 text-red-500" />
                <h2 className="text-3xl font-bold text-red-500">You may not be eligible.</h2>
                <p className="text-lg text-muted-foreground">
                  Generally, you must be a U.S. citizen and at least 18 years old on Election Day. If you have a felony conviction, your rights vary by state. Please consult your local election office for official rules.
                </p>
              </>
            )}
            <button
              onClick={handleReset}
              className="px-8 py-3 glass rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              Start Over
            </button>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
