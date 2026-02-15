import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

function Avatar({ name }: { name: string }) {
  const initial = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-navy-800 text-sm font-bold text-white shadow-soft"
      aria-hidden="true"
    >
      {initial}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 -z-10 bg-mesh-subtle opacity-40"
        aria-hidden="true"
      />
      <Container className="py-16 lg:py-24">
        <SectionHeading
          kicker="Testimonials"
          title="Clients choose clarity and follow-through"
          subtitle="A few examples of what NRIs value most: structured updates, reduced risk, and dependable execution."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="relative overflow-hidden border-sand-200/80 p-6 transition hover:shadow-soft"
            >
              <Quote
                className="absolute right-4 top-4 h-8 w-8 text-brand-100"
                aria-hidden="true"
              />
              <p className="relative text-sm leading-7 text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Avatar name={t.name} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-ink-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.location}</p>
                </div>
                <span className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-600">
                  {t.service}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
