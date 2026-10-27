"use client";

import React, { useState } from "react";
import { skillsData } from "@/data/data";
import { Icon } from "./Icons";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", title: "All Skills", icon: "Sparkles" },
    ...skillsData.categories.map((cat) => ({
      id: cat.id,
      title: cat.title,
      icon: cat.icon,
    })),
  ];

  const displayedCategories =
    selectedCategory === "all"
      ? skillsData.categories
      : skillsData.categories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id={skillsData.sectionId} className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {skillsData.sectionTitle}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            {skillsData.sectionSubtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-[1.02]"
                    : "bg-slate-900/70 text-slate-300 border border-white/10 hover:border-cyan-500/30 hover:text-white"
                }`}
              >
                <Icon name={tab.icon} size={16} className="w-4 h-4" />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Category Blocks */}
        <div className="space-y-10">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-slate-900/50 border border-white/10 p-6 sm:p-8 backdrop-blur-xl"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Icon name={category.icon} size={18} className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group p-4 rounded-xl bg-slate-950/60 border border-white/5 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-transform">
                          <Icon name={skill.icon} size={16} className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors">
                            {skill.name}
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                            {skill.category}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden mt-3">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

