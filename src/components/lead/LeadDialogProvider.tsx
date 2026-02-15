"use client";

import * as React from "react";
import { LeadDialog } from "@/components/lead/LeadDialog";

export type LeadIntent = "callback" | "consultation";

type OpenArgs = {
  intent: LeadIntent;
  serviceSlug?: string;
};

const LeadDialogContext = React.createContext<{
  open: (args: OpenArgs) => void;
}>({
  open: () => {},
});

export function useLeadDialog() {
  return React.useContext(LeadDialogContext);
}

export function LeadDialogProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [intent, setIntent] = React.useState<LeadIntent>("callback");
  const [serviceSlug, setServiceSlug] = React.useState<string | undefined>(undefined);

  function open(args: OpenArgs) {
    setIntent(args.intent);
    setServiceSlug(args.serviceSlug);
    setIsOpen(true);
  }

  return (
    <LeadDialogContext.Provider value={{ open }}>
      {children}
      <LeadDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        intent={intent}
        serviceSlug={serviceSlug}
      />
    </LeadDialogContext.Provider>
  );
}

