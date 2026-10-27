"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { heroData } from "@/data/data";
import { Icon } from "./Icons";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeAnim, setFadeAnim] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeAnim(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % heroData.roles.length);
        setFadeAnim(true);
      }, 250);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.getElementById(href.replace("#", ""));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id={heroData.sectionId}
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-purple-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium shadow-sm shadow-emerald-500/10 mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Hire & Web Projects</span>
            </div>

            {/* Greeting & Name */}
            <p className="text-cyan-400 font-mono text-sm tracking-wide uppercase font-semibold mb-2">
              {heroData.greeting}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              {heroData.name}
            </h1>

            {/* Dynamic Rotating Role */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mr-2">
                Specialized as
              </span>
              <span
                className={`text-xl sm:text-2xl md:text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 transition-all duration-300 ${
                  fadeAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                {heroData.roles[roleIndex]}
              </span>
            </div>

            {/* Tagline & Short Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-3 max-w-2xl">
              {heroData.tagline}
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-2xl">
              {heroData.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href={heroData.ctaButtons.primary.href}
                onClick={(e) => handleScrollTo(e, heroData.ctaButtons.primary.href)}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>{heroData.ctaButtons.primary.label}</span>
                <Icon
                  name="ArrowRight"
                  size={16}
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href={heroData.ctaButtons.secondary.href}
                onClick={(e) => handleScrollTo(e, heroData.ctaButtons.secondary.href)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-white/10 hover:border-slate-600 transition-all shadow-sm"
              >
                <span>{heroData.ctaButtons.secondary.label}</span>
              </a>

              <a
                href={heroData.resume.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 text-sm font-mono border border-slate-700/80 hover:border-cyan-500/40 hover:scale-[1.02] transition-all shadow-sm"
                title="View & Download CV"
              >
                <Icon name="Download" size={15} className="w-3.5 h-3.5 text-cyan-400" />
                <span>View / Download CV</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 mr-2">
                Connect:
              </span>
              {heroData.socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="w-10 h-10 rounded-xl bg-slate-900/70 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800/80 hover:scale-105 active:scale-95 transition-all shadow-sm"
                >
                  <Icon name={social.icon} size={18} className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Portrait & Tech Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-tr from-cyan-500/30 via-indigo-500/25 to-purple-500/30 blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

              {/* Portrait Frame Container */}
              <div className="p-1 rounded-[28px] bg-gradient-to-b from-cyan-500/40 via-indigo-500/20 to-purple-500/40 shadow-2xl backdrop-blur-xl">
                <div className="relative rounded-[24px] overflow-hidden bg-slate-950 aspect-[4/5] group">
                  <Image
                    src={heroData.profileImage.src}
                    alt={heroData.profileImage.alt}
                    fill
                    unoptimized
                    priority
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                  {/* Floating Identity Card inside photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{heroData.name}</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <div className="text-xs font-mono text-cyan-300">
                        {heroData.designation}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono uppercase text-slate-400">
                        Dhaka, BD
                      </div>
                      <div className="text-xs font-mono font-bold text-emerald-400">
                        Active
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats Strip beneath image */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-slate-900/80 rounded-b-[24px] border-t border-white/5 text-center">
                  <div className="p-2 rounded-xl bg-slate-950/60 border border-white/5">
                    <div className="text-cyan-400 font-mono font-bold text-base">5+ Mo</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Web Dev</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-950/60 border border-white/5">
                    <div className="text-indigo-400 font-mono font-bold text-base">3+ Apps</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Built</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-950/60 border border-white/5">
                    <div className="text-emerald-400 font-mono font-bold text-base">CSE</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Student</div>
                  </div>
                </div>
              </div>

              {/* Floating Orbit Badges */}
              <div className="hidden sm:flex absolute -top-4 -right-4 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-xl shadow-cyan-500/20 items-center gap-1.5 backdrop-blur-md">
                <Icon name="Atom" size={14} className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                <span>Next.js 16 + React 19</span>
              </div>
              <div className="hidden sm:flex absolute -bottom-4 -left-4 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/40 text-purple-300 text-xs font-mono shadow-xl shadow-purple-500/20 items-center gap-1.5 backdrop-blur-md">
                <Icon name="Rocket" size={14} className="w-3.5 h-3.5 text-purple-400" />
                <span>AI-Native Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
