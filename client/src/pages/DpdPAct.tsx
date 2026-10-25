import { LegalLayout, type LegalSection } from "@/components/LegalLayout";

const sections: LegalSection[] = [
  {
    heading: "Purpose of This Notice",
    paragraphs: [
      "MediaPort complies with the Digital Personal Data Protection Act, 2023 (\u201cDPDP Act\u201d) of India. This notice describes how we process personal data of users located in India and the rights available to you under the DPDP Act.",
    ],
  },
  {
    heading: "Personal Data We Process",
    paragraphs: ["We process the following personal data:"],
    items: [
      "Names and email addresses provided voluntarily",
      "Media URLs submitted for extraction",
      "Device identifiers and IP addresses",
      "Usage and interaction data",
    ],
  },
  {
    heading: "Lawful Basis for Processing",
    paragraphs: [
      "We process personal data based on your consent, for the performance of services you request, and for legitimate business purposes including security, fraud prevention, and legal compliance.",
    ],
  },
  {
    heading: "Data Principal Rights",
    paragraphs: ["Under the DPDP Act, you have the right to:"],
    items: [
      "Access your personal data",
      "Request correction or erasure of your data",
      "Withdraw consent at any time",
      "Nominate another person to exercise your rights in the event of death or incapacity",
      "Grievance redressal through our designated officer",
    ],
  },
  {
    heading: "Data Retention",
    paragraphs: [
      "We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including for legal, tax, or reporting obligations.",
    ],
  },
  {
    heading: "Data Transfers",
    paragraphs: [
      "We may transfer personal data outside India in accordance with applicable law. Any such transfer will be subject to appropriate safeguards.",
    ],
  },
  {
    heading: "Grievance Redressal",
    paragraphs: ["If you have any complaint regarding the processing of your personal data, you may contact our grievance officer:"],
    node: (
      <div className="rounded-lg border border-border bg-card px-5 py-4">
        <a href="mailto:dpdp@mediaport.com" className="font-medium text-foreground hover:text-primary transition-colors">
          dpdp@mediaport.com
        </a>
        <p className="mt-1 text-xs text-muted-foreground">Grievance Officer — Data Protection</p>
      </div>
    ),
  },
  {
    heading: "Changes to This Notice",
    paragraphs: [
      "This policy may be updated from time to time. Continued use of MediaPort constitutes acceptance of any changes.",
    ],
  },
];

export default function DpdPAct() {
  return (
    <LegalLayout
      kicker="Compliance · India"
      title="DPDP Act"
      subtitle="Digital Personal Data Protection Act, 2023"
      updated="October 25, 2026"
      sections={sections}
    />
  );
}
