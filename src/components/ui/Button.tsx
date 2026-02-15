import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ring-offset-white disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-950 text-white hover:bg-navy-900 shadow-soft",
  secondary:
    "bg-white text-navy-950 border border-sand-200 hover:border-sand-100 hover:bg-sand-50 shadow-[0_1px_0_rgba(15,23,42,0.04)]",
  ghost: "text-navy-950 hover:bg-sand-50",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  as = "button",
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button" | "link";
  href?: string;
  variant?: Variant;
  size?: Size;
}) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (as === "link") {
    if (!href) throw new Error("Button(as='link') requires href");
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

