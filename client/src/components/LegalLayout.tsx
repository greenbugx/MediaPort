import type { ReactNode } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Download, ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  /** Any custom node rendered under the heading (e.g. contact rows). */
  node?: ReactNode;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function LegalLayout({
  kicker,
  title,
  subtitle,
  updated,
  sections,
  contact,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  updated: string;
  sections: LegalSection[];
  contact?: ReactNode;
}) {
  return (
    <div className="flex-1 bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-semibold text-xl tracking-tight no-underline">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <Download className="w-5 h-5 text-primary-foreground" />
            </div>
            <span>MediaPort</span>
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero — quiet, with a drifting theme-aware glow */}
      <header className="relative overflow-hidden border-b border-border/40">
        <motion.div
          aria-hidden
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-primary/[0.06] dark:bg-primary/[0.05] blur-3xl"
          animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative max-w-3xl mx-auto px-6 pt-20 pb-14 md:pt-24 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">{kicker}</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter leading-tight">{title}</h1>
            {subtitle && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
            <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              Last updated {updated}
            </span>
          </motion.div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {sections.map((section, i) => (
          <motion.section
            key={section.heading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[3.5rem_1fr] gap-x-3 md:gap-x-6 py-8 md:py-10 border-b border-border/40 first:pt-0 last:border-b-0"
          >
            <span
              aria-hidden
              className="font-mono text-xs md:text-sm text-muted-foreground/60 pt-1.5"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs?.map((p) => (
                  <p key={p} className="text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
                {section.items && (
                  <ul className="space-y-2.5 text-muted-foreground leading-relaxed">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden className="mt-[0.65rem] w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.node}
              </div>
            </div>
          </motion.section>
        ))}

        {contact && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
            className="mt-12 md:mt-16"
          >
            {contact}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-14 md:mt-20 pt-6"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to MediaPort
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
