import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/lead/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a call back or book an NRI consultation. Premium, documentation-first NRI services in Ahmedabad.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { intent?: string };
}) {
  const intent =
    searchParams?.intent === "consultation"
      ? "consultation"
      : searchParams?.intent === "callback"
        ? "callback"
        : undefined;

  return (
    <section className="bg-white">
      <Container className="py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              kicker="Contact"
              title="Get a clear plan in one short call"
              subtitle="Tell us what you need. We’ll respond with a checklist and the cleanest next steps—built for NRI timelines."
            />

            <div className="mt-8 rounded-3xl border border-sand-200 bg-sand-50 p-6">
              <p className="text-xs font-semibold tracking-wide text-slate-500">DIRECT</p>
              <div className="mt-3 grid gap-2 text-sm text-slate-700">
                <p>
                  <span className="font-medium text-ink-900">Email:</span>{" "}
                  <a className="underline decoration-sand-200 underline-offset-4 hover:text-ink-900" href="mailto:support@nrisolutions.us">
                    support@nrisolutions.us
                  </a>
                </p>
                <p>
                  <span className="font-medium text-ink-900">Location:</span> Ahmedabad, Gujarat
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                For urgent matters, include “Urgent” in your message and the relevant service.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm defaultIntent={intent} />
          </div>
        </div>
      </Container>
    </section>
  );
}

