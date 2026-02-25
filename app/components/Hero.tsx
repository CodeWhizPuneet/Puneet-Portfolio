"use client";

import { useRef, useCallback, useState, useEffect, type MouseEvent } from "react";
import { motion } from "motion/react";
import TextScramble from "./TextScramble";
import { ArrowRight, Github, ChevronDown, FileDown } from "lucide-react";

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

const ease = [0.22, 1, 0.36, 1] as const;

function stagger(i: number) {
  return { duration: 0.8, delay: 0.4 + i * 0.15, ease };
}

/* ── Magnetic wrapper ── */
function Magnetic({
  children,
  className,
  href,
  target,
  rel,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
    el.style.transition = "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)";
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 400);
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </a>
  );
}

/* ── Animated letter ── */
function AnimatedChar({
  char,
  delay,
  className,
}: {
  char: string;
  delay: number;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ y: "120%", opacity: 0, rotateX: 90 }}
      animate={{ y: "0%", opacity: 1, rotateX: 0 }}
      transition={{ duration: 0.8, delay, ease }}
      className={`inline-block ${className ?? ""}`}
      style={{ display: char === " " ? "inline" : undefined }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

/* ── Status badge ── */
function StatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.8, ease }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
      </span>
      <span className="text-xs font-mono text-secondary">
        Available for opportunities
      </span>
    </motion.div>
  );
}

export default function Hero() {
  const firstName = "Puneet";
  const lastName = "Shankar";
  const baseDelay = 0.6;
  const [showScramble, setShowScramble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowScramble(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Ambient light — top */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[400px] opacity-[0.07] pointer-events-none">
        <div
          className="w-full h-full rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(ellipse, #F59E0B, transparent 70%)",
          }}
        />
      </div>

      {/* Geometric decoration — right */}
      <div className="absolute right-0 md:right-8 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
        <motion.svg
          initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
          animate={{ opacity: 0.12, rotate: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease }}
          width="500"
          height="500"
          viewBox="0 0 500 500"
          fill="none"
          className="w-[400px] h-[400px] xl:w-[500px] xl:h-[500px]"
        >
          {/* Outer dashed circle */}
          <motion.circle
            cx="250" cy="250" r="240"
            stroke="#F59E0B" strokeWidth="0.5" strokeDasharray="4 8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, rotate: 360 }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            style={{ transformOrigin: "250px 250px" }}
          />
          {/* Middle circle */}
          <motion.circle
            cx="250" cy="250" r="180"
            stroke="#F59E0B" strokeWidth="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, rotate: -360 }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            style={{ transformOrigin: "250px 250px" }}
          />
          {/* Inner pulsing circle */}
          <motion.circle
            cx="250" cy="250" r="100"
            stroke="#F59E0B" strokeWidth="1" strokeDasharray="2 12"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            style={{ transformOrigin: "250px 250px" }}
          />
          {/* Cross lines */}
          <line x1="250" y1="10" x2="250" y2="490" stroke="#F59E0B" strokeWidth="0.2" />
          <line x1="10" y1="250" x2="490" y2="250" stroke="#F59E0B" strokeWidth="0.2" />
          <line x1="50" y1="50" x2="450" y2="450" stroke="#F59E0B" strokeWidth="0.15" />
          <line x1="450" y1="50" x2="50" y2="450" stroke="#F59E0B" strokeWidth="0.15" />
          {/* Center dot */}
          <circle cx="250" cy="250" r="4" fill="#F59E0B" />
          {/* Orbital dots */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            style={{ transformOrigin: "250px 250px" }}
          >
            <circle cx="250" cy="70" r="3" fill="#F59E0B" opacity="0.6" />
          </motion.g>
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            style={{ transformOrigin: "250px 250px" }}
          >
            <circle cx="430" cy="250" r="2" fill="#F59E0B" opacity="0.4" />
          </motion.g>
        </motion.svg>
      </div>

      {/* Giant watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-[18rem] md:text-[28rem] lg:text-[36rem] font-black text-white/[0.015] leading-none tracking-tighter"
        >
          PS
        </motion.span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12">
        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={stagger(0)}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-[1px] w-12 bg-gradient-to-r from-accent to-transparent" />
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent">
            Portfolio &apos;26
          </span>
        </motion.div>

        {/* ── Name — letter-by-letter ── */}
        <h1 className="text-[clamp(3.5rem,9vw,9rem)] font-black uppercase leading-[0.85] tracking-tighter text-primary">
          <span className="block overflow-hidden whitespace-nowrap">
            {firstName.split("").map((char, i) => (
              <AnimatedChar key={`f-${i}`} char={char} delay={baseDelay + i * 0.07} />
            ))}
          </span>
          <span className="block overflow-hidden whitespace-nowrap">
            {lastName.split("").map((char, i) => (
              <AnimatedChar
                key={`l-${i}`}
                char={char}
                delay={baseDelay + firstName.length * 0.07 + 0.12 + i * 0.07}
                className="gradient-text"
              />
            ))}
          </span>
        </h1>

        {/* Subtitle — scramble text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={stagger(3)}
          className="mt-8 flex items-center gap-3"
        >
          <div className="h-6 w-[3px] bg-accent rounded-full" />
          <div className="text-lg md:text-xl font-mono">
            <TextScramble
              text="CS Student · Full Stack Explorer"
              className="text-accent"
              delay={1600}
              speed={25}
            />
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              className="ml-1 text-accent"
            >
              _
            </motion.span>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={stagger(4)}
          className="mt-6 text-base md:text-lg leading-relaxed text-secondary max-w-2xl"
        >
          Computer Science student specializing in AI &amp; ML, focused on
          building strong programming foundations and exploring full stack
          development — one project at a time.
        </motion.p>

        {/* Status + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={stagger(5)}
          className="mt-10 flex flex-col gap-6"
        >
          <StatusBadge />

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Magnetic
              href="#projects"
              className="glow-button group relative inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-accent text-background font-bold text-sm uppercase tracking-wider hover:bg-accent-hover transition-all duration-300"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Magnetic>

            <Magnetic
              href="/resume"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg border border-accent/30 text-accent font-bold text-sm uppercase tracking-wider hover:bg-accent/10 hover:border-accent/50 backdrop-blur-sm transition-all duration-300"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </Magnetic>

            <Magnetic
              href="https://github.com/CodeWhizPuneet"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg border border-border/60 text-secondary font-bold text-sm uppercase tracking-wider hover:border-accent/40 hover:text-primary backdrop-blur-sm transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </Magnetic>

            <Magnetic
              href="https://leetcode.com/u/CodeWhizPuneet"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg border border-border/60 text-secondary font-bold text-sm uppercase tracking-wider hover:border-accent/40 hover:text-primary backdrop-blur-sm transition-all duration-300"
            >
              <LeetCodeIcon className="w-4 h-4" />
              <span>LeetCode</span>
            </Magnetic>
          </div>
        </motion.div>

        {/* Scramble role text — appears after delay */}
        {showScramble && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-10 font-mono text-xs text-tertiary tracking-wider"
          >
            <TextScramble
              text="// learning, building, growing — one project at a time"
              delay={200}
              speed={15}
            />
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-tertiary">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-accent/50" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
