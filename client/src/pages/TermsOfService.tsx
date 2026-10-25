import { Mail } from "lucide-react";
import { LegalLayout, type LegalSection } from "@/components/LegalLayout";

const sections: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    paragraphs: [
      "By accessing and using MediaPort, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.",
    ],
  },
  {
    heading: "Use License",
    paragraphs: [
      "Permission is granted to temporarily download one copy of the media extracted through MediaPort for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
    ],
    items: [
      "Modify or copy the extracted materials",
      "Use the materials for any commercial purpose",
      "Attempt to reverse engineer any software on our site",
      "Remove any copyright or other proprietary notations",
      "Transfer the materials to another person",
    ],
  },
  {
    heading: "User Conduct",
    paragraphs: ["You agree not to use MediaPort to:"],
    items: [
      "Download content you do not have rights to",
      "Violate any intellectual property rights",
      "Circumvent technological protection measures",
      "Interfere with the security of our services",
      "Use automated means to extract data at scale without permission",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "All content on MediaPort, including text, graphics, logos, and software, is the property of MediaPort or its suppliers and is protected by copyright and trademark laws. You do not acquire any ownership rights by downloading content through our service.",
    ],
  },
  {
    heading: "Disclaimer",
    paragraphs: [
      "MediaPort is provided on an \u201cas is\u201d basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.",
    ],
  },
  {
    heading: "Limitations",
    paragraphs: [
      "In no event shall MediaPort or its suppliers be liable for any damages arising out of the use or inability to use the materials on our site, even if we have been notified of the possibility of such damage.",
    ],
  },
  {
    heading: "Governing Law",
    paragraphs: [
      "These terms are governed by and construed in accordance with the laws of the jurisdiction in which MediaPort operates, without regard to conflict of law provisions.",
    ],
  },
  {
    heading: "Changes to Terms",
    paragraphs: [
      "We may revise these terms of service at any time without notice. By using this site, you agree to be bound by the current version of these terms.",
    ],
  },
];

export default function TermsOfService() {
  return (
    <LegalLayout
      kicker="Legal"
      title="Terms of Service"
      updated="October 25, 2026"
      sections={sections}
      contact={
        <div className="border border-border rounded-xl p-6 md:p-8 space-y-3">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Contact Us</p>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about these Terms of Service, reach us at:
          </p>
          <a
            href="mailto:legal@mediaport.com"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            legal@mediaport.com
          </a>
        </div>
      }
    />
  );
}
