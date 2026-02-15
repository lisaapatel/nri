export type ServiceGroup =
  | "Asset & Property"
  | "Legal & Financial"
  | "Support Services"
  | "Family & Lifestyle";

export type ServiceSection = {
  id: string;
  title: string;
  summary: string;
  outcomes: [string, string, string];
  ctaLabel: string;
};

export type ServicePlan = {
  name: string;
  priceHint: string;
  bestFor: string;
  bullets: string[];
};

export type Service = {
  title: string;
  slug: string;
  dropdownOrder: number; // MUST match dropdown order requirement
  group: ServiceGroup;
  short: string; // max ~2 lines in UI
  outcomes: [string, string, string];
  heroKicker: string;
  heroSubtext: string;
  sections: ServiceSection[];
  faqs: { q: string; a: string }[];
  // Optional extras for specific pages
  plans?: ServicePlan[];
};

// IMPORTANT: Keep EXACT dropdown order (1..15) as provided by the user.
export const services: Service[] = [
  {
    title: "Property Management",
    slug: "property-management",
    dropdownOrder: 1,
    group: "Asset & Property",
    short:
      "Protect your India property with on-ground supervision, tenant coordination, and transparent reporting—while you stay abroad.",
    outcomes: [
      "Monthly property health reporting",
      "Tenant & rent coordination",
      "On-ground issue resolution",
    ],
    heroKicker: "Premium NRI Property Care",
    heroSubtext:
      "A structured, audited approach to keeping your property safe, compliant, and income-ready—without the back-and-forth.",
    sections: [
      {
        id: "monitoring",
        title: "Monitoring & Site Visits",
        summary:
          "Scheduled checks with photo/video evidence, risk flags, and action recommendations.",
        outcomes: [
          "Routine and surprise visits",
          "Digital visit reports",
          "Early issue detection",
        ],
        ctaLabel: "Request Monitoring Plan",
      },
      {
        id: "tenant",
        title: "Tenant & Rental Management",
        summary:
          "From sourcing support to renewals—reduce vacancy time and keep payments predictable.",
        outcomes: [
          "Rent collection coordination",
          "Agreement & renewal support",
          "Tenant issue handling",
        ],
        ctaLabel: "Get Rental Support",
      },
      {
        id: "compliance",
        title: "Bills, Society & Compliance",
        summary:
          "We help coordinate utility, society, and statutory payments with records you can trust.",
        outcomes: [
          "Payment reminders & logs",
          "Society coordination",
          "Documentation hygiene",
        ],
        ctaLabel: "Talk to an Advisor",
      },
      {
        id: "repairs",
        title: "Repairs & Vendor Oversight",
        summary:
          "Verified vendor coordination with scopes, estimates, and post-work verification.",
        outcomes: [
          "Scope & estimate review",
          "On-site supervision",
          "Before/after proof",
        ],
        ctaLabel: "Request Callback",
      },
    ],
    plans: [
      {
        name: "Basic Monitoring",
        priceHint: "Best value for inactive properties",
        bestFor: "Owners who want periodic oversight and quick escalation.",
        bullets: [
          "Scheduled site visits with photo/video proof",
          "Issue alerts + action recommendations",
          "Basic documentation log (utilities/society)",
        ],
      },
      {
        name: "Rental Management",
        priceHint: "Optimized for stable rental income",
        bestFor: "Owners with tenants who want coordination and consistency.",
        bullets: [
          "Tenant coordination + renewals support",
          "Rent collection follow-ups (coordination)",
          "Maintenance handling with approvals",
        ],
      },
      {
        name: "Premium Asset Care",
        priceHint: "White-glove oversight",
        bestFor: "High-value properties requiring proactive care and reporting.",
        bullets: [
          "Priority response + vendor oversight",
          "Detailed monthly reporting + risk register",
          "On-ground assistance for complex issues",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you provide photo/video proof of site visits?",
        a: "Yes—visit reports include time-stamped photos/videos and a clear summary of observations, risks, and recommended next steps.",
      },
      {
        q: "Can you manage tenants end-to-end?",
        a: "We coordinate the full tenant lifecycle (communication, renewals, issue handling, and rent follow-ups). Legal drafting can be supported under Legal & Compliance.",
      },
      {
        q: "How do approvals work when repairs are needed?",
        a: "We share the scope and estimate for approval first, supervise the work, and provide post-work verification evidence.",
      },
    ],
  },
  {
    title: "Land Services",
    slug: "land-services",
    dropdownOrder: 2,
    group: "Asset & Property",
    short:
      "Land verification, monitoring, and dispute support—built for NRIs who need accuracy and clear documentation.",
    outcomes: ["Land due diligence", "Boundary & survey coordination", "Ongoing monitoring"],
    heroKicker: "Land Clarity, End-to-End",
    heroSubtext:
      "Reduce risk with structured verification, coordination with local stakeholders, and documentation-first execution.",
    sections: [
      {
        id: "due-diligence",
        title: "Due Diligence & Verification",
        summary:
          "Coordinate record checks, document screening, and red-flag reporting before you commit.",
        outcomes: ["Ownership chain checks", "Encumbrance red flags", "Actionable risk summary"],
        ctaLabel: "Request Land Verification",
      },
      {
        id: "survey",
        title: "Survey & Boundary Support",
        summary:
          "On-ground coordination for surveys, boundary marking, and resolution support.",
        outcomes: ["Survey coordination", "Boundary marking support", "Dispute documentation"],
        ctaLabel: "Book Consultation",
      },
      {
        id: "monitoring",
        title: "Land Monitoring",
        summary:
          "Periodic checks to reduce encroachment risk and keep you informed with evidence.",
        outcomes: ["Scheduled monitoring", "Evidence-based reporting", "Escalation support"],
        ctaLabel: "Request Callback",
      },
    ],
    faqs: [
      {
        q: "Can you help if I suspect encroachment?",
        a: "Yes—we coordinate on-ground verification, help document findings, and guide next steps alongside Legal & Compliance where needed.",
      },
      {
        q: "Do you handle registrations and mutations?",
        a: "We coordinate and assist through the process; the exact scope depends on location and case complexity.",
      },
      {
        q: "Can you share a clear checklist before we start?",
        a: "Yes—after an initial call, we share a case-specific checklist and timeline expectations.",
      },
    ],
  },
  {
    title: "Property Buy / Sell Assistance",
    slug: "property-buy-sell-assistance",
    dropdownOrder: 3,
    group: "Asset & Property",
    short:
      "End-to-end coordination for buying or selling—shortlisting, verification support, documentation, and closing guidance.",
    outcomes: ["Shortlisting & site coordination", "Risk-aware decision support", "Closing support"],
    heroKicker: "Confident Buy/Sell Decisions",
    heroSubtext:
      "We help you move from intent to closure with an NRI-friendly process and documentation discipline.",
    sections: [
      {
        id: "shortlist",
        title: "Shortlisting & On-Ground Coordination",
        summary:
          "We coordinate visits, gather details, and present concise comparisons.",
        outcomes: ["Option comparison", "On-ground checks", "Clear next-step guidance"],
        ctaLabel: "Request Callback",
      },
      {
        id: "verification",
        title: "Verification Support",
        summary:
          "Coordinate document checks and highlight red flags before you proceed.",
        outcomes: ["Document screening", "Red-flag reporting", "Compliance alignment"],
        ctaLabel: "Book Consultation",
      },
      {
        id: "closing",
        title: "Closing & Handover Support",
        summary:
          "Guidance and coordination through negotiation to handover—without chaos.",
        outcomes: ["Closing checklist", "Handover coordination", "Post-close support"],
        ctaLabel: "Talk to an Advisor",
      },
    ],
    faqs: [
      { q: "Do you negotiate on my behalf?", a: "We can support coordination and guidance; negotiation support depends on the situation and documentation requirements." },
      { q: "Can you help from abroad end-to-end?", a: "Yes—the process is designed for remote execution with clear documentation and approvals." },
      { q: "Do you provide legal support during closing?", a: "Legal review and compliance support is available under Legal & Compliance." },
    ],
  },
  {
    title: "Investment Advisory",
    slug: "investment-advisory",
    dropdownOrder: 4,
    group: "Legal & Financial",
    short:
      "A practical advisory layer for NRIs—helping you evaluate opportunities, risks, and documentation before deploying capital.",
    outcomes: ["Risk-first evaluation", "Goal-aligned planning", "Documentation discipline"],
    heroKicker: "Invest With Clarity",
    heroSubtext:
      "No noise. Just structured advice, scenario thinking, and decisions you can defend.",
    sections: [
      {
        id: "strategy",
        title: "Goal & Strategy Alignment",
        summary:
          "We start with your goals, constraints, and risk tolerance to shape recommendations.",
        outcomes: ["Goal mapping", "Risk profiling", "Decision framework"],
        ctaLabel: "Book NRI Consultation",
      },
      {
        id: "due-diligence",
        title: "Opportunity Evaluation",
        summary:
          "Review key risks, documents, and assumptions before you proceed.",
        outcomes: ["Red-flag checks", "Scenario analysis", "Actionable next steps"],
        ctaLabel: "Request Callback",
      },
      {
        id: "execution",
        title: "Execution Support",
        summary:
          "Coordinate the practical steps and timelines that make the plan real.",
        outcomes: ["Checklist-driven execution", "Stakeholder coordination", "Document hygiene"],
        ctaLabel: "Talk to an Advisor",
      },
    ],
    faqs: [
      { q: "Do you guarantee returns?", a: "No. We focus on risk-aware decision support and structured planning." },
      { q: "Can you advise on India property as an investment?", a: "Yes—especially around documentation risk, cashflow considerations, and execution complexity." },
      { q: "Is this only for large portfolios?", a: "No—our process scales from single-asset decisions to broader planning." },
    ],
  },
  {
    title: "Legal & Compliance",
    slug: "legal-compliance",
    dropdownOrder: 5,
    group: "Legal & Financial",
    short:
      "Coordinate documentation, compliance support, and case-specific guidance—built for NRI timelines and remote approvals.",
    outcomes: ["Document-first workflow", "Risk & compliance clarity", "Remote-friendly execution"],
    heroKicker: "Legal Clarity, Without Overwhelm",
    heroSubtext:
      "We coordinate the moving parts and keep the paperwork clean—so you can make decisions with confidence.",
    sections: [
      {
        id: "documentation",
        title: "Documentation & Case Preparation",
        summary:
          "We help structure your documents and prepare clear, complete submissions.",
        outcomes: ["Checklist-driven collection", "Error reduction", "Faster coordination"],
        ctaLabel: "Request Callback",
      },
      {
        id: "property",
        title: "Property & Asset Compliance Support",
        summary:
          "Coordinate compliance steps around property and asset-related matters.",
        outcomes: ["Compliance checklist", "Risk flags surfaced", "Recordkeeping"],
        ctaLabel: "Book Consultation",
      },
      {
        id: "coordination",
        title: "Authority & Stakeholder Coordination",
        summary:
          "We coordinate communications and keep you updated with crisp summaries.",
        outcomes: ["Reduced follow-ups", "Clear status updates", "Remote approvals"],
        ctaLabel: "Talk to an Advisor",
      },
    ],
    faqs: [
      { q: "Do you provide legal opinions?", a: "We coordinate legal/compliance support and can connect you with relevant professionals based on case needs." },
      { q: "How do you keep the process remote-friendly?", a: "We use checklists, structured updates, and approval steps designed for NRIs." },
      { q: "Can this be combined with property management?", a: "Yes—many clients run both for smoother execution and fewer gaps." },
    ],
  },
  {
    title: "Tax & Financial Services",
    slug: "tax-financial-services",
    dropdownOrder: 6,
    group: "Legal & Financial",
    short:
      "Coordination for tax, filings, notices, and financial documentation—built for NRI complexity and compliance hygiene.",
    outcomes: ["Filing coordination", "Notice support", "Clean documentation"],
    heroKicker: "NRI Tax & Financial Coordination",
    heroSubtext:
      "A calm, compliant workflow for paperwork-heavy requirements—without long email threads.",
    sections: [
      {
        id: "filings",
        title: "Returns & Filing Coordination",
        summary:
          "Coordinate filings with clear inputs, timelines, and document requirements.",
        outcomes: ["Checklist-based inputs", "Timely submission", "Records organized"],
        ctaLabel: "Request Callback",
      },
      {
        id: "notices",
        title: "Notice & Query Support",
        summary:
          "Help structure responses and coordinate supporting documentation.",
        outcomes: ["Clear response drafts", "Supporting evidence", "Status tracking"],
        ctaLabel: "Book Consultation",
      },
      {
        id: "docs",
        title: "Financial Documentation Hygiene",
        summary:
          "Organize and maintain key documentation to reduce future friction.",
        outcomes: ["Centralized records", "Audit-friendly structure", "Reduced errors"],
        ctaLabel: "Talk to an Advisor",
      },
    ],
    faqs: [
      { q: "Can you help with IT notices?", a: "Yes—especially around coordination, documentation, and response structuring." },
      { q: "Do you handle everything online?", a: "As much as possible; where physical steps are required, we coordinate them locally." },
      { q: "Is this only for clients with property in India?", a: "No—any NRI with India-linked financial compliance needs can use this." },
    ],
  },
  {
    title: "Immigration Support",
    slug: "immigration-support",
    dropdownOrder: 7,
    group: "Support Services",
    short:
      "Practical support for document coordination, attestations, and case-specific requirements with clear checklists.",
    outcomes: ["Document coordination", "Checklist clarity", "Reduced back-and-forth"],
    heroKicker: "Immigration Paperwork, Simplified",
    heroSubtext:
      "We help coordinate documents and steps so your timeline doesn’t slip.",
    sections: [
      {
        id: "documents",
        title: "Document & Attestation Support",
        summary:
          "Coordinate document requirements, attestations, and structured submissions.",
        outcomes: ["Clear checklist", "Correct documentation", "Fewer delays"],
        ctaLabel: "Request Callback",
      },
      {
        id: "coordination",
        title: "Case Coordination",
        summary:
          "We help track progress and keep steps organized across stakeholders.",
        outcomes: ["Status tracking", "Stakeholder coordination", "Timeline discipline"],
        ctaLabel: "Book Consultation",
      },
      {
        id: "support",
        title: "NRI Support Layer",
        summary:
          "Designed for NRIs handling India-side documents while abroad.",
        outcomes: ["Remote-friendly process", "Clear updates", "Documentation hygiene"],
        ctaLabel: "Talk to an Advisor",
      },
    ],
    faqs: [
      { q: "Do you provide immigration legal advice?", a: "We provide coordination and documentation support; legal advice depends on jurisdiction and requires licensed professionals." },
      { q: "Can you help with attestations from India?", a: "Yes—subject to case requirements and applicable processes." },
      { q: "How quickly can we start?", a: "Typically immediately after an initial call and document checklist alignment." },
    ],
  },
  {
    title: "Health & Medical Coordination",
    slug: "health-medical-coordination",
    dropdownOrder: 8,
    group: "Support Services",
    short:
      "Coordinate appointments, logistics, and local support in Ahmedabad—so your family gets care without stress.",
    outcomes: ["Appointment coordination", "Local support", "Clear updates"],
    heroKicker: "Care Coordination You Can Trust",
    heroSubtext:
      "A dependable local layer for your family’s medical needs in India.",
    sections: [
      {
        id: "appointments",
        title: "Appointments & Scheduling",
        summary:
          "Coordinate doctor appointments, tests, and visit schedules.",
        outcomes: ["Scheduling support", "Reminders & follow-ups", "Logistics coordination"],
        ctaLabel: "Request Callback",
      },
      {
        id: "logistics",
        title: "Logistics & Local Assistance",
        summary:
          "Coordinate transport and on-ground assistance as needed.",
        outcomes: ["Local coordination", "Timely support", "Reduced stress"],
        ctaLabel: "Book Consultation",
      },
      {
        id: "updates",
        title: "Status Updates",
        summary:
          "Crisp updates so you’re informed without long calls.",
        outcomes: ["Clear summaries", "Next steps captured", "Documentation shared"],
        ctaLabel: "Talk to an Advisor",
      },
    ],
    faqs: [
      { q: "Do you provide medical advice?", a: "No. We coordinate logistics and support; medical decisions remain with licensed clinicians and your family." },
      { q: "Is this limited to Ahmedabad?", a: "Our core operations are Ahmedabad-first; support in other cities depends on availability." },
      { q: "Can you coordinate for elderly parents?", a: "Yes—this is a common use case." },
    ],
  },
  {
    title: "Residential Support",
    slug: "residential-support",
    dropdownOrder: 9,
    group: "Support Services",
    short:
      "Local support for day-to-day residential needs—coordination, supervision, and dependable follow-through.",
    outcomes: ["Local coordination", "Vendor oversight", "Status updates"],
    heroKicker: "Reliable Local Support",
    heroSubtext:
      "When you’re abroad, small issues can become big. We keep things moving.",
    sections: [
      {
        id: "coordination",
        title: "Local Coordination",
        summary:
          "Coordinate vendors, schedules, and basic residential needs.",
        outcomes: ["Fewer follow-ups", "Predictable timelines", "Clear confirmations"],
        ctaLabel: "Request Callback",
      },
      {
        id: "oversight",
        title: "On-Ground Oversight",
        summary:
          "We verify completion and share proof where relevant.",
        outcomes: ["Completion checks", "Photo evidence when applicable", "Issue escalation"],
        ctaLabel: "Book Consultation",
      },
      {
        id: "updates",
        title: "Structured Updates",
        summary:
          "Short updates, decisions captured, next steps clear.",
        outcomes: ["Crisp summaries", "Approval checkpoints", "Documentation shared"],
        ctaLabel: "Talk to an Advisor",
      },
    ],
    faqs: [
      { q: "What kind of residential tasks can you coordinate?", a: "Common items include vendor coordination, supervision, and status reporting for routine needs." },
      { q: "Do you share proofs?", a: "Where appropriate, yes—photo evidence and confirmations." },
      { q: "How do you handle urgent issues?", a: "We prioritize and escalate based on risk and your preferred contact method." },
    ],
  },
  {
    title: "Education Assistance",
    slug: "education-assistance",
    dropdownOrder: 10,
    group: "Family & Lifestyle",
    short:
      "Support for education-related coordination in India—documentation, planning, and local follow-through.",
    outcomes: ["Documentation support", "Process coordination", "Local assistance"],
    heroKicker: "Education Coordination",
    heroSubtext:
      "Reduce friction with checklists and structured coordination for key steps.",
    sections: [
      {
        id: "planning",
        title: "Planning & Requirements",
        summary:
          "Align on objectives and gather requirements early to avoid delays.",
        outcomes: ["Clear checklist", "Timeline planning", "Decision support"],
        ctaLabel: "Book Consultation",
      },
      {
        id: "documents",
        title: "Document Coordination",
        summary:
          "Help coordinate required documents and submissions.",
        outcomes: ["Reduced errors", "Fewer follow-ups", "Structured records"],
        ctaLabel: "Request Callback",
      },
      {
        id: "local",
        title: "Local Assistance",
        summary:
          "Coordinate India-side steps that require presence or follow-through.",
        outcomes: ["On-ground coordination", "Status updates", "Escalation support"],
        ctaLabel: "Talk to an Advisor",
      },
    ],
    faqs: [
      { q: "Do you guarantee admissions?", a: "No—our role is coordination and documentation/process support." },
      { q: "Can you assist if the student is abroad?", a: "Yes—remote-friendly coordination is a core design of our workflow." },
      { q: "Is this Ahmedabad-only?", a: "Primary support is Ahmedabad-first; other locations depend on case needs." },
    ],
  },
  {
    title: "Wedding Services",
    slug: "wedding-services",
    dropdownOrder: 11,
    group: "Family & Lifestyle",
    short:
      "Coordination support for wedding logistics in Ahmedabad—vendors, timelines, documentation, and on-ground execution.",
    outcomes: ["Vendor coordination", "Timeline discipline", "On-ground support"],
    heroKicker: "Wedding Coordination Support",
    heroSubtext:
      "A dependable local layer to keep plans on track while you manage from abroad.",
    sections: [
      {
        id: "planning",
        title: "Planning & Vendor Coordination",
        summary:
          "Coordinate vendors, schedules, and confirmations with clarity.",
        outcomes: ["Fewer surprises", "Clear timelines", "Vendor follow-ups"],
        ctaLabel: "Request Callback",
      },
      {
        id: "execution",
        title: "On-Ground Execution Support",
        summary:
          "Support for coordination and issue-handling on key days.",
        outcomes: ["Local oversight", "Fast issue resolution", "Status updates"],
        ctaLabel: "Book Consultation",
      },
      {
        id: "docs",
        title: "Documentation Support",
        summary:
          "Coordinate any required documentation steps depending on requirements.",
        outcomes: ["Checklist support", "Reduced errors", "Clear next steps"],
        ctaLabel: "Talk to an Advisor",
      },
    ],
    faqs: [
      { q: "Do you act as a wedding planner?", a: "We provide coordination and on-ground support; full planning scope depends on your needs." },
      { q: "Can you manage vendors end-to-end?", a: "We can coordinate vendors and timelines with structured check-ins and confirmations." },
      { q: "How early should we start?", a: "Earlier is better—especially for venue/vendor availability and documentation steps." },
    ],
  },
  {
    title: "Matrimonial Support",
    slug: "matrimonial-support",
    dropdownOrder: 12,
    group: "Family & Lifestyle",
    short:
      "Discreet, structured support for matrimonial coordination with privacy-first communication.",
    outcomes: ["Discreet handling", "Structured coordination", "Privacy-first workflow"],
    heroKicker: "Discreet Matrimonial Support",
    heroSubtext:
      "A respectful, process-driven approach with clear next steps and privacy.",
    sections: [
      {
        id: "coordination",
        title: "Coordination & Scheduling",
        summary:
          "Coordinate discussions and scheduling with clarity and discretion.",
        outcomes: ["Privacy-respecting comms", "Scheduling support", "Structured follow-ups"],
        ctaLabel: "Request Callback",
      },
      {
        id: "documentation",
        title: "Documentation & Requirements",
        summary:
          "Support on required documents and process steps where applicable.",
        outcomes: ["Checklist clarity", "Reduced errors", "Fewer delays"],
        ctaLabel: "Book Consultation",
      },
      {
        id: "support",
        title: "NRI-Friendly Process",
        summary:
          "Remote-friendly steps designed for time zones and approvals.",
        outcomes: ["Remote coordination", "Clear updates", "Next steps captured"],
        ctaLabel: "Talk to an Advisor",
      },
    ],
    faqs: [
      { q: "Is this service private?", a: "Yes—privacy-first communication and limited access to information are core." },
      { q: "Can this be handled fully remotely?", a: "Often yes, depending on the process steps required." },
      { q: "Do you share details publicly?", a: "No—information is shared only with explicit consent." },
    ],
  },
  {
    title: "Elite IVF Solutions",
    slug: "elite-ivf-solutions",
    dropdownOrder: 13,
    group: "Support Services",
    short:
      "Coordination support for IVF journeys—appointments, timelines, logistics, and privacy-first assistance.",
    outcomes: ["Privacy-first coordination", "Timeline support", "Local assistance"],
    heroKicker: "IVF Coordination Support",
    heroSubtext:
      "We help reduce logistical stress so you can focus on decisions and care.",
    sections: [
      {
        id: "planning",
        title: "Journey Planning & Scheduling",
        summary:
          "Coordinate appointments, timelines, and travel/logistics requirements.",
        outcomes: ["Clear plan", "Scheduling support", "Reduced friction"],
        ctaLabel: "Request Callback",
      },
      {
        id: "logistics",
        title: "Local Logistics Support",
        summary:
          "Coordinate local needs with discretion and reliability.",
        outcomes: ["Local coordination", "Fast issue handling", "Privacy respected"],
        ctaLabel: "Book Consultation",
      },
      {
        id: "updates",
        title: "Structured Updates",
        summary:
          "Crisp updates and next steps—no long threads.",
        outcomes: ["Clear summaries", "Next steps captured", "Documentation shared"],
        ctaLabel: "Talk to an Advisor",
      },
    ],
    faqs: [
      { q: "Do you provide medical advice?", a: "No—medical advice must come from licensed clinicians. We coordinate logistics and support." },
      { q: "Is this confidential?", a: "Yes—privacy is central to our process." },
      { q: "Can NRIs coordinate from abroad?", a: "Yes—remote-friendly coordination is the default." },
    ],
  },
  {
    title: "Wellness Center",
    slug: "wellness-center",
    dropdownOrder: 14,
    group: "Support Services",
    short:
      "Wellness coordination support—appointments, schedules, and local assistance for family in Ahmedabad.",
    outcomes: ["Scheduling support", "Local coordination", "Clear updates"],
    heroKicker: "Wellness Coordination",
    heroSubtext:
      "A dependable local layer for wellness-related needs—organized and calm.",
    sections: [
      {
        id: "appointments",
        title: "Scheduling & Coordination",
        summary:
          "Coordinate appointments and routines with reminders where needed.",
        outcomes: ["Scheduling", "Reminders", "Follow-ups"],
        ctaLabel: "Request Callback",
      },
      {
        id: "local",
        title: "Local Assistance",
        summary:
          "Coordinate local steps that need presence or follow-through.",
        outcomes: ["On-ground coordination", "Status updates", "Escalation support"],
        ctaLabel: "Book Consultation",
      },
      {
        id: "updates",
        title: "Crisp Updates",
        summary:
          "Short, structured summaries—so you stay informed without overload.",
        outcomes: ["Clear summaries", "Next steps", "Documentation shared"],
        ctaLabel: "Talk to an Advisor",
      },
    ],
    faqs: [
      { q: "Is this medical?", a: "This is coordination support for wellness services; medical advice remains with clinicians." },
      { q: "Can you coordinate for elders?", a: "Yes—commonly used for parents and senior family members." },
      { q: "Do you provide home visits?", a: "Scope depends on availability and service requirements." },
    ],
  },
  {
    title: "Asthi Visarjan Services",
    slug: "asthi-visarjan-services",
    dropdownOrder: 15,
    group: "Family & Lifestyle",
    short:
      "Respectful, end-to-end coordination with dignity, privacy, and clear steps for NRIs managing from abroad.",
    outcomes: ["Dignified coordination", "Privacy-first handling", "Clear next steps"],
    heroKicker: "Dignified Coordination Support",
    heroSubtext:
      "We handle coordination with sensitivity and clarity, keeping communication minimal and respectful.",
    sections: [
      {
        id: "planning",
        title: "Process Planning",
        summary:
          "We align on requirements and plan steps with minimal friction.",
        outcomes: ["Clear checklist", "Timeline guidance", "Remote-friendly approvals"],
        ctaLabel: "Request Callback",
      },
      {
        id: "coordination",
        title: "On-Ground Coordination",
        summary:
          "Coordinate local steps with dignity and discretion.",
        outcomes: ["Local coordination", "Privacy respected", "Issue handling"],
        ctaLabel: "Book Consultation",
      },
      {
        id: "updates",
        title: "Crisp Updates",
        summary:
          "Minimal, clear communication so you’re informed without overload.",
        outcomes: ["Short updates", "Next steps captured", "Documentation shared"],
        ctaLabel: "Talk to an Advisor",
      },
    ],
    faqs: [
      { q: "Is this handled discreetly?", a: "Yes—privacy and respectful communication are central." },
      { q: "Can this be coordinated if we are abroad?", a: "Yes—our workflow is designed for NRIs and remote approvals." },
      { q: "How quickly can you assist?", a: "We prioritize urgency and can often start immediately after an initial call." },
    ],
  },
];

export const serviceGroups: { group: ServiceGroup; description: string }[] = [
  {
    group: "Asset & Property",
    description:
      "Property and land services built for remote ownership—documentation discipline, on-ground execution, and clear reporting.",
  },
  {
    group: "Legal & Financial",
    description:
      "Compliance-first coordination across legal, tax, and investment decisions—structured for NRI timelines and approvals.",
  },
  {
    group: "Support Services",
    description:
      "A dependable local layer for critical coordination—health, immigration, and specialized support with minimal friction.",
  },
  {
    group: "Family & Lifestyle",
    description:
      "Life events and family support handled with privacy and structure—coordination you can trust from abroad.",
  },
];

export function getServicesInDropdownOrder() {
  return [...services].sort((a, b) => a.dropdownOrder - b.dropdownOrder);
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServicesByGroup(group: ServiceGroup) {
  return services.filter((s) => s.group === group).sort((a, b) => a.dropdownOrder - b.dropdownOrder);
}

export const featuredCoreServiceSlugs = [
  "property-management",
  "land-services",
  "legal-compliance",
  "investment-advisory",
] as const;

