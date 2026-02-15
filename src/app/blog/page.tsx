import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { InlineCtas } from "@/components/lead/InlineCtas";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guidance for NRIs managing property, land, and compliance in India—short, checklist-driven insights.",
};

export default function BlogPage() {
  // Starter content (can be replaced with CMS later).
  const posts = [
    {
      title: "NRI Property Management: A simple monthly checklist",
      desc: "What to monitor, how to document issues, and how to reduce surprises when you’re abroad.",
    },
    {
      title: "Land due diligence: red flags to catch early",
      desc: "A risk-first framework to avoid costly mistakes before you commit.",
    },
    {
      title: "Legal & compliance hygiene: keep your records clean",
      desc: "Small documentation habits that make future processes smoother and faster.",
    },
  ];

  return (
    <section className="bg-white">
      <Container className="py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SectionHeading
              kicker="Blog"
              title="Short, practical insights for NRIs"
              subtitle="No long paragraphs. Just checklists and clear next steps—focused on property, land, and compliance."
            />
            <div className="mt-7">
              <InlineCtas />
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-sand-200 bg-sand-50 p-6">
              <p className="text-xs font-semibold tracking-wide text-slate-500">COMING NEXT</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                We’ll publish guides for common NRI scenarios: tenant renewals, land monitoring, notices, and document hygiene.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {posts.map((p) => (
            <Card key={p.title} className="p-6">
              <h3 className="text-base font-semibold text-ink-900">{p.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{p.desc}</p>
              <p className="mt-5 text-sm font-medium text-brand-600">Coming soon</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

