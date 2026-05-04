import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-4 py-10 sm:px-6 lg:px-10">
        <div className="w-full max-w-xl rounded-3xl border border-border/80 bg-surface/70 p-6 text-center shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] backdrop-blur-xl supports-backdrop-filter:bg-surface/50 sm:p-10">
          <p className="font-mono text-sm text-accent">404</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            The page you are looking for does not exist or may have been moved.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white outline-none transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
