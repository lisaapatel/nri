"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useLeadDialog } from "@/components/lead/LeadDialogProvider";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80";

export function Hero() {
  const lead = useLeadDialog();

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Soft mesh gradient background */}
      <div
        className="absolute inset-0 -z-10 bg-mesh-subtle"
        aria-hidden="true"
      />
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:items-center lg:py-24">
        <div className="lg:col-span-6">
          <p className="inline-flex items-center rounded-full border border-brand-100 bg-brand-50/90 px-3.5 py-1.5 text-xs font-semibold text-brand-600 backdrop-blur-sm">
            Premium NRI services • Ahmedabad-based execution
          </p>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-ink-900 sm:text-5xl sm:leading-[1.1]">
            Ahmedabad&apos;s Trusted NRI Property &amp; Legal Partner
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Property, land, legal, and asset coordination—built for NRIs who need
            clarity, compliance, and dependable on-ground follow-through.
            <br />
            <span className="text-ink-700 font-medium">
              Structured updates. Minimal back-and-forth. Outcomes you can trust.
            </span>
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => lead.open({ intent: "callback" })}>
              Request Call Back
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => lead.open({ intent: "consultation" })}
            >
              Book NRI Consultation
            </Button>
          </div>

          <ul className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
            {[
              "On-ground team in Ahmedabad",
              "Documentation-first workflows",
              "Transparent reporting",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-6">
          {/* Hero image with gradient overlay and rounded frame */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-sand-200/80 bg-sand-100 shadow-lift sm:aspect-[16/11]">
            <Image
              src={HERO_IMAGE}
              alt="Modern architecture and professional execution—NRI Solutions delivers on-ground clarity."
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/90 p-4 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Trusted execution
              </p>
              <p className="mt-1 text-sm font-medium text-ink-900">
                Same-day follow-up • Checklist-driven • Crisp summaries
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
