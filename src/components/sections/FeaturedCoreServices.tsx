import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { featuredCoreServiceSlugs, getServiceBySlug } from "@/data/services";

// Curated Unsplash images: property, land, legal/docs, investment/city
const SERVICE_IMAGES: Record<string, string> = {
  "property-management":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  "land-services":
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  "legal-compliance":
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  "investment-advisory":
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
};

export function FeaturedCoreServices() {
  const featured = featuredCoreServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 -z-10 bg-mesh-subtle opacity-60"
        aria-hidden="true"
      />
      <Container className="py-16 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Core Services"
            title="High-value services NRIs rely on most"
            subtitle="Designed for remote ownership: risk-aware decisions, documentation discipline, and on-ground execution in Ahmedabad."
          />
          <div className="lg:pb-1">
            <Button as="link" href="/services" variant="secondary">
              View All Services{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((s) => (
            <Link
              key={s!.slug}
              href={`/services/${s!.slug}`}
              className="group"
            >
              <Card className="h-full overflow-hidden border-sand-200/80 p-0 transition-all duration-300 hover:shadow-lift hover:border-brand-100">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand-100">
                  <Image
                    src={
                      SERVICE_IMAGES[s!.slug] ??
                      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                    }
                    alt=""
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-navy-950/0 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-600 backdrop-blur-sm">
                    {s!.group}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-ink-900">
                    {s!.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                    {s!.short}
                  </p>
                  <ul className="mt-4 grid gap-2 text-sm text-slate-600">
                    {s!.outcomes.slice(0, 2).map((o) => (
                      <li key={o} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        <span className="line-clamp-1">{o}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink-900">
                    Explore{" "}
                    <ArrowRight
                      className="h-4 w-4 transition group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
