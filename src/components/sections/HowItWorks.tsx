import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Phone,
  FileCheck,
  MapPin,
  FileText,
} from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "Share your need",
      text: "A 10–15 minute call to capture your context, constraints, and timeline.",
      icon: Phone,
    },
    {
      title: "Get a clear plan",
      text: "We propose a checklist-driven path with approvals, owners, and deliverables.",
      icon: FileCheck,
    },
    {
      title: "On-ground execution",
      text: "Our Ahmedabad team coordinates stakeholders and completes each step with proof.",
      icon: MapPin,
    },
    {
      title: "Crisp reporting",
      text: "You get short updates, documented outcomes, and next steps—without noise.",
      icon: FileText,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-sand-50">
      <div
        className="absolute inset-0 -z-10 bg-mesh-subtle opacity-50"
        aria-hidden="true"
      />
      <Container className="py-16 lg:py-24">
        <SectionHeading
          kicker="How It Works"
          title="A premium process designed for NRIs"
          subtitle="Remote-friendly approvals, minimal back-and-forth, and documentation you can rely on."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Card
                key={s.title}
                className="relative overflow-hidden border-sand-200/80 p-6 transition hover:border-brand-100 hover:shadow-soft"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-[0_1px_0_rgba(15,23,42,0.06)] ring-1 ring-sand-200/80">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-brand-600">
                      Step {idx + 1}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-ink-900">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {s.text}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
