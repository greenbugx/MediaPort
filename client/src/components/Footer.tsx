import { Link } from "wouter";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { FlipText } from "@/components/block/flip-text";

const navLinks = [
  { label: "Terms of Service", href: "/terms", isRoute: true },
  { label: "Privacy Policy", href: "/privacy", isRoute: true },
  { label: "DPDP Act", href: "/dpdp", isRoute: true },
  { label: "GDPR (EU)", href: "/eu", isRoute: true },
  { label: "Features", href: "/#features", isRoute: false },
];

const legalLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "DPDP Act", href: "/dpdp" },
  { label: "GDPR (EU)", href: "/eu" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-border/40">
      {/* Background gradient deepening toward the watermark at the base */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-[hsl(218_65%_88%)] dark:to-[hsl(222_35%_9%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-transparent to-[hsl(218_45%_82%)/60] dark:to-[hsl(222_30%_7%)/80]"
      />

      {/* Giant interactive watermark sliding off the bottom edge */}
      <div
        className="pointer-events-none select-none absolute inset-x-0 -bottom-6 md:-bottom-12 flex justify-center items-end text-center font-bold tracking-tight leading-none text-[22vw] md:text-[18vw] text-foreground/[0.07] dark:text-foreground/[0.05] z-10"
      >
        <FlipText
          duration={2.6}
          className="tracking-tight hover:text-foreground/[0.14] transition-colors"
        >
          mediaport
        </FlipText>
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6 pt-16 md:pt-20 pb-20 md:pb-28 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 pointer-events-auto"
        >
          {/* Left: GitHub circle icon, email, and address */}
          <div className="space-y-6">
            <a
              href="https://github.com/ranveerminhas0/MediaPort"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-foreground/25 flex items-center justify-center text-foreground/80 hover:text-foreground hover:border-foreground/60 transition-colors"
            >
              <Github className="w-5 h-5" strokeWidth={1.8} />
            </a>

            <a
              href="mailto:hello@mediaport.com"
              className="block text-xl md:text-2xl font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity"
            >
              hello@mediaport.com
            </a>

            <div className="text-sm text-foreground/60 leading-relaxed font-normal">
              <p>Harju maakond, Tallinn,</p>
              <p>Kesklinna linnaosa,</p>
              <p>Vesivärava tn 50-201, 10152</p>
            </div>
          </div>

          {/* Right: Vertical navigation stack */}
          <nav className="flex flex-col md:items-end gap-4" aria-label="Footer links">
            {navLinks.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={scrollToTop}
                  className="text-lg md:text-xl font-medium tracking-tight text-foreground/90 hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    if (item.href === "/#features") {
                      scrollToTop();
                    }
                  }}
                  className="text-lg md:text-xl font-medium tracking-tight text-foreground/90 hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
        </motion.div>

        {/* Bottom bar: Original upstream legal links and copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 md:mt-20 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-foreground/60 pointer-events-auto"
        >
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 order-2 md:order-1">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={scrollToTop}
                className="underline underline-offset-4 text-foreground/75 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <p className="order-1 md:order-2 font-normal text-center">
            © 2026 MediaPort. All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
