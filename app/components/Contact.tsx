"use client";

import { useState, useRef, type FormEvent } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Loader2,
  CheckCircle2,
  XCircle,
  MapPin,
  Clock,
} from "lucide-react";

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

type Status = "idle" | "loading" | "success" | "error";

const ease = [0.22, 1, 0.36, 1] as const;

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/CodeWhizPuneet",
    icon: Github,
    handle: "@CodeWhizPuneet",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/puneetshankar",
    icon: Linkedin,
    handle: "/puneetshankar",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/CodeWhizPuneet",
    icon: LeetCodeIcon,
    handle: "@CodeWhizPuneet",
  },
  {
    label: "Email",
    href: "mailto:puneetshankar2021@gmail.com",
    icon: Mail,
    handle: "puneetshankar2021@gmail.com",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const numberY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      // Open default mail client with form data
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:puneetshankar2021@gmail.com?subject=${subject}&body=${body}`;

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 md:py-44 px-6 md:px-12"
    >
      {/* Ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-[0.04] pointer-events-none">
        <div
          className="w-full h-full rounded-full blur-[120px]"
          style={{ background: "radial-gradient(ellipse, #F59E0B, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Giant background number */}
        <motion.span
          style={{ y: numberY }}
          className="absolute -top-16 -left-4 text-[12rem] md:text-[18rem] font-black leading-none text-white/[0.02] select-none pointer-events-none"
        >
          05
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
              {/* contact */}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tight text-primary"
          >
            Let&apos;s Talk
          </motion.h2>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="lg:col-span-2 flex flex-col"
          >
            {/* Tagline */}
            <div className="mb-10">
              <p className="text-2xl md:text-3xl font-bold text-primary leading-snug mb-4">
                Got a project or idea?{" "}
                <span className="gradient-text">Let&apos;s build it.</span>
              </p>
              <p className="text-secondary leading-relaxed">
                I&apos;m always open to discussing new opportunities,
                interesting engineering challenges, or potential collaborations.
              </p>
            </div>

            {/* Info cards */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 p-3 rounded-lg border border-border/30 bg-surface/20">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-secondary">India</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-border/30 bg-surface/20">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-secondary">
                  Usually responds within 24 hours
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-2">
                Connect
              </p>
              {socials.map(({ label, href, icon: Icon, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg border border-border/30 bg-surface/20 hover:border-accent/20 hover:bg-accent/[0.03] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary group-hover:text-accent transition-colors duration-200">
                      {label}
                    </p>
                    <p className="text-[11px] font-mono text-tertiary">
                      {handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 md:p-10 space-y-8"
            >
              {/* Name */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`block text-[10px] font-mono uppercase tracking-[0.3em] mb-3 transition-colors duration-300 ${
                    focusedField === "name" ? "text-accent" : "text-secondary"
                  }`}
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your name"
                  className="w-full bg-transparent border-b-2 border-border/50 py-3 text-primary placeholder:text-tertiary/40 outline-none focus:border-accent transition-colors duration-400"
                />
                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-accent"
                  initial={{ width: "0%" }}
                  animate={{
                    width: focusedField === "name" ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3, ease }}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`block text-[10px] font-mono uppercase tracking-[0.3em] mb-3 transition-colors duration-300 ${
                    focusedField === "email" ? "text-accent" : "text-secondary"
                  }`}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="you@example.com"
                  className="w-full bg-transparent border-b-2 border-border/50 py-3 text-primary placeholder:text-tertiary/40 outline-none focus:border-accent transition-colors duration-400"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-accent"
                  initial={{ width: "0%" }}
                  animate={{
                    width: focusedField === "email" ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3, ease }}
                />
              </div>

              {/* Message */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`block text-[10px] font-mono uppercase tracking-[0.3em] mb-3 transition-colors duration-300 ${
                    focusedField === "message" ? "text-accent" : "text-secondary"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell me about your project, idea, or just say hello..."
                  className="w-full bg-transparent border-b-2 border-border/50 py-3 text-primary placeholder:text-tertiary/40 outline-none focus:border-accent transition-colors duration-400 resize-none"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-accent"
                  initial={{ width: "0%" }}
                  animate={{
                    width: focusedField === "message" ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3, ease }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="glow-button w-full py-4 rounded-xl bg-accent text-background font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Feedback */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-green-400/30 bg-green-400/[0.06]"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-sm text-green-400 font-medium">
                    Opening your email client — send the draft to reach me!
                  </p>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-red-400/30 bg-red-400/[0.06]"
                >
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-400 font-medium">
                    Something went wrong. Please try again.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
