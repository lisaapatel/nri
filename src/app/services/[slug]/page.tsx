import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { InlineCtas } from "@/components/lead/InlineCtas";
import { AnchorNav } from "@/components/ui/AnchorNav";
import { ServiceSections } from "@/components/services/ServiceSections";
import { WhyChooseUs } from "@/components/services/WhyChooseUs";
import { Accordion } from "@/components/ui/Accordion";
import { ServicePlans } from "@/components/services/ServicePlans";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { getServiceBySlug, services } from "@/data/services";

const SERVICE_HERO_IMG =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&q=80";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getServiceBySlug(params.slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.heroSubtext,
    openGraph: {
      title: `${s.title} — NRI Solutions`,
      description: s.heroSubtext,
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const s = getServiceBySlug(params.slug);
  if (!s) notFound();

  const navItems = [
    ...s.sections.map((sec) => ({ id: sec.id, label: sec.title })),
    { id: "why", label: "Why NRIs choose us" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="relative h-44 w-full sm:h-56">
          <Image
            src={SERVICE_HERO_IMG}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <Container className="pb-6">
              <p className="text-sm font-semibold text-brand-600">{s.heroKicker}</p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                {s.title}
              </h1>
            </Container>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <Container className="py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
                What we deliver
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                {s.heroSubtext}
              </p>

              <div className="mt-7">
                <InlineCtas serviceSlug={s.slug} />
              </div>

              <ul className="mt-7 grid gap-2 text-sm text-slate-700 sm:grid-cols-3">
                {s.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-sand-200 bg-sand-50 p-6">
                <p className="text-xs font-semibold tracking-wide text-slate-500">GOOD FOR</p>
                <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                  {[
                    "NRIs who want predictable execution with proof",
                    "Owners who need clear documentation and updates",
                    "Time-zone friendly approvals and decisions",
                    "High-stakes situations where risk must be surfaced early",
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

      {s.slug === "property-management" && s.plans ? (
        <ServicePlans
          title="Pick a plan based on how active your property is"
          subtitle="Built for NRIs who want premium oversight without long threads. Start lean, upgrade as needs grow."
          plans={s.plans}
        />
      ) : null}

      <section className="bg-white">
        <Container className="py-14 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24">
                <AnchorNav items={navItems} />
              </div>
            </div>
            <div className="lg:col-span-8">
              <ServiceSections sections={s.sections} serviceSlug={s.slug} />
            </div>
          </div>
        </Container>
      </section>

      <div id="why" className="scroll-mt-24">
        <WhyChooseUs />
      </div>

      <section id="faq" className="scroll-mt-24 bg-white">
        <Container className="py-14 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-600">FAQ</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              Quick answers, no fluff
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              If you don’t see your question here, request a call back and we’ll respond with the cleanest next steps.
            </p>
          </div>
          <Accordion className="mt-10" items={s.faqs} />
          <div className="mt-10">
            <InlineCtas serviceSlug={s.slug} />
          </div>
        </Container>
      </section>

      <FinalCtaBand />
    </>
  );
}

