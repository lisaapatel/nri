import { cn } from "@/lib/cn";

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
  className,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {kicker ? (
        <p className="text-sm font-semibold tracking-wide text-brand-600">
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-7 text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}

