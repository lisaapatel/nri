"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useLeadDialog } from "@/components/lead/LeadDialogProvider";

const CTA_BG =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80";

export function FinalCtaBand() {
  const lead = useLeadDialog();

  return (
    <section className="relative overflow-hidden bg-sand-50">
      <Container className="py-16">
        <div className="relative overflow-hidden rounded-3xl border border-sand-200/80 shadow-lift">
          <div className="absolute inset-0">
            <Image
              src={CTA_BG}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/50"
              aria-hidden="true"
            />
          </div>
          <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-14">
            <div className="max-w-xl">
              <p className="text-sm font-semibold tracking-wide text-brand-200">
                Ready to get clarity?
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Tell us your situation. We&apos;ll propose the cleanest next
                steps.
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Short call. Clear plan. Minimal back-and-forth.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={() => lead.open({ intent: "callback" })}
                className="bg-white text-navy-950 hover:bg-sand-50"
              >
                Request Call Back
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => lead.open({ intent: "consultation" })}
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                Book NRI Consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
