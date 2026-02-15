import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  intent?: "callback" | "consultation";
  serviceSlug?: string;
  message?: string;
  pageUrl?: string;
  referrer?: string;
};

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as LeadPayload;

  // Minimal validation (keep friction low, but ensure we capture essentials).
  if (!body?.name || !body?.phone) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  // TODO: Replace with your CRM/email integration (HubSpot, Zoho, email, Slack, etc).
  // For now, we log to server output so local development proves it works.
  // Never log sensitive data in production without a policy.
  // eslint-disable-next-line no-console
  console.log("[lead]", {
    receivedAt: new Date().toISOString(),
    name: body.name,
    phone: body.phone,
    email: body.email || "",
    intent: body.intent || "callback",
    serviceSlug: body.serviceSlug || "",
    message: body.message || "",
    pageUrl: body.pageUrl || "",
    referrer: body.referrer || "",
  });

  return NextResponse.json({ ok: true });
}

