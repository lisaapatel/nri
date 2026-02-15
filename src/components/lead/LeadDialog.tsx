"use client";

import * as React from "react";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { getServicesInDropdownOrder } from "@/data/services";
import type { LeadIntent } from "@/components/lead/LeadDialogProvider";

function intentCopy(intent: LeadIntent) {
  if (intent === "consultation") {
    return {
      title: "Book an NRI Consultation",
      subtitle: "Tell us what you need. We’ll respond with next steps.",
      submit: "Book Consultation",
    };
  }
  return {
    title: "Request a Call Back",
    subtitle: "Share your details. We’ll call you at a convenient time.",
    submit: "Request Call Back",
  };
}

export function LeadDialog({
  isOpen,
  onClose,
  intent,
  serviceSlug,
}: {
  isOpen: boolean;
  onClose: () => void;
  intent: LeadIntent;
  serviceSlug?: string;
}) {
  const copy = intentCopy(intent);
  const services = React.useMemo(() => getServicesInDropdownOrder(), []);

  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    const endpoint = (typeof window !== "undefined" && (process.env.NEXT_PUBLIC_LEAD_ENDPOINT || "")) || "/api/lead";
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          intent,
          serviceSlug: payload.serviceSlug || serviceSlug || "",
          pageUrl: window.location.href,
          referrer: document.referrer || "",
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      (e.currentTarget as HTMLFormElement).reset();
      // Close after a short beat to feel intentional.
      window.setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 900);
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or email us at support@nrisolutions.us.");
    }
  }

  React.useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      setError(null);
    }
  }, [isOpen]);

  return (
    <Transition appear show={isOpen}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-navy-950/40 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 sm:items-center">
            <TransitionChild
              enter="ease-out duration-200"
              enterFrom="opacity-0 translate-y-2 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-2 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-lift ring-1 ring-black/5">
                <div className="flex items-start justify-between gap-4 border-b border-sand-200 px-5 py-4 sm:px-6">
                  <div>
                    <DialogTitle className="text-base font-semibold text-ink-900">
                      {copy.title}
                    </DialogTitle>
                    <p className="mt-1 text-sm text-slate-600">{copy.subtitle}</p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full p-2 text-slate-600 hover:bg-sand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <form onSubmit={onSubmit} className="px-5 py-5 sm:px-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-1">
                      <span className="text-xs font-medium text-slate-700">Full name</span>
                      <input
                        name="name"
                        required
                        autoComplete="name"
                        className="h-11 rounded-xl border border-sand-200 bg-white px-3 text-sm text-ink-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-xs font-medium text-slate-700">Phone / WhatsApp</span>
                      <input
                        name="phone"
                        required
                        inputMode="tel"
                        autoComplete="tel"
                        className="h-11 rounded-xl border border-sand-200 bg-white px-3 text-sm text-ink-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                      />
                    </label>
                    <label className="grid gap-1 sm:col-span-2">
                      <span className="text-xs font-medium text-slate-700">Email (optional)</span>
                      <input
                        name="email"
                        inputMode="email"
                        autoComplete="email"
                        className="h-11 rounded-xl border border-sand-200 bg-white px-3 text-sm text-ink-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                      />
                    </label>
                    <label className="grid gap-1 sm:col-span-2">
                      <span className="text-xs font-medium text-slate-700">Service of interest</span>
                      <select
                        name="serviceSlug"
                        defaultValue={serviceSlug ?? ""}
                        className="h-11 rounded-xl border border-sand-200 bg-white px-3 text-sm text-ink-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.slug}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="grid gap-1 sm:col-span-2">
                      <span className="text-xs font-medium text-slate-700">Message (optional)</span>
                      <textarea
                        name="message"
                        rows={3}
                        className="resize-none rounded-xl border border-sand-200 bg-white px-3 py-2 text-sm text-ink-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                        placeholder="A short note helps us respond faster."
                      />
                    </label>
                  </div>

                  {error ? (
                    <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                      {error}
                    </p>
                  ) : null}

                  <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={onClose}
                      className="sm:w-auto"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      className={cn("sm:w-auto", status === "success" && "bg-emerald-600 hover:bg-emerald-600")}
                    >
                      {status === "success" ? "Sent" : status === "submitting" ? "Sending…" : copy.submit}
                    </Button>
                  </div>

                  <p className="mt-4 text-xs text-slate-500">
                    By submitting, you consent to be contacted about your request. We keep communication minimal and relevant.
                  </p>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

