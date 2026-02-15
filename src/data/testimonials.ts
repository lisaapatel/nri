export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "R. Patel",
    location: "USA",
    service: "Property Management",
    quote:
      "The reporting is crisp and the follow-through is consistent. I stopped worrying about small issues turning into big ones.",
  },
  {
    name: "S. Shah",
    location: "UK",
    service: "Land Services",
    quote:
      "Their documentation-first approach helped us avoid a risky purchase. The red flags were explained clearly and early.",
  },
  {
    name: "M. Desai",
    location: "Canada",
    service: "Legal & Compliance",
    quote:
      "Everything was structured—checklists, updates, next steps. It felt premium and professional without being complicated.",
  },
];

