import { Card } from "@/components/ui/Card";
import { SectionCtaButton } from "@/components/lead/SectionCtaButton";
import type { ServiceSection } from "@/data/services";

export function ServiceSections({
  sections,
  serviceSlug,
}: {
  sections: ServiceSection[];
  serviceSlug?: string;
}) {
  return (
    <div className="grid gap-5">
      {sections.map((s) => (
        <Card key={s.id} className="p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="scroll-mt-24 text-lg font-semibold text-ink-900" id={s.id}>
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{s.summary}</p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-3">
                {s.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0">
              <SectionCtaButton label={s.ctaLabel} serviceSlug={serviceSlug} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

