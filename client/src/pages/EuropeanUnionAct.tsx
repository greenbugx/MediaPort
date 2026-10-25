import { LegalLayout, type LegalSection } from "@/components/LegalLayout";

const sections: LegalSection[] = [
  {
    heading: "Scope",
    paragraphs: [
      "MediaPort complies with European Union data protection and digital services regulations, including the General Data Protection Regulation (GDPR), the Digital Services Act (DSA), and the EU AI Act where applicable.",
    ],
  },
  {
    heading: "GDPR Compliance",
    paragraphs: ["As a data controller and processor, MediaPort adheres to GDPR principles:"],
    items: [
      "Lawfulness, fairness, and transparency",
      "Purpose limitation",
      "Data minimization",
      "Accuracy",
      "Storage limitation",
      "Integrity and confidentiality",
      "Accountability",
    ],
  },
  {
    heading: "Data Subject Rights",
    paragraphs: ["EU users may exercise the following rights:"],
    items: [
      "Right to be informed",
      "Right of access",
      "Right to rectification",
      "Right to erasure (\u201cright to be forgotten\u201d)",
      "Right to restrict processing",
      "Right to data portability",
      "Right to object",
      "Rights related to automated decision making",
    ],
  },
  {
    heading: "Digital Services Act",
    paragraphs: [
      "MediaPort provides transparency reports, clear terms of service, and accessible complaint handling mechanisms as required by the Digital Services Act. We cooperate with EU authorities and designated trusted flaggers.",
    ],
  },
  {
    heading: "EU AI Act",
    paragraphs: [
      "Where MediaPort uses AI systems, we classify them according to risk levels under the EU AI Act. We do not deploy prohibited AI systems. High-risk AI systems are subject to conformity assessments and transparency obligations.",
    ],
  },
  {
    heading: "Data Protection Officer",
    paragraphs: ["Our EU representative and data protection contact:"],
    node: (
      <div className="rounded-lg border border-border bg-card px-5 py-4">
        <a href="mailto:gdpr@mediaport.com" className="font-medium text-foreground hover:text-primary transition-colors">
          gdpr@mediaport.com
        </a>
        <p className="mt-1 text-xs text-muted-foreground">EU Data Protection Representative</p>
      </div>
    ),
  },
  {
    heading: "Supervisory Authority",
    paragraphs: [
      "You have the right to lodge a complaint with your local EU supervisory authority if you believe your data protection rights have been violated.",
    ],
  },
  {
    heading: "Review and Updates",
    paragraphs: [
      "This notice is reviewed periodically and may be updated to reflect changes in EU law or our processing activities.",
    ],
  },
];

export default function EuropeanUnionAct() {
  return (
    <LegalLayout
      kicker="Compliance · European Union"
      title="EU Compliance"
      subtitle="GDPR, Digital Services Act, and EU AI Act"
      updated="October 25, 2026"
      sections={sections}
    />
  );
}
