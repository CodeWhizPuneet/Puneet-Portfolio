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
  {
    title: "Python Data Structures",
    issuer: "University of Michigan",
    date: "Dec 2024",
    platform: "Coursera",
  },
  {
    title: "Ethical Considerations for Generative AI",
    issuer: "IBM",
    date: "Sep 2025",
    platform: "IBM SkillsBuild",
  },
  {
    title: "Introduction to Retrieval Augmented Generation (RAG)",
    issuer: "IBM",
    date: "Sep 2025",
    platform: "IBM SkillsBuild",
  },
];
