"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";

const timelineEvents = [
  {
    date: "Spring - Summer",
    title: "Primaries and Caucuses",
    description: "States hold primaries or caucuses to vote for their preferred party nominee.",
  },
  {
    date: "July - August",
    title: "National Conventions",
    description: "Political parties hold conventions to officially nominate their candidates for President and Vice President.",
  },
  {
    date: "September - October",
    title: "Presidential Debates",
    description: "Candidates participate in televised debates to discuss their platforms and debate key issues.",
  },
  {
    date: "First Tuesday in Nov",
    title: "Election Day",
    description: "Registered voters cast their ballots. Many states also allow early voting or mail-in voting prior to this date.",
  },
  {
    date: "Mid-December",
    title: "Electoral College Votes",
    description: "Electors meet in their respective states and cast their official votes for President and Vice President.",
  },
  {
    date: "January 6th",
    title: "Congress Counts Electoral Votes",
    description: "Congress meets in a joint session to count the electoral votes and officially declare the winner.",
  },
  {
    date: "January 20th",
    title: "Inauguration Day",
    description: "The President-elect and Vice President-elect take the Oath of Office and officially begin their term.",
  },
];

export default function TimelinePage() {
  return (
    <div className="py-12 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Election Timeline</h1>
        <p className="text-xl text-muted-foreground">Key milestones in the United States Presidential Election process.</p>
      </div>

      <div className="relative border-l-2 border-primary/30 ml-4 md:ml-1/2">
        {timelineEvents.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="mb-10 ml-8 relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)] border-4 border-background" />
            
            <GlassCard className="p-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-3">
                {event.date}
              </span>
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <p className="text-muted-foreground text-lg">{event.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
