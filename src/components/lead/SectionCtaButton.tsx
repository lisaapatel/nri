"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLeadDialog } from "@/components/lead/LeadDialogProvider";

export function SectionCtaButton({
  label,
  serviceSlug,
}: {
  label: string;
  serviceSlug?: string;
}) {
  const lead = useLeadDialog();
  return (
    <Button
      variant="secondary"
      onClick={() => lead.open({ intent: "callback", serviceSlug })}
      className="justify-between"
    >
      {label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Button>
  );
}

