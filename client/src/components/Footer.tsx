import { Link } from "wouter";
import { motion } from "framer-motion";
import { Github, Instagram, Twitter, ArrowUpRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features", external: true },
  { label: "GitHub", href: "https://github.com/ranveerminhas0/MediaPort", external: true },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "DPDP Act", href: "/dpdp" },
  { label: "GDPR (EU)", href: "/eu" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ranveerminhas0/MediaPort", icon: Github },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
];

/* Soft dot-grid cluster, like the reference — theme-aware and gently twinkling */
function DotCluster({ flip, className }: { flip?: boolean; className?: string }) {
  const twinkles = [
    { top: "18%", left: "22%" },
    { top: "38%", left: "64%" },
    { top: "62%", left: "34%" },
    { top: "74%", left: "72%" },
    { top: "30%", left: "84%" },
  ];

  return (
    <div
      aria-hidden
      className={cn("relative hidden md:block w-36 h-24 opacity-70", flip && "scale-x-[-1]", className)}
    >
      <div
        className="absolute inset-9 [mask-image:radial-gradient(closest-side,black,transparent)]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--foreground) / 0.14) 1.3px, transparent 1.3px)",
          backgroundSize: "11px 11px",
        }}
      />
      {twinkles.map((pos, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-foreground/40"
          style={{ top: pos.top, left: pos.left }}
          animate={{ opacity: [0.15, 0.8, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }}
        />
      ))}
      {/* connector line toward the CTA */}
      <div className="absolute top-1/2 w-8 border-t border-border" style={flip ? { right: 0 } : { left: 0 }} />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/40">
      {/* Day/night aware gradient — deepens toward the watermark like the reference */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-background via-background to-[hsl(222_60%_88%)] dark:to-[hsl(222_35%_9%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-transparent to-[hsl(222_45%_82%)/60] dark:to-[hsl(222_30%_7%)/80]"
      />

      {/* Giant faded watermark, sliding off the bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute inset-x-0 -bottom-8 md:-bottom-14 text-center font-bold tracking-tighter leading-none text-[23vw] md:text-[19vw] text-foreground/[0.07]"
      >
        mediaport
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-16 md:pt-20 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-12 md:gap-8"
        >
          {/* Left — socials + email, reference style */}
          <div className="space-y-6">
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" strokeWidth={1.8} />
                </a>
              ))}
            </div>
            <a
              href="mailto:hello@mediaport.com"
              className="block text-lg font-medium tracking-tight text-foreground/90 hover:text-foreground transition-colors"
            >
              hello@mediaport.com
            </a>
            <p className="text-sm leading-relaxed text-foreground/50 max-w-xs">
              Universal media extraction &amp; lossless downloads — free, for the modern web.
            </p>
          </div>

          {/* Center — dotted clusters framing a dark CTA pill */}
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <DotCluster />
            <motion.a
              href="https://github.com/ranveerminhas0/MediaPort"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-5 py-3 text-sm font-medium shadow-lg"
            >
              <Star className="w-4 h-4" />
              Star on GitHub
              <span className="ml-1 rounded bg-background/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest">
                Free
              </span>
            </motion.a>
            <DotCluster flip />
          </div>

          {/* Right — just the app pages */}
          <nav className="flex flex-col md:items-end gap-3" aria-label="Footer pages">
            {pageLinks.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="group inline-flex items-center gap-1 text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </motion.div>

        {/* Bottom bar — 4 legal links, copyright, and the day/night toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 md:mt-20 flex flex-col md:flex-row items-center md:items-end justify-between gap-6"
        >
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-sm" aria-label="Legal">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="underline decoration-foreground/25 underline-offset-4 text-foreground/70 hover:text-foreground hover:decoration-foreground/70 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-foreground/50 order-first md:order-none">
            © 2026 MediaPort. All Rights Reserved
          </p>

          <div className="text-foreground/70">
            <ThemeToggle />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
