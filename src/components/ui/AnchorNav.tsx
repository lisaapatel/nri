import { cn } from "@/lib/cn";

export function AnchorNav({
  items,
  className,
}: {
  items: { id: string; label: string }[];
  className?: string;
}) {
  return (
    <nav
      aria-label="On this page"
      className={cn(
        "rounded-2xl border border-sand-200 bg-white p-3 shadow-[0_1px_0_rgba(15,23,42,0.04)]",
        className,
      )}
    >
      <p className="px-3 py-2 text-xs font-semibold tracking-wide text-slate-500">
        ON THIS PAGE
      </p>
      <ul className="grid gap-1">
        {items.map((i) => (
          <li key={i.id}>
            <a
              className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sand-50 hover:text-ink-900"
              href={`#${i.id}`}
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

