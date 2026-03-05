"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { experience } from "@/lib/data";
import TiltCard from "./TiltCard";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const iconMap: Record<string, React.ElementType> = {
  "B.E. Computer Science (AI & ML)": GraduationCap,
  "Project Development": Code2,
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const numberY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 md:py-44 px-6 md:px-12"
    >
      {/* Ambient light */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, #8B5CF6, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Giant background number */}
        <motion.span
          style={{ y: numberY }}
          className="absolute -top-16 -left-4 text-[12rem] md:text-[18rem] font-black leading-none text-white/[0.02] select-none pointer-events-none"
        >
          04
        </motion.span>

        {/* Section header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-[1px] w-12 bg-gradient-to-r from-accent to-transparent" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent">
              &#x2F;&#x2F; experience
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight text-primary"
          >
            My Journey
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px]">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease }}
              className="w-full h-full bg-gradient-to-b from-accent via-accent/30 to-transparent origin-top"
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-16">
            {experience.map((item, i) => {
              const Icon = iconMap[item.role] || Briefcase;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 40, rotateX: 8 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.15, ease }}
                  style={{ perspective: 900 }}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="w-[20px] h-[20px] rounded-full border-2 border-accent bg-background flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full border border-accent/30 animate-[pulse-ring_2s_ease-in-out_infinite]" />
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[calc(50%-40px)] ${
                      isLeft ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <TiltCard maxTilt={6} scale={1.02}>
                    <div className="glass-card rounded-xl p-6 md:p-8 animated-border group">
                      {/* Period badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
                          {item.period}
                        </span>
                      </div>

                      {/* Role + Company */}
                      <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                        {item.role}
                      </h3>
                      <p className="text-sm font-mono text-secondary mb-4">
                        {item.company}
                      </p>

                      {/* Description */}
                      <p className="text-secondary text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Tech tags */}
                      {item.techStack && (
                        <div className="flex flex-wrap gap-1.5">
                          {item.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-[9px] font-mono text-accent/60 bg-accent/[0.04] border border-accent/10 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    </TiltCard>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline end dot */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 -bottom-4"
          >
            <div className="w-[20px] h-[20px] rounded-full bg-accent/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-accent/40" />
            </div>
          </motion.div>
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center text-xs font-mono text-tertiary tracking-wider"
        >
          The journey continues... <span className="text-accent">always leveling up</span>
        </motion.p>
      </div>
    </section>
  );
}
