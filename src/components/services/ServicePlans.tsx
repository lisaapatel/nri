import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ServicePlan } from "@/data/services";

export function ServicePlans({
  title,
  subtitle,
  plans,
}: {
  title: string;
  subtitle: string;
  plans: ServicePlan[];
}) {
  return (
    <section className="bg-white">
      <Container className="py-14 lg:py-20">
        <SectionHeading kicker="Service Plans" title={title} subtitle={subtitle} />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.name} className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-ink-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{p.priceHint}</p>
                </div>
                {p.name === "Premium Asset Care" ? (
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                    Recommended
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-700">
                <span className="font-medium text-ink-900">Best for:</span> {p.bestFor}
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

