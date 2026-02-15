import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { InlineCtas } from "@/components/lead/InlineCtas";
import { getServicesByGroup, serviceGroups } from "@/data/services";

const SERVICES_HERO_IMG =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore premium NRI services across property, land, legal, tax, investment, and support coordination—built for remote ownership and clear outcomes.",
};

function ServiceCard({
  title,
  href,
  short,
  outcomes,
}: {
  title: string;
  href: string;
  short: string;
  outcomes: string[];
}) {
  return (
    <Link href={href} className="group">
      <Card className="h-full overflow-hidden border-sand-200/80 p-0 transition-all hover:shadow-soft hover:border-brand-100">
        <div className="relative aspect-[2/1] w-full overflow-hidden bg-sand-100">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
            alt=""
            fill
            className="object-cover opacity-90 transition group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
          <h3 className="absolute bottom-3 left-3 right-3 text-base font-semibold text-ink-900">
            {title}
          </h3>
        </div>
        <div className="p-5">
          <p className="line-clamp-3 text-sm leading-6 text-slate-600">{short}</p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-600">
            {outcomes.slice(0, 2).map((o) => (
              <li key={o} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span className="line-clamp-1">{o}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink-900">
            Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default function ServicesHubPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="relative h-56 w-full sm:h-72 lg:h-80">
          <Image
            src={SERVICES_HERO_IMG}
            alt="Premium NRI services—property, legal, and asset management."
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <Container className="pb-8">
              <p className="text-sm font-semibold text-brand-600">Services Hub</p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                Premium NRI services with on-ground execution
              </h1>
            </Container>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <Container className="py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <SectionHeading
                kicker="Services Hub"
                title="Premium NRI services with on-ground execution in Ahmedabad"
                subtitle="All services remain, grouped for clarity. High-revenue work is prioritized through the experience—property, land, legal, and investment."
              />
              <div className="mt-7">
                <InlineCtas />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-sand-200 bg-sand-50 p-6">
                <p className="text-xs font-semibold tracking-wide text-slate-500">WHAT YOU GET</p>
                <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                  {[
                    "Checklist-driven execution and approvals",
                    "Documentation hygiene and risk flags",
                    "Crisp updates and transparent reporting",
                    "Remote-friendly workflow for NRIs",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="pb-16 lg:pb-24">
          <div className="grid gap-10">
            {serviceGroups.map(({ group, description }) => {
              const groupServices = getServicesByGroup(group);
              return (
                <div key={group} className="scroll-mt-24">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-xs font-semibold tracking-wide text-brand-600">{group}</p>
                      <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink-900 sm:text-2xl">
                        {group}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {groupServices.map((s) => (
                      <ServiceCard
                        key={s.slug}
                        title={s.title}
                        href={`/services/${s.slug}`}
                        short={s.short}
                        outcomes={s.outcomes}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

