"use client";

import { useRef, useCallback, useState, useEffect, type MouseEvent } from "react";
import { motion } from "motion/react";
import TextScramble from "./TextScramble";
import { ArrowRight, Github, ChevronDown, FileDown } from "lucide-react";
import { LeetCodeIcon } from "./icons";

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

        {/* ── Name — letter-by-letter ──
         * clamp floor is 1rem so the 9vw value always wins on real phones
         * (9vw of 390px = 35px; 9vw only falls below 1rem at <178px viewports)
         */}
        <h1 className="text-[clamp(1rem,9vw,9rem)] font-black uppercase leading-[0.85] tracking-tighter text-primary">
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
          <div className="text-base md:text-xl font-mono">
            <TextScramble
              text="CS Student · AI/ML Aspirant · Full Stack Explorer"
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
          className="mt-6 text-sm md:text-base lg:text-lg leading-relaxed text-secondary max-w-2xl"
        >
          Computer Science student specializing in{" "}
          <span className="text-accent font-semibold">AI &amp; Machine Learning</span>,
          building strong fundamentals and exploring full stack development
          while learning to apply ML concepts — one project at a time.
        </motion.p>

        {/* Status + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={stagger(5)}
          className="mt-10 flex flex-col gap-6"
        >
          <StatusBadge />

          {/*
           * CTA button rows:
           * — Row 1: Primary actions (View Projects + Resume)
           * — Row 2: Profile links (GitHub + LeetCode)
           * flex-wrap ensures they never overflow horizontally on any screen.
           */}
          <div className="flex flex-col gap-3">
            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Magnetic
                href="#projects"
                className="glow-button group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-accent text-background font-bold text-sm uppercase tracking-wider hover:bg-accent-hover transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Magnetic>

              <Magnetic
                href="/resume"
                className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-accent/30 text-accent font-bold text-sm uppercase tracking-wider hover:bg-accent/10 hover:border-accent/50 backdrop-blur-sm transition-all duration-300"
              >
                <FileDown className="w-4 h-4" />
                <span>Resume</span>
              </Magnetic>
            </div>

            {/* Profile / social links */}
            <div className="flex flex-wrap items-center gap-3">
              <Magnetic
                href="https://github.com/CodeWhizPuneet"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-lg border border-border/60 text-secondary font-bold text-sm uppercase tracking-wider hover:border-accent/40 hover:text-primary backdrop-blur-sm transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </Magnetic>

              <Magnetic
                href="https://leetcode.com/u/CodeWhizPuneet"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-lg border border-border/60 text-secondary font-bold text-sm uppercase tracking-wider hover:border-accent/40 hover:text-primary backdrop-blur-sm transition-all duration-300"
              >
                <LeetCodeIcon className="w-4 h-4" />
                <span>LeetCode</span>
              </Magnetic>
            </div>
          </div>
        </motion.div>

        {/* Scramble role text — appears after delay; reflects AI/ML journey */}
        {showScramble && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-10 font-mono text-xs text-tertiary tracking-wider break-words"
          >
            <TextScramble
              text="// learning ML, building full-stack, growing every day"
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
