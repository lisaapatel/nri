"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Menu, MenuButton, MenuItem, MenuItems, Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { ChevronDown, Menu as MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { getServicesInDropdownOrder } from "@/data/services";
import { useLeadDialog } from "@/components/lead/LeadDialogProvider";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition hover:text-ink-900",
        isActive ? "text-ink-900" : "text-slate-600",
      )}
    >
      {children}
    </Link>
  );
}

function ServicesDropdown() {
  const services = React.useMemo(() => getServicesInDropdownOrder(), []);
  return (
    <Menu as="div" className="relative">
      <MenuButton className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition hover:text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ring-offset-white rounded-full px-2 py-1">
        Services <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </MenuButton>
      <MenuItems
        className="absolute left-0 z-50 mt-3 w-[22rem] origin-top-left rounded-2xl border border-sand-200 bg-white p-2 shadow-lift focus:outline-none"
      >
        <div className="px-3 py-2">
          <p className="text-xs font-semibold tracking-wide text-slate-500">SERVICES</p>
        </div>
        <div className="max-h-[60vh] overflow-auto p-1">
          {services.map((s) => (
            <MenuItem key={s.slug}>
              {({ focus }) => (
                <Link
                  href={`/services/${s.slug}`}
                  className={cn(
                    "block rounded-xl px-3 py-2.5 text-sm font-medium",
                    focus ? "bg-sand-50 text-ink-900" : "text-slate-700",
                  )}
                >
                  {s.title}
                </Link>
              )}
            </MenuItem>
          ))}
        </div>
        <div className="mt-1 border-t border-sand-200 p-2">
          <Link
            href="/services"
            className="block rounded-xl px-3 py-2 text-sm font-medium text-brand-600 hover:bg-brand-50"
          >
            View all services
          </Link>
        </div>
      </MenuItems>
    </Menu>
  );
}

export function SiteHeader() {
  const lead = useLeadDialog();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const services = React.useMemo(() => getServicesInDropdownOrder(), []);

  return (
    <header className="sticky top-0 z-40 border-b border-sand-200 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy-950 text-white shadow-soft">
            <span className="text-sm font-semibold">N</span>
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-ink-900">NRI Solutions</span>
            <span className="block text-xs text-slate-500">Ahmedabad</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <NavLink href="/">Home</NavLink>
          <ServicesDropdown />
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="primary"
            onClick={() => lead.open({ intent: "callback" })}
          >
            Request Call Back
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-slate-700 hover:bg-sand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </Container>

      <Transition appear show={mobileOpen}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={() => setMobileOpen(false)}>
          <TransitionChild enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-navy-950/40 backdrop-blur-sm" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-end p-4">
              <TransitionChild
                enter="ease-out duration-200"
                enterFrom="opacity-0 translate-x-2"
                enterTo="opacity-100 translate-x-0"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-2"
              >
                <DialogPanel className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lift ring-1 ring-black/5">
                  <div className="flex items-center justify-between border-b border-sand-200 px-5 py-4">
                    <p className="text-sm font-semibold text-ink-900">Menu</p>
                    <button
                      type="button"
                      onClick={() => setMobileOpen(false)}
                      className="rounded-full p-2 text-slate-600 hover:bg-sand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                      aria-label="Close menu"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="px-5 py-4">
                    <div className="grid gap-3">
                      <Link className="text-sm font-medium text-ink-900" href="/" onClick={() => setMobileOpen(false)}>
                        Home
                      </Link>
                      <Link className="text-sm font-medium text-ink-900" href="/services" onClick={() => setMobileOpen(false)}>
                        Services
                      </Link>
                      <Link className="text-sm font-medium text-ink-900" href="/blog" onClick={() => setMobileOpen(false)}>
                        Blog
                      </Link>
                      <Link className="text-sm font-medium text-ink-900" href="/about" onClick={() => setMobileOpen(false)}>
                        About Us
                      </Link>
                      <Link className="text-sm font-medium text-ink-900" href="/contact" onClick={() => setMobileOpen(false)}>
                        Contact Us
                      </Link>
                    </div>

                    <div className="mt-5 rounded-2xl border border-sand-200 bg-sand-50 p-3">
                      <p className="text-xs font-semibold tracking-wide text-slate-600">SERVICES</p>
                      <div className="mt-2 grid max-h-[45vh] gap-1 overflow-auto pr-1">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="rounded-xl px-2.5 py-2 text-sm font-medium text-slate-700 hover:bg-white"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 grid gap-2">
                      <Button onClick={() => (setMobileOpen(false), lead.open({ intent: "callback" }))}>
                        Request Call Back
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => (setMobileOpen(false), lead.open({ intent: "consultation" }))}
                      >
                        Book NRI Consultation
                      </Button>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </header>
  );
}

