import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getServicesInDropdownOrder } from "@/data/services";

export function SiteFooter() {
  const services = getServicesInDropdownOrder();

  return (
    <footer className="border-t border-sand-200 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-ink-900">NRI Solutions</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
              Ahmedabad-based NRI property, legal, and asset management support—built for remote ownership and clear outcomes.
            </p>
            <div className="mt-5 grid gap-1 text-sm text-slate-600">
              <p>
                <span className="font-medium text-ink-900">Email:</span>{" "}
                <a className="hover:text-ink-900" href="mailto:support@nrisolutions.us">
                  support@nrisolutions.us
                </a>
              </p>
              <p>
                <span className="font-medium text-ink-900">Location:</span> Ahmedabad, Gujarat
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <div>
              <p className="text-xs font-semibold tracking-wide text-slate-500">NAVIGATION</p>
              <ul className="mt-3 grid gap-2 text-sm">
                <li>
                  <Link className="text-slate-600 hover:text-ink-900" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 hover:text-ink-900" href="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 hover:text-ink-900" href="/services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 hover:text-ink-900" href="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 hover:text-ink-900" href="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-2">
              <p className="text-xs font-semibold tracking-wide text-slate-500">SERVICES</p>
              <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link className="text-slate-600 hover:text-ink-900" href={`/services/${s.slug}`}>
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-sand-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NRI Solutions. All rights reserved.</p>
          <p>Premium NRI services for property, legal, and life coordination.</p>
        </div>
      </Container>
    </footer>
  );
}

