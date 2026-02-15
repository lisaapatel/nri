"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export function Accordion({
  items,
  className,
}: {
  items: { q: string; a: string }[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-sand-200 rounded-2xl border border-sand-200 bg-white", className)}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const contentId = `faq-${idx}`;
        return (
          <div key={item.q} className="px-5 py-4 sm:px-6">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <span className="text-sm font-medium text-ink-900 sm:text-base">{item.q}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-slate-500 transition-transform",
                  isOpen ? "rotate-180" : "rotate-0",
                )}
                aria-hidden="true"
              />
            </button>
            <div
              id={contentId}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-200 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

