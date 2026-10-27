"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { ProjectItemType } from "@/data/data";
import { Icon } from "./Icons";

interface ProjectModalProps {
  project: ProjectItemType | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-950 border border-white/15 shadow-2xl shadow-cyan-500/10 z-10 my-auto text-left">
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/90 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 text-xs font-mono text-slate-400">Project Overview</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <Icon name="X" size={18} className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Project Title & Short Description */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.name}
            </h3>
            <p className="mt-2 text-sm text-cyan-300 font-mono">
              {project.shortDescription}
            </p>
          </div>

          {/* Project Banner Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
            <Image
              src={project.image}
              alt={project.name}
              fill
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
              Architecture & Details
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.mainTechStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges Overcome */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-white/10">
            <div className="flex items-center gap-2 mb-3 text-amber-400">
              <Icon name="Wrench" size={16} className="w-4 h-4" />
              <h4 className="text-sm font-bold uppercase tracking-wider font-mono">
                Key Engineering Challenges Overcome
              </h4>
            </div>
            <div className="space-y-2.5">
              {project.challengesFaced.map((challenge, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Future Plans */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-white/10">
            <div className="flex items-center gap-2 mb-3 text-purple-400">
              <Icon name="Rocket" size={16} className="w-4 h-4" />
              <h4 className="text-sm font-bold uppercase tracking-wider font-mono">
                Upcoming Roadmap & Features
              </h4>
            </div>
            <div className="space-y-2.5">
              {project.futurePlans.map((plan, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">{plan}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs sm:text-sm shadow-md shadow-cyan-500/20 transition-all"
              >
                <span>Live Preview</span>
                <Icon name="ExternalLink" size={14} className="w-3.5 h-3.5" />
              </a>

              <a
                href={project.githubClientLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all"
              >
                <Icon name="Github" size={16} className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-slate-400 hover:text-white text-xs sm:text-sm font-medium hover:bg-slate-800/60 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
