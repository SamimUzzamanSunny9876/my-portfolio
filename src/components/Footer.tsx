"use client";

import React from "react";
import { footerData, heroData, navbarData } from "@/data/data";
import { Icon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.getElementById(href.replace("#", ""));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950 pt-16 pb-12 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5 items-start">
          {/* Brand & Bio (Span 5) */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-white group"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-mono text-sm font-semibold shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                S
              </span>
              <span className="font-mono text-lg font-bold">
                {footerData.brandName}
              </span>
            </a>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {footerData.tagline}
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              {heroData.socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                >
                  <Icon name={social.icon} size={16} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Span 4) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navbarData.navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-400 hover:text-cyan-300 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top & Meta (Span 3) */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-all group"
            >
              <span>{footerData.scrollToTopLabel}</span>
              <Icon
                name="ChevronUp"
                size={16}
                className="w-4 h-4 text-cyan-400 transition-transform group-hover:-translate-y-0.5"
              />
            </button>
            <div className="text-xs font-mono text-slate-500 md:text-right">
              {footerData.builtWith}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>{footerData.copyright}</p>
          <p className="flex items-center gap-1.5">
            Crafted with passion in Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}

