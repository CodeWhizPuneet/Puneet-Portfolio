"use client";

import { motion } from "motion/react";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const links = [
  { label: "GitHub", href: "https://github.com/CodeWhizPuneet", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/puneetshankar", icon: Linkedin },
  { label: "LeetCode", href: "https://leetcode.com/u/CodeWhizPuneet", icon: LeetCodeIcon },
  { label: "Email", href: "mailto:puneetshankar2021@gmail.com", icon: Mail },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full rounded-full blur-[80px]"
          style={{ background: "radial-gradient(ellipse, #F59E0B, transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Top section — Logo + Back to top */}
        <div className="flex items-start justify-between mb-16">
          <div>
            <a href="#" className="text-3xl font-black text-primary tracking-tight">
              PS<span className="text-accent">.</span>
            </a>
            <p className="mt-2 text-sm text-tertiary max-w-xs">
              CS student building strong foundations in programming & full stack development.
            </p>
          </div>

          {/* Back to top */}
          <motion.a
            href="#home"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
              <ArrowUp className="w-4 h-4 text-secondary group-hover:text-accent transition-colors duration-300" />
            </div>
            <span className="text-[9px] font-mono uppercase tracking-widest text-tertiary group-hover:text-accent transition-colors duration-300">
              Top
            </span>
          </motion.a>
        </div>

        {/* Middle section — Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-4">
              Built With
            </h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li>Next.js 16</li>
              <li>Tailwind CSS 4</li>
              <li>Framer Motion</li>
              <li>TypeScript</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-4">
              Follow
            </h4>
            <div className="flex items-center gap-3">
              {links.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-tertiary tracking-wide">
            &copy; {new Date().getFullYear()} Puneet Shankar. All rights reserved.
          </p>

          <p className="text-xs text-tertiary/60 font-mono flex items-center gap-1.5">
            Designed &amp; crafted with{" "}
            <Heart className="w-3 h-3 text-accent-hot fill-accent-hot inline" />
            by Puneet
          </p>
        </div>
      </div>
    </footer>
  );
}
