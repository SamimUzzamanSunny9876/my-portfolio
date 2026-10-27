"use client";

import React, { useState } from "react";
import { contactData, heroData } from "@/data/data";
import { Icon } from "./Icons";

export default function Contact() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id={contactData.sectionId} className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Connect Directly</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {contactData.sectionTitle}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            {contactData.sectionSubtitle}
          </p>
        </div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactData.contactCards.map((card) => {
            const isCopied = copiedId === card.id;
            return (
              <div
                key={card.id}
                className="group rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 p-6 backdrop-blur-xl flex flex-col justify-between shadow-xl shadow-black/30 hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon name={card.icon} size={22} className="w-5.5 h-5.5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded-md bg-slate-800/60 border border-white/5">
                      {card.type}
                    </span>
                  </div>

                  <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-1">
                    {card.label}
                  </h3>
                  <p className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors break-all">
                    {card.value}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-3">
                  <a
                    href={card.href}
                    target={card.type === "WhatsApp" ? "_blank" : undefined}
                    rel={card.type === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs font-mono uppercase tracking-wider shadow-md shadow-cyan-500/20 transition-all"
                  >
                    <span>Open {card.type}</span>
                    <Icon name="ExternalLink" size={13} className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => handleCopy(card.id, card.value)}
                    className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    title={`Copy ${card.label}`}
                    aria-label={`Copy ${card.label}`}
                  >
                    <Icon
                      name={isCopied ? "Check" : "Copy"}
                      size={15}
                      className={`w-4 h-4 ${isCopied ? "text-emerald-400" : ""}`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Network Profiles Bar */}
        <div className="rounded-2xl bg-slate-900/40 border border-white/10 p-8 backdrop-blur-xl mb-12">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="text-lg font-bold text-white tracking-wide">
              Social & Developer Profiles
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Connect with me on social platforms, explore my repositories, and follow my work.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {heroData.socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-slate-950/60 border border-white/5 hover:border-cyan-500/40 flex flex-col items-center justify-center gap-2.5 text-center transition-all hover:bg-slate-900/80 hover:scale-[1.02]"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 group-hover:bg-cyan-500/20 border border-white/10 group-hover:border-cyan-500/40 flex items-center justify-center text-slate-300 group-hover:text-cyan-300 transition-colors">
                  <Icon name={social.icon} size={20} className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors">
                    {social.platform}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 group-hover:text-slate-400 flex items-center justify-center gap-1 mt-0.5">
                    <span>Visit Profile</span>
                    <Icon name="ArrowRight" size={10} className="w-2.5 h-2.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Location & Availability Status Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/90 to-slate-900/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <Icon name="MapPin" size={20} className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Based in {contactData.contactInfo.location}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Open to remote opportunities worldwide & local collaborations
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Fast response guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
