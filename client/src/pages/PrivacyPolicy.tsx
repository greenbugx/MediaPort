import { Mail } from "lucide-react";
import { LegalLayout, type LegalSection } from "@/components/LegalLayout";

const sections: LegalSection[] = [
  {
    heading: "Introduction",
    paragraphs: [
      "Welcome to MediaPort. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our website and services. By using MediaPort, you agree to the practices described in this policy.",
    ],
  },
  {
    heading: "Information We Collect",
    paragraphs: ["We may collect the following types of information:"],
    items: [
      "URLs you submit for media extraction",
      "Media metadata such as title, artist, album, and duration",
      "IP addresses and browser information collected automatically",
      "Email addresses if you subscribe to our newsletter",
      "Cookies and similar tracking technologies",
    ],
  },
  {
    heading: "How We Use Your Information",
    paragraphs: ["We use the information we collect to:"],
    items: [
      "Process your media extraction requests",
      "Provide and improve our services",
      "Send you updates and newsletters if you subscribe",
      "Protect against fraud and security threats",
      "Comply with legal obligations",
    ],
  },
  {
    heading: "Data Sharing and Disclosure",
    paragraphs: [
      "We do not sell your personal information. We may share information with trusted service providers who assist us in operating our website, conducting our business, or servicing you, provided those parties agree to keep the information confidential.",
    ],
  },
  {
    heading: "Your Rights",
    paragraphs: [
      "You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time by using the unsubscribe link in our emails or by contacting us.",
    ],
  },
  {
    heading: "Cookies and Tracking",
    paragraphs: [
      "MediaPort uses cookies to enhance your experience, analyze traffic, and personalize content. You can manage cookie preferences through your browser settings.",
    ],
  },
  {
    heading: "Data Security",
    paragraphs: [
      "We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure.",
    ],
  },
  {
    heading: "International Users",
    paragraphs: [
      "Our services may be accessed from around the world. By using MediaPort, you consent to the collection, transfer, and processing of your information in accordance with this policy.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      kicker="Legal"
      title="Privacy Policy"
      updated="October 25, 2026"
      sections={sections}
      contact={
        <div className="border border-border rounded-xl p-6 md:p-8 space-y-3">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Contact Us</p>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about this Privacy Policy, reach us at:
          </p>
          <a
            href="mailto:privacy@mediaport.com"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            privacy@mediaport.com
          </a>
        </div>
      }
    />
  );
}
