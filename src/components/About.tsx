import React from "react";
import { aboutData } from "@/data/data";
import { Icon } from "./Icons";

export default function About() {
  return (
    <section id={aboutData.sectionId} className="py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Discover My Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {aboutData.sectionTitle}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            {aboutData.sectionSubtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: The Core Journey (Span 7) */}
          <div className="md:col-span-7 rounded-2xl bg-slate-900/60 border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Icon name="Binary" size={20} className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">The Engineering Journey</h3>
                <p className="text-xs font-mono text-cyan-400">Foundations to Full-Stack Web</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
              {aboutData.paragraphs.programmingJourney}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["C / C++", "Java", "Data Structures", "Algorithms", "TypeScript", "React", "Next.js", "Node.js"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-white/5 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Key Stats Strip (Span 5) */}
          <div className="md:col-span-5 rounded-2xl bg-slate-900/60 border border-white/10 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between group hover:border-indigo-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Icon name="Award" size={20} className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Milestones & Metrics</h3>
                <p className="text-xs font-mono text-indigo-400">Dedication & Output</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {aboutData.stats.map((stat) => (
                <div
                  key={stat.id}
                  className="p-4 rounded-xl bg-slate-950/60 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: AI-Native Workflow (Span 6) */}
          <div className="md:col-span-6 rounded-2xl bg-slate-900/60 border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative group hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Icon name="Sparkles" size={20} className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI-Native Developer Workflow</h3>
                <p className="text-xs font-mono text-purple-400">High-Velocity Prototyping & Clean Code</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {aboutData.paragraphs.workEnjoyment}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                { name: "Antigravity", icon: "Rocket" },
                { name: "Claude Code", icon: "Bot" },
                { name: "Gemini", icon: "Sparkles" },
                { name: "VS Code", icon: "Code" },
                { name: "JetBrains", icon: "Laptop" },
              ].map((tool) => (
                <span
                  key={tool.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs"
                >
                  <Icon name={tool.icon} size={12} className="w-3 h-3 text-purple-400" />
                  <span>{tool.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Beyond Code & Sports Teamwork (Span 6) */}
          <div className="md:col-span-6 rounded-2xl bg-slate-900/60 border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative group hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Icon name="Trophy" size={20} className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Personality & Team Spirit</h3>
                <p className="text-xs font-mono text-emerald-400">Calm under pressure & tactical thinker</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
              {aboutData.paragraphs.personality}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
              {aboutData.hobbiesList.map((hob) => (
                <div
                  key={hob.id}
                  className="p-3 rounded-xl bg-slate-950/50 border border-white/5 flex flex-col items-start gap-1"
                >
                  <div className="text-emerald-400 flex items-center gap-1.5 text-xs font-bold font-mono">
                    <Icon name={hob.icon} size={14} className="w-3.5 h-3.5" />
                    <span>{hob.name}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 leading-tight">
                    {hob.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
