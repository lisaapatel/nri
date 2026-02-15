"use client";

import { Button } from "@/components/ui/Button";
import { useLeadDialog } from "@/components/lead/LeadDialogProvider";

export function MobileCtaBar() {
  const lead = useLeadDialog();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand-200 bg-white/90 p-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md gap-2">
        <Button className="flex-1" onClick={() => lead.open({ intent: "callback" })}>
          Request Call Back
        </Button>
        <Button
          className="flex-1"
          variant="secondary"
          onClick={() => lead.open({ intent: "consultation" })}
        >
          Book Consult
        </Button>
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}

