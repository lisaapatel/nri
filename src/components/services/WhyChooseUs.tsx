import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  const points = [
    {
      title: "Documentation-first",
      text: "Checklists, proof, and clean records—so decisions are defensible and repeatable.",
    },
    {
      title: "NRI-friendly workflow",
      text: "Remote approvals, short updates, and minimal back-and-forth across time zones.",
    },
    {
      title: "On-ground execution",
      text: "Ahmedabad-based coordination with verified follow-through and escalation support.",
    },
    {
      title: "Risk-aware guidance",
      text: "Red flags surfaced early with clear options and next steps—not confusion.",
    },
  ];

  return (
    <section className="bg-sand-50">
      <Container className="py-14 lg:py-20">
        <SectionHeading
          kicker="Why NRI Solutions"
          title="A premium experience, built for clarity"
          subtitle="Everything is designed to reduce risk and remove friction for NRIs managing assets and responsibilities in India."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <Card key={p.title} className="p-5">
              <h3 className="text-sm font-semibold text-ink-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{p.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

