import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { InlineCtas } from "@/components/lead/InlineCtas";
import { Target, FileCheck, MapPin, Globe } from "lucide-react";

const ABOUT_HERO =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ahmedabad-based NRI property, legal, and asset management firm focused on documentation-first execution and clear reporting.",
};

const valueIcons = [Target, FileCheck, MapPin, Globe];

export default function AboutPage() {
  const values = [
    {
      title: "Clarity over complexity",
      text: "Short updates, structured decisions, and clear next steps—so you never feel lost.",
    },
    {
      title: "Documentation discipline",
      text: "Checklists, proof, and clean records reduce risk and avoid rework.",
    },
    {
      title: "On-ground follow-through",
      text: "Execution happens locally in Ahmedabad, with escalation handled responsibly.",
    },
    {
      title: "NRI-first experience",
      text: "Remote-friendly approvals built around time zones, availability, and urgency.",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="relative h-56 w-full sm:h-72">
          <Image
            src={ABOUT_HERO}
            alt="NRI Solutions team and partnership"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <Container className="pb-8">
              <p className="text-sm font-semibold text-brand-600">About NRI Solutions</p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                A premium local partner for NRIs
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
              kicker="About NRI Solutions"
              title="A premium local partner for NRIs managing India-side responsibilities"
              subtitle="We’re Ahmedabad-based and built for execution. Our role is to reduce risk, remove friction, and deliver outcomes with documentation you can trust."
            />
            <div className="mt-7">
              <InlineCtas />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-sand-200 bg-sand-50 p-6">
              <p className="text-xs font-semibold tracking-wide text-slate-500">AT A GLANCE</p>
              <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                {[
                  "Ahmedabad-based execution and coordination",
                  "Premium focus on property, land, legal, and investment work",
                  "Crisp reporting and documentation hygiene",
                  "Remote-friendly approvals for NRIs abroad",
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

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = valueIcons[i];
            return (
              <Card key={v.title} className="border-sand-200/80 p-6 transition hover:shadow-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{v.text}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
    </>
  );
}

