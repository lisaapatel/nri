"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { getServicesInDropdownOrder } from "@/data/services";

export function ContactForm({ defaultIntent }: { defaultIntent?: "callback" | "consultation" }) {
  const services = React.useMemo(() => getServicesInDropdownOrder(), []);
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          intent: payload.intent || defaultIntent || "callback",
          pageUrl: window.location.href,
          referrer: document.referrer || "",
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      (e.currentTarget as HTMLFormElement).reset();
      window.setTimeout(() => setStatus("idle"), 1200);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
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
          <span className="text-xs font-medium text-slate-700">I’m looking for</span>
          <select
            name="serviceSlug"
            className="h-11 rounded-xl border border-sand-200 bg-white px-3 text-sm text-ink-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            defaultValue=""
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
          <span className="text-xs font-medium text-slate-700">Intent</span>
          <select
            name="intent"
            defaultValue={defaultIntent || "callback"}
            className="h-11 rounded-xl border border-sand-200 bg-white px-3 text-sm text-ink-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          >
            <option value="callback">Request Call Back</option>
            <option value="consultation">Book NRI Consultation</option>
          </select>
        </label>
        <label className="grid gap-1 sm:col-span-2">
          <span className="text-xs font-medium text-slate-700">Message (optional)</span>
          <textarea
            name="message"
            rows={4}
            className="resize-none rounded-xl border border-sand-200 bg-white px-3 py-2 text-sm text-ink-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            placeholder="Keep it short. We’ll respond with next steps."
          />
        </label>
      </div>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "success" ? "Sent" : status === "submitting" ? "Sending…" : "Send"}
        </Button>
      </div>

      {status === "error" ? (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          Something went wrong. Please try again or email{" "}
          <a className="font-medium underline" href="mailto:support@nrisolutions.us">
            support@nrisolutions.us
          </a>
          .
        </p>
      ) : null}

      <p className="mt-4 text-xs text-slate-500">
        We’ll reply with a checklist and the cleanest next steps for your case.
      </p>
    </form>
  );
}

