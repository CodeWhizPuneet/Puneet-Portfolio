import { Certification } from "@/types";

/**
 * ═══════════════════════════════════════════
 *  CERTIFICATIONS
 *  Add new certificates here. The portfolio
 *  will automatically pick them up.
 * ═══════════════════════════════════════════
 *
 *  Format:
 *  {
 *    title: "Certificate Name",
 *    issuer: "Issuing Organization",
 *    date: "Month Year",
 *    platform: "Platform Name",
 *    url: "https://...",         // optional — verification link
 *  }
 */

export const certifications: Certification[] = [
  // ── Strongest / most recent first ──────────────────────────────
  {
    title: "Microsoft Azure",
    issuer: "Microsoft Elevate & Philanthropies",
    date: "Feb 2026",
    platform: "Microsoft Learn",
    // url: "paste your FICE/Microsoft certificate verification link here",
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    date: "2025",
    platform: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/records/VDS4Q68SGYKA",
  },
  {
    title: "Foundations of AI and Machine Learning",
    issuer: "LinkedIn",
    date: "2025",
    platform: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/records/HS5OZZZSA1GA",
  },
  {
    title: "Prompt Engineering Specialization",
    issuer: "Vanderbilt University",
    date: "Feb 2026",
    platform: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/specialization/0WO2RLPZ3GO8",
  },
  {
    title: "Responsible AI: Applying AI Principles with Google Cloud",
    issuer: "Google Cloud",
    date: "2025",
    platform: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/records/ZYW6RF3FTGEO",
  },
  {
    title: "Introduction to Retrieval Augmented Generation (RAG)",
    issuer: "IBM",
    date: "Sep 2025",
    platform: "IBM SkillsBuild",
    // url: "paste your IBM SkillsBuild badge/certificate URL here",
  },
  {
    title: "Ethical Considerations for Generative AI",
    issuer: "IBM",
    date: "Sep 2025",
    platform: "IBM SkillsBuild",
    // url: "paste your IBM SkillsBuild badge/certificate URL here",
  },
  {
    title: "Python Data Structures",
    issuer: "University of Michigan",
    date: "Dec 2024",
    platform: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/records/HQ7K4ATIXMDS",
  },
];
