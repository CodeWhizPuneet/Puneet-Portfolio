"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ResumePage() {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    // Fetch PDF as blob to bypass IDM interception
    fetch("/resume.pdf")
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setBlobUrl(url);
      });

    return () => {
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 bg-background z-[200] flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-surface border-b border-border/50">
        <Link
          href="/"
          className="text-sm font-mono text-accent hover:text-accent-hover transition-colors"
        >
          &larr; Back to Portfolio
        </Link>
        <span className="text-xs font-mono text-secondary tracking-widest uppercase">
          Puneet Shankar — Resume
        </span>
        <button
          onClick={() => {
            if (blobUrl) {
              const a = document.createElement("a");
              a.href = blobUrl;
              a.download = "Puneet_Shankar_Resume.pdf";
              a.click();
            }
          }}
          className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider bg-accent/10 text-accent border border-accent/20 rounded hover:bg-accent/20 transition-all duration-300"
        >
          Download PDF
        </button>
      </div>

      {/* Embedded PDF */}
      {blobUrl ? (
        <iframe
          src={blobUrl}
          className="flex-1 w-full border-none"
          title="Puneet Shankar Resume"
        />
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <span className="text-sm font-mono text-secondary animate-pulse">
            Loading resume...
          </span>
        </div>
      )}
    </div>
  );
}
