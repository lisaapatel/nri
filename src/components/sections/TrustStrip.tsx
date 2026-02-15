import { Container } from "@/components/ui/Container";
import {
  Briefcase,
  Users,
  Globe,
  Star,
} from "lucide-react";

export function TrustStrip() {
  const stats = [
    { label: "Years of trust", value: "29+", icon: Briefcase },
    { label: "Happy clients", value: "25,000+", icon: Users },
    { label: "Countries served", value: "25+", icon: Globe },
    { label: "Client rating", value: "4.8/5", icon: Star },
  ];

  return (
    <section className="border-y border-sand-200/80 bg-gradient-to-b from-sand-50/80 to-white">
      <Container className="py-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-sand-200/60 bg-white/80 px-5 py-6 text-center shadow-[0_1px_0_rgba(15,23,42,0.04)] transition hover:border-brand-100 hover:bg-brand-50/30 hover:shadow-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                  {s.value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
