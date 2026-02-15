import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-white">
      <Container className="py-20">
        <p className="text-sm font-semibold text-brand-600">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button as="link" href="/">
            Go to Home
          </Button>
          <Button as="link" href="/services" variant="secondary">
            View Services
          </Button>
        </div>
        <p className="mt-6 text-sm text-slate-600">
          Or email{" "}
          <a className="font-medium underline" href="mailto:support@nrisolutions.us">
            support@nrisolutions.us
          </a>
          .
        </p>
      </Container>
    </section>
  );
}

