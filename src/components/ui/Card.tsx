import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-sand-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

