"use client";

import { Button } from "@/components/ui/Button";
import { useLeadDialog } from "@/components/lead/LeadDialogProvider";

export function InlineCtas({ serviceSlug }: { serviceSlug?: string }) {
  const lead = useLeadDialog();
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button size="lg" onClick={() => lead.open({ intent: "callback", serviceSlug })}>
        Request Call Back
      </Button>
      <Button
        size="lg"
        variant="secondary"
        onClick={() => lead.open({ intent: "consultation", serviceSlug })}
      >
        Book NRI Consultation
      </Button>
    </div>
  );
}

