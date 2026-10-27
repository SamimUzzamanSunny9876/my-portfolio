import React from "react";
import { educationAndExperienceData } from "@/data/data";
import { Icon } from "./Icons";

export default function EducationAndExperience() {
  return (
    <section id={educationAndExperienceData.sectionId} className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-indigo-500/5 to-purple-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Academic & Practical Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {educationAndExperienceData.sectionTitle}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            {educationAndExperienceData.sectionSubtitle}
          </p>
        </div>

        {/* Dual Track Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Track 1: Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-sm shadow-cyan-500/10">
                <Icon name="GraduationCap" size={20} className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Academic Qualifications</h3>
                <p className="text-xs font-mono text-cyan-400">Computer Science & Engineering</p>
              </div>
            </div>

            {educationAndExperienceData.education.map((edu) => (
              <div
                key={edu.id}
                className="rounded-2xl bg-slate-900/60 border border-white/10 p-6 sm:p-7 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300"
              >
                {/* Decorative border highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />

                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-slate-300">{edu.institution}</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-white/10 text-cyan-300 font-mono text-xs">
                    <Icon name="Calendar" size={12} className="w-3 h-3 text-cyan-400" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-4">
                  <span className="inline-flex items-center gap-1">
                    <Icon name="MapPin" size={12} className="w-3 h-3 text-slate-500" />
                    {edu.location}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400">{edu.status}</span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {edu.description}
                </p>

                {/* Course Highlights */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                    Core Focus & Coursework:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 border border-white/5 text-xs text-slate-300"
                      >
                        <Icon name="CheckCircle" size={14} className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Track 2: Experience & Practical Training */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-sm shadow-purple-500/10">
                <Icon name="Briefcase" size={20} className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Practical Experience</h3>
                <p className="text-xs font-mono text-purple-400">Intensive Full-Stack Training & Projects</p>
              </div>
            </div>

            {educationAndExperienceData.experience.map((exp) => (
              <div
                key={exp.id}
                className="rounded-2xl bg-slate-900/60 border border-white/10 p-6 sm:p-7 backdrop-blur-xl relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300"
              >
                {/* Decorative border highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-600" />

                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-medium text-slate-300">{exp.company}</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-white/10 text-purple-300 font-mono text-xs">
                    <Icon name="Calendar" size={12} className="w-3 h-3 text-purple-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-indigo-300 mb-4">
                  {exp.type}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                    Key Outcomes & Engineering Practices:
                  </div>
                  <div className="space-y-2">
                    {exp.achievements.map((ach, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-white/5 text-xs text-slate-300 leading-relaxed"
                      >
                        <Icon
                          name="CheckCircle"
                          size={15}
                          className="w-4 h-4 text-purple-400 shrink-0 mt-0.5"
                        />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
