"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData, ProjectItemType } from "@/data/data";
import { Icon } from "./Icons";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItemType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: ProjectItemType) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id={projectsData.sectionId} className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[300px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Featured Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {projectsData.sectionTitle}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            {projectsData.sectionSubtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl overflow-hidden flex flex-col justify-between shadow-xl shadow-black/40 hover:shadow-cyan-500/10 transition-all duration-300"
            >
              {/* Card Header & Mockup Preview */}
              <div>
                {/* Browser Mockup Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 truncate max-w-[150px]">
                    {project.slug}.app
                  </span>
                  <div className="w-6" />
                </div>

                {/* Project Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Floating Action Overlay on Hover */}
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-slate-900/90 border border-white/15 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 flex items-center justify-center transition-colors shadow-lg backdrop-blur-md"
                      title="Open Live Preview"
                    >
                      <Icon name="ExternalLink" size={14} className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.githubClientLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-slate-900/90 border border-white/15 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 flex items-center justify-center transition-colors shadow-lg backdrop-blur-md"
                      title="View Source on GitHub"
                    >
                      <Icon name="Github" size={15} className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.mainTechStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-white/5 text-[11px] font-mono text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.mainTechStack.length > 5 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-white/5 text-[11px] font-mono text-slate-400">
                        +{project.mainTechStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer: Detail Trigger Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleOpenModal(project)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800/80 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 text-slate-200 hover:text-white border border-white/10 hover:border-transparent text-xs font-semibold tracking-wide uppercase font-mono shadow-sm hover:shadow-cyan-500/20 transition-all duration-200"
                >
                  <span>{projectsData.buttonText}</span>
                  <Icon name="ArrowRight" size={14} className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
